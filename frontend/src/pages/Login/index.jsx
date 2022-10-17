import React from "react";
import { Link } from "react-router-dom";
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
          <input className="login__form__input" type="submit"></input>
        </form>

        <p className="login__title logo__container login__create_account">
          Esqueceu sua senha?{" "}
          <Link className="p__link" to="/create">
            Recuperar
          </Link>
        </p>
        <p className="login__title logo__container login__create_account">
          Não tem uma conta?{" "}
          <Link className="p__link" to="/create">
            Cadastrar-se
          </Link>
        </p>
      </div>
      <footer>
        Copyright 2022/ Grupo de Des. Web Termos de uso e Privacidade{" "}
      </footer>
    </>
  );
}

export default Login;
