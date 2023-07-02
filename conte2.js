var boton=document.getElementById('galois')


var notificacion=function(){
    var titulo="Hola de nuevo"
    var cuerpo="Este programa permite determinar que tareas pendientes y cuantas tienes"

    swal({
        title: titulo,
        text:cuerpo,
        icon: 'success'

    })
}

boton.addEventListener("click", notificacion)