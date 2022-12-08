
// funcion para crear el modal el cual estara compuesto de tres partes.

const pintarCarrito = () => {
    //creamos un contenedor con un Header, un body y un footer

    //header del MODAL que contiene un titulo y una "X" para cerrarlo
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class ="modal-header-tittle"> Tu compra! </h1>  
    `;

    // agregamos el modalHeader
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "❌";
    modalButton.className = "modal-header-button";


    // con este evento cerramos el DISPLAY
    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalButton);

    // creamos el Body del modal, recorriento el array de productos para agregarlo

    carrito.forEach((productos) => {

        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <img src="${productos.img}">
        <h3> ${productos.nombre}</h3>
        <p>$ ${productos.precio}</p>
        <span class ="restar">➖</span>   
        <p>Cantidad: ${productos.cantidad}</p>  
        <span class ="sumar">➕</span>
        <p>Subtotal: $${productos.cantidad * productos.precio}</p>   
        `

        // agregamos el contenido del carrito recorrido al modal
        modalContainer.append(carritoContent);

        // capturamos los botones de restar, sumar y borrar
        let restar = carritoContent.querySelector(".restar");
        let sumar = carritoContent.querySelector(".sumar");
        let eliminar = document.createElement('span');

        // agregamos los eventos a los botones
        restar.addEventListener("click", () => {
            if (productos.cantidad !== 1) {
                productos.cantidad--;
            }
            pintarCarrito();
            grabarLocal()
        })

        sumar.addEventListener("click", () => {
            productos.cantidad++;
            pintarCarrito();
            grabarLocal();
           

        })

        // Borrado de producto
        eliminar.innerText = '✖';
        eliminar.className = 'delete-product';
        carritoContent.append(eliminar);

        eliminar.addEventListener('click', eliminarProducto);



    })

    // creamos el footer y la variale total que va a sumar la compra.
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-content";
    totalCompra.innerHTML = `Total a pagar: $ ${total}`;
    modalContainer.append(totalCompra);
    console.log(totalCompra);
}
// funcionalidad del boton del carrito, mediante la funcion pintarCarrito()
verCarrito.addEventListener("click", pintarCarrito);

// funcion para elimiar producto del carrito
const eliminarProducto = () => {
    const buscarId = carrito.find((element) => element.id)
    carrito = carrito.filter((carritoId) => {
        return carritoId !== buscarId;
    })
    carritoCounter()
    pintarCarrito()
    grabarLocal()
}

// Funcion : contador de productos del carrito para mostrar
const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
     const carritoLength = carrito.length;
    
    //usamos el localStorage para tener en cuenta las cantidades del carrito mediante el metodo length del array
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
}


