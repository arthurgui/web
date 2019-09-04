<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Tipos_documentos_model extends CI_model{

	function salvar($dados){
		$this->dados['db_conecta']->insert('tipos_documentos',$dados);
	}

	function update($dados,$id){
		$this->dados['db_conecta']->where('id', $id)
				->update('tipos_documentos',$dados);
	}

	function consultar(){
		
	}

	function consultarById($id){
		$this->dados['db_conecta']->select('*')
				->from('tipos_documentos')
				->where('id',$id);
		return $this->dados['db_conecta']->get()->row();
	}

	function excluir($id){
		$this->dados['db_conecta']->delete('tipos_documentos',array('id' => $id));
	}

	function selecionar(){
		$this->dados['db_conecta']->select(
						'td.id 			AS tdid,
						 td.link     	AS tdlink,
						 td.descricao 	AS tddescricao')
				->from('tipos_documentos td')
				->order_by('td.descricao ASC');
		return $this->dados['db_conecta']->get()->result();
	}

	function selecionarPorTipoPessoa($tipo_pessoa){
		$this->dados['db_conecta']->select('*')
				->from('tipos_documentos')
				->where('tipo_pessoa', $tipo_pessoa);
		return $this->dados['db_conecta']->get()->result();
	}

	function selecionarPorModalidadeEmprestimo($idmodalidade_emprestimos){
		$this->dados['db_conecta']->select('*')
				->from('documentos_modalidades_emprestimos')
				->where('ce_modalidade_emprestimo', $idmodalidade_emprestimos);
		return $this->dados['db_conecta']->get()->result();
	}

	function seleciontarPorSegmento($segmento){
		$this->dados['db_conecta']->select('*')
				->from('tipos_documentos')
				->where('segmento',$segmento)
				->order_by('descricao');
		return $this->dados['db_conecta']->get()->result();
	}

}