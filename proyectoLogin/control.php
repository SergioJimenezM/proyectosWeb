
<!DOCTYPE html>
<html>
	
	<head>
		<meta charset="utf-8"/>
		<title>Inicio de sesión</title>
		<link rel="stylesheet" href="estilo.css">
		
	</head>
	<body>
	<h6  class="manual">
	<?php
	$usuario = $_POST["usuario"];
	$clave = $_POST["clave"];
	$salida = "";
	$conexion = mysqli_connect("localhost", "root","tsunayoshi", "pruebadesonido");
	if(!$conexion){
		$salida = "No se puede conectar" . mysql_error();
		}else{
		$salida = "Conectado";
		}
	echo $salida;
	
	$sql = "insert into usuarios(usuario, contrasegna) values (\"".$usuario."\",\"".$clave."\");";
	if(mysqli_query($conexion,$sql)){echo "se ha guardado al usuario";}else{ echo "error ".mysqli_error($conexion);}
	mysqli_close($conexion)
	?>
	</h6>
</body>
</html>

