const colors = require('colors');
const argv = require("./config/yargs").argv;
const { crear,
        getListado,
        actualizar,
        borrar
      } = require("./por-hacer/por-hacer");

let comando = argv._[0];

switch(comando) {
    case "crear":
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;
    case "borrar":
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;
    case "listar":
        let listado = getListado();
        for( let tarea of listado) {
            console.log("=========== Por Hacer ===========".green);
            console.log(tarea.descripcion);
            console.log("Estado: ", tarea.completado)
            console.log("=================================".green);
        }
        break;
    case "actualizar":
        console.log(argv.descripcion)
        let actualizado = actualizar(argv.descripcion, argv.completado);
        if(actualizado) {
            console.log("Se actualizo la base de datos".green);
        }
        else {
            console.log("No se pudo actualizar la base de datos".red);
        }
        break;
    default:
        console.log("Ese comando no es reconocido");
        break;
}