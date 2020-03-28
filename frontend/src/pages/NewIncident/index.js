import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";
import Button from "../../components/Button";
import Input from "../../components/Input";
import api from "../../services/api";
import "./styles.css";

const useNewIncident = () => {
  const ongId = localStorage.getItem("@ong:id");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const history = useHistory();

  function onSubmit(e) {
    e.preventDefault();

    const body = {
      title,
      description,
      value
    };

    api
      .post("/incidents", body, { headers: { Authorization: ongId } })
      .then(response => response.data)
      .then(data => history.push("/profile"))
      .catch(console.error);
  }

  return {
    title,
    setTitle,
    description,
    setDescription,
    value,
    setValue,
    onSubmit
  };
};

function NewIncident() {
  const newIncident = useNewIncident();

  return (
    <div className="NewIncident__container">
      <div className="NewIncident__content">
        <section className="NewIncident__info">
          <img src={logoImg} alt="Be The Hero" className="NewIncident__logo" />

          <h1 className="NewIncident__title">Cadastro</h1>
          <div className="NewIncident__subtitle">
            Faça seu cadastro, entre na plataform e ajude pessoas a encontrarem
            os casos da sua ONG.
          </div>

          <Link className="NewIncident__link" to="/profile">
            <FiArrowLeft
              size={16}
              color="#E02041"
              style={{ marginRight: "8px" }}
            />
            Voltar para Home
          </Link>
        </section>

        <form className="NewIncident__form" onSubmit={newIncident.onSubmit}>
          <Input
            placeholder="Título do caso"
            type="text"
            value={newIncident.title}
            onChange={e => newIncident.setTitle(e.target.value)}
          />
          <textarea
            className="NewIncident__textarea"
            placeholder="Descrição"
            value={newIncident.description}
            onChange={e => newIncident.setDescription(e.target.value)}
          />
          <Input
            placeholder="Valor em reais"
            type="number"
            value={newIncident.value}
            onChange={e => newIncident.setValue(e.target.value)}
          />

          <Button type="submit">Cadastrar</Button>
        </form>
      </div>
    </div>
  );
}

export default NewIncident;
