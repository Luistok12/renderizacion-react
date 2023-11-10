import React, { useState } from "react";
import '../UseEffect/UseEffect.scss'

const UseEffect = () => {
    const [encendido, setEncendido] = useState(false);

    function encender() {
        setEncendido(true);
    }

    function apagar() {
        setEncendido(false);
    }

    return (
        <div className="interruptor">
            <h1>Interruptor con imagenes de Google fonts</h1>
            <div id="buttons">
                <button class="btn" onClick={encender}>Encender</button>
                <button class="btn" onClick={apagar}>Apagar</button>
            </div>
            {encendido ? (<span class="material-symbols-outlined">lightbulb</span>)
                : (<span class="material-symbols-outlined">light_off</span>)
            }
        </div>
    )
}

export default UseEffect;