<?php
header("Content-Type: application/json");

echo json_encode("ERR:NoHayAvances");

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
	
public function desconectar(){
	echo json_encode("sin implementar");
	}
	
};

function GET(){
	$db = new database();
	$con = $db->conectar();
	
	
	};

function POST(){
	$db = new database();
	$db->conectar();

	};

function UPDATE(){
	$db = new database();
	$db->conectar();
	
	};

function DELETE(){
	$db = new database();
	$db->conectar();
	
	
	};
?>
