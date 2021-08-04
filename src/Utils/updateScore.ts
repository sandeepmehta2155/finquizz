import { Answer, Questions } from "../Data/quiz.types";

function UpdateScore(
  currentscore: number,
  questions: Questions,
  answer: Answer
) {
  const negativePoints = questions.negativepoints
    ? questions.negativepoints
    : 0;
  return answer.isRight
    ? currentscore + questions.points
    : currentscore - negativePoints;
}

export { UpdateScore };
