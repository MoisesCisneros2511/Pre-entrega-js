// Selectores
const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima)
})

// Funciones
function buscarClima (e) {
    e.preventDefault();

    // Validar Datos
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if(ciudad === '' || pais === ''){
        mostrarError('Todos los campos son Obligatorios');
        return;
    }
    // Consultar la API
    consultarAPI(ciudad, pais);
}

function mostrarError(mensaje) {
    
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${mensaje}`,
    });
}

function consultarAPI(ciudad, pais){

    const appID = '28b26672117c3773f18cd54d303f3bed'
    
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&appid=${appID}`;

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            limpiar();
            if(datos.length == 0) {
                mostrarError('No es una ciudad  ')
                return;
            }

            // Extraer latitud y longitud de la primera ubicación encontrada
            const location = datos[0];
            const latitude = location.lat;
            const longitude = location.lon;

            apiCall = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appID}`;

            fetch(apiCall)
            .then(respuesta => respuesta.json())
            .then(climaDatos => {
                console.log(climaDatos);
                // Mostrar Info en el HTML
                mostrarClima(climaDatos);
            })
        })
}

function mostrarClima(datos) {
    const { main: { temp, temp_max, temp_min } } = datos;

    const gCentigrados = kelvinCentigrados(temp);

    const actual = document.createElement('p');
    actual.innerHTML = `${gCentigrados} &#8451;`;
    actual.classList.add('.climaActual')  // Clase clima Ctual

    const resultadoDiv = document.createElement('div');
    resultadoDiv.appendChild(actual);
    resultado.appendChild(resultadoDiv);

};

const kelvinCentigrados = grados => parseInt(grados - 273.15);


function limpiar() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}