import React from "react";
import { Link } from "react-router-dom";
import { FaPowerOff, FaTrashAlt } from "react-icons/fa";

import "./styles.css";
import Logo from "../../assets/logo.svg";

export default () => {
  return (
    <div className="profile-container">
      <header>
        <img src={Logo} alt="main-logo" />
        <span>Bem Vindo, PAAD</span>
        <Link className="button" to="incidents/new">
          Cadastrar novo Caso
        </Link>
        <button>
          <FaPowerOff size={18} color="#E02041" />
        </button>
      </header>
      <h1>Casos cadastrados</h1>
      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>
          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>
          <strong>VALOR:</strong>
          <p>235.67</p>
          <button tyoe="button">
            <FaTrashAlt size={20} color="#a8a8b3" />
          </button>
        </li>{" "}
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>
          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>
          <strong>VALOR:</strong>
          <p>235.67</p>
          <button tyoe="button">
            <FaTrashAlt size={20} color="#a8a8b3" />
          </button>
        </li>{" "}
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>
          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>
          <strong>VALOR:</strong>
          <p>235.67</p>
          <button tyoe="button">
            <FaTrashAlt size={20} color="#a8a8b3" />
          </button>
        </li>{" "}
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>
          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>
          <strong>VALOR:</strong>
          <p>235.67</p>
          <button tyoe="button">
            <FaTrashAlt size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
};
