import { Img } from "./personal-finance";

type HeaderTypes = {
  username: string;
  score: number;
};

export function Header({ username, score }: HeaderTypes) {
  return (
    <>
      <h1> Let's have some fun with Quiz</h1>
      <Img />
      <div> Welcome : {username}</div>
      <div> Score : {score} </div>
    </>
  );
}
