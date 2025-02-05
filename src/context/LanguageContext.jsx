import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Context api:
export const LanguageContext = createContext();

// Provider bileşeni:
export const LanguageProvider = ({ children }) => {
  //localStorage kontrolü:
  const savedLanguage = localStorage.getItem('language');
  // Varsayılan dil:
  const [language, setLanguage] = useState(
    savedLanguage ? savedLanguage : 'tr'
  );
  // Varsayılan çeviri:
  //default olarak {} ama içini useEffect'le dolduruyoruz ve getItem fonksiyonuyla gelen veriden istediğimiz bilgiyi çekeceğiz:
  const [translations, setTranslations] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get('translations.json') //HEM TR HEM EN DATA GELİYOR komple..
        .then((response) => {
          setTranslations(response.data);
        })
        .catch((error) =>
          console.error('Çeviri dosyası yüklenirken hata oluştu:', error)
        );
    }, 1000);
  }, []);
  //language her değiştiğinde localStorage'e kaydetmek için:
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  //language'e bağlı olarak istenen text'i(shortcut) çekiyoruz(ekranda kullanıcaz):
  const getText = (shortcut) => {
    if (!translations || !translations[language]) return ''; // Eğer veriler yüklenmediyse shortcut'ı döndür
    return translations[language]?.[shortcut] || shortcut; // Çeviri yoksa yine shortcut'ı döndür
  };

  //butona tıklanınca çalışacak fonksiyon:
  const toggleLanguage = () => {
    //language değişecek ve set edicez:
    setLanguage((prevLanguage) => (prevLanguage === 'tr' ? 'en' : 'tr'));
    //local'e kaydedicez ki her açılışta local'den çekip local'de varsa onu göster yoksa default neyse o dicez:
  };
  return (
    <LanguageContext.Provider
      value={{ language, translations, getText, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
