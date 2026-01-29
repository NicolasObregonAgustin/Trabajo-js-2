const productos = [
    {
        nombre: "Laptop",
        precio: 1200,
        ImageURL: "img/laptop.jpg"
    },
    {
        nombre: "Celulares",
        precio: 1000,
        ImageURL: "img/celulares.jpg"
    },
    {
        nombre: "Tablet",
        precio: 800,
        ImageURL: "img/tablet.jpg"
    },
    {
        nombre: "Smartwatch",
        precio: 400,
        ImageURL: "img/smartwatch.jpg" 
    },
];

function imprimirProductosEnHTML(producto) {
    const contenedor = document.getElementById("card-contenedor");
    
    for (const producto of productos) {
        const card = document.createElement("div");

    card.innerHTML = `
        <img src="${producto.ImageURL}">
        <h2>${producto.nombre}</h2>
        <button id="${producto.nombre}${producto.id}">Comprar</button>
    `
    contenedor.appendChild(card)

    const boton = card.querySelector(`#${producto.nombre}${producto.id}`)
    boton.addEventListener("click", () => 
        agregarAlCarrito(producto) )
    }
}
    
imprimirProductosEnHTML(productos)




