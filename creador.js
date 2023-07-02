var btnCreador=document.getElementById('si')

function creador(){
    swal({
        title: "Soy un proyecto escolar",
        text: "Tengo como proposito ayudarte a organizar tus actividades; explora mis funciones y espero serte de utilidad."
    })
}

btnCreador.addEventListener("click", creador)