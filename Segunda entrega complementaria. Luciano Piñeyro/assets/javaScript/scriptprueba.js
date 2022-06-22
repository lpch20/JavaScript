const productos = [
  {
    id: 1,
    nombre: "Remera Ripcurl F",
    precio: 2500,
    talle: "L",
    id: 2,
    nombre: "Campera Vans",
    precio: 2500,
    talle: "L",
    id: 3,
    nombre: "Remera Vans",
    precio: 2500,
    talle: "L",
    id: 4,
    nombre: "Pantalon Levis 3500",
    precio: 2500,
    talle: "L",
    id: 5,
    nombre: "Pantalon HyM",
    precio: 2500,
    talle: "L",
    id: 6,
    nombre: "Canguro Levis",
    precio: 2500,
    talle: "L",
  },
];


  let contenedor = document.createElement("div");

  contenedor.innerHTML = '<h3>{productos.id}</h3>';

  document.body.appendChild(contenedor); 

