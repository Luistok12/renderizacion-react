// Deprecated pero aun funciona, luego esta la version recomendada usando Redux Toolkit!
import { createStore } from 'redux';

const estadoInicial = [
    { id: 1, producto: "Manzana", cantidad: 8 },
    { id: 2, producto: "Papas Lays", cantidad: 7 },
    { id: 3, producto: "Notebook", cantidad: 1 },
    { id: 4, producto: "Agua Kin", cantidad: 3 },
    { id: 5, producto: "Detergente Cif", cantidad: 3 },
    { id: 6, producto: "Budin", cantidad: 2 }
];

const reducer = (estado = estadoInicial, accion) => {
    switch (accion.type) {
        case 'AgregarProducto': return [...estado, accion.nuevoProducto]

        case 'EliminarProducto': estado.splice(accion.idElegido.id - 1, 1);
            estado.map(producto => {
                console.log(producto.id, producto.producto, producto.cantidad);
            })
            return estado;
            // ESTA PERFECTO, COMPROBADO CON CONSOLE.LOG!!!

        case 'ActualizarProducto':
            const producto = estado.find((producto) => producto.id === accion.actualizarProducto.id - 1);
            if (producto) {
                producto.id = accion.actualizarProducto.id;
                producto.producto = accion.actualizarProducto.producto;
                producto.cantidad = accion.actualizarProducto.cantidad;
            }
            estado.map(producto => {
                console.log(producto.id, producto.producto, producto.cantidad);
            })
            return estado;
            // ESTA PERFECTO, COMPROBADO CON CONSOLE.LOG!!!

        case 'ObtenerProducto': return estado.splice(accion.idElegido.id - 1, 1);

        default: return estado;
    }
}

// Otra vez deprecated
const storeProductos = createStore(reducer, estadoInicial);

export default storeProductos;