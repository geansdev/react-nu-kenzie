import React from "react";
import "./totalMoney.css";

const TotalMoney = ({ listTransactions }) => {
  return (
    <div
      className={listTransactions.length ? "divTotalMoney" : "displayHidden"}
    >
      <div>
        <p className="pTextvalue">Valor total:</p>
        <p className="pSubTextvalue">O valor se refere ao saldo</p>
      </div>
      <p className="pValueTotal">
        R${""}
        {listTransactions.reduce(
          (acc, pv) =>
            pv.type === "entrada" ? acc + pv.value : acc - pv.value,
          0
        )}
      </p>
    </div>
  );
};

export default TotalMoney;

/* {listTransactions.reduce((acumulador, atual) => {
  return atual.value + acumulador;
}, 0)} */
