const descripcion = {
        demand: true,
        alias: "d",
        desc: "Descripción de la tarea por hacer"
    }

const completado = {
        alias: "c",
        default: true,
        desc: "Marca como completado o pendiente la tarea"
    }

const argv = require('yargs')
                            .command('crear', 'Crear por hacer', {descripcion})
                            .command('actualizar', 'Actualizar una tarea por hacer', {descripcion, completado})
                            .command('borrar', 'Borrar una tarea por hacer', {descripcion})
                            .command('listar', 'Lista las tareas por hacer', {})
                            .help()
                            .argv;

module.exports = { argv }

