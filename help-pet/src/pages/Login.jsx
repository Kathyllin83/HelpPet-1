import { useState } from "react";
import cat1 from "../assets/cat1.png";
import dog1 from "../assets/dog1.png";
import styles from "../style/login.module.css";
import NavBar from "../components/NavBar";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticação
    if (email === "" || senha === "") {
      setMensagem("Por favor, preencha todos os campos.");
    } else {
      // Suponha sucesso no login
      setMensagem("Login bem-sucedido!");
      // Redirecionar ou outras ações
    }
  }

  return (
    <div className={styles.bodyLogin}>
      <NavBar />
      <div className={styles.login}>
        <img src={dog1} alt="Dog" className={styles.imgAnimals} />
        <div className={styles.cardFormLogin}>
          <div className={styles.loginSection}>
            <h3>Acesso</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="E-mail"
                required
                className={styles.inputField}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Senha"
                required
                className={styles.inputField}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              {mensagem && <p className={styles.mensagem}>{mensagem}</p>}
              <button type="submit" className={styles.loginButton}>
                Login
              </button>
            </form>
          </div>
        </div>
        <img src={cat1} alt="Cat" className={styles.imgAnimals} />
      </div>
    </div>
  );
}

export default Login;