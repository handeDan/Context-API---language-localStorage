import { createContext, useEffect, useState } from 'react'; //to create context, we need this import

export const ThemeContext = createContext(); //we are creating our context

export const ThemeContextProvider = ({ children }) => {
  //we are creating our provider
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); // we take theme state from localStorage or "light"

  // When theme updated, we should save it to localStorage:
  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-mode' : '';
    localStorage.setItem('theme', theme); // Tema bilgisi kaydediliyor
  }, [theme]);

  // function that changes the theme:
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    //we give values to our provider's children
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
