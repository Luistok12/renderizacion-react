// import React from 'react';
import { useEffect, useState } from 'react';
import '../DobleAPI/ConsumiendoApi.scss';
import Formulario from '../DobleAPI/Formulario';

const ConsumiendoApi = () => {

    const [elementos, setElementos] = useState(null);   // Para el api
    const [mostrar, setMostrar] = useState(false);
    const [datos, setDatos] = useState([
        { id: 1, name: "Ea", status: "Alive" },
        { id: 2, name: "Esa", status: "Dead" },
        { id: 3, name: "Era", status: "Unkwon" }
    ]);             // Para el formulario

    

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                setElementos(data.results);
                // console.log("Elementos: ", elementos);
                // console.log("Ok:", data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // No darle bola al console log que supuestamente dice que no tiene objetos, pero si lo tiene

    return (
        <section>
            <button onClick={() => setMostrar(!mostrar)}>Mostrar datos</button>
            {(mostrar) && <table border={2}>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {elementos.map(elemento =>
                        <tr key={elemento.id}>
                            <td><img src={elemento.image} alt="Foto del personaje" /></td>
                            <td>{elemento.name}</td>
                            <td>{elemento.status}</td>
                        </tr>)}
                </tbody>
            </table>}
            {/* {usuarios.map(usuario =>
                        <tr key={usuario}>
                            <td>{usuario.image}</td>
                            <td>{usuario.name}</td>
                            <td>{usuario.status}</td>
                        </tr>)} */}
            <Formulario datos={datos} setDatos={setDatos} />
            <table border={1}>
                    {datos.map(dato =>
                        <tr key={dato.id}>
                            <td>{dato.id}</td>
                            <td>{dato.name}</td>
                            <td>{dato.status}</td>
                        </tr>
                    )}
            </table>
        </section>
    )
}

export default ConsumiendoApi;