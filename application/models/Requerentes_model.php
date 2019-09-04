<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Requerentes_model extends CI_model{

	function salvar($dados){
		$this->db->insert('requerentes',$dados);
		return $this->db->insert_id();
	}

	function update($dados,$id){
		$this->db->where('id', $id)
				->update('requerentes',$dados);
	}

	function consultar(){
		
	}

	function consultarPorId($id){
		$this->db->select('*')
				->from('requerentes')
				->where('id',$id);
		return $this->db->get()->row();
	}

	function consultarPorCPFCNPJ($cpf_cnpj){
		$this->db->select('*')
				->from('requerentes')
				->where('cpf_cnpj',$cpf_cnpj);
		return $this->db->get()->row();
	}

	function excluir($id){
		$this->db->delete('requerentes',array('id' => $id));
	}

	function selecionar(){
		$this->db->select('*')
				->from('requerentes')
				->order_by('nome_razaosocial ASC');
		return $this->db->get()->result();
	}
}