import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import "./styles.css";
import "../../global.css";
import Logo from "../../assets/logo.svg";

export default () => {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={Logo} alt="main-logo" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para ajudar a encontrar um heroi para
            resolver isso!
          </p>
          <Link className="back-link" to="/profile">
            <FaArrowLeft height={16} color="#E02041" />
            Fechar
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Titulo do Caso" />
          <textarea type="email" placeholder="Descrição" />
          <input type="text" placeholder="Valor em reais" />

          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};
