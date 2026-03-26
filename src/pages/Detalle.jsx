import { useParams } from "react-router-dom";

    const productos = [
        {
            id: 1,
            nombre: "Laptop",
            precio: 1200,
            ImageURL: "img/laptop.jpg"
        },
        {
            id: 2,
            nombre: "Celulares",
            precio: 1000,
            ImageURL: "img/celulares.jpg"
        },
        {
            id: 3,
            nombre: "Tablet",
            precio: 800,
            ImageURL: "img/tablet.jpg"
        },
        {
            id: 4,
            nombre: "Smartwatch",
            precio: 400,
            ImageURL: "/img/smartwatch.jpg"
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