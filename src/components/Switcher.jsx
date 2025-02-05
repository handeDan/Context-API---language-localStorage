import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';

const Switcher = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };
  const goToLoginPage = () => {
    navigate('/login');
  };

  const { theme, toggleTheme } = useContext(ThemeContext); // theme ve toggleTheme'i context'ten alıyoruz

  const { toggleLanguage, getText } = useContext(LanguageContext); // language, toggleLanguage ve getText'i context'ten alıyoruz

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === 'dark' ? getText('modeLight') : getText('modeDark')}
      </button>
      <div className="flex justify-center items-center">
        <p className="dark:text-stone-400"></p>
        <button
          onClick={toggleLanguage}
          className="px-2 py-2 text-indigo-800 dark:text-violet-300 font-bold rounded-md transition-all duration-200"
        >
          {getText('language')}
        </button>
        <p className="dark:text-stone-400"></p>
      </div>
      <nav className="nav-links">
        <a onClick={goToHomePage} className="links">
          {getText('link_1')}
        </a>
        <a onClick={goToLoginPage} className="links">
          {getText('link_2')}
        </a>
      </nav>
    </div>
  );
};

export default Switcher;
