import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";
import api from "../../services/api";
import "./styles.css";

const useProfile = () => {
  const ongId = localStorage.getItem("@ong:id");
  const ongName = localStorage.getItem("@ong:name");
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();

  useEffect(() => {
    api
      .get("/profile", { headers: { Authorization: ongId } })
      .then(response => response.data)
      .then(setIncidents)
      .catch(console.error);
  }, [ongId]);

  function destroy(incidentId) {
    const url = `/incidents/${incidentId}`;

    api
      .delete(url, { headers: { Authorization: ongId } })
      .then(response => response.data)
      .then(data => setIncidents(incidents.filter(it => it.id !== incidentId)))
      .catch(console.error);
  }

  function logout() {
    localStorage.clear();

    history.push("/");
  }

  return {
    ongId,
    ongName,
    incidents,
    destroy,
    logout
  };
};

function Profile() {
  const profile = useProfile();

  return (
    <div className="Profile__container">
      <header className="Profile__header">
        <img src={logoImg} alt="Be The Hero" className="Profile__logo" />

        <span className="Profile__brand">Bem vinda, {profile.ongName}</span>

        <Link className="Profile__button" to="/new-incident">
          Cadastrar novo caso
        </Link>

        <button className="Profile__logout" onClick={profile.logout}>
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1 className="Profile__title">Casos cadastrados</h1>

      <ul className="Profile__incidents">
        {profile.incidents.map(it => (
          <li className="Profile__incident" key={it.id}>
            <strong className="Profile__incident__label">Caso:</strong>
            <p className="Profile__incident__title">{it.title}</p>

            <strong className="Profile__incident__label">Descrição:</strong>
            <p className="Profile__incident__description">{it.description}</p>

            <strong className="Profile__incident__label">Valor:</strong>
            <p className="Profile__incident__value">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(it.value)}
            </p>

            <button
              className="Profile__incident__button"
              onClick={() => profile.destroy(it.id)}
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
