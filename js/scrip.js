const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const productosCarrito = document.getElementById("productosCarrito");


// Hardcodeo de productos en un Array
const productos = [
    {
        id: 3,
        nombre: "Pantalon",
        precio: 1500,
        img: "./img/pantalon.jpg"
    },

    {
        id: 4,
        nombre: "Remera",
        precio: 900,
        img: "./img/remera.jpg"
    },
    {
        id: 1,
        nombre: "Camisa",
        precio: 1000,
        img: "./img/camisa.png"
    },

    {
        id: 2,
        nombre: "Short",
        precio: 1200,
        img: "./img/short.png"
    },

]

//  variable para detectar si tenemos algo en el storage o lo iniciamos vacio
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Recorrido de Array, para generar la CARDS de productos en el DOM

productos.forEach((producto) => {

    // creamos un DIV en el HTML para agregar los productos
    let content = document.createElement("div");
    content.className = "card"; // le asignamos una clase para darle estilos.
    content.innerHTML = `
        <img src= "${producto.img}">
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
        grabarLocal();

    })

});

// le damos funcionalidad al "boton" de carrito
verCarrito.addEventListener("click", () => {
    
    // productosCarrito.innerText =`Tienes ${productos.length()} productos`;
    // productosCarrito.append();
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
        <img src="${productos.img}">
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

// localStorage

const grabarLocal = () =>{
    localStorage.setItem("carrito", JSON.stringify(carrito));

}






