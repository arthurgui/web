<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Logs_model extends CI_model{

	function salvar($dados){
		$this->db->insert('logs',$dados);
		return $this->db->insert_id();
	}

	function update($dados,$id){
		$this->db->where('id', $id)
								->update('logs',$dados);
		return $this->db->affected_rows();
	}

	function consultar(){
		
	}

	function consultarPorId($id){
		
	}

	function selecionarLogsPorIdLicenca($id_licenca){
		$this->db->select(
											'lg.*,
											CASE(lg.status_anterior)
												WHEN	"PR"	THEN	"Protocolo"
												WHEN	"AN"	THEN	"Análise"
												WHEN	"AP"	THEN	"Aprovação"
												WHEN	"AU"	THEN	"Auditoria"
												WHEN	"FI"	THEN	"Finalizado"
												WHEN	"IN"	THEN	"Indeferido"
											END							AS	lgstatus_anterior,
											CASE(lg.status_atual)
												WHEN	"PR"	THEN	"Protocolo"
												WHEN	"AN"	THEN	"Análise"
												WHEN	"AP"	THEN	"Aprovação"
												WHEN	"AU"	THEN	"Auditoria"
												WHEN	"FI"	THEN	"Finalizado"
												WHEN	"IN"	THEN	"Indeferido"
											END							AS	lgstatus_atual,
											u.id	AS	uid,
											u.nome	AS	unome,
											u.login	AS	ulogin')
								->from('logs	lg')
								->join('licencas	l','lg.ce_licenca	=	l.id','inner')
								->join('usuarios	u','lg.ce_usuario	=	u.id','inner')
								->where('lg.ce_licenca',$id_licenca)
								->order_by('lg.data_hora DESC');
		return $this->db->get()->result();
	}

	function excluir($id){
		$this->db->delete('logs',array('id' => $id));
	}

	function selecionar(){
		
	}

	function selecionarPorStatus($status){
		
	}
}