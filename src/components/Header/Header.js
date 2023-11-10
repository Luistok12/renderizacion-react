import React from "react";
import "./Header.scss";
import logo from "../../logo.svg";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div id="title-container">
        <img src={logo} alt="logo" />
        <h1>React!</h1>
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul id="main">
        <li><Link to="/Home" class="main-link">Home</Link></li>
          <li id="submain-container"><Link to="/Hooks" class="main-link">Ejercicios</Link>
            <ul id="submain">
              <li><Link to="/Hooks/UseState" class="submain-link">Contador</Link></li>
              <li><Link to="/Hooks/UseEffect" class="submain-link">Interruptor</Link></li>
              <li><Link to="/Hooks/UseForms" class="submain-link">Temporizador</Link></li>
              <li><Link to="/Hooks/ContadorV2" class="submain-link">Contador v2</Link></li>
            </ul>
          </li>
          <li><Link to="" class="main-link">Renderizado de API</Link></li>
          <li><Link to="" class="main-link">Renderizado de una base de datos</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;