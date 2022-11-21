const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");


// Hardcodeo de productos en un Array
const productos = [
    {
        id: 3,
        nombre: "Pantalon",
        precio: 1500,
        img: "https://www.savillerow.cl/image/cache/catalog/imagessr/50010438_khaki_1-1200x1200.jpg"
    },

    {
        id: 4,
        nombre: "Remera",
        precio: 900,
        img: "https://d2r9epyceweg5n.cloudfront.net/stores/001/205/102/products/remera-lisa-vi-rj1-122009f0e7fe0bfa3715906956218434-480-0.jpg"
    },
    {
        id: 1,
        nombre: "Camisa",
        precio: 1000,
        img: "https://media.revistagq.com/photos/60950644235a5910299c9327/master/w_1600%2Cc_limit/hbeu50451093_100_100.jpg"
    },

    {
        id: 2,
        nombre: "Short",
        precio: 1200,
        img: "https://almacenessi.vteximg.com.br/arquivos/ids/223162-1200-1300/ropa-nina-shortcorto-256619-7001-azulindigo_1.jpg?v=637534925910270000"
    },

]


let carrito = [];

// Recorrido de Array, para generar la CARDS de productos en el DOM

productos.forEach((producto) => {

    // creamos un DIV en el HTML para agregar los productos
    let content = document.createElement("div");
    content.className = "card"; // le asignamos una clase para darle estilos.
    content.innerHTML = `<img src="${producto.img}">
        <h3>${producto.nombre}</h3>
        <p class="price">$ ${producto.precio}</p> 
    `;

    // Agregamos la CARDS al shopContent
    shopContent.append(content);

    // Creamos un boton de comprar 
    let comprar = document.createElement("button");
    comprar.innerText = "COMPRAR";
    comprar.className = "comprar";// le asignamos una clase para darle estilos.

    // lo agregamos al DOM
    content.append(comprar);


    //le damos funcionalidad al boton "comprar"
    comprar.addEventListener("click", () => {
        carrito.push({
            id: producto.id,
            img: producto.img,
            nombre: producto.nombre,
            precio: producto.precio,
        })
    })

});

// le damos funcionalidad al "boton" de carrito
verCarrito.addEventListener("click", () => {

    //creamos un contenedor con un Header, un body y un footer

    //header del MODAL que contiene un titulo y una "X" para cerrarlo
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class ="modal-header-tittle"> Tu compra! </h1>  
    `;

    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "❌";
    modalButton.className = "modal-header-button";


    // con este evento cerramos el DISPLAY
    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalButton);

    // creamos el Body del modal, pero debemos recorrer nuevamente el array productos para agregarlo

    carrito.forEach((productos) => {

        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-Content";
        carritoContent.innerHTML = `
        <img src=${productos.img}">
        <h3> ${productos.nombre}</h3>
        <p>$ ${productos.precio}</p>        
        `
        modalContainer.append(carritoContent);

    })
    // creamos el footer y la variale total que va a sumar la compra.

    const total = carrito.reduce((acc, el) => acc + el.precio, 0)

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-content";
    totalCompra.innerHTML = `Total a pagar: $ ${total}`;
    modalContainer.append(totalCompra);
    console.log(totalCompra);

})


