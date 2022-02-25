let process = require("process")

let {mostrarTareas, guardarTarea, filtrarPorEstado} = require("./funcionesDeTareas")

let accion = process.argv[2];

if (process.argv[2] !== undefined) {
    accion = process.argv[2].toLowerCase()
}

switch (accion) {
    case "listar":
        mostrarTareas()
        break;
    case "crear":
        let tarea = (process.argv[3])
        let nuevaTarea = {
            titulo : tarea,
            estado : "pendiente"
        }
        if (process.argv[3] === undefined) {
            console.log("debes ingresar una tarea")
        } else {
            guardarTarea(nuevaTarea)
        }
        break;
    case "filtrar":
        filtrarPorEstado(process.argv[3].toLocaleLowerCase())
        break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción")
        break;
    default:
        console.log("No entiendo qué quieres hacer")
        break;
}