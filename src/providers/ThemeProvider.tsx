import { useState } from "react";
import { ThemeContext } from "../contexts/theme";
import { ITheme } from "../interfaces/theme";

const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState<ITheme>({
    mainColor: "rgb(59, 70, 100)",
    secondaryColor: "rgb(24, 31, 50)",
    thirdColor: "rgb(37, 45, 68)",
    textColor: "rgb(59, 70, 100)",
    keysTextColor: "rgb(59, 70, 100)",
    keysBgColor: "rgb(59, 70, 100)",
    keysShadow: "rgb(59, 70, 100)",
    resetBgColor: "rgb(59, 70, 100)",
    resetTextColor: "rgb(59, 70, 100)",
    computeBgColor: "rgb(59, 70, 100)",
    computeTextColor: "rgb(59, 70, 100)",
  });
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
