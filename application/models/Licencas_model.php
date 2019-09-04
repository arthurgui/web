<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Licencas_model extends CI_model{

	function salvar($dados){
		$this->db->insert('licencas',$dados);
		return $this->db->insert_id();
	}

	function update($dados,$id){
		$this->db->where('id', $id)
				->update('licencas',$dados);
		return $this->db->affected_rows();
	}

	function consultar(){
		
	}

	function consultarPorId($id){
		$this->db->select(
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
							tl.detalhe					AS	tldetalhe,
							u.nome						AS	upnome,
							u.assinatura				AS	upassinatura,
							f.descricao					AS	upfuncao'
						)
				->from('licencas		l')
				->join('requerentes		r', 'l.ce_requerente = r.id', 'INNER')
				->join('tipos_licencas	tl', 'l.ce_tipo_licenca = tl.id', 'INNER')
				->join('usuarios		u', 'l.ce_usuario_aprovacao = u.id', 'LEFT')
				->join('funcoes			f', 'u.ce_funcao = f.id', 'LEFT')
				->where('l.id', $id);
		return $this->db->get()->row();
	}

	function consultarPorRequerente($id_requerente){
		$this->db->select(
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
		return $this->db->get()->result();
	}

	function consultarPorNumProtocolo($num_protocolo){
		$this->db->select(
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
				->join('requerentes		r','l.ce_requerente		=	r.id' ,'inner')
				->join('tipos_licencas	tl','l.ce_tipo_licenca	=	tl.id','inner')
				->where('l.num_protocolo',$num_protocolo);
		return $this->db->get()->row();
	}

	function excluir($id){
		$this->db->delete('licencas',array('id' => $id));
	}

	function selecionar(){
		$this->db->select(
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
		return $this->db->get()->result();
	}

	function selecionarPorStatus($status){
		$this->db->select(
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
		return $this->db->get()->result();
	}

	function selecionarParaNumParecer($id_usuario,$ano){
		$this->db->select('l.*')
				->from('licencas l')
				->join('usuarios u','l.ce_usuario_parecer	=	u.id','inner')
				->where('u.id',$id_usuario)
				->where('SUBSTR(l.num_parecer,-4)',$ano)
				->order_by('l.num_parecer	DESC')
				->limit('1');
		return $this->db->get()->row();
	}
}