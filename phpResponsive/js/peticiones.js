var httpPeticion = new XMLHttpRequest();

function mostrar(){
	httpPeticion.open("GET", "php/api.php", true);
	httpPeticion.send();
	httpPeticion.onreadystatechange = function(){
		if(httpPeticion.readyState == 4 && httpPeticion.status == 200){
			var objeto = JSON.parse(httpPeticion.responseText);
			var cosaDeTabla = "<table>";
			cosaDeTabla += "<tr>";
			cosaDeTabla += "<td>ID</td>";
			cosaDeTabla += "<td>Nombre</td>";
			cosaDeTabla += "<td>Edad</td>";
			cosaDeTabla += "<td>Ciudad</td>";
			cosaDeTabla += "<tr>";
			for(var id in objeto){
				cosaDeTabla += "<tr>";
				cosaDeTabla += "<td>"+objeto[id].id+"</td>";
				cosaDeTabla += "<td>"+objeto[id].nombre+"</td>";
				cosaDeTabla += "<td>"+objeto[id].edad+"</td>";
				cosaDeTabla += "<td>"+objeto[id].ciudad+"</td>";
				cosaDeTabla += "</tr>";
				};
			cosaDeTabla += "</table>";
			
			document.getElementById("table").innerHTML = cosaDeTabla;
			};
		
	};
};

function crearCuenta(){
	httpPeticion.open("GET", "php/inicioDeSesion.php", true);
	httpPeticion.send();
	httpPeticion.onreadystatechange = function(){
		if(httpPeticion.readyState == 4 && httpPeticion.status == 200){
			/*var objeto = JSON.parse(httpPeticion.responseText);*/
			var posicion = document.getElementById("marco");
			posicion.innerHTML = "<p>Cosa de crear cuenta</p>";
		};
	};
};

function iniciarSesion(){
	httpPeticion.open("GET", "php/registrarse.php", true);
	httpPeticion.send();
	httpPeticion.onreadystatechange = function(){
		if(httpPeticion.readyState == 4 && httpPeticion.status == 200){
			var posicion = document.getElementById("marco");
			/*var objeto = JSON.parse(httpPeticion.responseText);*/
			posicion.innerHTML = "<p>Cosa de inicio de sesión</p>";
		};
	};
};
