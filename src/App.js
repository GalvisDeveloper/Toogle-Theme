import React from "react";
import { ThemeProvider } from "styled-components";
import Toggle from "./components/Toggle";
import { useDarkMode } from "./hooks/useDarkMode";
import { GlobalStyles } from "./styles/global";
import { darkTheme, lightTheme } from "./themes/theme";

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <div className="App">
        <GlobalStyles />
        <Toggle theme={theme} toogleTheme={toggleTheme} />
        <h1>It's a {theme === "light" ? "Light Theme" : "Dark Theme"}!</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
