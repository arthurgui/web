<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Requerentes_model extends CI_model{

	function salvar($dados){
		$this->dados['db_conecta']->insert('requerentes',$dados);
		return $this->dados['db_conecta']->insert_id();
	}

	function update($dados,$id){
		$this->dados['db_conecta']->where('id', $id)
				->update('requerentes',$dados);
	}

	function consultar(){
		
	}

	function consultarPorId($id){
		$this->dados['db_conecta']->select('*')
				->from('requerentes')
				->where('id',$id);
		return $this->dados['db_conecta']->get()->row();
	}

	function consultarPorCPFCNPJ($cpf_cnpj){
		$this->dados['db_conecta']->select('*')
				->from('requerentes')
				->where('cpf_cnpj',$cpf_cnpj);
		return $this->dados['db_conecta']->get()->row();
	}

	function excluir($id){
		$this->dados['db_conecta']->delete('requerentes',array('id' => $id));
	}

	function selecionar(){
		$this->dados['db_conecta']->select('*')
								->from('requerentes')
								->order_by('nome_razaosocial ASC');
		return $this->dados['db_conecta']->get()->result();
	}
}