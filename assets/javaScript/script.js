/** SEGUNDA ENTREGA, AGREGO DE ARRAYS.
 * El siguiente simulador es en base a una tienda de ropas.
 * Se presenta primeramente el stock disponible.
 * Luego a travers de prompt, se le consulta al usuario que desea comprar.
 * Luego se le vuelve a consultar si desea agregar algo mas a su compra.
 * Se hace la suma de lo que el usuario lleva y se le suma el IVA.
 * Por ultimo se le consulta si desea realiza rla compra, si asi lo desea coloca "si" para finalmente efectuarla. De lo contrario, le damos las graciuas por visitarnos en el sitio.
 */

alert(
    "BIENVENIDOS A SALIPSER!"
);
class Stock {
  constructor(nombre, precio, talle) {
    this.nombre = nombre;
    this.precio = precio;
    this.talle = talle;
  }

  suCompra() {
    alert(
      "BIENVENIDOS A SALIPSER!"
    );
  }
}
const productos = [];
productos.push(new Stock("Remera Ripcurl F", 2500, "L"));
productos.push(new Stock("Remera Vans", 1500, "M"));
productos.push(new Stock("Pantalon Levis 3500", 4000, "34"));
productos.push(new Stock("Pantalon HyM", 2500, "36"));
productos.push(new Stock("Campera Vans", 4000, "XL"));
productos.push(new Stock("Canguro Levis", 3000, "XL"));



const container = document.getElementById("producto1");
const creacion = document.createElement("div");

creacion.innerHTML = productos[0].nombre;

container.append(creacion);

const container2 = document.getElementById("producto2");
const creacion2 = document.createElement("div");

creacion2.innerHTML = productos[1].nombre;

container2.append(creacion2);

const container3 = document.getElementById("producto3");
const creacion3 = document.createElement("div");

creacion3.innerHTML = productos[2].nombre;

container3.append(creacion3);

const container4 = document.getElementById("producto4");
const creacion4 = document.createElement("div");

creacion4.innerHTML = productos[3].nombre;

container4.append(creacion4);

const container5 = document.getElementById("producto5");
const creacion5 = document.createElement("div");

creacion5.innerHTML = productos[4].nombre;

container5.append(creacion5);

const container6 = document.getElementById("producto6");
const creacion6 = document.createElement("div");

creacion6.innerHTML = productos[5].nombre;

container6.append(creacion6);

// productos.forEach((producto) =>{
//     const li = document.createElement ("li");
//     li.textContent = productos[0].nombre;
//     ul.appendChild(li);
// });
// producto1.appendChild(ul);

// for (const stock of productos) {

//   stock.suCompra();

// }

// productos.forEach(function (productos, index) {
//   console.log(`${index} => ${productos}`);
// });

// var resultado = resultado;
// var resultado2 = resultado2;

// function compraFinal() {
//   const compra = prompt("Ingrese producto que va a llevar");

//   switch (compra) {
//     case "Remera Ripcurl":
//       resultado = productos[0].precio * 1.22;
//       alert("El precio es de " + "$ " + resultado + " mas IVA incluido.");
//       break;
//     case "Remera Vans":
//       resultado = productos[1].precio * 1.22;
//       alert("El precio es de " + "$ " + resultado + " mas IVA incluido.");
//       break;
//     case "Pantalon Levis":
//       resultado = productos[2].precio * 1.22;
//       alert("El precio es de " + "$ " + resultado + " mas IVA incluido.");
//       break;
//     case "Pantalon HyM":
//       resultado = productos[3].precio * 1.22;
//       alert("El precio es de " + "$ " + resultado + " mas IVA incluido.");
//       break;
//     case "Campera Vans":
//       resultado = productos[4].precio * 1.22;
//       alert("El precio es de " + "$ " + resultado + " mas IVA incluido.");
//       break;
//     case "Canguro Levis":
//       resultado = productos[5].precio * 1.22;
//       alert("El precio es de " + "$ " + resultado + " mas IVA incluido.");
//       break;
//     default:
//       nuevamente = prompt(
//         "No encontramos el producto que quiere, intente nuevamente"
//       );

//   }

//   const otroProducto = prompt("¿Desea agregar otro producto a su compra?");

//   switch (otroProducto) {
//     case "Remera Ripcurl":
//       resultado2 = productos[0].precio * 1.22;
//       alert("El precio es de " + "$ " + resultado + " mas IVA incluido.");
//       break;
//     case "Remera Vans":
//       resultado2 = productos[1].precio * 1.22;
//       alert("El precio es de " + "$ " + resultado + " mas IVA incluido.");
//       break;
//     case "Pantalon Levis":
//       resultado2 = productos[2].precio * 1.22;
//       alert("El precio es de " + "$ " + resultado + " mas IVA incluido.");
//       break;
//     case "Pantalon HyM":
//       resultado2 = productos[3].precio * 1.22;
//       alert("El precio es de " + "$ " + resultado + " mas IVA incluido.");
//       break;
//     case "Campera vans":
//       resultado2 = productos[4].precio * 1.22;
//       alert("El precio es de " + "$ " + resultado + " mas IVA incluido.");
//       break;
//     case "Canguro Levis":
//       resultado2 = productos[5].precio * 1.22;
//       alert("El precio es de " + "$ " + resultado + " mas IVA incluido.");
//       break;
//     default:
//       nuevamente = prompt(
//         "No encontramos el producto que quiere, intente nuevamente"
//       );
//       break;
//   }

//   const precioFinal = prompt(
//     "El precio final es de " +
//       " $ " +
//        (resultado + resultado2) +
//       "¿Desea realizar la compra?"
//   );

//   let comprar = "si";
//   if (precioFinal === comprar) {
//     alert("Gracias por elejirnos, disfrute de su compra!");
//   } else {
//     alert("Gracias, en otra oportunidad sera!");
//   }
// }

// compraFinal();
