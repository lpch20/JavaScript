//Metodo para agregar producto al carrito
class Carrito {
    comprarProducto(e) {
        e.preventDefault();
        if (e.target.classList.contains("compra")) {
            //si se hace click en el boton "compra" de html.......
            const productosHtml = e.target.parentElement.parentElement; //se guardan los productos.
            this.datoProducto(productosHtml);
        }
    }

    datoProducto(productosHtml) { //seleccion de datos del html.
        const detallesProducto = {
            imagen: productosHtml.querySelector("img").src,
            nombre: productosHtml.querySelector("h4").textContent,
            precio: productosHtml.querySelector(".costo span").textContent,
            id: productosHtml.querySelector("a").getAttribute("data-id"),
            cantidad: 1,
        };

        this.productoEnCarrito(detallesProducto);
    }

    productoEnCarrito(productosHtml) { // creacion de las columnas en el carrito.
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>
            <img src="${productosHtml.imagen}" width=70 height=70>
        </td>
        <td>
            ${productosHtml.nombre}
        </td>
        <td>
            ${productosHtml.precio}
        </td>
        <td>
            <a href="#" class="borrar-producto fas fa-times-circle" data-id="${productosHtml.id}"></a>
        </td>
        `;
        productosAgregados.appendChild(row);
        this.guardarProductoLocalStorage(productosHtml);
    }

    eliminarProducto(e) { // eliminar el producto de html.
        e.preventDefault();
        let producto, productoID;
        if (e.target.classList.contains("borrar-producto")) {
            e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement;
            productoID = producto.querySelector("a").getAttribute("data-id");
        }

        this.eliminarProductoLocalStorage(productoID);
    }

    vaciarCarrito(e) { // vaciar el carrito, conj un sweet alert para su confirmacion. 
        e.preventDefault();
        Swal.fire({
            title: "¿Estas seguro/a que deseas eliminar el producto?",
            icon: "question",
            iconHtml: "؟",
            confirmButtonText: "Si",
            cancelButtonText: "No",
            showCancelButton: true,
            showCloseButton: false,
        });
        while (productosAgregados.firstChild) {
            productosAgregados.removeChild(productosAgregados.firstChild);
        }
        this.eliminarLocalStorage();
        return false;

    }

    guardarProductoLocalStorage(productosHtml) { // guardar el producto en el local storage.
        let productos;
        productos = this.obtenerProductos();
        productos.push(productosHtml);
        localStorage.setItem("productos", JSON.stringify(productos));
    }

    obtenerProductos() { // obtener el producto del local storage para saber si ya se encuentra ahi y asi poder luego eliminarlo. 
        let productosLocalStorage;

        if (localStorage.getItem("productos") === null) {
            productosLocalStorage = [];
        } else {
            productosLocalStorage = JSON.parse(localStorage.getItem("productos"));
        }
        return productosLocalStorage;
    }

    eliminarProductoLocalStorage(productoID) { // eliminar el producto del localstorage.
        let productosLS;
        productosLS = this.obtenerProductos();
        productosLS.forEach((productosLocalStorage, index) => {
            if (productosLocalStorage.id === productoID) {
                productosLS.splice(index, 1);
            }
        });

        localStorage.setItem("productos", JSON.stringify(productosLS));
    }

    obternerLocalSotrage() {  // cuadno se recargue la pagina, mantener los productos en el local y asi en el carrito. 
        let productosLS;
        productosLS = this.obtenerProductos();
        productosLS.forEach(function (productosHtml) {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>
            <img src="${productosHtml.imagen}" width=70 height=70>
        </td>
        <td>
            ${productosHtml.nombre}
        </td>
        <td>
            ${productosHtml.precio}
        </td>
        <td>
            <a href="#" class="borrar-producto fas fa-times-circle" data-id="${productosHtml.id}"></a>
        </td>
        `;
            productosAgregados.appendChild(row);
        });
    }

    eliminarLocalStorage(){ 
        localStorage.clear();
    }
}

fetch("https://lpch20.github.io/JavaScript/public/data/elements.json") // Se utiliza JSON para la subida de los productos a la venta 
    .then((respueta) => {
        return respueta.json();
    })
    .then((datos) => {
        datos.forEach(function () {
            console.log(elements.imagen);
        });
    });
