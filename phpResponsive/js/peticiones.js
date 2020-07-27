var httpPeticion = new XMLHttpRequest();

function siguiente(){
	httpPeticion.open("GET", "php/api.php", true);
	httpPeticion.send();
	httpPeticion.onreadystatechange = function(){
		if(httpPeticion.readyState == 4 && httpPeticion.status == 200){
			var objeto = JSON.parse(httpPeticion.responseText);
			document.getElementById("id").value = objeto.id
			document.getElementById("nombre").value = objeto.nombre;
			document.getElementById("edad").value = objeto.edad;
			document.getElementById("ciudad").value = objeto.ciudad;
		};
		
	};
};

function anterior(){};

function agregar(){};

function actualizar(){};

function eliminar(){};
