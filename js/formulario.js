    const form = document.querySelector("form");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        Swal.fire({
            title: "Compra realizada",
            text: "Tu compra fue enviada correctamente",
            icon: "success",
            confirmButtonText: "Aceptar"
        });
    });


    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const nombre = document.querySelector("#nombre").value;
        const email = document.querySelector("#email").value;

        const texto = 
        "COMPROBANTE DE COMPRA\n\n" +
        "Nombre: " + nombre + "\n" +
        "Email: " + email + "\n\n" +
        "Gracias por tu compra.";

        const archivo = new Blob([texto], { type: "text/plain" });
        const link = document.createElement("a");

        link.href = URL.createObjectURL(archivo);
        link.download = "comprobante.txt";
        link.click();
    });

