import { useState } from "react";
import { ResultContext } from "../contexts/result";

const ResultProvider = ({ children }: { children: any }) => {
  const [result, setResult] = useState("");
  return (
    <ResultContext.Provider
      value={{
        result: result,
        setResult: setResult,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export default ResultProvider;
