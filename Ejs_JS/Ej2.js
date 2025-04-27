// Crear funciones para agregar productos al carrito, eliminar por ID, y calcular total.

const productos = [
    { id: 1, nombre: "Laptop", precio: 1200 },
    { id: 2, nombre: "Mouse", precio: 25 },
    { id: 3, nombre: "Teclado", precio: 75 },
];

let carrito = [];

function agregarAlCarrito(idProducto) {
    try{
        let producto = productos.find(producto => producto.id === idProducto);
        if(producto === undefined){
            throw `No se ha encontrado un producto con el id ${idProducto}`;
        }
        carrito.push(producto);
    } catch(e){
        console.log(e);   
    }
}

function eliminarDelCarrito(idProducto) {
    try{
        let productoIndex = productos.findIndex(producto => producto.id === idProducto);
        if(productoIndex === -1) {
            throw "No se ha encontrado un producto con ese id al intentar eliminar";
        }
        carrito.splice(productoIndex , 1);
    } catch(e){
        console.log(e);   
    }
}

function calcularTotal() {
    let result = 0;

    carrito.forEach(producto => {
        result += producto.precio;
    })

    return result;
}

agregarAlCarrito(1);
agregarAlCarrito(2);
agregarAlCarrito(9);
eliminarDelCarrito(1);
console.log("Carrito: ", carrito);
console.log("Total: $" + calcularTotal());