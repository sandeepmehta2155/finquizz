export type Answer = {
  option: string;
  isRight: boolean;
};

export type Questions = {
  question: string;
  options: string[]; // or can also use Options[]
  answers: Answer[];
  points: number;
  negativepoints?: number;
};

export type Quiz = {
  quizName: string;
  questions: Questions[]; // or can also use [Questions]
};
