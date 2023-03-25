import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import { questions } from "@/data/questions_en";
import { Question } from "@/types/question";
import rateLimit from "@/lib/RateLimit";

// OpenAI
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// RateLimit
const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

let diagRateLimitPerMinutes: number;
if (process.env.DIAG_RATE_LIMIT_PER_MINUTES !== undefined) {
  diagRateLimitPerMinutes = Number(process.env.DIAG_RATE_LIMIT_PER_MINUTES);
} else {
  diagRateLimitPerMinutes = 100; // default rate limit
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // rate limit
    try {
      await limiter.check(res, diagRateLimitPerMinutes, "CACHE_TOKEN");
    } catch {
      res.status(429).json({ error: "Rate limit exceeded" });
    }

    // chat
    const prompt = createPrompt(req.body);
    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      });
      const result = completion.data.choices[0].message?.content;
      return res.status(200).json({ text: result });
    } catch (error: any) {
      if (error.response) {
        console.error(error.response.status);
        console.error(error.response.data);
      } else {
        console.error(error.message);
      }
      return res.status(500).json({
        error: "failed to fetch data",
      });
    }
  }
}

function createPrompt(formData: FormData) {
  const qaText = generateQAText(questions, formData);

  if (qaText.length === 0) {
    return `Please answer in Japanese and do not preface your answer with a response.
Please provide a recommendation for pet for the customer, along with rationale.
Please pick randomly from animals that humans treat as pets and answer by breed if possible.`;
  } else {
    return `As an animal expert, you should answer to your customers.
Please answer in Japanese and do not preface your answer with a response.
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
