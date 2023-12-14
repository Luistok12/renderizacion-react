import React, { useState, useEffect } from "react";
import "./Header.scss";
import logo from "../../logo.svg";
import { Link } from 'react-router-dom';
import { useTheme } from "../../context/ThemeContext";


const Header = () => {

  const { isDarkMode } = useTheme();

  const [showMenu, setShowMenu] = useState(true);
  const [pantallaMovil, setPantallaMovil] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const cambioDeTamanio = () => {
      setPantallaMovil(window.innerWidth > 500);
      if (window.innerWidth > 500) {
        // setShowMenu(true);
        setPantallaMovil(false);
      }
      else {
        setShowMenu(false);
        setPantallaMovil(true);
      }
    };

    window.addEventListener('resize', cambioDeTamanio);

    return () => { window.removeEventListener('resize', cambioDeTamanio); }

  }, [])

  return (
    <div className={`header-app ${isDarkMode ? 'dark-mode' : ''}`}>
      <header id="header">
        <div id="title-container">
          <img src={logo} alt="logo" />
          <h1>React!</h1>
          <img src={logo} alt="logo" />
        </div>
        <div id="main-icon" onClick={() => { setShowMenu(!showMenu) }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {(!pantallaMovil || (pantallaMovil && showMenu)) && <nav>
          <ul id="main">
            <li><Link to="/Home" class="main-link">Home</Link></li>
            <li id="submain-container"><Link to="/Hooks" class="main-link">Ejercicios</Link>
              <ul id="submain">
                <li><Link to="/Hooks/UseState" class="submain-link">Contador</Link></li>
                <li><Link to="/Hooks/UseEffect" class="submain-link">Interruptor</Link></li>
                <li><Link to="/Hooks/UseForms" class="submain-link">Temporizador</Link></li>
                <li><Link to="/Hooks/ContadorV2" class="submain-link">Contador v2</Link></li>
                <li><Link to="/Hooks/Contexto" class="submain-link">Contexto</Link></li>
                <li><Link to="/Hooks/UsandoRedux" class="submain-link">Redux!!!</Link></li>
                <li><Link to="/Hooks/ReduxToolkit" class="submain-link">Redux Toolkit</Link></li>
              </ul>
            </li>
            <li><Link to="/ConsumiendoApi" class="main-link">Renderizado de API</Link></li>
            <li><Link to="" class="main-link">Renderizado de una base de datos</Link></li>
          </ul>
        </nav>}
      </header>
    </div>
  )
}

export default Header;