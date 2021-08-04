import "./styles.css";

import React from "react";
import { Header } from "./Header/HeaderComponent";

export default function App() {
  type ACTIONTYPE =
    | { type: "INCREMENT"; payload: number }
    | { type: "DECREMENT"; payload: string };

  const initialState = { count: 0 };

  function ScoreReducer(state: typeof initialState, action: ACTIONTYPE) {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + action.payload };
      case "DECREMENT":
        return { count: state.count - Number(action.payload) };

      default:
        throw new Error();
    }
  }
  const [state, disptach] = React.useReducer(ScoreReducer, initialState);
  return (
    <div className="App">
      <Header username={"Sandeep"} score={state.count} />
      <button onClick={() => disptach({ type: "INCREMENT", payload: 5 })}>
        Score++{" "}
      </button>
      <button onClick={() => disptach({ type: "DECREMENT", payload: "5" })}>
        Score--{" "}
      </button>
    </div>
  );
}

type Props = {
  a?: number;
  b?: string;
};
export function Requi() {
  const obj: Props = { a: 5 };

  const obj2: Required<Props> = { a: 10 };

  //Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.

  console.log(obj, obj2);
}
