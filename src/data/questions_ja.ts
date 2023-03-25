import { Question } from "@/types/question";

export const questions: Question[] = [
  {
    id: "1",
    text: "ペットの飼育経験はどのくらいですか？",
    options: [
      {
        id: "a",
        question_id: "1",
        text: "初心者（これまでペットを飼ったことがない）",
      },
      {
        id: "b",
        question_id: "1",
        text: "ある程度の経験あり（以前にペットを飼ったことがある）",
      },
      {
        id: "c",
        question_id: "1",
        text: "経験豊富（複数のペットを飼った経験がある）",
      },
    ],
  },
  {
    id: "2",
    text: "ペットの大きさはどれくらいがよいですか？",
    options: [
      {
        id: "a",
        question_id: "2",
        text: "小型",
      },
      {
        id: "b",
        question_id: "2",
        text: "中型",
      },
      {
        id: "c",
        question_id: "2",
        text: "大型",
      },
      {
        id: "d",
        question_id: "2",
        text: "特にこだわりはない",
      },
    ],
  },
  {
    id: "3",
    text: "ペットとどのようなコミュニケーションをとりたいですか？",
    options: [
      {
        id: "a",
        question_id: "3",
        text: "積極的に遊びたい",
      },
      {
        id: "b",
        question_id: "3",
        text: "静かに触れ合いたい",
      },
      {
        id: "c",
        question_id: "3",
        text: "ペットに教えたいことがある",
      },
      {
        id: "d",
        question_id: "3",
        text: "特にこだわりはない",
      },
    ],
  },
  {
    id: "4",
    text: "ペットに求める知能や学習能力はどの程度ですか？",
    options: [
      {
        id: "a",
        question_id: "4",
        text: "非常に高い知能・学習能力が欲しい",
      },
      {
        id: "b",
        question_id: "4",
        text: "それなりの知能・学習能力があれば十分",
      },
      {
        id: "c",
        question_id: "4",
        text: "知能・学習能力はそれほど重要ではない",
      },
    ],
  },
  {
    id: "5",
    text: "ペットの世話にどれくらい手間をかけられますか？",
    options: [
      {
        id: "a",
        question_id: "5",
        text: "最小限の手間で済むペットがいい",
      },
      {
        id: "b",
        question_id: "5",
        text: "そこそこの手間はかけられる",
      },
      {
        id: "c",
        question_id: "5",
        text: "多少の手間がかかっても構わない",
      },
      {
        id: "d",
        question_id: "5",
        text: "手間がかかるペットでも全力で世話したい",
      },
    ],
  },
  {
    id: "6",
    text: "あなたの住んでいる環境はどのようなタイプですか？",
    options: [
      {
        id: "a",
        question_id: "6",
        text: "一戸建て",
      },
      {
        id: "b",
        question_id: "6",
        text: "アパート・マンション",
      },
      {
        id: "c",
        question_id: "6",
        text: "広大な土地がある",
      },
    ],
  },
  {
    id: "7",
    text: "あなたの家庭に子供や高齢者はいますか？",
    options: [
      {
        id: "a",
        question_id: "7",
        text: "子供がいる",
      },
      {
        id: "b",
        question_id: "7",
        text: "高齢者がいる",
      },
      {
        id: "c",
        question_id: "7",
        text: "子供と高齢者がいる",
      },
      {
        id: "d",
        question_id: "7",
        text: "いずれもいない",
      },
    ],
  },
  {
    id: "8",
    text: "アレルギーはありますか？",
    options: [
      {
        id: "a",
        question_id: "8",
        text: "はい",
      },
      {
        id: "b",
        question_id: "8",
        text: "いいえ",
      },
    ],
  },
  {
    id: "9",
    text: "ペットにかける費用は、どの程度まで許容できますか？",
    options: [
      {
        id: "a",
        question_id: "9",
        text: "低い（月々のコストが最小限であることが望ましい）",
      },
      {
        id: "b",
        question_id: "9",
        text: "中程度（ペットの世話や飼育に一定の費用をかけられる）",
      },
      {
        id: "c",
        question_id: "9",
        text: "高い（ペットの飼育費用にあまり制限がない）",
      },
    ],
  },
];
