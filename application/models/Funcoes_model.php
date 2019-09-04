<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Funcoes_model extends CI_model{

	function salvar($dados){
		$this->db->insert('funcoes',$dados);
	}

	function update($dados,$id){
		$this->db->where('id', $id)
				->update('funcoes',$dados);
	}

	function consultar(){
		
	}

	function consultarById($id){
		$this->db->select('*')
				->from('funcoes')
				->where('id',$id);
		return $this->db->get()->row();
	}

	function excluir($id){
		$this->db->delete('funcoes',array('id' => $id));
	}

	function selecionar(){
		$this->db->select('*')
				->from('funcoes')
				->order_by('descricao ASC');
		return $this->db->get()->result();
	}

}