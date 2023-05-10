import './App.css';
import { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Timer from './components/Timer';
import About from './pages/About';
import NotFound from './pages/NotFound';

export const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((theme === "light") ? "dark" : "light");
  };

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <Header toggleTheme={toggleTheme} />
        <div className={`container mx-auto ${theme}`}>

          {theme}

          <Routes>
            <Route path="/" element={<Timer />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
