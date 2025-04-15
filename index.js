// Problema: Gestión de Lista de Compras
// Imagina que eres parte del equipo encargado de crear una lista de compras utilizando un arreglo. 
// Los usuarios deben poder añadir productos a la lista, eliminar productos y ver la lista completa de compras.

// Instrucciones para resolver el problema:
// Implementa una función mostrarLista() que imprima todos los productos de la lista.
// Asegúrate de que no haya productos duplicados en la lista.

// Puedes usar arrow functions para la funcionalidad 
// solicitada así como otras características del estandar ECMAScript.

const listaDeCompras = [];

const agregarProducto = (producto) => {
    listaDeCompras.push(producto);
}

const eliminarProducto = (producto) => {
    const index = listaDeCompras.indexOf(producto);
    if (index > -1) {
        listaDeCompras.splice(index, 1);
    } else {
        console.log(`El producto: ${producto} no se encuentra en la lista de compras.`)
    }
}

const mostrarLista = (listaDeCompras) => {
    listaDeCompras.forEach((producto, index) => {
        console.log(`${index + 1} - ${producto}`);
    });
};


agregarProducto("Tele");
agregarProducto("Xbox");
agregarProducto("PlayStation");
agregarProducto("Nintendo Switch");


eliminarProducto("Tele");

mostrarLista(listaDeCompras);