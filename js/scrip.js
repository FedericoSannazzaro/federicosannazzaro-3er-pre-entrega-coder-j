const shopContent = document.getElementById("shopContent");


// Hardcodeo de productos en un Array
const productos = [
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

});