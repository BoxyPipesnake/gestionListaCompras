// Problema: Gestión de Lista de Compras
// Imagina que eres parte del equipo encargado de crear una lista de compras utilizando un arreglo. 
// Los usuarios deben poder añadir productos a la lista, eliminar productos y ver la lista completa de compras.


const listaDeCompras = [];

const agregarProducto = (producto) => {
    if(listaDeCompras.includes(producto)){
        console.log(`Ya cuentas con el producto '${producto}' en tu lista.`);
    } else {
        listaDeCompras.push(producto);
    }
}

const eliminarProducto = (producto) => {
    const index = listaDeCompras.indexOf(producto);
    if (index > -1) {
        listaDeCompras.splice(index, 1);
    } else {
        console.log(`El producto: ${producto} no se encuentra en la lista de compras.`)
    }
}

const mostrarLista = () => {
    listaDeCompras.forEach((producto, index) => {
        console.log(`${index + 1} - ${producto}`);
    });
};


agregarProducto("Tele");
agregarProducto("Xbox");
agregarProducto("Tele");
agregarProducto("PlayStation");
agregarProducto("Nintendo Switch");


mostrarLista();