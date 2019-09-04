<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Documentos_tipos_licencas_model extends CI_model{

	function salvar($dados){
		$this->db->insert('documentos_tipo_licenca',$dados);
	}

	function update($dados,$id){
		$this->db->where('id', $id)
				->update('documentos_tipo_licenca',$dados);
	}

	function consultar(){
		
	}

	function consultarById($id){
		$this->db->select('*')
				->from('documentos_tipo_licenca')
				->where('id',$id);
		return $this->db->get()->row();
	}

	function consultarByTipoLicenca($id_tipo_licenca){
		$this->db->select(
						'dtl.*,
						tl.id				AS	tlid,
						tl.descricao		AS	tldescricao,
						td.id				AS	tdid,
						td.descricao		AS	tddescricao,
						td.link				AS	tdlink,
						dl.id       		AS 	dlid')
				->from('documentos_tipo_licenca	dtl')
				->join('tipos_licencas		tl','dtl.ce_tipo_licenca	=	tl.id'	,'inner')
				->join('tipos_documentos	td','dtl.ce_tipo_documento	=	td.id'	,'inner')
				->join("documentos_licenca	dl"," td.descricao			=	dl.descricao and dl.ce_licenca = '$id_licenca'","left")
				->where('dtl.ce_tipo_licenca',$id_tipo_licenca)
				->order_by('td.descricao');

		return $this->db->get()->result();
	}

	function consultarPorTipoLicenca($id_tipo_licenca){
		$this->db->select(
						'dtl.*,
						tl.id				AS	tlid,
						tl.descricao		AS	tldescricao,
						td.id				AS	tdid,
						td.descricao		AS	tddescricao,
						td.link				AS	tdlink,
						dl.id       		AS 	dlid')
				->from('documentos_tipo_licenca	dtl')
				->join('tipos_licencas		tl','dtl.ce_tipo_licenca	=	tl.id'	,'inner')
				->join('tipos_documentos	td','dtl.ce_tipo_documento	=	td.id'	,'inner')
				->join("documentos_licenca	dl"," td.descricao			=	dl.descricao and dl.ce_licenca = '$id_licenca'","left")
				->where('dtl.ce_tipo_licenca',$id_tipo_licenca)
				->order_by('td.descricao');

		return $this->db->get()->result();
	}

	function consultarByTiposLicencaseLicenca($id_tipo_licenca, $id_licenca){
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
						td.link				AS	tdlink,
						dl.id       		AS 	dlid')
				->from('documentos_tipo_licenca	dtl')
				->join('tipos_licencas		tl','dtl.ce_tipo_licenca	=	tl.id','inner')
				->join('tipos_documentos	td','dtl.ce_tipo_documento	=	td.id','inner')
				->join("documentos_licenca	dl"," td.descricao			=	dl.descricao and dl.ce_licenca = '$id_licenca'","left")
				->where('dtl.ce_tipo_licenca',$id_tipo_licenca)
				->where('dtl.sn_renovacao','N')
				->order_by('dtl.ordem, td.descricao');

		return $this->db->get()->result();
	}

	function consultarByTiposLicencaseLicencaRenovacao($id_tipo_licenca, $id_licenca){
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
						td.link				AS	tdlink,
						dl.id       		AS 	dlid')
				->from('documentos_tipo_licenca	dtl')
				->join('tipos_licencas		tl','dtl.ce_tipo_licenca	=	tl.id','inner')
				->join('tipos_documentos	td','dtl.ce_tipo_documento	=	td.id','inner')
				->join("documentos_licenca	dl"," td.descricao	=	dl.descricao and dl.ce_licenca = '$id_licenca'","left")
				->where('dtl.ce_tipo_licenca',$id_tipo_licenca)
				->order_by('dtl.ordem, td.descricao');
		return $this->db->get()->result();
	}

	function consultarObrigatoriosByTipoLicenca($id_tipo_licenca){
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
						td.link				AS	tdlink')
				->from('documentos_tipo_licenca	dtl')
				->join('tipos_licencas		tl','dtl.ce_tipo_licenca	=	tl.id','inner')
				->join('tipos_documentos	td','dtl.ce_tipo_documento	=	td.id','inner')
				->where('dtl.ce_tipo_licenca',$id_tipo_licenca)
				->where('dtl.sn_obrigatorio','S')
				->where('dtl.sn_renovacao', 'N')
				->order_by('td.descricao');
		return $this->db->get()->result();
	}

	function excluir($id){
		$this->db->delete('documentos_tipo_licenca',array('id' => $id));
	}

	function selecionar(){
		$this->db->select('*');
		$this->db->from('documentos_tipo_licenca');
		$this->db->order_by('ordem ASC');
		return $this->db->get()->result();
	}

	function selecionarByTipoLicenca($id_tipo_licenca){
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
						td.link				AS	tdlink,
						dl.id       		AS 	dlid')
				->from('documentos_tipo_licenca	dtl')
				->join('tipos_licencas		tl','dtl.ce_tipo_licenca	=	tl.id','inner')
				->join('tipos_documentos	td','dtl.ce_tipo_documento	=	td.id','inner')
				->join("documentos_licenca	dl"," td.descricao			=	dl.descricao and dl.ce_licenca = '$id_licenca'","left")
				->where('dtl.ce_tipo_licenca',$id_tipo_licenca)
				->order_by('td.descricao');

		return $this->db->get()->result();
	}
}