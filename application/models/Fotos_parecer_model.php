<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Fotos_parecer_model extends CI_model{

	function salvar($dados){
		$this->db->insert('fotos_parecer',$dados);
		return $this->db->insert_id();
	}

	function update($dados,$id){
		$this->db->where('id', $id)
				->update('fotos_parecer',$dados);
	}

	function consultar(){
		
	}

	function consultarPorId($id){
		$this->db->select('*')
				->from('fotos_parecer')
				->where('id',$id);
		return $this->db->get()->row();
	}

	function consultarPorIdLicenca($id_licenca){
		$this->db->select('*')
				->from('fotos_parecer')
				->where('ce_licenca',$id_licenca);
		return $this->db->get()->result();
	}

	function excluir($id){
		$this->db->delete('fotos_parecer',array('id' => $id));
	}
}