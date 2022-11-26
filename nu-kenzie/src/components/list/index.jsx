import React from "react";
import Card from "./cards";
import ImgNocard from "../../assets/NoCard.svg";
import "./ul.css";

const List = ({ listTransactions, setListTransactions }) => {
  return (
    <>
      {listTransactions.length ? (
        <ul className="ulRenderCards">
          {listTransactions.map((card, index) => (
            <Card
              key={index}
              description={card.description}
              value={card.value}
              type={card.type}
              id={card.id}
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
          ))}
        </ul>
      ) : (
        <div>
          <p className="pTextNoImg">Você ainda não possui nenhum lançamento</p>
          <img className="noImg" src={ImgNocard} alt="Sem imagem" />
        </div>
      )}
    </>
  );
};

export default List;
