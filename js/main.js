// Constructor para los elementos del menú
function Platillo(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

// Crear los elementos del menú
let hamburguesa = new Platillo("Hamburguesa", 5);
let papas = new Platillo("Papas", 3);
let combo = new Platillo("Combo", 8);

// Agregar los elementos del menú al array 'menu'
let menu = [hamburguesa, papas, combo];

// Función para calcular el total del pedido
function calcularTotal(pedido, cantidad) {
    let total = pedido * cantidad;
    console.log("El total es: $" + total);
}

// Array para almacenar las órdenes de los clientes
let ordenes = [];

// Ciclo para permitir múltiples pedidos
let continuar = true;
while (continuar) {
    const pedido = parseInt(prompt("Ingrese el número de lo que quiere: 1-hamburguesa, 2-papas, 3-combo"));

    switch (pedido) {
        case 1:
            let cantidadHamburguesa = parseInt(prompt("¿Cuántas hamburguesas quieres?"));
            calcularTotal(hamburguesa.precio, cantidadHamburguesa);
            ordenes.push({ producto: hamburguesa.nombre, cantidad: cantidadHamburguesa });
            break;
        case 2:
            let cantidadPapas = parseInt(prompt("¿Cuántas papas quieres?"));
            calcularTotal(papas.precio, cantidadPapas);
            ordenes.push({ producto: papas.nombre, cantidad: cantidadPapas });
            break;
        case 3:
            let cantidadCombo = parseInt(prompt("¿Cuántos combos quieres?"));
            calcularTotal(combo.precio, cantidadCombo);
            ordenes.push({ producto: combo.nombre, cantidad: cantidadCombo });
            break;
        default:
            console.log("Opción no válida");
    }

    let respuesta = prompt("¿Desea hacer otro pedido? (Sí/No)").toLowerCase();
    if (respuesta === "no") {
        continuar = false;
    }
}

// Mostrar las órdenes de los clientes
console.log("Órdenes de los clientes:");
ordenes.forEach((orden, index) => {
    console.log(`Orden ${index + 1}: ${orden.cantidad} ${orden.producto}`);
});

console.log("¡Gracias por su visita!");
