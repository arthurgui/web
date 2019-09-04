<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Condicionantes_licenca_model extends CI_model{

	function salvar($dados){
		$this->db->insert('condicionantes_licenca',$dados);
	}

	function update($dados,$id){
		$this->db->where('id', $id)
				->update('condicionantes_licenca',$dados);
	}

	function consultar(){
		
	}

	function consultarPorId($id){
		$this->db->select('*')
				->from('condicionantes_licenca')
				->where('id',$id);
		return $this->db->get()->row();
	}

	function consultarPorLicenca($id_licenca){
		$this->db->select(
						'cl.*,
						tl.descricao		AS	tldescricao')
				->from('condicionantes_licenca	cl')
				->join('licencas			 l','cl.ce_licenca			=	 l.id'	,'inner')
				->join('tipos_licencas		tl','l.ce_tipo_licenca		=	tl.id'	,'inner')
				->where('l.id',$id_licenca)
				->order_by('cl.sequencial');
		return $this->db->get()->result();
	}

	function excluir($id){
		$this->db->delete('condicionantes_licenca',array('id' => $id));
	}

	function selecionar(){
		$this->db->select('*')
				->from('condicionantes_licenca')
				->order_by('ordem ASC');
		return $this->db->get()->result();
	}

	function selecionarPorLicenca($id_licenca){
		$this->db->select(
						'cl.*,
						tl.descricao		AS	tldescricao')
				->from('condicionantes_licenca	cl')
				->join('licencas			 l','cl.ce_licenca			=	 l.id'	,'inner')
				->join('tipos_licencas		tl','l.ce_tipo_licenca		=	tl.id'	,'inner')
				->where('cl.ce_licenca',$id_licenca)
				->order_by('cl.sequencial');
		return $this->db->get()->result();
	}
}