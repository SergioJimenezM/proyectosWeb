let elResultado = document.getElementById("resultado")
let reset = document.getElementById('reset');
let suma = document.getElementById('suma');
let resta = document.getElementById('resta');
let multiplicacion = document.getElementById('multiplicacion');
let division = document.getElementById('division');
let igual = document.getElementById('igual');
let uno = document.getElementById('uno');
let dos = document.getElementById('dos');
let tres = document.getElementById('tres');
let cuatro = document.getElementById('cuatro');
let cinco = document.getElementById('cinco');
let seis = document.getElementById('seis');
let siete = document.getElementById('siete');
let ocho = document.getElementById('ocho');
let nueve = document.getElementById('nueve');
let cero = document.getElementById('cero');
let operacion
let segundoOperando

function limpiar(){
  resultado.value = "";
}
function reiniciar(){
  resultado.value = "";
  primerOperando = 0;
  segundoOperando = 0;
  operacion = "";
}
function resolver(){
  let respuesta = 0;
  switch(operacion){
	case "+":
	  respuesta = parseFloat(primerOperando) + parseFloat(segundoOperando);
	  break;
	case "-":
		respuesta = parseFloat(primerOperando) - parseFloat(segundoOperando);
		break;
	case "*":
	  respuesta = parseFloat(primerOperando) * parseFloat(segundoOperando);
	  break;
	case "/":
	  respuesta = parseFloat(primerOperando) / parseFloat(segundoOperando);
	  break;
  }
  reiniciar();
  resultado.value = respuesta;
}

uno.onclick = function(e){
  resultado.value = resultado.value  + "1";
}
dos.onclick = function(e){
  resultado.value = resultado.value  + "2";
}
tres.onclick = function(e){
  resultado.value = resultado.value  + "3";
}
cuatro.onclick = function(e){
  resultado.value = resultado.value  + "4";
}
cinco.onclick = function(e){
  resultado.value = resultado.value  + "5";
}
seis.onclick = function(e){
  resultado.value = resultado.value  + "6";
}
siete.onclick = function(e){
  resultado.value = resultado.value  + "7";
}
ocho.onclick = function(e){
  resultado.value = resultado.value  + "8";
}
nueve.onclick = function(e){
  resultado.value = resultado.value  + "9";
}
cero.onclick = function(e){
  resultado.value = resultado.value  + "0";
}
reset.onclick = function(e){
  reiniciar();
}
suma.onclick = function(e){
  primerOperando = resultado.value;
  operacion = "+";
  limpiar();
}
resta.onclick = function(e){
  primerOperando = resultado.value;
  operacion = "-";
  limpiar();
}
multiplicacion.onclick = function(e){
  primerOperando = resultado.value;
  operacion = "*";
  limpiar();
}
division.onclick = function(e){
  primerOperando = resultado.value;
  operacion = "/";
  limpiar();
}
igual.onclick = function(e){
  segundoOperando = resultado.value;
  resolver();
}

function volverAlInicio(){
		window.location.href = "index.html"
}

