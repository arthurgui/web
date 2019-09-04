<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Cadastro_model extends CI_model{

	function salvar($dados){
		return $this->db->insert('cadastros',$dados);
	}

	function salvar_dados($tabela, $dados){
		return $this->db->insert($tabela, $dados);
	}

	function update($dados,$id){
		return $this->db->where('id', $id)
				->update('cadastros',$dados);
	}

	function update_dados($tabela, $id, $dados){
		return $this->db->where('id', $id)
				->update($tabela, $dados);
	}

	function consultar(){
		
	}

	function consultarById($id){
		$this->db->select('*')
				->from('cadastros')
				->where('id',$id);
		return $this->db->get()->row();
	}

	function selecionar_dadosById($tabela, $id){
		$this->db->select('*')
				->from("$tabela")
				->where('id',$id);
		return $this->db->get()->row_array();
	}

	function excluir($id){
		return $this->db->delete('cadastros',array('id' => $id));
	}

	function excluir_dados($tabela, $id){
		return $this->db->delete($tabela, array('id' => $id));
	}

	function selecionar(){
		$this->db->select('*')
				->from('cadastros')
				->order_by('descricao ASC');
		return $this->db->get()->result();
	}

	function selecionar_dados($nome_tabela, $campo_ordenacao){
		$this->db->select('*')
				->from("$nome_tabela")
				->order_by("$campo_ordenacao ASC");
		return $this->db->get()->result();
	}

	function campos_consulta($id_cadastro){
		$this->db->select('*')
				->from("campos_cadastros")
				->where('cadastro',$id_cadastro)
				->where('ordem_exibicao > 0')
				->order_by('ordem_exibicao asc');
		return $this->db->get()->result();
	}

	function campos_cadastro($id_cadastro){
		$this->db->select('*')
				->from("campos_cadastros")
				->where('cadastro',$id_cadastro)
				->where('ordem_cadastro > 0')
				->order_by('ordem_cadastro asc');
		return $this->db->get()->result();
	}

	function salvarCampo($dados) {
		$this->db->insert('campos_cadastros', $dados);
	}

	function updateCampo($dados, $id) {
		$this->db->where('id', $id)
				->update('campos_cadastros', $dados);
	}

	function excluirCampo($id) {
		$this->db->delete('campos_cadastros', array('id' => $id));
	}

	function selecionar_campos($idCadastro) {
		$this->db->select('*')
				->from("campos_cadastros")
				->where('cadastro', $idCadastro)
				->order_by('ordem_exibicao ASC');
		return $this->db->get()->result();
	}

	function consultarCampoById($id) {
		$this->db->select('*')
				->from('campos_cadastros')
				->where('id', $id);
		return $this->db->get()->row();
	}

	function consultarCampoByFilter($filtro) {
		$this->db->select('*')
				->from('campos_cadastros')
				->where($filtro);
		return $this->db->get()->row();
	}
}