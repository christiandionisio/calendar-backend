/*
    Event Routes
    /api/events
*/

const {response} = require('express');


const getEventos = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'Obtener Eventos'
    });

}

const crearEvento = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'Crear Eventos'
    });

}

const actualizarEvento = (req, res = response) => {

    const {id} = req.params;

    res.json({
        ok: true,
        msg: 'Actualizar Eventos',
        id
    });

}

const eliminarEvento = (req, res = response) => {

    const {id} = req.params;

    res.json({
        ok: true,
        msg: 'Eliminar Eventos',
        id
    });

}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}