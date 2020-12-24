<?php
header("Content-Type: application/json");
POST();

class database{
public $host = "mysql:host=localhost;dbname=responsive";
public $user = "responsive";
public $pas = "responsive";
public $con;

public function conectar(){
	$this->con = null;
	$this->con = new PDO($this->host, $this->user, $this->pas);
	if(! $this->con){
		echo json_encode("Conexion fallida");
		};
	$this->con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	return $this->con;
}

public function POST(){
	
}
?>
