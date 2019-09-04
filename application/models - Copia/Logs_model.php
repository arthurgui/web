<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Logs_model extends CI_model{

	function salvar($dados){
		$this->dados['db_conecta']->insert('logs',$dados);
		return $this->dados['db_conecta']->insert_id();
	}

	function update($dados,$id){
		$this->dados['db_conecta']->where('id', $id)
								->update('logs',$dados);
		return $this->dados['db_conecta']->affected_rows();
	}

	function consultar(){
		
	}

	function consultarPorId($id){
		
	}

	function selecionarLogsPorIdLicenca($id_licenca){
		$this->dados['db_conecta']->select(
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
		return $this->dados['db_conecta']->get()->result();
	}

	function excluir($id){
		$this->dados['db_conecta']->delete('logs',array('id' => $id));
	}

	function selecionar(){
		
	}

	function selecionarPorStatus($status){
		
	}
}