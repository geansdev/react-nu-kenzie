import React, { useState } from "react";
import FiltroBtn from "../filtro";
import List from "../list";
import TotalMoney from "../totalMoney";
import "./form.css";

const Form = () => {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500, id: 1 },
    { description: "Conta de luz", type: "saída", value: -150, id: 2 },
  ]);

  const [value, setValue] = useState(0);
  const [type, setType] = useState("entrada");
  const [description, setDescription] = useState("");

  //array filter estado
  const [arrFilter, setArrFilter] = useState([]);

  const allFilter = () => {
    setArrFilter([]);
  };

  const entradasFilter = () => {
    const arrEntradas = listTransactions.filter(
      (ele) => ele.type === "entrada"
    );

    setArrFilter(arrEntradas);
  };

  const despesasFilter = () => {
    const arrSaidas = listTransactions.filter((ele) => ele.type === "saída");
    setArrFilter(arrSaidas);
  };

  const createCard = (event) => {
    event.preventDefault();
    /* construir o novo card */
    const data = {
      description: description,
      type: type,
      value: +value,
      id: listTransactions.length + 1,
    };
    setListTransactions([...listTransactions, data]);
  };

  return (
    <>
      <div className="divForm">
        <form onSubmit={(event) => createCard(event)}>
          <div className="divDescrip">
            <label htmlFor="descrip">Descrição</label>
            <input
              placeholder="Digite aqui sua descrição"
              id="descrip"
              type="text"
              required
              onChange={(event) => setDescription(event.target.value)}
            />
            <p className="exInput">Ex: Compra de roupas</p>
          </div>
          <div className="divInputSelect">
            <div className="divValue">
              <label htmlFor="inputValue">Valor</label>
              <input
                placeholder="1 R$"
                id="inputvalue"
                type="number"
                required
                onChange={(event) => setValue(event.target.value)}
              />
            </div>
            <div className="divSelect">
              <label htmlFor="selectValue">Tipo de valor</label>
              <select
                name="selectValue"
                id="selectValue"
                onChange={(event) => setType(event.target.value)}
              >
                <option>Entrada</option>
                <option>Saída</option>
              </select>
            </div>
          </div>
          <button className="btnInsertValue">Inserir valor</button>
        </form>
        <TotalMoney listTransactions={listTransactions} />
      </div>
      <div className="divListCards">
        <FiltroBtn
          todos={allFilter}
          entradas={entradasFilter}
          despesas={despesasFilter}
        />
        {/* promps btn funcao */}
        <List
          listTransactions={arrFilter.length ? arrFilter : listTransactions}
          setListTransactions={setListTransactions}
        />
      </div>
    </>
  );
};

export default Form;
