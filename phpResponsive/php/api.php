<?php
header("Content-Type: application/json");
GET();
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
	
};/*fin de clase database*/

function GET(){
	$db = new database();
	$con = $db->conectar();
	$respuesta = $con->prepare("select * from personas;");
	if($respuesta->execute()){
		$arreglo = $respuesta->fetchAll();
		echo json_encode($arreglo);
		}else{
			echo "Error:Ha ocurrido un error";
			};	
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
