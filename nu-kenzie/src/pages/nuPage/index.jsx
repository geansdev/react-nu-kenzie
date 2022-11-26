import React from "react";
import Form from "../../components/form";
import Header from "../../components/header";
import "./main.css";

const NuPage = ({ setPage }) => {
  return (
    <div className="bodyNuPage">
      <Header setPage={setPage} />
      <main>
        <Form />
      </main>
    </div>
  );
};

export default NuPage;
