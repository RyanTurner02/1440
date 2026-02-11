import './App.css';
import { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Timer from './components/Timer';
import NotFound from './pages/NotFound';

export const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((theme === "light") ? "dark" : "light");
  };

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <div className={`h-screen ${theme}`}>
          <Header toggleTheme={toggleTheme} />
          <div className="">
            <Routes>
              <Route path="/" element={<Timer />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
