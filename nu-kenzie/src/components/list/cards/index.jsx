import React, { useState } from "react";
import Trash from "../../../assets/trash.svg";
import "./card.css";

const Card = ({
  description,
  value,
  type,
  id,
  listTransactions,
  setListTransactions,
}) => {
  const filter = (id) => {
    const arrayfilter = listTransactions.filter((element) => element.id !== id);
    setListTransactions(arrayfilter);
  };

  return (
    <li id={id} className={type === "entrada" ? "entrada" : ""}>
      <div>
        <p>{description}</p>
        <p className="pTextType">{type}</p>
      </div>
      <div className="divTrashValue">
        <h2>R$ {value}</h2>
        <button onClick={() => filter(id)}>
          <img src={Trash} alt="Lixeira" />
        </button>
      </div>
    </li>
  );
};

export default Card;
