const descripcion= {

     demand: true,
     alias: 'd',
     desc: 'descripcion de la tarea por hacer'
}
const completado= {
     default: true,
     alias: 'c',
     desc: 'marca comcompletado la tarea'
}
const argv = require('yargs')
                    .command('crear','crea un elemento por haceer',{
                         descripcion
                    })
                    .command('actualizar','crea archivo',{
                         descripcion,
                         completado
                    })
                    .command('borrar','borra archivo',{
                         descripcion
                    })
                    .help()
                    .argv;

module.exports = {
     argv
}