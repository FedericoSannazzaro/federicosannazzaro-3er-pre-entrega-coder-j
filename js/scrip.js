

// CONSIDERACIONES PARA EL PROYECTO FINAL

// ***************** AGREGAR AJAX, FETCH Y LIBRERIAS PARA CUMPLIR CON LAS RUBRICAS. ***************** 

// LUEGO TENER EN CUENTA LO SIGUIENTE DETALLADO : 



// * AGREGAR LOGIN DE USUARIO, BIENVENIDO/A
// * AGREGAR LAS LIBRERIAS VISTAS EN CODER, PARA MOSTRAR EL ALERT DE QUE AGREGAMOS PRODUCTO Y QUE MUESTRE LOS QUE TIENE ACTUALMENTE
// * TENER EN CUENTA LAS PROXIMAS CLASES PARA AGREGAR LOS CONCEPTOS AL PROYECTO
// * CREAR VARIAS CARDS, PARA QUE USEMOS UN BUSCADOR DE PRODUCTOS MEDIANTE LOS METODOS DE ARRAYS Y USAR OTROS METODOS PARA ORDENARLOS DE MAYOR A MENOR
// * CAMBIAR LA TIENDA DE ROPA POR ALGO QUE TENGA MAS PRODUCTOS, ELECTRODOMESTICOS POR EJEMPLO O AGREGAR MAS PRODUCTIS CON TALLE, COLOR, ETC.
// * TENER EN CUENTA LAS VALIDACIONES
// * VER LA CLASE 11, ULTIMA HORA EL EJEMPLO DE RECORRER CARRO Y LAS PROMESAS PARA AGREGAR AL PROYECTO FINAL


const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const productosCarrito = document.getElementById("productosCarrito");
const cantidadCarrito = document.getElementById("cantidadCarrito");


// Hardcodeo de productos en un Array
const productos = [
    {
        id: 3,
        nombre: "Pantalon",
        precio: 1500,
        img: "./img/pantalon.jpg",
        cantidad: 1
    },

    {
        id: 4,
        nombre: "Remera",
        precio: 900,
        img: "./img/remera.jpg",
        cantidad: 1
    },
    {
        id: 5,
        nombre: "Camisa",
        precio: 1000,
        img: "./img/camisa.png",
        cantidad: 1
    },

    {
        id: 6,
        nombre: "Short",
        precio: 1200,
        img: "./img/short.png",
        cantidad: 1
    },
    {
        id: 7,
        nombre: "Pantalon 2",
        precio: 1550,
        img: "./img/pantalon.jpg",
        cantidad: 1
    },

    {
        id: 8,
        nombre: "Remera 2",
        precio: 950,
        img: "./img/remera.jpg",
        cantidad: 1
    },

    {
        id: 9,
        nombre: "Camisa 2",
        precio: 1050,
        img: "./img/camisa.png",
        cantidad: 1
    },

    {
        id: 10,
        nombre: "Short 2",
        precio: 1250,
        img: "./img/short.png",
        cantidad: 1
    },

    {
        id: 11,
        nombre: "Pantalon 3",
        precio: 1600,
        img: "./img/pantalon.jpg",
        cantidad: 1
    },

    {
        id: 12,
        nombre: "Remera 3",
        precio: 1000,
        img: "./img/remera.jpg",
        cantidad: 1
    },
    {
        id: 13,
        nombre: "Camisa 3",
        precio: 1100,
        img: "./img/camisa.png",
        cantidad: 1
    },

    {
        id: 14,
        nombre: "Short 3",
        precio: 1300,
        img: "./img/short.png",
        cantidad: 1
    },
    {
        id: 15,
        nombre: "Pantalon 4",
        precio: 1700,
        img: "./img/pantalon.jpg",
        cantidad: 1
    },

    {
        id: 16,
        nombre: "Remera 4",
        precio: 1200,
        img: "./img/remera.jpg",
        cantidad: 1
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



        // aplicamos metodo de arrays para obtener un booleano y evaluar si esta repetido el producto
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === producto.id);

        // condicional para pushear con la cantidad sumada de los productos iguales
        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === producto.id) {
                    prod.cantidad++
                }
            })
        }
        else {
            carrito.push({
                id: producto.id,
                img: producto.img,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: producto.cantidad,
            })

        }

        grabarLocal();
        carritoCounter();

        //Agregue el toastify para que notifique cada vez que se agregan productos al carrito
        Toastify({

            text: "Se agrego al Carrito",

            duration: 1000,
         
            style: {
                height: 80,
                width: "25vw",
                fontSize: "15px",
                fontFamily: "Calibri",
                color: "black",
                background: "#rgba(66, 55, 53, 255)",
            },

        }).showToast();

    })

});

// funcion para guardar en el localStorage
const grabarLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

carritoCounter();

let contenedor_clima = document.getElementById("clima");

fetch("https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&units=metric&appid=acadc92751e50ee2eef2fd8cda3417af")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        contenedor_clima.innerHTML = `<p> Ciudad: ${data.name}</p>
                                      <p> Temp: ${data.main.temp}</p>`;
    })








