import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import styles from "../style/nav_bar.module.css";

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
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : undefined} aria-label="Página Inicial">
              Início
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : undefined} aria-label="Sobre Nós">
              Sobre nós
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : undefined} aria-label="Serviços">
              Serviços
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : undefined} aria-label="Acessar Conta">
              Acessar
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.line}></div>
    </div>
  );
}

export default NavBar;