function obtenerHora24H() {
    const ahora = new Date();
    const opciones = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
    const horaFormateada = ahora.toLocaleTimeString('es-ES', opciones);
    return horaFormateada;
}

module.exports =  obtenerHora24H;