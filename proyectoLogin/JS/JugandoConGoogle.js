/*jugando con google*/

let campoDeTexto = document.getElementsByName("q")[0]/*el cero es por que se retorna un arreglo*/

campoDeTexto.value = "asi pongo texto en google"

function contadorDeTexto(texto){
	alert(texto.length)
}
contadorDeTexto(campoDeTexto.value)
