import React from "react";
import "./filtro.css";

const FiltroBtn = ({ todos, entradas, despesas }) => {
  return (
    <div className="divBtnFilter">
      <p>Resumo financeiro</p>
      <ul className="ulBtnFilter">
        <button className="btnBackLogin" onClick={todos}>
          Todos
        </button>
        <button className="btnBackLogin" onClick={entradas}>
          Entradas
        </button>
        <button className="btnBackLogin" onClick={despesas}>
          Despesas
        </button>
      </ul>
    </div>
  );
};

export default FiltroBtn;
