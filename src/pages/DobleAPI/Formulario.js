// import React from "react";
import '../DobleAPI/Formulario.scss';
import { useState } from "react";

const Formulario = ({ datos, setDatos }) => {

    const [id, setId] = useState(3);
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    // const [telefono, setTelefono] = useState("");
    // const [mail, setMail] = useState("");
    // const [fecha, setFecha] = useState(null);

    function checkForm(event) {
        console.log(id, name, status);
        // if(nombre === "" || apellido === "" || telefono === 0 || mail === "" || fecha === 0) {
        if (name === "" || status === "") {
            alert("Complete bien los datos!");
            event.preventDefault();
        }
        else {
            setDatos([...datos, { id: setId(id + 1), name: name, status: status }]);
            event.preventDefault();
        }
    }


    return (
        <div className="formulario-container">
            <form>
                <div class="date-container">
                    <label>Nombre: </label>
                    <input value={name} onChange={(event) => { setName(event.target.value) }} />
                </div>
                <div class="date-container">
                    <label>Status: </label>
                    <input value={status} onChange={(event) => { setStatus(event.target.value) }} />
                </div>
                {/* <div>
                    <label>Telefono: </label>
                    <input value={telefono} type="number" onChange={(event) => {setTelefono(event.target.value)}}/>
                </div>
                <div>
                    <label>Email: </label>
                    <input value={mail} type="email" onChange={(event) => {setMail(event.target.value)}}/>
                </div>
                <div>
                    <label>Fecha de Nacimiento: </label>
                    <input value={fecha} type="date" onChange={(event) => {setFecha(event.target.value)}}/>
                </div> */}
                <div id="buttons">
                    <button class='btn'>Cancelar</button>
                    <button type="submit" onClick={checkForm} class='btn'>Enviar</button>
                </div>

            </form>
        </div>
    )
}

export default Formulario;