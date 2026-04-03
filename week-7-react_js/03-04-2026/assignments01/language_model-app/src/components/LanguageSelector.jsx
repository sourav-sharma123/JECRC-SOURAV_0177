// import { useContext } from "react";
// import { LanguageContext } from "../context/LanguageContext";

// const languages = [
//   { code: "en", label: "English 🇺🇸" },
//   { code: "hi", label: "Hindi 🇮🇳" },
//   { code: "fr", label: "French 🇫🇷" },
//   { code: "es", label: "Spanish 🇪🇸" },
// ];

// export default function LanguageSelector() {
//   const { language, setLanguage } = useContext(LanguageContext);

//   return (
//     <select
//       value={language}
//       onChange={(e) => setLanguage(e.target.value)}
//       style={styles.select}
//     >
//       {languages.map((lang) => (
//         <option key={lang.code} value={lang.code}>
//           {lang.label}
//         </option>
//       ))}
//     </select>
//   );
// }

// const styles = {
//   select: {
//     padding: "8px",
//     borderRadius: "8px",
//     cursor: "pointer",
//   },
// };




import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const languages = [
  { code: "en", label: "English 🇺🇸" },
  { code: "hi", label: "Hindi 🇮🇳" },
  { code: "fr", label: "French 🇫🇷" },
  { code: "es", label: "Spanish 🇪🇸" },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      style={{
        padding: "10px",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}