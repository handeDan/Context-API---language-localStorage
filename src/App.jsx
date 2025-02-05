import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Switcher from './components/Switcher';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeContextProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  //App.jsx'de sarmak: Eğer sadece App.jsx altındaki bileşenler temaya ihtiyaç duyuyorsa.
  //main.jsx'de sarmak: Eğer tüm uygulama, hatta App.jsx dışındaki bileşenler de temaya erişim sağlayacaksa.
  return (
    <LanguageProvider>
      <ThemeContextProvider>
        <Router>
          <Switcher />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
          </Routes>
        </Router>
      </ThemeContextProvider>
    </LanguageProvider>
  );
}

export default App;
