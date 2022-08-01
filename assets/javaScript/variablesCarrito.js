const carro = new Carrito ();
const carrito = document.getElementById('carritoBuscardor');
const productosHtml = document.getElementById('productos');
const productosAgregados = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

function agregarEventos(){
    productos.addEventListener('click', (e) => {carro.comprarProducto(e);}); //cuando se hace click en el catalogo de productos, se ejecuta el meteodo de comprar producto.
    vaciarCarritoBtn.addEventListener('click', (e)=> {carro.vaciarCarrito(e);});
    carrito.addEventListener('click', (e)=> {carro.eliminarProducto(e);});
    document.addEventListener('DOMContentLoaded', carro.obternerLocalSotrage());
}

agregarEventos();