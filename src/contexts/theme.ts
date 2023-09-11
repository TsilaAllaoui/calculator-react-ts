import { createContext } from "react";
import { ITheme } from "../interfaces/theme";

export interface IThemeContext {
  theme: ITheme;
  setTheme: (t: any) => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: {
    mainColor: "rgb(59, 70, 100)",
    secondaryColor: "rgb(24, 31, 50)",
    thirdColor: "rgb(37, 45, 68)",
    textColor: "white",
    keysTextColor: "white",
    keysBgColor: "rgb(209,63,48)",
    keysShadow: "rgb(209,63,48)",
    resetBgColor: "rgb(209,63,48)",
    resetTextColor: "rgb(209,63,48)",
    computeBgColor: "rgb(209,63,48)",
    computeTextColor: "rgb(209,63,48)",
  },
  setTheme: (_t: ITheme) => {},
});
