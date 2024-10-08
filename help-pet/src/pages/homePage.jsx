import React from "react";
import styles from "../style/home_page.module.css";
import LinkButton from "../components/LinkButton";
import NavBar from "../components/NavBar";


function HomePage () {
    return(
        <div className={styles.homePage}>
            <NavBar></NavBar>
            <div className={styles.cardHomePage}>
                <h1>AJUDE UM PET!</h1>
                <p>Junte-se a nossa causa e transforme a realidade de animais que esperam por uma nova chance!</p>
                <LinkButton label={"ENTRAR"}></LinkButton>
            </div>
        </div>
    )
}

export default HomePage;