import React from "react";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import styles from "../style/home_page.module.css";
import LinkButton from "../components/LinkButton";
import NavBar from "../components/NavBar";

function HomePage() {
  return (
    <body className={styles.bodyHome}>
      <NavBar></NavBar>

      <div className={styles.homePage}>
        <div className={styles.cardHomePage}>
          <h1>
            <strong>AJUDE UM PET!</strong>
          </h1>
          <p>
            
              Junte-se a nossa causa e transforme a realidade de animais que
              esperam por uma nova chance!
            
          </p>
          <LinkButton label={"ENTRAR"}></LinkButton>
        </div>
      </div>
    </body>
  );
}

export default HomePage;
