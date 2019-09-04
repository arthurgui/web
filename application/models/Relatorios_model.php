<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Relatorios_model extends CI_model {

	/* Relatórios Gerais */
	function salvar($dados) {
		$this->db->insert('relatorios', $dados);
		return ($this->db->affected_rows() != 1) ? false : true;
	}

	function editar($dados, $id) {
		$this->db->where('id', $id)
				->update('relatorios', $dados);
		return ($this->db->affected_rows() != 1) ? false : true;
	}

	function consulta($nome_relatorio, $titulo_relatorio) {
		$this->db->select('*')
				->from('relatorios')
				->like('nome_relatorio', $nome_relatorio)
				->like('titulo_relatorio', $titulo_relatorio)
				->order_by('titulo_relatorio ASC');
		return $this->db->get()->result();
	}

	function consultaCamposByRelatorio($idRelatorio) {
		$this->db->select(
						'r.titulo_relatorio			AS titulo_relatorio,
						r.logomarca					AS logomarca,
						r.tam_papel					AS tam_papel,
						r.orientacao				AS orientacao,
						r.fonte_rodape				AS fonte_rodape,
						r.fonte_detalhe				AS fonte_detalhe,
						r.fonte_titulo				AS fonte_titulo,
						r.tam_fonte_rodape			AS tam_fonte_rodape,
						r.tam_fonte_detalhe			AS tam_fonte_detalhe,
						r.tam_fonte_titulo			AS tam_fonte_titulo,
						r.campo_agrupamento			AS campo_agrupamento,
						r.tipo_campo_agrupamento	AS tipo_campo_agrupamento,
						r.titulo_agrupamento		AS titulo_agrupamento,
					   cr.cabecalho					AS cabecalho,
					   cr.tipo						AS tipo,
					   cr.origem					AS origem,
					   cr.nome						AS nome,
					   cr.posx						AS posx,
					   cr.alinhamento				AS alinhamento,
					   cr.tamanho					AS tamanho,
					   cr.calculo					AS calculo,
					   cr.pode_repetir				AS pode_repetir,
					   cr.ordem						AS ordem'
					)
					->from('relatorios r')
					->join('campos_relatorios cr', 'cr.ce_relatorio = r.id', 'INNER')
					->where("cr.ce_relatorio = $idRelatorio")
					->order_by('cr.ordem ASC');
		return $this->db->get()->result_array();
	}

	function consultarById($id) {
		$this->db->select('*')
				->from('relatorios')
				->where('id', $id);
		return $this->db->get()->row();
	}

	function excluir($id) {
		$this->db->where('id', $id)
			->delete('relatorios');
		return ($this->db->affected_rows() != 1) ? false : true;
	}

	function selecionar() {
		$this->db->select('*')
				->from('relatorios')
				->order_by('titulo_relatorio ASC');
		return $this->db->get()->result();
	}
	/* /Relatórios Gerais */

	/* Relatórios da Empresa */
	function salvarRelEmpresa($dados) {
		$this->db->insert('relatorios_empresas', $dados);
		return ($this->db->affected_rows() != 1) ? false : true;
	}

	function editarRelEmpresa($dados, $id) {
		$this->db->where('id', $id)
				->update('relatorios_empresas', $dados);
		return ($this->db->affected_rows() != 1) ? false : true;
	}

	function consultarRelEmpresaById($idRelatorio) {
		$this->db->select('*')
				->from('relatorios_empresas')
				->where('id', $idRelatorio);
		return $this->db->get()->row();
	}

	function consultarRelEmpresaByIdRel($idRelatorio) {
		$this->db->select('*')
				->from('relatorios_empresas')
				->where('ce_relatorio', $idRelatorio);
		return $this->db->get()->row();
	}

	function selecionarRelEmpresaDistinctByOpcaoMenu($idEmpresa) {
		$this->db->select(
						'DISTINCT(re.opcao_menu) AS opcao_menu,
						re.titulo_opcao_menu'
					)
					->from('relatorios_empresas re')
					->join('relatorios rl', 're.ce_relatorio = rl.id', 'INNER')
					->where('re.ce_empresa', $idEmpresa)
					->order_by('rl.nome_relatorio ASC');
		return $this->db->get()->result();
	}

	function selecionarRelEmpresaByIdEmpresa($idEmpresa, $opcaoMenu = '') {
		$this->db->select(
						're.id,
						re.ce_empresa,
						re.opcao_menu,
						re.titulo_relatorio,
						re.ce_relatorio,
						re.sql,
						re.ordenacao,
						rl.nome_relatorio,
						rl.titulo_relatorio AS rltitulo_relatorio'
					)
					->from('relatorios_empresas re')
					->join('relatorios rl', 're.ce_relatorio = rl.id', 'INNER')
					->like('re.opcao_menu', $opcaoMenu)
					->where('re.ce_empresa', $idEmpresa)
					->order_by('rl.nome_relatorio ASC');
		return $this->db->get()->result();
	}

	function excluirRelEmpresa($id) {
		$this->db->where('id', $id)
				->delete('relatorios_empresas');
		return ($this->db->affected_rows() != 1) ? false : true;
	}
	/* /Relatórios da Empresa */

	// Campos Relatórios
	function salvarCampoRelatorio($dados) {
		$this->db->insert('campos_relatorios', $dados);
		return ($this->db->affected_rows() != 1) ? false : true;
	}

	function salvarCamposRelatorio($dados) {
		$this->db->insert_batch('campos_relatorios', $dados);
		return ($this->db->affected_rows() != 1) ? false : true;
	}

	function consultarCamposRelatorioByIdRelatorio($idRelatorio) {
		$this->db->select('*')
				->from('campos_relatorios')
				->where('ce_relatorio', $idRelatorio);
		return $this->db->get()->row();
	}

	function selecionarCamposRelatorioByIdRelatorio($idRelatorio) {
		$this->db->select('*')
				->from('campos_relatorios')
				->where('ce_relatorio', $idRelatorio);
		return $this->db->get()->result();
	}

	function consultarCamposRelatorioById($idCampo) {
		$this->db->select('*')
				->from('campos_relatorios')
				->where('id', $idCampo);
		return $this->db->get()->row();
	}

	function editarCampoRelatorio($dados, $idCampo) {
		$this->db->where('id', $idCampo)
				 ->update('campos_relatorios', $dados);
		return ($this->db->affected_rows() != 1) ? false : true;
	}

	function excluirCampoRelatorio($idCampo) {
		$this->db->where('id', $idCampo)
				->delete('campos_relatorios');
		return ($this->db->affected_rows() != 1) ? false : true;
	}

	function excluirCamposRelatorioByIdRelatorio($idRelatorio) {
		$this->db->where('ce_relatorio', $idRelatorio)
				->delete('campos_relatorios');
		return ($this->db->affected_rows() < 1) ? false : true;
	}

	function executaQuery($query) {
		$consulta 	=	$this->db->query($query);
		return $consulta->result_array();
	}
}