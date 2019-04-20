
function autenticado(){
/*escribir en la web otra pagina donde la persona pueda hacer movidas*/

}

function esSegura(){
	let porProbarSeguridad = document.getElementById("password")
	
	if(porProbarSeguridad.value.length < 8){
		porProbarSeguridad.value = ""
		porProbarSeguridad.placeholder = "Al menos debe contener 8 caracteres"
		porProbarSeguridad.style.borderColor = "red"
	}else if(porProbarSeguridad.value ){
		
	}
	
}
