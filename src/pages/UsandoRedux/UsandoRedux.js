import { useState } from 'react';
import '../UsandoRedux/UsandoRedux.scss';
import { useSelector, useDispatch } from 'react-redux';

const UsandoRedux = () => {
    // UseSelector para seleccionar el estado y asignarlo a una variable para asi poder mandarlo como prop (Usado en el componente UsandoRedux).
    const productos = useSelector(estado => estado);
    // UseDispatch para seleccionar el reducer y poder usar sus acciones(Usado en el componente ManipularListaProductos en botones).
    const dispatcher = useDispatch();

    const ListaProductos = ({ lista }) => {
        console.log("Productos:", productos);
        return (
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map(producto =>
                        <tr key={producto.id}>
                            <td>{producto.id}</td>
                            <td>{producto.producto}</td>
                            <td>{producto.cantidad}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    const ManipularListaProductos = ({ lista }) => {
        const [producto, setProducto] = useState("");
        const [cantidad, setCantidad] = useState("");
        const [id, setId] = useState(lista.length + 1);

        return (
            <form>
                <label>Usar id: <input type="number" value={id} onChange={(event) => setId(event.target.value)} placeholder='Ingrese nuevo Id' /></label>
                <label>Producto: <input value={producto} onChange={(event) => setProducto(event.target.value)} placeholder='Ingrese producto' /></label>
                <label>Cantidad: <input value={cantidad} onChange={(event) => setCantidad(event.target.value)} placeholder='Ingrese cantidad' /></label>
                <div id="buttons">
                    <button onClick={() => dispatcher({ type: "AgregarProducto", nuevoProducto: { id, producto, cantidad } })}>Agregar producto</button>
                    <button onClick={() => dispatcher({ type: "EliminarProducto", idElegido: { id } })}>Eliminar producto</button>
                    <button onClick={() => dispatcher({ type: "ActualizarProducto", actualizarProducto: { id, producto, cantidad } })}>Actualizar producto</button>
                    <button onClick={() => dispatcher({ type: "ObtenerProducto", idElegido:{ id } })}>Obtener producto</button>
                </div>
            </form>
        )
    }

    return (
        // Asi se ve este componente bien refactorizado, realizo los componentes arriba en este caso, normalmente iria todo
        // dentro de una carpeta y los componentes de arriba implementados en distintos archivos.
        <div className='usando-redux'>
            <div id="content-container">
                <ListaProductos lista={productos} />
            </div>
            <div id="form-for-table">
                <ManipularListaProductos lista={productos} />
            </div>
        </div>
    )
}

export default UsandoRedux;