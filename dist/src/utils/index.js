"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHours = void 0;
const getHours = () => {
    const ahora = new Date();
    const opciones = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
    const horaFormateada = ahora.toLocaleTimeString('es-ES', opciones);
    return horaFormateada;
};
exports.getHours = getHours;
