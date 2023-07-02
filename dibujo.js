var boton=document.getElementById('buttonn')


var notificacion=function(){
    var titulo="Hola, mi Nombre es Galois"
    var cuerpo="No salgas de la pagina o los datos seran borrados."
    var hola="En el cuadro de arriba podras escribir tus actividades, y abajo selcciona la fecha de entrega de dicha actividad (Se te da en el formato AAAA/MM/DD T HH:MM). Si quieres borrarla, solo has click. "

    swal({
        title: titulo,
        text: hola + cuerpo,
        icon: 'success'

    })
}

boton.addEventListener("click", notificacion)