<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Setores_model extends CI_model{

	function salvar($dados){
		$this->db->insert('setores',$dados);
	}

	function update($dados,$id){
		$this->db->where('id', $id)
				->update('setores',$dados);
	}

	function consultar(){
		
	}

	function consultarById($id){
		$this->db->select('*')
				->from('setores')
				->where('id',$id);
		return $this->db->get()->row();
	}

	function excluir($id){
		$this->db->delete('setores',array('id' => $id));
	}

	function selecionar(){
		$this->db->select('*')
				->from('setores')
				->order_by('descricao ASC');
		return $this->db->get()->result();
	}

}