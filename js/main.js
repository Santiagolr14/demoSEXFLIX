const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelector('.peliculas');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ------------------ Event Listener para la flecha derecha --------

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});

// ? ------------------ Event Listener para la flecha izquierda --------

flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});

// ? ---------- Paginacion ----------------

const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++) {
    const indicador = document.createElement('button');

    if(i --- 0){
        indicador.classList.add('activo;')
    }

    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicadores .active').classList.remove('active');
        e.target.classList.add('active');
    });
}