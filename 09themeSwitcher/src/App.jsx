import { useEffect, useState } from "react";
import { ThemeContextProvider } from "./Contexts/themeContext";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/*theme switcher button  */}
          </div>

          <div className="w-full max-w-sm mx-auto">{/* Card  */}</div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
