<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Motivos_indeferimento_model extends CI_model{

	function salvar($dados){
		$this->dados['db_conecta']->insert('motivos_indeferimento',$dados);
	}

	function update($dados,$id){
		$this->dados['db_conecta']->where('id', $id)
				->update('motivos_indeferimento',$dados);
	}

	function consultar(){
		
	}

	function consultarById($id){
		$this->dados['db_conecta']->select('*')
				->from('motivos_indeferimento')
				->where('id',$id);
		return $this->dados['db_conecta']->get()->row();
	}

	function consultarPorLicenca($id_licenca){
		$this->dados['db_conecta']->select(
						'mi.*,
						mil.id						AS	milid,
						mil.ce_motivo_indeferimento	AS	milce_motivo_indeferimento,
						mil.ce_licenca				AS	milce_licenca')
				->from('motivos_indeferimento mi')
				->join('motivos_indeferimento_licencas	mil','mil.ce_motivo_indeferimento	=	mi.id','inner')
				->where('mil.ce_licenca',$id_licenca);
		return $this->dados['db_conecta']->get()->result();
	}

	function excluir($id){
		$this->dados['db_conecta']->delete('motivos_indeferimento',array('id' => $id));
	}

	function selecionar(){
		$this->dados['db_conecta']->select('*')
				->from('motivos_indeferimento')
				->order_by('descricao ASC');
		return $this->dados['db_conecta']->get()->result();
	}

	function indeferirLicenca($dados){
		$this->dados['db_conecta']->insert('motivos_indeferimento_licencas',$dados);
	}

	function excluirPorLicenca($ce_licenca){
		$this->dados['db_conecta']->delete('motivos_indeferimento_licencas',array('ce_licenca' => $ce_licenca));
	}
}