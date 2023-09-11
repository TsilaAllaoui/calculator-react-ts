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
  },
  setTheme: (_t: ITheme) => {},
});
