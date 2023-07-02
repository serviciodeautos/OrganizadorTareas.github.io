
var lista = document.getElementById("lista"),
		tarea = document.getElementById("tareaInput"),
		fecha=document.getElementById("tarea2Input"),
		btnNuevaTarea = document.getElementById("botom");

//funciones 

var agregarTarea = function(event){
	event.preventDefault();
	

	if ((tarea.value=="")||fecha.value==""){
		tarea.setAttribute("placeholder", "Escribe...");
			tarea.className = "error";
			fecha.className="error";

			return false;
	}

	tarea.className = "normal";
	fecha.className="normal";


	var tareaAgregar= tarea.value;
	var fechaAgregar=fecha.value;

	var nuevaTarea = document.createElement("li");
	var enlace = document.createElement("a");
	var contenido = document.createTextNode(tareaAgregar + "--" + fechaAgregar );
	var ver = "Ver";


// Agregamos el contenido al enlace

enlace.appendChild((contenido));


// Le establecemos un atributo href

enlace.setAttribute("href", "#");


// Agrergamos el enlace (a) a la nueva tarea (li)

nuevaTarea.appendChild(enlace);

// Agregamos la nueva tarea a la lista


lista.appendChild(nuevaTarea);


	console.log(nuevaTarea);
	console.log(tareaAgregar);
	console.log(fechaAgregar);



	



	

//este ciclo permite la remocion de tareas y verificacion de tiempo 
for (var i = 0; i <= lista.children.length -1; i++) {
	lista.children[i].addEventListener("click", function(){
		let siOno= confirm("¿Desea eliminar la tarea?")

		if (siOno==true){
		this.parentNode.removeChild(this);
			swal({title:'Se ha removido con exito', icon:'success'})
		}else{

					
					var today = new Date();
					console.log('hoy es' + today);
					
					var diasss = new Date(fechaAgregar);
					

					swal('Hoy es: ' + today + " y entregas el dia: " + diasss);


		}
	})

};

	
tarea.value=""
fecha.value=""

};






var eliminarTarea = function(event){
	event.preventDefault();
	this.parentNode.removeChild(this);
};


//eventos 

// Agregar Tarea
btnNuevaTarea.addEventListener("click", agregarTarea);


//eliminar tareas
for (var i = 0; i <= lista.children.length -1; i++) {
	lista.children[i].addEventListener("click", eliminarTarea);
}

