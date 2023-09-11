import { useContext, useRef, useState } from "react";
import { ResultContext } from "../contexts/result";
import { IKey } from "../interfaces/key";
import "../styles/Key.scss";

const Key = ({ item }: { item: IKey }) => {
  const [isPending, setIsPending] = useState(false);
  const { result, setResult } = useContext(ResultContext);
  const keyRef = useRef<HTMLDivElement>(null);
  const showError = (oldVal: string) => {
    const resultElement = document.querySelector(
      "#result > p"
    ) as HTMLDivElement;
    resultElement.style.color = "red";
    setIsPending(true);
    setTimeout(() => {
      setResult(oldVal);
      resultElement.style.color = "white";
      setIsPending(false);
    }, 1000);
  };
  const handleClick = () => {
    if (item.content == "RESET") {
      setResult("");
    } else if (item.content == "=") {
      console.log(result);
      if (isPending || result == "") return;

      const oldVal = result;
      try {
        setResult(eval(result.replace("x", "*")));
        if (result == "0/0") {
          setResult("Math Error");
          showError(oldVal);
        }
      } catch (e) {
        setResult("Syntx Error");
        showError(oldVal);
        console.log("Error when evaluation: " + e);
      }
    } else if (item.content == "DEL") {
      if (result == "Infinity") {
        setResult("");
        return;
      }
      const val = result.toString().slice(0, -1);
      setResult(val);
    } else {
      if (result == "Infinity") {
        setResult(item.content);
        return;
      }
      const val = result + item.content;
      setResult(val);
    }
    keyRef.current!.style.filter = "brightness(75%)";
    keyRef.current!.style.boxShadow =
      "rgba(" +
      item.bgColor.slice(3, item.bgColor.length - 1) +
      ", 0.5)" +
      " 0px 2px";
    keyRef.current!.style.transform = "translateY(3px)";
    setTimeout(() => {
      keyRef.current!.style.boxShadow =
        "rgba(" +
        item.bgColor.slice(3, item.bgColor.length - 1) +
        ", 0.5)" +
        " 0px 5px";
      keyRef.current!.style.transform = "translateY(0)";
      keyRef.current!.style.filter = "unset"
    }, 250);
  };
  return (
    <div
      ref={keyRef}
      id="key"
      style={{
        color: item.color,
        backgroundColor: item.bgColor,
        boxShadow: item.shadow + " 0 5px",
      }}
      onClick={handleClick}
    >
      <p>{item.content}</p>
    </div>
  );
};

export default Key;
