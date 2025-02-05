# **CONTEXT API ile Dil:**

- React’ın kendisinde olan, props drilling’e karşı geliştirilen, Redux alternatifi, veri paylaşımı yapmamızı sağlayan uygulama genelinde bir state’tir.
- Versiyon 16 itibariyle React içinde gömülü gelir, ek kurulum gerekmez.
- Birçok component’in aynı veriye ihtiyacı olduğunda, bu veriyi her componente tek tek props olarak geçirmek yerine, Context API ile merkezi bir şekilde yönetebiliriz.
- Karmaşık web siteleri için uygun değildir. Basit verileri yönetirken tercih edilmeli.(theme, language, currency.. gibi)
- Karmaşık web siteleri için Redux tercih edilebilir.
- Props drilling: State/değerlerin ağaçta yukarıdan aşağıya (parent => child => grandchild) taşınmasıdır.
- Props drilling ile gereksiz kod yazımı, gereksiz ram tüketimi olur, yönetimi zordur.

## **KULLANIMI:**

**\*createContext:**

- Bir context oluşturmamızı sağlayan methoddur.
  import React, { createContext } from 'react';

export const LanguageContext= createContext();

**\*Provider:**

- Context’in sağlanacağı bir Provider oluşturuyoruz.
- MyContext.Provider ile, context'e değer olarak bir obje ({ value, setValue }) sağlıyoruz.
- Bu veri, MyContext'i tüketen component’ler tarafından kullanılabilecek.

import React, { createContext, useState } from 'react';

export const LanguageContext= createContext();

export const LanguageProvider= ({ children }) => {
const savedLanguage = localStorage.getItem('language');

const [language, setLanguage] = useState(
savedLanguage ? savedLanguage : 'tr'
);

const [translations, setTranslations] = useState(null);

const getText = (shortcut) => {
if (!translations || !translations[language]) return '';
return translations[language]?.[shortcut] || shortcut;
};

const toggleLanguage = () => {
setLanguage((prevLanguage) => (prevLanguage === 'tr' ? 'en' : 'tr'));
};

return (
<LanguageContext.Provider value={{ language, translations, getText, toggleLanguage }}>
{children}
</LanguageContext.Provider>
);
};

**\*useContext:**

- Provide edilen context'in value’larını almak için kullanılan daha pratik ve daha çok tercih edilen yöntemidir.
- Context.Consumer ile çalışırken yazılacak olan uzun kodu basitleştirir ve daha temiz bir çözüm sağlar.

import React, { useContext } from 'react';

const MyComponent = () => {
const { language, translations, getText, toggleLanguage } = useContext(LanguageContext);

return (
      <div>
        <p>{getText('welcome')}</p>
        <p>{getText('mainText')}</p>
        <p>{getText('description')}</p>
      </div>
);
};
