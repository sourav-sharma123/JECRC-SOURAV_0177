// import { useTranslate } from "../hooks/useTranslate";

// export default function Home() {
//   const { t } = useTranslate();

//   return (
//     <div style={styles.container}>
//       <h1>{t("home.title")}</h1>
//       <p>{t("home.desc")}</p>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     height: "90vh",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "linear-gradient(135deg, #6366f1, #9333ea)",
//     color: "white",
//   },
// };


import { useTranslate } from "../hooks/useTranslate";

export default function Home() {
  const { t } = useTranslate();

  return (
    <div style={styles.container}>
      <h1>{t("home.title")}</h1>
      <p>{t("home.desc")}</p>
    </div>
  );
}

const styles = {
  container: {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #4f46e5, #9333ea)",
    color: "white",
  },
};