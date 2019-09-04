<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Physisweb_model extends CI_model{

	function salvar($dados){
		$this->db->insert('empresas',$dados);
	}

	function update($dados,$id){
		$this->db->where('id', $id)
				->update('empresas',$dados);
	}

	function consultar(){
		
	}

	function consultarPorId($id){
		$this->db->select('*')
				->from('empresas')
				->where('id',$id);
		return $this->db->get()->row();
	}

	function excluir($id){
		$this->db->delete('empresas',array('id' => $id));
	}

	function selecionar(){
		$this->db->select('*')
				->from('empresas')
				->order_by('descricao ASC');
		return $this->db->get()->result();
	}

}