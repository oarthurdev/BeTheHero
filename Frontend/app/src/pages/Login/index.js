import React from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

import Heroes from "../../assets/heroes.png";
import Logo from "../../assets/logo.svg";

import "./styles.css";

export default () => {
  return (
    <div className="login-containner">
      <section className="form">
        <img src={Logo} alt="logo" />

        <form>
          <h1>Faça seu Login</h1>
          <input type="text" placeholder="Sua ID" />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FaSignInAlt height={16} color="#E02041" />
            Não tenho Cadastro
          </Link>
        </form>
      </section>
      <img src={Heroes} alt="heroes" />
    </div>
  );
};
