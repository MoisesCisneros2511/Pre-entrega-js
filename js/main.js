
function calcularTotal(pedido, cantidad) {
    let total = pedido * cantidad;
    console.log("El total es: $" + total);
}

// Ciclo para permitir múltiples pedidos
let continuar = true;
while (continuar) {
    const pedido = parseInt(prompt("Ingrese el número de lo que quiere: 1-hamburguesa, 2-papas, 3-hamburguesa-papas"));

    switch (pedido) {
        case 1:
            let cantidadHamburguesa = parseInt(prompt("¿Cuántas hamburguesas quieres?"));
            calcularTotal(5, cantidadHamburguesa);
            break;
        case 2:
            let cantidadPapas = parseInt(prompt("¿Cuántas papas quieres?"));
            calcularTotal(3, cantidadPapas);
            break;
        case 3:
            let cantidadCombo = parseInt(prompt("¿Cuántos combos quieres?"));
            calcularTotal(8, cantidadCombo);
            break;
        default:
            console.log("Opción no válida");
    }

    let respuesta = prompt("¿Desea hacer otro pedido? (Sí/No)").toLowerCase();
    if (respuesta !== "sí") {
        continuar = false;
    }
}

console.log("¡Gracias por su visita!");
