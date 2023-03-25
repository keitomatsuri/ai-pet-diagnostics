import { questions } from "@/data/questions_ja";
import { Question } from "@/types/question";
import { OpenAIStream } from "@/lib/OpenAIStream";

export const config = {
  runtime: "edge",
};

export default async function handler(req: Request) {
  if (req.method === "POST") {
    const body = await req.json();
    const prompt = createPrompt(body);

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
      return `動物の専門家として回答してください。
ペットとして扱われている動物の中からランダムに、以下のフォーマットでペットをおすすめしてください。
可能であれば、品種まで言及してください。

# 出力フォーマット
おすすめのペット：{ペットの種類}
理由：{そのペットをおすすめする理由}
`;
    } else {
      return `動物の専門家として回答してください。
以下の質問への回答を参考に、質問者にとっておすすめのペットを、根拠とともに回答してください。
可能であれば、品種まで言及してください。

${qaText}

# 出力フォーマット
おすすめのペット：{ペットの種類}
理由：{そのペットをおすすめする理由}
`;
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
