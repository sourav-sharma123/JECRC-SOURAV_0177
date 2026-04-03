// import { useContext } from "react";
// import { LanguageContext } from "../context/LanguageContext";
// import translations from "../i18n";

// export const useTranslate = () => {
//   const { language } = useContext(LanguageContext);

//   const t = (key) => {
//     const keys = key.split(".");
//     let value = translations[language];

//     keys.forEach((k) => {
//       value = value?.[k];
//     });

//     return value || key;
//   };

//   return { t, language };
// };

import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../i18n";

export const useTranslate = () => {
  const { language } = useContext(LanguageContext);

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];

    keys.forEach((k) => {
      value = value?.[k];
    });

    return value || key;
  };

  return { t };
};