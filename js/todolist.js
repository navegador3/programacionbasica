const tareaInput = document.getElementById("tareaInput");
const agregarBtn = document.getElementById("agregarBtn");
const listaTareas = document.getElementById("listaTareas");

// #### Colocar el cursor dentro del input de texto
window.onload = function () {
    tareaInput.focus();
}

//#### Agregar evento al botón
agregarBtn.addEventListener("click", agregarTarea);

//#### Agregar el evento con la tecla enter
tareaInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        agregarTarea();
    }
})

function agregarTarea() {
    const textoTarea = tareaInput.value.trim();
    if (textoTarea === "") {
        alert("Por favor, escribe una tarea")
        return
    }

        const li = document.createElement("li")
        li.textContent = textoTarea

        const btnEliminar = document.createElement("button")
        btnEliminar.innerHTML = '<i class="fa-solid fa-trash"></i>'
        btnEliminar.classList.add('btn-eliminar')

        btnEliminar.addEventListener("click", function() {
            listaTareas.removeChild(li)
        })

        li.appendChild(btnEliminar)

        //#### Agragar elemento li denro del ul
        listaTareas.appendChild(li)

        //#### Limpiar y enfocar el input
        tareaInput.value = ""
        tareaInput.focus()
}