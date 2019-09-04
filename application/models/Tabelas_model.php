<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Tabelas_model extends CI_model{

	function consultarById($id){
		$this->db->select('*')
				->from('relatorios')
				->where('id',$id);
		return $this->db->get()->row();
	}

	function showCreateTable($table){
		$query = $this->db->query("SHOW CREATE TABLE ".$table);
		return $query->result_array();
	}

	function executaQuery($query){
		$this->db->query($query);
	}
}