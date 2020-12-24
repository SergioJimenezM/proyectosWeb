<?php
namespace php;
$user = "responsive";
$pass = "responsive";
$host = "localhost";

public conectar(){
try{
	$conexion = new PDO('mysql:host=localhost;dbname=responsive', $user, $pass);
	$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	return $conexion
}catch(PDOException $e){
	return null;
}
}
?>
