function agregarTarea(){
    const nuevaTareaInput=document.getElementById("nuevaTarea");
    const listTareas=document.getElementById("listaTareas");
    const nuevaTareaTexto=nuevaTareaInput.value.trim();

    if(nuevaTareaTexto!==""){
        const nuevaTarea=document.createElement("li");
        nuevaTarea.textContent=nuevaTareaTexto;

        const botonEliminar=document.createElement("button");
        botonEliminar.textContent="Eliminar";
        botonEliminar.className="delete";
        botonEliminar.onclick=function(){
            listTareas.removeChild(nuevaTarea);
        };

        nuevaTarea.appendChild(botonEliminar);
        listTareas.appendChild(nuevaTarea);
        nuevaTareaInput.value="";
    }
}
//Funcion para marcar tarea como completada
function marcarCompletada(tarea){
    tarea.classList.toggle("completed");
}
//agregar evento de click a las tareas para marcarlas como completadas
document.getElementById("listaTareas").addEventListener("click",
function(event){
    if(event.target.tagName==="LI"){
        marcarCompletada(event.target);
    }
});

//agregar evento de click en boton agregar
document.getElementById("agregar").addEventListener("click",agregarTarea);

function mostrarTodo(){
    const tareas=document.querySelectorAll("li");
    tareas.forEach(tarea => {
        tarea.style.display="flex";
    });
}
function mostrarPendientes(){
    const tareas=document.querySelectorAll("li");
    tareas.forEach(tarea =>{
        if(!tarea.classList.contains("completed")){
            tarea.style.display="flex";
        }
        else{
            tarea.style.display="none";
        }
    });
}
function mostrarCompletadas(){
    const tareas=document.querySelectorAll("li");
    tareas.forEach(tarea =>{
        if(tarea.classList.contains("completed")){
            tarea.style.display="flex";
        }
        else{
            tarea.style.display="none";
        }
    });
}

document.getElementById("mostrarTodo").addEventListener("Click",mostrarTodo);
document.getElementById("mostrarPendientes").addEventListener("Click",mostrarPendientes);
document.getElementById("mostrarCompletadas").addEventListener("Click",mostrarCompletadas);
