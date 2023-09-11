import { createContext } from "react";

export interface IResult {
  result: string;
  setResult: (n: string) => void;
}

type func = (_n: string) => string;

export const ResultContext = createContext<IResult>({
  result: "",
  setResult: (_n: string | func) => {},
});
