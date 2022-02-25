const fs = require("fs")
const tareas = require("./tareas.json")

module.exports = {

    mostrarTareas : () => {
        tareas.forEach((tarea,index) => {
            console.log(`${index + 1} - ${tarea.titulo} - ${tarea.estado}`);
        });
        return null
    },
    guardarTarea : (tarea) => {
        tareas.push(tarea);
        fs.writeFileSync("./tareas.json",JSON.stringify(tareas,null,3))
        return console.log("tarea guardada")
    },
    filtrarPorEstado : (estado) => {
        
        let estadosValidos = ["pendiente", "en proceso", "terminada"]
        if (!estadosValidos.includes(estado)) {
            return console.log("Estado no valido", estadosValidos);
        }

        let tareasFiltradas = tareas.filter((tarea) => {
            return tarea.estado.toLowerCase() === estado.toLowerCase()
        });

        tareasFiltradas.forEach((tarea,index) => {
            console.log(`${index + 1} - ${tarea.titulo} - ${tarea.estado}`);
        });
        return null
    }
}