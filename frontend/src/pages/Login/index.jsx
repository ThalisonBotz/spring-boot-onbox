import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import "./style.css";

function Login() {
  return (
    <>
      <div className="general__container">
        <div className="logo__container">
          <img src="/src/assets/onbox-full-icon.png" alt="" />
        </div>
        <p className="login__title logo__container">Login</p>

        <form className="login__form">
          <input
            className="login__form__input"
            placeholder="Usuário"
            type="text"
          />
          <input
            className="login__form__input"
            placeholder="Senha"
            type="password"
          />
          <Link className="login__form__submit-btn" to="/list">
            Entrar
          </Link>
        </form>

        <p className="login__title logo__container login__minor__text login__minor__forgot-password">
          Esqueceu sua senha? &nbsp;
          <Link className="p__link" to="/create">
            Recuperar
          </Link>
        </p>
        <p className="login__title logo__container login__minor__text">
          Não tem uma conta? &nbsp;
          <Link className="p__link" to="/create">
            Cadastrar-se
          </Link>
        </p>
        <p className="login__title logo__container login__minor__text">
          Dúvidas? &nbsp;
          <Link className="p__link" to="/faq">
            Acesse nosso FAQ
          </Link>
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Login;
