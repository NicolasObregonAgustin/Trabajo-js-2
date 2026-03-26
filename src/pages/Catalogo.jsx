import { Link } from "react-router-dom";

function Catalogo() {
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
            ImageURL: "img/smartwatch.jpg"
        }
    ];

    return (
        <div>
            <h2>Catálogo</h2>

            {productos.map((prod) => (
                <div key={prod.id}>
                    <h3>{prod.nombre}</h3>

                    <Link to={`/producto/${prod.id}`}>
                        Ver detalle
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Catalogo;