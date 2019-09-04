<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Tipos_documentos_model extends CI_model{

	function salvar($dados){
		$this->db->insert('tipos_documentos',$dados);
	}

	function update($dados,$id){
		$this->db->where('id', $id)
				->update('tipos_documentos',$dados);
	}

	function consultar(){
		
	}

	function consultarById($id){
		$this->db->select('*')
				->from('tipos_documentos')
				->where('id',$id);
		return $this->db->get()->row();
	}

	function excluir($id){
		$this->db->delete('tipos_documentos',array('id' => $id));
	}

	function selecionar(){
		$this->db->select(
						'td.id 			AS tdid,
						 td.link     	AS tdlink,
						 td.descricao 	AS tddescricao')
				->from('tipos_documentos td')
				->order_by('td.descricao ASC');
		return $this->db->get()->result();
	}

	function selecionarPorTipoPessoa($tipo_pessoa){
		$this->db->select('*')
				->from('tipos_documentos')
				->where('tipo_pessoa', $tipo_pessoa);
		return $this->db->get()->result();
	}

	function selecionarPorModalidadeEmprestimo($idmodalidade_emprestimos){
		$this->db->select('*')
				->from('documentos_modalidades_emprestimos')
				->where('ce_modalidade_emprestimo', $idmodalidade_emprestimos);
		return $this->db->get()->result();
	}

	function seleciontarPorSegmento($segmento){
		$this->db->select('*')
				->from('tipos_documentos')
				->where('segmento',$segmento)
				->order_by('descricao');
		return $this->db->get()->result();
	}

}