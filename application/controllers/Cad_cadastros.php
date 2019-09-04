<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Cad_cadastros extends MY_Controller {

	public function __construct(){
		parent::__construct();

		$this->load->model('cadastro_model');
		$this->load->model('tabelas_model');
	}

	public function index() {
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['cadastros']	=	$this->cadastro_model->selecionar();
		$this->dados['conteudo']	=	'layouts/cad_cadastros_view';
		$this->load->view('layouts/layout_sistema', $this->dados);
	}

	public function adicionar() {
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		if ($this->input->post()) {
			$dados 	=	elements(
							array(
								'id',
								'descricao',
								'nome_tabela',
								'campo_ordenacao',
							),
							$this->input->post());

			$cadastro = $this->cadastro_model->consultarById($dados['id']);

			if (!$cadastro) {
				$insert		=	$this->cadastro_model->salvar($dados);
				$itens_menu	=	$this->cadastro_model->selecionar();
				$this->session->set_userdata('itens_menu', $itens_menu);
				
				if ($insert['code'] == 0) {	// CRIA UMA TABELA NO BANCO DE DADOS COM O NOME DEFINIDO
					$this->session->set_flashdata(
						'salvar',
						'<div class="alert alert-success" role="alert">
							<button type="button" class="close" data-dismiss="alert" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
							<i class="fa fa-check"></i>&nbsp;Registro SALVO com sucesso.
						</div>'
					);
				}
				else {
					$this->session->set_flashdata(
						'salvar',
						'<div class="alert alert-danger" role="alert">
							<button type="button" class="close" data-dismiss="alert" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
							<i class="fa fa-times"></i>&nbsp;Erro ao salvar registro!<br>Erro: '. $insert['code'] .'|'. $insert['message'] .'
						</div>'
					);
				}
			}
			else {
				$this->session->set_flashdata(
					'salvar',
					'<div class="alert alert-danger" role="alert">
						<button type="button" class="close" data-dismiss="alert" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<i class="fa fa-times"></i>&nbsp;Erro ao salvar registro! Não é possível adicionar um cadastro com a mesma <STRONG>URL</STRONG>!
					</div>'
				);
			}
		}

		$this->dados['salvar']		=	"cad_cadastros/adicionar";
		$this->dados['voltar']		=	base_url("cad_cadastros");
		$this->dados['conteudo']	=	'layouts/cad_cadastros_adicionar_view';
		$this->load->view('layouts/layout_sistema', $this->dados);
	}

	public function editar($idCadastro) {
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		if ($this->input->post()) {
			$dados	=	elements(
							array(
								'id',
								'descricao',
								'nome_tabela',
								'campo_ordenacao',
							),
							$this->input->post());

			$cadastro = $this->cadastro_model->consultarById($idCadastro);

			if (!$cadastro || $cadastro->id == $dados['id']) {
				$update = $this->cadastro_model->update($dados, $idCadastro);
				$itens_menu	=	$this->cadastro_model->selecionar();
				$this->session->set_userdata('itens_menu', $itens_menu);

				if ($update['code'] == 0) {
					$this->session->set_flashdata(
						'salvar',
						'<div class="alert alert-success" role="alert">
							<button type="button" class="close" data-dismiss="alert" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
							<i class="fa fa-check"></i>&nbsp;Registro SALVO com sucesso.
						</div>'
					);
				}
				else {
					$this->session->set_flashdata(
						'salvar',
						'<div class="alert alert-danger" role="alert">
							<button type="button" class="close" data-dismiss="alert" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
							<i class="fa fa-times"></i>&nbsp;Erro ao SALVAR registro!<br>Erro: '. $update['code'] .'|'. $update['message'] .'
						</div>'
					);
				}
			}
			else {
				$this->session->set_flashdata(
					'salvar',
					'<div class="alert alert-danger" role="alert">
						<button type="button" class="close" data-dismiss="alert" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<i class="fa fa-times"></i>&nbsp;Erro ao salvar registro! Não é possível ter dois cadastros com a mesma <STRONG>URL</STRONG>!
					</div>'
				);
			}

		}

		$this->dados['cadastro']	=	$this->cadastro_model->consultarById($idCadastro);

		$this->dados['salvar']		=	"cad_cadastros/editar/$idCadastro";
		$this->dados['voltar']		=	base_url('cad_cadastros');
		$this->dados['conteudo']	=	'layouts/cad_cadastros_editar_view';
		$this->load->view('layouts/layout_sistema', $this->dados);
	}

	public function excluir($idCadastro) {
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$delete = $this->cadastro_model->excluir($idCadastro);

		$itens_menu	= $this->cadastro_model->selecionar();
		$this->session->set_userdata('itens_menu', $itens_menu);

		if ($delete['code'] == 0) {
			$this->session->set_flashdata(
				'excluir',
				'<div class="alert alert-success" role="alert">
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<i class="fa fa-check"></i>&nbsp;Registro EXCLUÍDO com sucesso.
				</div>'
			);
		}
		else {
			$this->session->set_flashdata(
				'excluir',
				'<div class="alert alert-danger" role="alert">
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<i class="fa fa-times"></i>&nbsp;Erro ao EXCLUIR registro!<br>Erro: '. $delete['code'] .'|'. $delete['message'] .'
				</div>'
			);
		}
		redirect(base_url('cad_cadastros'));
	}

	public function campos($idCadastro) {
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['cadastro']	=	$this->cadastro_model->consultarById($idCadastro);
		$this->dados['campos']		=	$this->cadastro_model->selecionar_campos($idCadastro);

		$this->dados['conteudo']	=	'layouts/cad_campos_view';
		$this->dados['voltar']		=	base_url('cad_cadastros');
		$this->load->view('layouts/layout_sistema', $this->dados);
	}

	public function adicionar_campo($idCadastro) {
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		if ($this->input->post()) {
			$dados 	=	elements(
							array(
								'cadastro',
								'label',
								'nome',
								'tipo',
								'tamanho',
								'valor_minimo',
								'valor_maximo',
								'ordem_exibicao',
								'ordem_cadastro',
								'class',
								'sn_obrigatorio',
								'onkeypress',
								'onkeyup',
								'colunas',
								'sn_nova_linha'
							),
							$this->input->post());

			$dados['sn_obrigatorio'] = ($dados['sn_obrigatorio'] == 'S') ? 'S' : 'N';
			$dados['sn_nova_linha'] = ($dados['sn_nova_linha'] == 'S') ? 'S' : 'N';
			
			$opcoes = (object)[];
			$tipo = $this->input->post('tipo_dados');
			$tabela = $this->input->post('tabela');
			$chave = $this->input->post('chave');
			$valor = $this->input->post('valor');
			$chaves = $this->input->post('chaves');
			$valores = $this->input->post('valores');

			if($tipo == 'tabela') {
				$opcoes = [
					"nome" => $tabela,
					"chave" => $chave,
					"valores" => explode(' ', $valor),
					"tipo" => "tabela"
				];
			}
			elseif($tipo == 'json') {
				foreach ($chaves as $i => $c)
					$opts[$c] = $valores[$i];

				$opcoes = [
					"opcoes" => $opts,
					"tipo" => "json"
				];
			}

			$dados['opcoes'] = json_encode($opcoes);

			$filtro	=	array(
							'cadastro'	=> $idCadastro,
							'nome'		=> $dados['nome'],
						);
			$campo = $this->cadastro_model->consultarCampoByFilter($filtro);

			if (!$campo) {
				$insert = $this->cadastro_model->salvarCampo($dados);

				if ($insert['code'] == 0) {	// CRIA UMA TABELA NO BANCO DE DADOS COM O NOME DEFINIDO
					$this->session->set_flashdata(
						'salvar',
						'<div class="alert alert-success" role="alert">
							<button type="button" class="close" data-dismiss="alert" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
							<i class="fa fa-check"></i>&nbsp;Registro SALVO com sucesso.
						</div>'
					);
				}
				else {
					$this->session->set_flashdata(
						'salvar',
						'<div class="alert alert-danger" role="alert">
							<button type="button" class="close" data-dismiss="alert" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
							<i class="fa fa-times"></i>&nbsp;Erro ao salvar registro!<br>Erro: '. $insert['code'] .'|'. $insert['message'] .'
						</div>'
					);
				}
			} else {
				$this->session->set_flashdata(
					'salvar',
					'<div class="alert alert-danger" role="alert">
						<button type="button" class="close" data-dismiss="alert" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<i class="fa fa-times"></i>&nbsp;Erro ao salvar registro! Não é possível adicionar um campo com o mesmo <STRONG>nome</STRONG>!
					</div>'
				);
			}
		}
		$this->dados['cadastro']	=	$this->cadastro_model->consultarById($idCadastro);

		$this->dados['salvar']		=	"cad_cadastros/adicionar_campo/$idCadastro";
		$this->dados['voltar']		=	base_url("cad_cadastros/campos/$idCadastro");
		$this->dados['conteudo']	=	'layouts/cad_campos_adicionar_view';
		$this->load->view('layouts/layout_sistema', $this->dados);
	}

	public function editar_campo($idCadastro, $idCampo) {
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		if ($this->input->post()) {
			$dados 	=	elements(
							array(
								'cadastro',
								'label',
								'nome',
								'tipo',
								'tamanho',
								'valor_minimo',
								'valor_maximo',
								'ordem_exibicao',
								'ordem_cadastro',
								'class',
								'sn_obrigatorio',
								'onkeypress',
								'onkeyup',
								'colunas',
								'sn_nova_linha'
							),
							$this->input->post());

			$dados['sn_obrigatorio'] = ($dados['sn_obrigatorio'] == 'S') ? 'S' : 'N';
			$dados['sn_nova_linha'] = ($dados['sn_nova_linha'] == 'S') ? 'S' : 'N';

			$opcoes = (object)[];
			$tipo = $this->input->post('tipo_dados');
			$tabela = $this->input->post('tabela');
			$chave = $this->input->post('chave');
			$valor = $this->input->post('valor');
			$chaves = $this->input->post('chaves');
			$valores = $this->input->post('valores');

			if($tipo == 'tabela') {
				$opcoes = [
					"nome" => $tabela,
					"chave" => $chave,
					"valores" => explode(' ', $valor),
					"tipo" => "tabela"
				];
			}
			elseif($tipo == 'json') {
				foreach ($chaves as $i => $c)
					$opts[$c] = $valores[$i];

				$opcoes = [
					"opcoes" => $opts,
					"tipo" => "json"
				];
			}

			$dados['opcoes'] = json_encode($opcoes);

			$filtro	=	array(
							'cadastro'	=> $idCadastro,
							'nome'		=> $dados['nome'],
						);
			$campo = $this->cadastro_model->consultarCampoByFilter($filtro);

			if (!$campo || $campo->nome == $dados['nome']) {
				$update = $this->cadastro_model->updateCampo($dados, $idCampo);

				if ($update['code'] == 0) {	// CRIA UMA TABELA NO BANCO DE DADOS COM O NOME DEFINIDO
					$this->session->set_flashdata(
						'salvar',
						'<div class="alert alert-success" role="alert">
							<button type="button" class="close" data-dismiss="alert" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
							<i class="fa fa-check"></i>&nbsp;Registro SALVO com sucesso.
						</div>'
					);
				}
				else {
					$this->session->set_flashdata(
						'salvar',
						'<div class="alert alert-danger" role="alert">
							<button type="button" class="close" data-dismiss="alert" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
							<i class="fa fa-times"></i>&nbsp;Erro ao salvar registro!<br>Erro: '. $update['code'] .'|'. $update['message'] .'
						</div>'
					);
				}
			} else {
				$this->session->set_flashdata(
					'salvar',
					'<div class="alert alert-danger" role="alert">
						<button type="button" class="close" data-dismiss="alert" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<i class="fa fa-times"></i>&nbsp;Erro ao salvar registro! Não é possível adicionar um campo com o mesmo <STRONG>nome</STRONG>!
					</div>'
				);
			}
		}
		$this->dados['cadastro']	=	$this->cadastro_model->consultarById($idCadastro);
		$this->dados['campo']		=	$this->cadastro_model->consultarCampoById($idCampo);

		$this->dados['salvar']		=	"cad_cadastros/editar_campo/$idCadastro/$idCampo";
		$this->dados['voltar']		=	base_url("cad_cadastros/campos/$idCadastro");
		$this->dados['conteudo']	=	'layouts/cad_campos_editar_view';
		$this->load->view('layouts/layout_sistema', $this->dados);
	}

	public function excluir_campo($idCadastro, $idCampo) {
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$delete = $this->cadastro_model->excluirCampo($idCampo);

		if ($delete['code'] == 0) {
			$this->session->set_flashdata(
				'excluir',
				'<div class="alert alert-success" role="alert">
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<i class="fa fa-check"></i>&nbsp;Registro EXCLUÍDO com sucesso.
				</div>'
			);
		}
		else {
			$this->session->set_flashdata(
				'excluir',
				'<div class="alert alert-danger" role="alert">
					<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<i class="fa fa-times"></i>&nbsp;Erro ao EXCLUIR registro!<br>Erro: '. $delete['code'] .'|'. $delete['message'] .'
				</div>'
			);
		}
		redirect(base_url("cad_cadastros/campos/$idCadastro"));
	}

	/* Chamada via javascript */
	public function clonarTabela(){
		$retorno	=	'';
		if ($this->input->post()) {
			$tabela_original	=	strtolower($this->input->post('tabela_original'));
			$tabela_destino		=	strtolower($this->input->post('tabela_destino'));
			$showCreateTable	=	$this->tabelas_model->showCreateTable($tabela_original);
			$replaceAutoInc		=	preg_replace("/(AUTO_INCREMENT=\d+ )/i", "", $showCreateTable[0]['Create Table']);
			$replaceTable		=	preg_replace("/(".$showCreateTable[0]['Table'].")/i", $tabela_destino, $replaceAutoInc);

			// Clonando a tabela
			$createTable		=	$this->tabelas_model->executaQuery($replaceTable);

			// Selecionando os campos da tabela 'cadastros'
			$campos_cadastros	=	$this->cadastro_model->consultarById($tabela_original);
			$dados_cadastros	=	array(
											'id'				=>	$tabela_destino,
											'descricao'			=>	$campos_cadastros->descricao,
											'nome_tabela'		=>	$tabela_destino,
											'campo_ordenacao'	=>	$campos_cadastros->campo_ordenacao
										);
			// Adicionando à tabela cadastros
			$insert_cadastros	=	$this->cadastro_model->salvar($dados_cadastros);
			
			// Pegando os campos da tabela original
			$campos_tabela		=	$this->cadastro_model->campos_consulta($tabela_original);
			for ($i=0; $i < count($campos_tabela); $i++) { 
				$dados_campos	=	array(
											'cadastro'		=>	$tabela_destino,
											'label'			=>	$campos_tabela[$i]->label,
											'nome'			=>	$campos_tabela[$i]->nome,
											'nome_menu'		=>	$campos_tabela[$i]->nome_menu,
											'tipo'			=>	$campos_tabela[$i]->tipo,
											'tamanho'		=>	$campos_tabela[$i]->tamanho,
											'valor_minimo'	=>	$campos_tabela[$i]->valor_minimo,
											'valor_maximo'	=>	$campos_tabela[$i]->valor_maximo,
											'ordem_exibicao'=>	$campos_tabela[$i]->ordem_exibicao,
											'ordem_cadastro'=>	$campos_tabela[$i]->ordem_cadastro,
											'sn_obrigatorio'=>	$campos_tabela[$i]->sn_obrigatorio,
											'class'			=>	$campos_tabela[$i]->class,
											'onkeypress'	=>	$campos_tabela[$i]->onkeypress,
											'onkeyup'		=>	$campos_tabela[$i]->onkeyup,
											'colunas'		=>	$campos_tabela[$i]->colunas,
											'linha'			=>	$campos_tabela[$i]->linha,
											'opcoes'		=>	$campos_tabela[$i]->opcoes
										);
				$insert_campos	=	$this->cadastro_model->salvar_dados('campos_cadastros',$dados_campos);
			}
			$itens_menu	=	$this->cadastro_model->selecionar();
			$this->session->set_userdata('itens_menu', $itens_menu);
			$retorno			=	'1';
		}
		echo $retorno;
	}
	/* /Chamada via javascript */
}