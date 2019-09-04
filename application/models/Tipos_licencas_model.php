<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Tipos_licencas_model extends CI_model{

	function salvar($dados){
		$this->db->insert('tipos_licencas',$dados);
	}

	function update($dados,$id){
		$this->db->where('id', $id)
				->update('tipos_licencas',$dados);
	}

	function consultar(){
		$this->db->select('*')
				->from('tipos_licencas');
		return $this->db->get()->result();
	}

	function consultarById($id){
		$this->db->select('*')
				->from('tipos_licencas')
				->where('id',$id);
		return $this->db->get()->row();
	}

	function excluir($id){
		$this->db->delete('tipos_licencas',array('id' => $id));
	}

	function selecionar(){
		$this->db->select(
					   'tl.id 						AS id,
					    tl.periodo_validade			AS periodo_validade,
					    tl.sn_ativo					AS sn_ativo,
						tl.detalhe 					AS detalhe,
					 	tl.descricao 				AS descricao');
		$this->db->where('sn_ativo','S');
		$this->db->from('tipos_licencas tl');
		$this->db->order_by('tl.descricao ASC');
		return $this->db->get()->result();
	}

	function selecionartodos(){
		$this->db->select(
					   'tl.id 						AS id,
					    tl.periodo_validade			AS periodo_validade,
					    tl.sn_ativo					AS sn_ativo,
						tl.detalhe 					AS detalhe,
					 	tl.descricao 				AS descricao');
		$this->db->from('tipos_licencas tl');
		$this->db->order_by('tl.descricao ASC');
		return $this->db->get()->result();
	}

}