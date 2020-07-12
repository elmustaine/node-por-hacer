const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Indica si esta pendiente o completada la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear tarea por hacer', { descripcion })
    .command('actualizar', 'Actualizar tarea por hacer', { descripcion, completado })
    .command('borrar', 'Borrar tarea por hacer', { descripcion })
    .help()
    .argv;


module.exports = {
    argv
};