<?php
class persona{
	public $id;
	public $nombre;
	public $edad;
	public $ciudad;
	
	function __construct($nombre, $edad, $ciudad){
		$this->nombre = $nombre;
		$this->edad = $edad;
		$this->ciudad = $ciudad;
		}
	
	function setNombre($nombre){
		$this->nombre = $nombre;
		}
	function getNombre(){
		return $this->nombre;
		}
	
	function setEdad($edad){
		$this->edad = $edad;
		}
	function getEdad(){
		return $this->edad;
		}
	
	function setCiudad($ciudad){
		$this->ciudad = $ciudad;
		}
	function getCiudad(){
		return $this->ciudad;
		}
	}
?>
