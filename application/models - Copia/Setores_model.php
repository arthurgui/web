<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Setores_model extends CI_model{

	function salvar($dados){
		$this->dados['db_conecta']->insert('setores',$dados);
	}

	function update($dados,$id){
		$this->dados['db_conecta']->where('id', $id)
				->update('setores',$dados);
	}

	function consultar(){
		
	}

	function consultarById($id){
		$this->dados['db_conecta']->select('*')
				->from('setores')
				->where('id',$id);
		return $this->dados['db_conecta']->get()->row();
	}

	function excluir($id){
		$this->dados['db_conecta']->delete('setores',array('id' => $id));
	}

	function selecionar(){
		$this->dados['db_conecta']->select('*')
				->from('setores')
				->order_by('descricao ASC');
		return $this->dados['db_conecta']->get()->result();
	}

}