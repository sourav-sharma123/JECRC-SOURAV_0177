// import { createContext, useState, useEffect } from "react";

// export const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState("en");

//   useEffect(() => {
//     const saved = localStorage.getItem("lang");
//     if (saved) setLanguage(saved);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("lang", language);
//   }, [language]);

//   return (
//     <LanguageContext.Provider value={{ language, setLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "en"
  );

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};