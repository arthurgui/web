<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Tipos_licencas_model extends CI_model{

	function salvar($dados){
		$this->dados['db_conecta']->insert('tipos_licencas',$dados);
	}

	function update($dados,$id){
		$this->dados['db_conecta']->where('id', $id);
		$this->dados['db_conecta']->update('tipos_licencas',$dados);
	}

	function consultar(){
		$this->dados['db_conecta']->select('*')
				->from('tipos_licencas');
		return $this->dados['db_conecta']->get()->result();
	}

	function consultarById($id){
		$this->dados['db_conecta']->select('*')
				->from('tipos_licencas')
				->where('id',$id);
		return $this->dados['db_conecta']->get()->row();
	}

	function excluir($id){
		$this->dados['db_conecta']->delete('tipos_licencas',array('id' => $id));
	}

	function selecionar(){
		$this->dados['db_conecta']->select(
					   'tl.id 						AS id,
					    tl.periodo_validade			AS periodo_validade,
						tl.detalhe 					AS detalhe,
					 	tl.descricao 				AS descricao');
		$this->dados['db_conecta']->from('tipos_licencas tl');
		$this->dados['db_conecta']->order_by('tl.descricao ASC');
		return $this->dados['db_conecta']->get()->result();
	}

}