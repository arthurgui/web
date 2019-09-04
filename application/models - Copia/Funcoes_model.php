<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Funcoes_model extends CI_model{

	function salvar($dados){
		$this->dados['db_conecta']->insert('funcoes',$dados);
	}

	function update($dados,$id){
		$this->dados['db_conecta']->where('id', $id)
				->update('funcoes',$dados);
	}

	function consultar(){
		
	}

	function consultarById($id){
		$this->dados['db_conecta']->select('*')
				->from('funcoes')
				->where('id',$id);
		return $this->dados['db_conecta']->get()->row();
	}

	function excluir($id){
		$this->dados['db_conecta']->delete('funcoes',array('id' => $id));
	}

	function selecionar(){
		$this->dados['db_conecta']->select('*')
				->from('funcoes')
				->order_by('descricao ASC');
		return $this->dados['db_conecta']->get()->result();
	}

}