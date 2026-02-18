async function cargarProductos() {
    try {
        const response = await fetch("main.json");
        const data = await response.json();

        imprimirProductosEnHTML(data);

    } catch (error) {
        document.getElementById("card-contenedor").innerHTML =
            "<p>Error al cargar los productos</p>";
    }
    finally {
        const mensaje = document.createElement("p");
        mensaje.textContent = "Carga finalizada";
        document.body.appendChild(mensaje);
    }
}

function imprimirProductosEnHTML(productos) {
    const contenedor = document.getElementById("card-contenedor");

    productos.forEach(producto => {
        const card = document.createElement("div");

        card.innerHTML = `
            <img src="${producto.ImageURL}" width="200">
            <h2>${producto.nombre}</h2>
            <p>$${producto.precio}</p>
            <a href="pages/formulario.html" target="_blank">
            <button>Comprar</button>
        `;

        contenedor.appendChild(card);
    });
}

function mostrarFormulario(producto) {
    const contenedor = document.getElementById("card-contenedor");

    const formulario = document.createElement("div");

    formulario.innerHTML = `
        <h3>Comprar ${producto.nombre}</h3>
        <form>
            <input type="text" placeholder="Tu nombre" required>
            <input type="email" placeholder="Tu email" required>
            <button type="submit">Confirmar</button>
        </form>
    `;

    contenedor.appendChild(formulario);
}
cargarProductos();

