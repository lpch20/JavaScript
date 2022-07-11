//Metodo para agregar producto al carrito
class Carrito {
    comprarProducto(e) {
        e.preventDefault();
        if (e.target.classList.contains("compra")) {
            //si se hace click en el boton "compra" de html.......
            const producto = e.target.parentElement.parentElement; //se guardan los productos.
            this.datoProducto(producto);
        }
    }

    datoProducto(producto) {
        const detallesProducto = {
            imagen: producto.querySelector("img").src,
            nombre: producto.querySelector("h4").textContent,
            precio: producto.querySelector(".costo span").textContent,
            id: producto.querySelector("a").getAttribute("data-id"),
            cantidad: 1,
        };

        this.productoEnCarrito(detallesProducto);
    }

    productoEnCarrito(producto) {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>
            <img src="${producto.imagen}" width=100>
        </td>
        <td>
            ${producto.nombre}
        </td>
        <td>
            ${producto.precio}
        </td>
        <td>
            <a href="#" class="borrar-producto fas fa-times-circle" data-id=" ${producto.id}"></a>
        </td>
        `;
        productosAgregados.appendChild(row);
        this.guardarProductoLocalStorage(producto);
    }

    vaciarCarrito(e) {
        e.preventDefault();
        Swal.fire({
            title: '¿Estas seguro/a que deseas eliminar el producto?',
            icon: 'question',
            iconHtml: '؟',
            confirmButtonText: 'Si',
            cancelButtonText: 'No',
            showCancelButton: true,
            showCloseButton: false, 
        })
        while (productosAgregados.firstChild) {
            productosAgregados.removeChild(productosAgregados.firstChild);
        }
        return false;
    }

    guardarProductoLocalStorage(prdocuto) {
        let productos;
        productos = this.obtenerProductos();
        productos.push("producto");
        localStorage.setItem("productos", JSON.stringify(productos));
    }

    obtenerProductos() {
        let productosLocalStorage;

        if (localStorage.getItem("productos") === null) {
            productosLocalStorage = [];
        } else {
            productosLocalStorage = JSON.parse(localStorage.getItem("productos"));
        }
        return productosLocalStorage;
    }
}
