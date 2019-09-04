<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Licencas_model extends CI_model{

	function salvar($dados){
		$this->dados['db_conecta']->insert('licencas',$dados);
		return $this->dados['db_conecta']->insert_id();
	}

	function update($dados,$id){
		$this->dados['db_conecta']->where('id', $id)
								->update('licencas',$dados);
		return $this->dados['db_conecta']->affected_rows();
	}

	function consultar(){
		
	}

	function consultarPorId($id){
		$this->dados['db_conecta']->select(
											'l.*,
											r.id						AS	rid,
											r.tipo_pessoa				AS	rtipo_pessoa,
											r.cpf_cnpj					AS	rcpf_cnpj,
											r.nome_razaosocial			AS	rnome_razaosocial,
											r.rg_ie						AS	rrg_ie,
											r.logradouro				AS	rlogradouro,
											r.numero					AS	rnumero,
											r.complemento				AS	rcomplemento,
											r.bairro					AS	rbairro,
											r.cep						AS	rcep,
											r.cidade					AS	rcidade,
											r.uf						AS	ruf,
											r.nome_rep1					AS	rnome_rep1,
											r.cpf_rep1					AS	rcpf_rep1,
											r.nome_rep2					AS	rnome_rep2,
											r.cpf_rep2					AS	rcpf_rep2,
											r.nome_rep3					AS	rnome_rep3,
											r.cpf_rep3					AS	rcpf_rep3,
											r.nome_contato				AS	rnome_contato,
											r.tel_contato				AS	rtel_contato,
											r.endereco_contato			AS	rendereco_contato,
											r.email_contato				AS	remail_contato,
											tl.id						AS	tlid,
											tl.descricao				AS	tldescricao,
											tl.periodo_validade			AS	tlperiodo_validade,
											tl.detalhe					AS	tldetalhe'
										)
								->from('licencas		l')
								->join('requerentes		r','l.ce_requerente		=	r.id','inner')
								->join('tipos_licencas	tl','l.ce_tipo_licenca	=	tl.id','inner')
								->where('l.id',$id);
		return $this->dados['db_conecta']->get()->row();
	}

	function consultarPorRequerente($id_requerente){
		$this->dados['db_conecta']->select(
											'l.*,
											CASE(l.status)
												WHEN	"PR"	THEN	"Protocolo"
												WHEN	"AN"	THEN	"Análise"
												WHEN	"AP"	THEN	"Aprovação"
												WHEN	"AU"	THEN	"Auditoria"
												WHEN	"FI"	THEN	"Finalizado"
												WHEN	"IN"	THEN	"Indeferido"
											END							AS	lstatus,
											tl.id						AS	tlid,
											tl.descricao				AS	tldescricao,
											tl.periodo_validade			AS	tlperiodo_validade,
											tl.detalhe					AS	tldetalhe'
										)
								->from('licencas		l')
								->join('requerentes		r','l.ce_requerente		=	r.id','inner')
								->join('tipos_licencas	tl','l.ce_tipo_licenca	=	tl.id','inner')
								->where('l.ce_requerente',$id_requerente);
		return $this->dados['db_conecta']->get()->result();
	}

	function excluir($id){
		$this->dados['db_conecta']->delete('licencas',array('id' => $id));
	}

	function selecionar(){
		$this->dados['db_conecta']->select(
											'l.*,
											tl.descricao		AS	desc_tipo_licenca,
											r.tipo_pessoa		AS	rtipo_pessoa,
											r.cpf_cnpj			AS	rcpf_cnpj,
											r.nome_razaosocial	AS	rnome_razaosocial'
										)
				 			->from('licencas l')
				 			->join('tipos_licencas tl','l.ce_tipo_licenca = tl.id','inner')
				 			->join('requerentes r','l.ce_requerente = r.id','inner')
							->order_by('r.nome_razaosocial ASC');
		return $this->dados['db_conecta']->get()->result();
	}

	function selecionarPorStatus($status){
		$this->dados['db_conecta']->select(
											'l.*,
											tl.descricao		AS	desc_tipo_licenca,
											r.id				AS	rid,
											r.tipo_pessoa		AS	rtipo_pessoa,
											r.cpf_cnpj			AS	rcpf_cnpj,
											r.nome_razaosocial	AS	rnome_razaosocial'
										)
				 			->from('licencas l')
				 			->join('tipos_licencas tl','l.ce_tipo_licenca = tl.id','inner')
				 			->join('requerentes r','l.ce_requerente = r.id','inner')
				 			->where('l.status',$status)
							->order_by('r.nome_razaosocial ASC');
		return $this->dados['db_conecta']->get()->result();
	}
}