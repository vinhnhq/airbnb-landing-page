import React, { createContext, useState, useEffect } from "react";

import { colors } from "./colors";

const themes = {
  dark: {
    mainColor: colors.nightRider,
    backgroundColor: colors.nightRider,
    color: colors.white,
  },
  light: {
    mainColor: colors.wildWatermelon,
    backgroundColor: colors.white,
    color: colors.black,
  },
};

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {},
};

const ThemeContext = createContext(initialState);

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setDark(isDark);
  }, [dark]);

  const toggle = () => {
    const isDark = !dark;
    localStorage.setItem("dark", JSON.stringify(isDark));
    setDark(isDark);
  };

  const theme = dark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
