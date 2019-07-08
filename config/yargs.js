// const opts = {
//     descripcion: {
//         demand: true,
//         alias: 'd',
//         desc: 'descripcion de la tarea por hacer'
//     },
//     completado: {
//         default: true,
//         alias: 'c',
//         desc: 'marca como completado'
//     }
// }

// const argv = require('yargs')
//     .command('listar', 'crear un lemento por hacer', opts)
//     .command('actualizar', 'actualiza el estado completado de una tarea', opts)
//     .help()
//     .argv;

// module.exports = {
//     argv
// }


const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};



const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}