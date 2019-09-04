<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Usuarios_model extends CI_model{

	if ($this->session->userdata('empresa')) {
		/* Conexão com a Empresa */
		function salvar($dados){
			$this->dados['db_conecta']->insert('usuarios',$dados);
			return $this->dados['db_conecta']->insert_id();
		}

		function update($dados,$id){
			$this->dados['db_conecta']->where('id', $id)
									->update('usuarios',$dados);
			return $this->dados['db_conecta']->affected_rows();
		}

		function consultar(){
			
		}

		function consultarPorId($id){
			$this->dados['db_conecta']->select(
												'*,
												(CASE perfil
						 							WHEN "A" THEN "Administrador"
						 							WHEN "O" THEN "Operador"
						 							WHEN "S" THEN "Superusuário"
						 						END)			AS	uperfil'
											)
					->from('usuarios')
					->where('id',$id);
			return $this->dados['db_conecta']->get()->row();
		}

		function excluir($id){
			$this->dados['db_conecta']->delete('usuarios',array('id' => $id));
		}

		function selecionar(){
			$this->dados['db_conecta']->select(
							'u.id			As	uid,
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
							u.assinatura	AS	uassinatura');
			$this->dados['db_conecta']->from('usuarios u');
			$this->dados['db_conecta']->order_by('u.nome ASC');
			return $this->dados['db_conecta']->get()->result();
		}

		function login($login,$senha){
			$this->dados['db_conecta']->select(
							'u.id			As	uid,
							u.nome			AS	unome,
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
							u.email			AS	uemail,
							u.ce_setor 		AS 	uce_setor,
							u.assinatura 	AS 	uassinatura,
							st.acesso_auxiliares,
							st.acesso_usuarios')
						->from('usuarios u')
						->join('setores st','u.ce_setor =	st.id','left')
						->where('login',$login)
						->where('senha',$senha);
			return $this->dados['db_conecta']->get()->row();
		}
		/* Conexão com a Empresa */
	}
	else{
		/* Conexão com PhysisWeb */
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
							'u.id			As	uid,
							u.nome			AS	unome,
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
							u.email			AS	uemail,
							u.ce_setor 		AS 	uce_setor')
					->from('usuarios u')
					->order_by('u.nome ASC');
			return $this->db->get()->result();
		}

		function login($login,$senha){
			$this->db->select(
							'u.id			As	uid,
							u.nome			AS	unome,
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
							u.email			AS	uemail,
							u.ce_setor 		AS 	uce_setor')
						->from('usuarios u')
						->where('login',$login)
						->where('senha',$senha);
			return $this->db->get()->row();
		}
		/* /Conexão com PhysisWeb */
	}
}