<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Usuarios_model extends CI_model{

	function salvar($dados){
		$this->db->insert('usuarios',$dados);
		return $this->db->insert_id();
	}

	function update($dados,$id){
		$this->db->where('id', $id)
				->update('usuarios',$dados);
		return $this->db->affected_rows();
	}

	function consultar(){
			
	}

	function consultarPorId($id){
		$this->db->select(
						'*,
						(CASE perfil
 							WHEN "A" THEN "Administrador"
 							WHEN "O" THEN "Operador"
 							WHEN "S" THEN "Superusuário"
 						END)			AS	uperfil'
						)
				->from('usuarios')
				->where('id',$id);
		return $this->db->get()->row();
	}

	function excluir($id){
		$this->db->delete('usuarios',array('id' => $id));
	}

	function selecionar(){
		$this->db->select(
						'u.id				As	uid,
							u.nome			AS	unome,
							u.login			AS	ulogin,
							(CASE u.status
	 							WHEN "A" THEN "Ativo"
	 							WHEN "I" THEN "Inativo"
	 						END)			AS	ustatus,
							(CASE u.perfil
	 							WHEN "A" THEN "Autorizador"
	 							WHEN "O" THEN "Operador"
	 							WHEN "S" THEN "Master"
	 						END)			AS	uperfil,
							u.email			AS	uemail,
							u.ce_setor 		AS 	uce_setor,
							u.assinatura	AS	uassinatura')
				->from('usuarios u')
				->order_by('u.nome ASC');
		return $this->db->get()->result();
	}

	function login($login,$senha){
		$this->db->select(
						'u.id			As	uid,
						u.nome			AS	unome,
						u.matricula		AS	umatricula,
						u.login			AS	ulogin,
						(CASE u.status
 							WHEN "A" THEN "Ativo"
 							WHEN "I" THEN "Inativo"
 						END)			AS	ustatus,
						(CASE u.perfil
 							WHEN "A" THEN "Administrador"
 							WHEN "O" THEN "Operador"
 							WHEN "S" THEN "Superusuário"
 						END)			AS	uperfil,
 						u.perfil 		AS 	perfil,
						u.email			AS	uemail,
						u.ce_setor 		AS 	uce_setor')
					->from('usuarios u')
					->where('login',$login)
					->where('senha',$senha);
		return $this->db->get()->row();
	}
	function loginEmpresa($login,$senha){
		$this->db->select(
							'u.id			As	uid,
							u.nome			AS	unome,
							u.matricula		AS	umatricula,
							u.login			AS	ulogin,
							(CASE u.status
	 							WHEN "A" THEN "Ativo"
	 							WHEN "I" THEN "Inativo"
	 						END)			AS	ustatus,
							(CASE u.perfil
	 							WHEN "A" THEN "Administrador"
	 							WHEN "O" THEN "Operador"
	 							WHEN "S" THEN "Superusuário"
	 						END)			AS	uperfil,
	 						u.perfil 		AS 	perfil,
							u.email			AS	uemail,
							u.ce_setor 		AS 	uce_setor,
							u.assinatura 	AS 	uassinatura,
							st.id			AS	stid,
							st.descricao	AS	stdescricao,
							st.acesso_auxiliares,
							st.acesso_auxgerais,
							st.acesso_auxfiscalizacao,
							st.acesso_auxlicencas,
							st.acesso_fiscalizacao,
							st.acesso_fisadicionar,
							st.acesso_fisdistribuir,
							st.acesso_licencas,
							st.acesso_relatorios,
							st.acesso_usuarios,
							st.acesso_requerentes,
							st.acesso_protocolos,
							st.acesso_analises,
							st.acesso_aprovacoes,
							st.acesso_auditoria,
							st.acesso_finalizados,
							st.acesso_indeferidos,
							st.acesso_licenrelatorios,
							f.id			AS	fid,
							f.descricao		AS	fdescricao')
						->from('usuarios u')
						->join('setores st','u.ce_setor =	st.id','left')
						->join('funcoes	f','u.ce_funcao	=	f.id','left')
						->where('login',$login)
						->where('senha',$senha);
		return $this->db->get()->row();
	}
}