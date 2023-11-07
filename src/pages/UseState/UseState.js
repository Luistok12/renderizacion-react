import React, { useState } from "react";
import '../UseState/UseState.scss';

const UseState = () => {
    const [numero, setNumero] = useState(0);
    const [contadorTotal, setContadorTotal] = useState(0);
    const [visibility, setVisibility] = useState(false);

    function incrementar() {
        setNumero(numero + 1);
        setContadorTotal(contadorTotal + 1);
    }

    function decrementar() {
        setNumero(numero - 1);
        setContadorTotal(contadorTotal + 1);
    }

    function mostrarContadorTotal() {
        setVisibility(!visibility);
    }

    return (
        <div className="UseState">
            <h1>Contador con 2 funciones y UseState</h1>
            <div>
                <button id='btn' onClick={decrementar}>-</button>
                <p>{numero}</p>
                <button id='btn' onClick={incrementar}>+</button>
            </div>
            <button id="btn-tot" onClick={mostrarContadorTotal}>Mostrar cantidad total de clicks</button>
            {visibility ? (
                <p>{contadorTotal}</p>
            ) : null}
            {/* Operadores ternarios :      ? => if y : => else */}
        </div>
    )
}

export default UseState;