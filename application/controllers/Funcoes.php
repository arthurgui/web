<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Funcoes extends MY_Controller {

	public function __construct(){
		parent::__construct();

		$this->load->model('funcoes_model');
	}

	public function index(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['funcoes']				=	$this->funcoes_model->selecionar();
		$this->dados['conteudo']			=	'layouts/funcoes_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function adicionar(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		if ($this->input->post()) {
			$dados = elements(array(
									'descricao'
									),
									$this->input->post());
			$setor = $this->funcoes_model->salvar($dados);

			if ($setor['code'] == 0) {
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
												<i class="fa fa-times"></i>&nbsp;Erro ao salvar registro!<br>Erro: '.$setor['code'].'|'.$setor['message'].
											'</div>'
											);
			}
		}

		$this->dados['salvar']		=	'funcoes/adicionar';
		$this->dados['voltar']		=	base_url('funcoes');
		$this->dados['conteudo']	=	'layouts/funcoes_adicionar_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function consultar(){
		
	}

	public function editar($idfuncao){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['funcoes'] 	=	$this->funcoes_model->consultarById($idfuncao);

		if ($this->input->post()) {
			$dados = elements(array(
									'descricao'
									),
									$this->input->post());
			$funcao 	= $this->funcoes_model->update($dados, $idfuncao);

			if ($funcao['code'] == 0) {
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
				// echo "Erro.<br>";
				// var_dump($this->db->error());
				$this->session->set_flashdata(
											'salvar',
											'<div class="alert alert-danger" role="alert">
												<button type="button" class="close" data-dismiss="alert" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
												<i class="fa fa-times"></i>&nbsp;Erro ao SALVAR registro!<br>Erro: '.$funcao['code'].'|'.$funcao['message'].'
											</div>'
											);
			}
		}

		$this->dados['salvar']		=	"funcoes/editar/$idfuncao ";
		$this->dados['voltar']		=	base_url('funcoes');
		$this->dados['conteudo']	=	'layouts/funcoes_editar_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function excluir($idfuncao){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$funcao 	= $this->funcoes_model->excluir($idfuncao);

		if ($funcao['code'] == 0) {
				$this->session->set_flashdata(
											'excluir',
											'<div class="alert alert-success" role="alert">
												<button type="button" class="close" data-dismiss="alert" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button><i class="fa fa-check">
												</i>&nbsp;Registro EXCLUÍDO com sucesso.
											</div>'
											);
		}
		else{
			$this->session->set_flashdata(
										'excluir',
										'<div class="alert alert-danger" role="alert">
											<button type="button" class="close" data-dismiss="alert" aria-label="Close">
												<span aria-hidden="true">&times;</span>
											</button><i class="fa fa-times">
											</i>&nbsp;Erro ao EXCLUIR registro!<br>Erro: '.$funcao['code'].'|'.$funcao['message'].' 
										</div>'
										);
		}
		redirect(base_url('funcoes'));
	}
}