import React, { useReducer } from "react";
import '../UseReducer/UseReducer.scss';

const UseReducer = () => {

    // Importantisimo que todo este dentro del componente!
    const [estado, dispatch] = useReducer(reducer, 0);   // *
    // Es similar al useState solo que cuenta con una funcion "dispatch".
    // dispatch toma el "tipo" de accion y lo envia a la funcion reducer.

    return(
        <div className="ContadorV2">
            <h1>Contador con UseReducer!</h1>
            <div>
                <button class="btn" onClick={() => dispatch({ type : 'decrementar' })}>Decrementar</button>
                <p>{estado}</p>
                <button class="btn" onClick={() => dispatch({ type : 'incrementar' })}>Incrementar</button>
            </div>
        </div>
    )
}

// La funcion puede estar fuera del componente
function reducer(estado, accion){
    switch(accion.type){
        case 'decrementar':
            return estado - 1 ;
        case 'incrementar':
            return estado + 1 ; 
        default:
            return estado;
    }
} // *

export default UseReducer;
