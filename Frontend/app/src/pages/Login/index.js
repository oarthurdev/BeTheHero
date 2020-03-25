import React from "react";
import "./styles.css";
import Heroes from "../../assets/heroes.png";
import Logo from "../../assets/logo.svg";

import { FaSignInAlt } from "react-icons/fa";

export default () => {
  return (
    <>
      <div className="login-containner">
        <section className="form">
          <img src={Logo} alt="logo" />

          <form action="submit">
            <h1>Faça seu Login</h1>
            <input type="text" placeholder="Sua ID" />
            <button className="button" type="submit">
              Entrar
            </button>
            <a href="/register">
              <FaSignInAlt height={16} color="#E02041" />
              Não tenho Cadastro
            </a>
          </form>
        </section>
        <img src={Heroes} alt="heroes" />
      </div>
    </>
  );
};
