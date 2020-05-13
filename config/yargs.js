const descripcion = {
    demand: true,
    alias: 'd'
}

const completado = {
    demand: true,
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra la tarea que coincide con la descripcion introducida', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}