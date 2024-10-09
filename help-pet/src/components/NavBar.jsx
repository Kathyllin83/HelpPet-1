import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import logo from "../assets/logo.png";
import styles from "../style/nav_bar.module.css";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.container}>
      
      <nav className={styles.navBar_container}>
        
        <div className={styles.containerImg}>
          <img src={logo} alt="Logo HelpPet" />
          <p>Help Pet</p>
        </div>

        <ul className={styles.containerList}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre nós</Link>
          </li>
          <li>
            <Link to="/services">Serviços</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

      </nav>

      <div className={styles.line}></div>

    </div>
  );
}

export default NavBar;
