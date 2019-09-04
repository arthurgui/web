<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Documentos_tipos_licencas_model extends CI_model{

	function salvar($dados){
		$this->dados['db_conecta']->insert('documentos_tipo_licenca',$dados);
	}

	function update($dados,$id){
		$this->dados['db_conecta']->where('id', $id)
				->update('documentos_tipo_licenca',$dados);
	}

	function consultar(){
		
	}

	function consultarById($id){
		$this->dados['db_conecta']->select('*')
				->from('documentos_tipo_licenca')
				->where('id',$id);
		return $this->dados['db_conecta']->get()->row();
	}

	function consultarByTipoLicenca($id_tipo_licenca){
		$this->dados['db_conecta']->select(
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

		return $this->dados['db_conecta']->get()->result();
	}

	function consultarPorTipoLicenca($id_tipo_licenca){
		$this->dados['db_conecta']->select(
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

		return $this->dados['db_conecta']->get()->result();
	}

	function consultarByTiposLicencaseLicenca($id_tipo_licenca, $id_licenca){
		$this->dados['db_conecta']->select(
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

		return $this->dados['db_conecta']->get()->result();
	}

	function consultarByTiposLicencaseLicencaRenovacao($id_tipo_licenca, $id_licenca){
		$this->dados['db_conecta']->select(
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
		return $this->dados['db_conecta']->get()->result();
	}

	function consultarObrigatoriosByTipoLicenca($id_tipo_licenca){
		$this->dados['db_conecta']->select(
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
		return $this->dados['db_conecta']->get()->result();
	}

	function excluir($id){
		$this->dados['db_conecta']->delete('documentos_tipo_licenca',array('id' => $id));
	}

	function selecionar(){
		$this->dados['db_conecta']->select('*');
		$this->dados['db_conecta']->from('documentos_tipo_licenca');
		$this->dados['db_conecta']->order_by('ordem ASC');
		return $this->dados['db_conecta']->get()->result();
	}

	function selecionarByTipoLicenca($id_tipo_licenca){
		$this->dados['db_conecta']->select(
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

		return $this->dados['db_conecta']->get()->result();
	}
}