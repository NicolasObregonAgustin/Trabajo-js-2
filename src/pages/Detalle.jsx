import { useParams } from "react-router-dom";

    const productos = [
        {
            id: 1,
            nombre: "Laptop",

        },
        {
            id: 2,
            nombre: "Celulares",
        },
        {
            id: 3,
            nombre: "Tablet",
        },
        {
            id: 4,
            nombre: "Smartwatch",
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