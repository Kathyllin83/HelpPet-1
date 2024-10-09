import cat1 from "../assets/cat1.png";
import dog1 from "../assets/dog1.png";
import styles from "../style/login.module.css";

import NavBar from "../components/NavBar";

function Login() {
  return (
    <body className={styles.bodyLogin}>
        <NavBar/>

        <div className={styles.login}>

            <img src={dog1} alt="Dog" className={styles.imgAnimals} />

            <div className={styles.cardFormLogin}>
                <h1>LOGIN</h1>
                <p>OI</p>
            </div>

            <img src={cat1} alt="Cat" className={styles.imgAnimals} />

        </div>
        
    </body>

  );
}

export default Login;
