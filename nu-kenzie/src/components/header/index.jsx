import React from "react";
import ImgLogo from "../../assets/imgLogin/Nu KenzieBlack.svg";

const Header = ({ setPage }) => {
  return (
    <header>
      <img src={ImgLogo} alt="Logo Kenzie" />
      <button
        className="btnBackLogin"
        type="button"
        onClick={() => setPage(true)}
      >
        inicio
      </button>
    </header>
  );
};

export default Header;
