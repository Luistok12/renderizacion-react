// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();       // Creacion de contexto!

export const useTheme = () => {             // Hook personalizado para no escribir ... = useContext(ThemeContext);
    return useContext(ThemeContext);          // En su lugar se usara ... = useTheme(); pros => legibilidad y reutilizacion
};

export const ThemeProvider = ({ children }) => {    // Proveedor de contexto! Manda todo su contenido al que invoque su
    // contexto!                                         ****
    const [isDarkMode, setDarkMode] = useState(false);    // argumento 1

    const toggleDarkMode = () => {                        // argumento 2
        setDarkMode(!isDarkMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};                                                                  // ****