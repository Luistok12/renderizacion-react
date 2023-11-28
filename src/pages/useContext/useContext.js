// Componente.js
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import '../useContext/useContext.scss';

const useContext = () => {
  const { isDarkMode, toggleDarkMode} = useTheme();         // Uso del hook personalizado useContext

  return (
    // Renderizado del contexto!!
    <div className={`component-container ${!isDarkMode ? 'dark-mode' : ''}`} >
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      {/* Contenido del componente */}
    </div>
  );
};

export default useContext;

// Esto solo dara background al componente useContexto! Ojo, si bien da background-color al componente, Header y Footer
// Se veran afectados, ya que isDarkMode es un valor del contexto en el que ya estan consumiendo el Header y Footer
// Luego cambiare para que se modifique todo el contenido principal! asi que solo cambiara a color "contrario" esta pagina