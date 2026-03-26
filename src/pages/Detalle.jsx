import { useParams } from "react-router-dom";

    const productos = [
        {
            id: 1,
            nombre: "Laptop",
            precio: 1200,

        },
        {
            id: 2,
            nombre: "Celulares",
            precio: 1000,
        },
        {
            id: 3,
            nombre: "Tablet",
            precio: 800,
        },
        {
            id: 4,
            nombre: "Smartwatch",
            precio: 400,
        }
    ];

function Detalle() {
    const { id } = useParams();

    const producto = productos.find(
        (p) => p.id === Number(id)
    );

    if (!producto) return <h2>No encontrado</h2>;

    return (
        <div>
            <h2>{producto.nombre}</h2>
        </div>
    );
}

export default Detalle;