const carro = new Carrito ();
const carrito = document.getElementById('carritoBuscardor');
const productosHtml = document.getElementById('productos');
const productosAgregados = document.querySelector('#lista-carrito tbody')

function agregarEventos(){
    productos.addEventListener('click', (e) => { carro.comprarProducto(e); }); //cuando se hace click en el catalogo de productos, se ejecuta el meteodo de comprar producto.
    carrito.addEventListener('click', (e) => {carro.eliminarElProducto(e)});
}

agregarEventos();