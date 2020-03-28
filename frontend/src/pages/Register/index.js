import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";
import Button from "../../components/Button";
import Input from "../../components/Input";
import mask from "../../lib/mask";
import api from "../../services/api";
import "./styles.css";

const useRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const history = useHistory();

  function onSubmit(e) {
    e.preventDefault();

    const body = {
      name,
      email,
      whatsapp: mask.unmask(whatsapp),
      city,
      uf
    };

    api
      .post("/ongs", body)
      .then(response => response.data)
      .then(data => alert(`Seu id ${data.id}`))
      .then(() => history.push("/"))
      .catch(console.error);
  }

  return {
    name,
    setName,
    email,
    setEmail,
    whatsapp,
    setWhatsapp,
    city,
    setCity,
    uf,
    setUf,
    onSubmit
  };
};

function Register() {
  const register = useRegister();

  return (
    <div className="Register__container">
      <div className="Register__content">
        <section className="Register__info">
          <img src={logoImg} alt="Be The Hero" className="Register__logo" />

          <h1 className="Register__title">Cadastro</h1>
          <div className="Register__subtitle">
            Faça seu cadastro, entre na plataform e ajude pessoas a encontrarem
            os casos da sua ONG.
          </div>

          <Link className="Register__link" to="/">
            <FiArrowLeft
              size={16}
              color="#E02041"
              style={{ marginRight: "8px" }}
            />
            Entrar
          </Link>
        </section>

        <form className="Register__form" onSubmit={register.onSubmit}>
          <Input
            placeholder="Nome da ONG"
            type="text"
            value={register.name}
            onChange={e => register.setName(e.target.value)}
          />
          <Input
            placeholder="E-mail"
            type="email"
            value={register.email}
            onChange={e => register.setEmail(e.target.value)}
          />
          <Input
            placeholder="Whatsapp"
            type="tel"
            value={mask.phone(register.whatsapp)}
            onChange={e => register.setWhatsapp(e.target.value)}
          />

          <div className="Register__input-group">
            <Input
              placeholder="Cidade"
              type="text"
              value={register.city}
              onChange={e => register.setCity(e.target.value)}
            />
            <Input
              placeholder="UF"
              type="text"
              style={{ width: 80 }}
              value={register.uf}
              onChange={e => register.setUf(e.target.value)}
            />
          </div>

          <Button type="submit">Cadastrar</Button>
        </form>
      </div>
    </div>
  );
}

export default Register;
