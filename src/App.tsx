import { useContext, useEffect, useRef } from "react";
import "./App.scss";
import Key from "./components/Key";
import { ResultContext } from "./contexts/result";
import { IKey } from "./interfaces/key";
import { ITheme } from "./interfaces/theme";
import { ThemeContext } from "./contexts/theme";

function App() {
  const { result } = useContext(ResultContext);
  const keys: IKey[] = [
    {
      color: "black",
      bgColor: "rgb(234,227,219)",
      content: "7",
    },
    {
      color: "black",
      bgColor: "rgb(234,227,219)",
      content: "8",
    },
    {
      color: "black",
      bgColor: "rgb(234,227,219)",
      content: "9",
    },
    {
      color: "black",
      bgColor: "rgb(234,227,219)",
      content: "DEL",
    },
    {
      color: "black",
      bgColor: "rgb(234,227,219)",
      content: "4",
    },
    {
      color: "black",
      bgColor: "rgb(234,227,219)",
      content: "5",
    },
    {
      color: "black",
      bgColor: "rgb(234,227,219)",
      content: "6",
    },
    {
      color: "black",
      bgColor: "rgb(234,227,219)",
      content: "+",
    },
    {
      color: "black",
      bgColor: "rgb(234,227,219)",
      content: "1",
    },
    {
      color: "black",
      bgColor: "rgb(234,227,219)",
      content: "2",
    },
    {
      color: "black",
      bgColor: "rgb(234,227,219)",
      content: "3",
    },
    {
      color: "black",
      bgColor: "rgb(234,227,219)",
      content: "-",
    },
    {
      color: "black",
      bgColor: "rgb(234,227,219)",
      content: ".",
    },
    {
      color: "black",
      bgColor: "rgb(234,227,219)",
      content: "0",
    },
    {
      color: "black",
      bgColor: "rgb(234,227,219)",
      content: "/",
    },
    {
      color: "black",
      bgColor: "rgb(234,227,219)",
      content: "x",
    },
  ];

  const dotRef = useRef<HTMLDivElement>(null);

  const themes: ITheme[] = [
    {
      mainColor: "rgb(59, 70, 100)",
      secondaryColor: "rgb(24, 31, 50)",
      thirdColor: "rgb(37, 45, 68)",
    },
    {
      mainColor: "rgb(195, 195, 195)",
      secondaryColor: "rgb(49, 49, 49)",
      thirdColor: "rgb(90,90,90)",
    },
    {
      mainColor: "rgb(206, 7, 12)",
      secondaryColor: "rgb(69, 16, 22)",
      thirdColor: "rgb(105, 24, 35)",
    },
  ];

  const handleThemeChange = (index: number) => {
    document.body.style.backgroundColor = themes[index].mainColor;
    setTheme(themes[index]);
    dotRef.current!.style.transform = `translateX(${index * 100}%)`;
  };

  const { theme, setTheme } = useContext(ThemeContext);
  useEffect(() => {
    document.body.style.backgroundColor = themes[2].mainColor;
    setTheme(themes[2]);
  }, []);

  return (
    <div id="app">
      <div id="header">
        <p>calc</p>
        <div id="theme">
          <p>THEME</p>
          <div id="dots">
            <div id="numbers">
              {[1, 2, 3].map((i) => (
                <p key={i} onClick={() => handleThemeChange(i - 1)}>
                  {i}
                </p>
              ))}
            </div>
            <div id="slider">
              <div id="dot" ref={dotRef}></div>
            </div>
          </div>
        </div>
      </div>
      <div id="result" style={{ backgroundColor: theme.secondaryColor }}>
        <p>{result}</p>
      </div>
      <div id="keys" style={{ backgroundColor: theme.thirdColor }}>
        {keys.map((k) => (
          <Key
            key={k.content}
            item={{
              color: "black",
              bgColor: "rgb(234,227,219)",
              content: k.content,
            }}
          />
        ))}
        <div id="buttons">
          <div id="reset">
            <Key
              item={{
                bgColor: "rgb(100,114,153)",
                color: "white",
                content: "RESET",
              }}
            />
          </div>
          <div id="compute">
            <Key
              item={{ bgColor: "rgb(209,63,48)", color: "white", content: "=" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
