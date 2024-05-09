// Variables
const formulario = document.querySelector('#formulario');
const listaTareas = document.querySelector('#lista-tareas');
let tweets = [];

// EvemtListeners
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTarea);

    document.addEventListener('DOMContentLoaded', () => {
        tareas = JSON.parse( localStorage.getItem('tareas')) || [];

        console.log(tareas)

        crearHTML()
    })
}


// Funciones

function agregarTarea(e) {
    e.preventDefault();

    // Text Area Donde se escribe
    const tarea = document.querySelector('#tarea').value;

    // Validacion
    if(tarea === '') {
        mostrarError('No puede ir vacio >:(')

        return;
    }

    const tareaObj = {
        id: Date.now(),
        tarea
    }

    // Añadir array de tweets
    tareas = [...tareas, tareaObj];
    console.log(tareas);
    
    // Agregar el html
    crearHTML();
    // Reiniciar el formulario
    formulario.reset();
}

// Mostrar mwnsaje
function mostrarError(eror) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = eror;
    mensajeError.classList.add('error');

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Elimina la alerta despues de 5seg
    setTimeout(() => {
        mensajeError.remove()
    }, 5000);
}

// Muestra un listado de los tweets

function crearHTML(){ 

    LimpiarHTML();

    if( tareas.length > 0) {
        tareas.forEach( tarea => {
            // Crear un boton
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tarea');
            btnEliminar.innerText = 'X';

            // Eliminar del Dom
            btnEliminar.onclick = () => {
                borrarTarea(tarea.id);
            }

            // Crear el HTML
            const li = document.createElement('li');
            
            // Añadir el texto
            li.innerText = tarea.tarea;

            // Asignar el boton
            li.appendChild(btnEliminar)

            // Insertar en el html
            listaTareas.appendChild(li);
        })
    }

    sincronizarStorage();
}

// Agrega los tareas actuales a localstroage
function sincronizarStorage() {
    localStorage.setItem('tareas', JSON.stringify(tareas))
}

// Limpiar el html
function LimpiarHTML() {
    while( listaTareas.firstChild){
        listaTareas.removeChild(listaTareas.firstChild);
    }
}

function borrarTarea(id) {
    tareas = tareas.filter( tarea => tarea.id !== id);

    crearHTML();
}