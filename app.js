    
    const tareas = require('./tareas');
    const evento = process.argv[2];

    let tareasRecu=[];


    switch(evento){
    /* modifica la funcionalidad de listar utilizando forEach(recibe dos parametros , el segundo es index) */
    case 'listar':
        tareasRecu = tareas.leerJSON();
        tareasRecu.forEach((tarea, index) => {
            console.log(index +'----'+tarea.estado);
        });
    break;
    case 'crear':
        console.log("Una nueva tarea");
        
        let titulo = process.argv[3];
               //obj que solo tendra titulo y estado siempre pendiente
        let tarea= {
           titulo: titulo,
           estado: 'pendiente'
        }
        tareas.guardarTarea(tarea);
        console.log(tarea.titulo + ' '+tarea.estado);
    break;

    case 'filtrar':
        let estado = process.argv[3];
        console.log('-----------------------------------');
        console.log('tareas con estado: "'+ estado +'"');
        console.log('-----------------------------------');
        let filtradas= tareas.filtrarPorEstado(estado);
        //
        filtradas.forEach(tarea => console.log(tarea.titulo));
        break;
     
 
  case undefined:
        console.log(" ");
        console.log("Atención - Tienes que pasar una acción");
        console.log("Las acciones disponibles son: listar, crear, filtrar");
        console.log(" ");
  break;
  default:
        console.log(" ");
        console.log("No entiendo qué quieres hacer");
        console.log("las acciones disponibles son: listar, crear, filtrar");
        console.log(" ");
  break;

}




