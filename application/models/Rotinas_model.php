<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Rotinas_model extends CI_model{

	function executarSQL($comando){
		$query	=	$this->db->query($comando);
		return $query;
	}

	function showTables($database){
		$query	=	$this->db->query('SHOW TABLE STATUS FROM '.$database);
		return $query->result();
	}

	function showColumns($table){
		$query	=	$this->db->query('SHOW COLUMNS FROM '.$table);
		return $query->result();
	}
}