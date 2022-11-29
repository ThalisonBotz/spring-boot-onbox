import React, { useState, forwardRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./style.css";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Login() {
  const navigate = useNavigate();

  const [openEmptyAlert, setOpenEmptyAlert] = useState(false);
  const [openWrongAlert, setOpenWrongAlert] = useState(false);
  const [isVisibilityOn, setIsVisibilityOn] = useState(false);
  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleEmptyClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenEmptyAlert(false);
  };

  const handleWrongClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenWrongAlert(false);
  };

  const handleVisibilityChange = (event) => {
    setIsVisibilityOn(!isVisibilityOn);
  };

  const handleUserLoginChange = (event) => {
    setUserLogin(event.target.value);
  };

  const handleUserPasswordChange = (event) => {
    setUserPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userLogin === "admin" && userPassword === "admin") {
      navigate("/list");
    } else if (userLogin === "" || userPassword === "") {
      setOpenEmptyAlert(true);
    } else {
      setOpenWrongAlert(true);
    }
  };

  return (
    <>
      <div className="general__container">
        <div className="logo__container">
          <img src="/src/assets/onbox-full-icon.png" alt="" />
        </div>
        <p className="login__title logo__container">Login</p>

        <form className="login__form" onSubmit={handleSubmit}>
          <input
            id="user"
            className="login__form__input"
            placeholder="Usuário"
            type="text"
            value={userLogin}
            onChange={handleUserLoginChange}
          />
          <div className="login__form__password-field">
            <input
              id="password"
              className="login__form__input"
              placeholder="Senha"
              type={isVisibilityOn ? "text" : "password"}
              value={userPassword}
              onChange={handleUserPasswordChange}
            />
            <div
              className="login-form__visibility-btn"
              onClick={handleVisibilityChange}
            >
              {!isVisibilityOn ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </div>
          </div>

          <button className="login__form__submit-btn" type="submit">
            Entrar
          </button>
        </form>

        <p className="login__title logo__container login__minor__text login__minor__forgot-password">
          Esqueceu sua senha ? &nbsp;
          <Link className="p__link" to="/create">
            Recuperar
          </Link>
        </p>
        <p className="login__title logo__container login__minor__text">
          Não tem uma conta ? &nbsp;
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

      <div>
        <Snackbar
          open={openEmptyAlert}
          autoHideDuration={6000}
          onClose={handleEmptyClose}
        >
          <Alert
            onClose={handleEmptyClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            Os campos de login não podem estar vazios!
          </Alert>
        </Snackbar>
        <Snackbar
          open={openWrongAlert}
          autoHideDuration={6000}
          onClose={handleWrongClose}
        >
          <Alert
            onClose={handleWrongClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            Autenticação falhou! Tente outro usuário ou senha!
          </Alert>
        </Snackbar>
      </div>

      <Footer />
    </>
  );
}

export default Login;
