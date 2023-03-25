import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import { questions } from "@/data/questions_en";
import { Question } from "@/types/question";
import { OpenAIStream } from "@/lib/OpenAIStream";

// OpenAI
export const config = {
  runtime: "edge",
};

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest) {
  if (req.method === "POST") {
    const prompt = createPrompt(req.body);

    const payload = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.9,
      max_tokens: 500,
      stream: true,
    };
    const stream = await OpenAIStream(payload);

    return new Response(stream);
  }

  function createPrompt(formData: FormData) {
    const qaText = generateQAText(questions, formData);

    if (qaText.length === 0) {
      return `Please answer in Japanese and start with a recommendation, not a preamble.
Please provide a recommendation for pet for the customer, along with rationale.
Please pick randomly from animals that humans treat as pets and answer by breed if possible.`;
    } else {
      return `As an animal expert, you should answer to your customers.
Please answer in Japanese and start with a recommendation, not a preamble.
These are the results of the answers to the question to recommend the right pet for the customer.
From the answers to this question, please provide a recommendation for pets for the customer, along with rationale.
Please answer all animals that humans treat as pets, as far as possible, by breed.

${qaText}`;
    }
  }

  function generateQAText(questions: Question[], answers: any) {
    let resultList = [];

    for (const question of questions) {
      if (answers[question.id] !== null && answers[question.id] !== undefined) {
        const selectedOption = question.options.find(
          (option) => option.id === answers[question.id]
        );
        if (selectedOption) {
          resultList.push({
            question: question.text,
            answer: selectedOption.text,
          });
        }
      }
    }

    let resultText = "";

    for (const qa of resultList) {
      resultText += `Q: ${qa.question}\nA: ${qa.answer}\n\n`;
    }

    return resultText;
  }
}
