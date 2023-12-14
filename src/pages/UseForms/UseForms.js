import React, { useEffect, useState } from "react";
import '../UseForms/UseForms.scss';

// No darle bola al nombre del componente
const UseForms = () => {
    const [visibility, setVisibility] = useState(false);
    const [numero, setNumero] = useState(0);
    const [stoped, setStoped] = useState(false);

    function incrementar() {
        setNumero(numero + 1);
    }

    // useEffect => Empieza a ejecutarse desde la dependencia, si esta cambia a un valor true = 1 comienza la ejecucion.
    useEffect(() => {

        if (stoped) {
            // setInterval (funcion en callback, unidad en milisegundos 1000ml = 1seg) => retorna un objeto ID
            const intervalId = setInterval(incrementar, 1000);

            // OJO! setInterval no es que te da los segundos, lo que hace es repetir una funcion cada tanto tiempo que se le asignes!
            console.log("numero de intervalId", intervalId);

            return () => {
                clearInterval(intervalId);
                // Borra el objeto Id para detener las ejecuciones
                console.log("numero", numero);
            };
        }
        // Dependencia (Array de abajo): es el valor para que se ejecute useEffect otra vez.
    }, [stoped, numero]);

    return (
        <div className="temporizador">
            <h1>Temporizador con useEffect:</h1>
            <p>Crea un componente llamado Timer que muestre un contador que se incrementa cada segundo. Utiliza el hook useEffect para iniciar y detener el temporizador. A continuación, se presenta el código del componente con funciones definidas:</p>
            <button class="btn" onClick={function activarTemporizador() { setVisibility(!visibility) }}>Activar temporizador</button>
            {visibility ? (<div>
                <p id="numero">{numero}</p>
                <button class="btn play" onClick={function activarTemporizador() { setStoped(true) }}>Iniciar</button>
                <button class="btn stop" onClick={function activarTemporizador() { setStoped(false) }}>Detener</button>
                <button class="btn" onClick={function resetTemporizador() { setNumero(0) }}>Reiniciar temporizador</button>
            </div>)
                : null
            }
        </div>
    )
}

export default UseForms;