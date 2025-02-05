import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const HomePage = () => {
  const { toggleLanguage, getText } = useContext(LanguageContext); // language, toggleLanguage ve getText'i context'ten alıyoruz

  return (
    <div>
      <h2 className="title">{getText('title_home')}</h2>
      <div className="home">
        <p>{getText('welcome')}</p>
        <p>{getText('mainText')}</p>
        <p>{getText('description')}</p>
      </div>
    </div>
  );
};

export default HomePage;
