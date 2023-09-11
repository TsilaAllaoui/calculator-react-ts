import { useContext, useEffect, useRef } from "react";
import "./App.scss";
import Key from "./components/Key";
import { ResultContext } from "./contexts/result";
import { ThemeContext } from "./contexts/theme";
import { ITheme } from "./interfaces/theme";

function App() {
  const { result } = useContext(ResultContext);
  const keys: string[] = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "x",
  ];

  const dotRef = useRef<HTMLDivElement>(null);

  const themes: ITheme[] = [
    {
      mainColor: "rgb(59, 70, 100)",
      secondaryColor: "rgb(24, 31, 50)",
      thirdColor: "rgb(37, 45, 68)",
      textColor: "white",
      keysTextColor: "black",
      keysBgColor: "rgb(234,227,219)",
      keysShadow: "rgba(234,227,219,0.5)",
      resetBgColor: "rgb(100,114,153)",
      resetTextColor: "white",
      computeBgColor: "rgb(209,63,48)",
      computeTextColor: "white",
    },
    {
      mainColor: "rgb(231, 231, 231)",
      secondaryColor: "rgb(239, 239, 239)",
      thirdColor: "rgb(211,204,204)",
      textColor: "black",
      keysTextColor: "black",
      keysBgColor: "white",
      keysShadow: "rgba(164,161,149)",
      resetBgColor: "rgb(56,130,132)",
      resetTextColor: "white",
      computeBgColor: "rgb(200,84,1)",
      computeTextColor: "white",
    },
    {
      mainColor: "rgb(23, 6, 41)",
      secondaryColor: "rgb(29, 8, 54)",
      thirdColor: "rgb(29, 8, 54)",
      textColor: "rgb(235,218,110)",
      keysTextColor: "white",
      keysBgColor: "rgb(51,27,76)",
      keysShadow: "rgba(221,19,211)",
      resetBgColor: "rgb(85,6,124)",
      resetTextColor: "white",
      computeBgColor: "rgb(0,222,206)",
      computeTextColor: "white",
    },
  ];

  const handleThemeChange = (index: number) => {
    document.body.style.backgroundColor = themes[index].mainColor;
    setTheme(themes[index]);
    dotRef.current!.style.transform = `translateX(${index * 100}%)`;
  };

  const { theme, setTheme } = useContext(ThemeContext);
  useEffect(() => {
    document.body.style.backgroundColor = themes[0].mainColor;
    setTheme(themes[0]);
  }, []);

  useEffect(() => {
    const resultTag = document.querySelector("#result > p") as HTMLElement;
    resultTag.scrollLeft = resultTag.scrollWidth
  }, [result])

  return (
    <div id="app">
      <div id="header">
        <p style={{ color: theme.textColor }}>calc</p>
        <div id="theme">
          <p style={{ color: theme.textColor }}>THEME</p>
          <div id="dots">
            <div id="numbers">
              {[1, 2, 3].map((i) => (
                <p
                  style={{ color: theme.textColor }}
                  key={i}
                  onClick={() => handleThemeChange(i - 1)}
                >
                  {i}
                </p>
              ))}
            </div>
            <div id="slider" style={{ backgroundColor: theme.thirdColor }}>
              <div id="dot" ref={dotRef}></div>
            </div>
          </div>
        </div>
      </div>
      <div id="result" style={{ backgroundColor: theme.secondaryColor }}>
        <p style={{ color: theme.textColor }}>{result}</p>
      </div>
      <div id="keys" style={{ backgroundColor: theme.thirdColor }}>
        {keys.map((k) => (
          <Key
            key={k}
            item={{
              content: k,
              shadow:
                theme.keysShadow != undefined
                  ? theme.keysShadow
                  : "rgb(234,227,219)",
              color:
                theme.keysTextColor != undefined
                  ? theme.keysTextColor
                  : "rgb(234,227,219)",
              bgColor:
                theme.keysTextColor != undefined
                  ? theme.keysBgColor
                  : "rgb(234,227,219)",
            }}
          />
        ))}
        <div id="buttons">
          <div id="reset">
            <Key
              item={{
                bgColor:
                  theme.resetBgColor != undefined
                    ? theme.resetBgColor
                    : "white",
                color: theme.resetTextColor,
                content: "RESET",
                shadow: theme.resetBgColor
                  ? "rgba(" + theme.resetBgColor.slice(4, -1) + ",0.5)"
                  : "white",
              }}
            />
          </div>
          <div id="compute">
            <Key
              item={{
                bgColor:
                  theme.computeBgColor != undefined
                    ? theme.computeBgColor
                    : "white",
                color: theme.computeTextColor,
                content: "=",
                shadow: theme.computeBgColor
                  ? "rgba(" + theme.computeBgColor.slice(4, -1) + ",0.5)"
                  : "white",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
