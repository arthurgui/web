<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Documentos_licenca_model extends CI_model{

	function salvar($dados){
		$this->db->insert('documentos_licenca',$dados);
	}

	function update($dados,$id){
		$this->db->where('id', $id)
				->update('documentos_licenca',$dados);
	}

	function consultar(){
		
	}

	function consultarPorId($id){
		$this->db->select(
											'dl.*,
											l.id				AS	lid,
											l.ce_requerente		AS lce_requerente,
											l.ce_tipo_licenca	AS	lce_tipo_licenca,
											l.codigo_letra		AS	lcodigo_letra,
											l.num_protocolo		AS	lnum_protocolo')
								->from('documentos_licenca	dl')
								->join('licencas	l','dl.ce_licenca	=	l.id','inner')
								->where('dl.id',$id);
		return $this->db->get()->row();
	}

	function consultarPorIdLicenca($id_licenca){
		$this->db->select(
											'dl.*,
											l.id				AS	lid,
											l.ce_requerente		AS lce_requerente,
											l.ce_tipo_licenca	AS	lce_tipo_licenca,
											l.codigo_letra		AS	lcodigo_letra,
											l.num_protocolo		AS	lnum_protocolo')
								->from('documentos_licenca	dl')
								->join('licencas	l','dl.ce_licenca	=	l.id','inner')
								->where('dl.ce_licenca',$id_licenca);
		return $this->db->get()->result();
	}

	function consultarPorTipoLicenca($id_tipo_licenca){
		$this->db->select(
						'dtl.*,
						CASE (dtl.sn_obrigatorio)
							WHEN "S" THEN "OBG"
							WHEN "N" THEN "OPC"
						END					AS 	tipo_insercao,
						tl.id				AS	tlid,
						tl.descricao		AS	tldescricao,
						td.id				AS	tdid,
						td.descricao		AS	tddescricao,
						td.nome_abreviado	AS	tdnome_abreviado,
						td.link				AS	tdlink,
						dl.id       		AS 	dlid')
				->from('documentos_tipo_licenca	dtl')
				->join('tipos_licencas		tl','dtl.ce_tipo_licenca	=	tl.id'	,'inner')
				->join('tipos_documentos	td','dtl.ce_tipo_documento	=	td.id'	,'inner')
				->join('documentos_licenca	dl','td.descricao			=	dl.descricao',"left")
				->where('dtl.ce_tipo_licenca',$id_tipo_licenca)
				->order_by('td.descricao');

		return $this->db->get()->result();
	}

	function excluir($id){
		$this->db->delete('documentos_licenca',array('id' => $id));
	}

	function selecionar(){
		$this->db->select('*');
		$this->db->from('documentos_licenca');
		$this->db->order_by('ordem ASC');
		return $this->db->get()->result();
	}

	function selecionarPorTipoLicenca($id_tipo_licenca){
		$this->db->select(
						'dtl.*,
						CASE (dtl.sn_obrigatorio)
							WHEN "S" THEN "OBG"
							WHEN "N" THEN "OPC"
						END					AS 	tipo_insercao,
						tl.id				AS	tlid,
						tl.descricao		AS	tldescricao,
						td.id				AS	tdid,
						td.descricao		AS	tddescricao,
						td.nome_abreviado	AS	tdnome_abreviado,
						td.link				AS	tdlink,
						dl.id       		AS 	dlid')
				->from('documentos_tipo_licenca	dtl')
				->join('tipos_licencas		tl','dtl.ce_tipo_licenca	=	tl.id','inner')
				->join('tipos_documentos	td','dtl.ce_tipo_documento	=	td.id','inner')
				->join('documentos_licenca	dl','td.descricao			=	dl.descricao',"left")
				->where('dtl.ce_tipo_licenca',$id_tipo_licenca)
				->order_by('td.descricao');

		return $this->db->get()->result();
	}
}