import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const LoginPage = () => {
  const { toggleLanguage, getText } = useContext(LanguageContext); // language, toggleLanguage ve getText'i context'ten alıyoruz

  return (
    <div>
      <h2 className="title">{getText('title_login')}</h2>
      <div className="login-form">
        <label>{getText('label_1')}</label>
        <input type="text" placeholder={getText('label_1_ph')} />
        <label>{getText('label_2')}</label>
        <input type="text" placeholder={getText('label_2_ph')} />
        <button className="button">{getText('login_button')}</button>
      </div>
    </div>
  );
};

export default LoginPage;
