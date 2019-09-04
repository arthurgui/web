<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Motivos_indeferimento extends MY_Controller {

	public function __construct(){
		parent::__construct();

		$this->load->model('motivos_indeferimento_model');
	}

	public function index(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['motivos_indeferimento']	=	$this->motivos_indeferimento_model->selecionar();
		$this->dados['conteudo']				=	'layouts/motivos_indeferimento_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function adicionar(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		if ($this->input->post()) {
			$dados = elements(array(
									'descricao'
									),
									$this->input->post());
			$setor = $this->motivos_indeferimento_model->salvar($dados);

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
												<i class="fa fa-times"></i>&nbsp;Erro ao salvar registro!<br>Erro: '.$setor['code'].'|'.$setor['message'].'
											</div>'
											);
			}
		}

		$this->dados['salvar']		=	'motivos_indeferimento/adicionar';
		$this->dados['voltar']		=	base_url('motivos_indeferimento');
		$this->dados['conteudo']	=	'layouts/motivos_indeferimento_adicionar_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function consultar(){
		
	}

	public function editar($idmotivo_indeferimento){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['motivos_indeferimento'] 	=	$this->motivos_indeferimento_model->consultarById($idmotivo_indeferimento);

		if ($this->input->post()) {
			$dados = elements(array(
									'descricao'
									),
									$this->input->post());
			$motivo_indeferimento 	= $this->motivos_indeferimento_model->update($dados, $idmotivo_indeferimento);

			if ($motivo_indeferimento['code'] == 0) {
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
												<i class="fa fa-times"></i>&nbsp;Erro ao SALVAR registro!<br>Erro: '.$motivo_indeferimento['code'].'|'.$motivo_indeferimento['message'].'
											</div>'
											);
			}
		}

		$this->dados['salvar']		=	"motivos_indeferimento/editar/$idmotivo_indeferimento ";
		$this->dados['voltar']		=	base_url('motivos_indeferimento');
		$this->dados['conteudo']	=	'layouts/motivos_indeferimento_editar_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function excluir(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$idmotivo_indeferimento = $this->uri->segment(3);
		$motivo_indeferimento 	= $this->motivos_indeferimento_model->excluir($idmotivo_indeferimento);

		if ($motivo_indeferimento['code'] == 0) {
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
		redirect(base_url('motivos_indeferimento'));
	}
}