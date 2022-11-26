import React from "react";
import LogoImg from "../../assets/Nu Kenzie.svg";
import ImgVisual from "../../assets/imgLogin/Group 262.svg";
import "./login.css";

const LoginPage = ({ setPage }) => {
  return (
    <div className="divBody container">
      <div className="divContainer">
        <figure>
          <img src={LogoImg} alt="Logo Kenzie" />
        </figure>
        <h1 className="title.one">Centralize o controle das suas finanças</h1>
        <p className="paragraph">de forma rápida e segura</p>
        <button
          className="btnLogin"
          type="button"
          onClick={() => setPage(false)}
        >
          Iniciar
        </button>
      </div>
      <figure className="divImg">
        <img src={ImgVisual} alt="Imagem ilustrativa pagina" />
      </figure>
    </div>
  );
};

export default LoginPage;
