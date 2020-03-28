import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";
import Button from "../../components/Button";
import Input from "../../components/Input";
import api from "../../services/api";
import "./styles.css";

const useLogon = () => {
  const [id, setId] = useState("");
  const history = useHistory();

  function onSubmit(e) {
    e.preventDefault();

    const body = { id };

    api
      .post("session", body)
      .then(response => response.data)
      .then(data => {
        localStorage.setItem("@ong:id", id);
        localStorage.setItem("@ong:name", data.name);
        history.push("/profile");
      })
      .catch(console.error);
  }

  return {
    id,
    setId,
    onSubmit
  };
};

function Logon() {
  const logon = useLogon();

  return (
    <div className="Logon__container">
      <section className="Logon__form">
        <img src={logoImg} alt="Be The Hero" className="Logon__form__img" />

        <form className="Logon__form__content" onSubmit={logon.onSubmit}>
          <h1 className="Logon__form__title">Faça seu logon</h1>

          <Input
            placeholder="Sua ID"
            value={logon.id}
            onChange={e => logon.setId(e.target.value)}
          />
          <Button type="submit">Entrar</Button>

          <Link className="Logon__form__link" to="/register">
            <FiLogIn size={16} color="#E02041" style={{ marginRight: "8px" }} />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" className="Logon__img" />
    </div>
  );
}

export default Logon;
