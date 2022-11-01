import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import Footer from "../../components/Footer";
import "./style.css";

function Create() {
  return (
    <>
      <div>
        <Link to={`/`}>
          <IconButton aria-label="home" className="home-btn__icon" size="large">
            <HomeIcon />
          </IconButton>
        </Link>
      </div>
      <div className="general__container create__page">
        <div className="logo__container">
          <img src="/src/assets/onbox-full-icon.png" alt="" />
        </div>

        <form className="login__form create-account">
          <input
            className="login__form__input create-account__input"
            placeholder="Nome Completo"
            type="text"
          />
          <input
            className="login__form__input create-account__input"
            placeholder="Usuário"
            type="text"
          />
          <input
            className="login__form__input create-account__input"
            placeholder="Email"
            type="text"
          />
          <input
            className="login__form__input create-account__input"
            placeholder="Senha"
            type="password"
          />
          <Link className="login__form__submit-btn create-user__btn" to="/list">
            Cadastrar
          </Link>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Create;
