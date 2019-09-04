<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Cadastro extends MY_Controller {

	public function __construct(){
		parent::__construct();

		$this->load->model('cadastro_model');
	}

	public function index($id){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['cadastro']		=	$this->cadastro_model->consultarById($id);
		$this->dados['campos_cadastro']	=	$this->cadastro_model->campos_consulta($id);
		$this->dados['itens_tabela']	=	$this->cadastro_model->selecionar_dados($this->dados['cadastro']->nome_tabela, $this->dados['cadastro']->campo_ordenacao);
		$this->dados['adicionar']		=	"cadastro/$id/adicionar";
		$this->dados['editar']			=	"cadastro/$id/editar";
		$this->dados['excluir']			=	"cadastro/$id/excluir";
		$this->dados['conteudo']		=	'layouts/cadastro_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function adicionar($id){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$cadastro		 =	$this->cadastro_model->consultarById($id);
		$campos_cadastro =	$this->cadastro_model->campos_cadastro($id);


		if ($this->input->post()) {
			$campos = [];
			
			foreach ($campos_cadastro as $campo)
				$campos[] = $campo->nome;

			$dados 	= elements($campos, $this->input->post());
			$salvou = $this->cadastro_model->salvar_dados($cadastro->nome_tabela, $dados);

			if ($salvou) {
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
			else{
				$this->session->set_flashdata(
											'salvar',
											'<div class="alert alert-danger" role="alert">
												<button type="button" class="close" data-dismiss="alert" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
												<i class="fa fa-times"></i>&nbsp;Erro ao salvar registro!<br>Erro: '.$salvou['code'].'|'.$salvou['message'].'
											</div>'
											);
			}
		}

		$this->dados['cadastro']		=	$this->cadastro_model->consultarById($id);
		$this->dados['campos_cadastro']	=	$this->cadastro_model->campos_cadastro($id);
		$this->dados['salvar']			=	"cadastro/$id/adicionar";
		$this->dados['voltar']			=	base_url("cadastro/$id");
		$this->dados['conteudo']		=	'layouts/cadastro_adicionar_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function editar($id, $item){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$cadastro		 =	$this->cadastro_model->consultarById($id);
		$campos_cadastro =	$this->cadastro_model->campos_cadastro($id);

		if ($this->input->post()) {
			$campos = [];
			
			foreach ($campos_cadastro as $campo)
				$campos[] = $campo->nome;

			$dados 	= elements($campos, $this->input->post());
			$salvou = $this->cadastro_model->update_dados($cadastro->nome_tabela, $item, $dados);

			if ($salvou) {
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
			else{
				$this->session->set_flashdata(
											'salvar',
											'<div class="alert alert-danger" role="alert">
												<button type="button" class="close" data-dismiss="alert" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
												<i class="fa fa-times"></i>&nbsp;Erro ao salvar registro!<br>Erro: '.$salvou['code'].'|'.$salvou['message'].'
											</div>'
											);
			}
		}

		$this->dados['dados']			=	$this->cadastro_model->selecionar_dadosById($cadastro->nome_tabela, $item);
		$this->dados['cadastro']		=	$cadastro;
		$this->dados['campos_cadastro']	=	$campos_cadastro;
		$this->dados['salvar']			=	"cadastro/$id/editar/$item";
		$this->dados['voltar']			=	base_url("cadastro/$id");
		$this->dados['conteudo']		=	'layouts/cadastro_editar_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function excluir($id, $item){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$excluido = $this->cadastro_model->excluir_dados($id, $item);

		if ($excluido) {
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
		else{
			$this->session->set_flashdata(
										'excluir',
										'<div class="alert alert-danger" role="alert">
											<button type="button" class="close" data-dismiss="alert" aria-label="Close">
												<span aria-hidden="true">&times;</span>
											</button>
											<i class="fa fa-times"></i>&nbsp;Erro ao EXCLUIR registro!<br>Erro: '.$motivo_indeferimento['code'].'|'.$motivo_indeferimento['message'].' 
										</div>'
										);
		}

		redirect(base_url("cadastro/$id"));
	}

	public function teste() {
		echo "aaaaaaaaaaaaaaaaaaaaaaaa";
	}
}