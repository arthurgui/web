<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Tipos_documentos extends MY_Controller {

	public function __construct(){
		parent::__construct();

		$this->load->model('tipos_documentos_model');
	}

	public function index(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['tipos_documentos']	=	$this->tipos_documentos_model->selecionar();
		$this->dados['conteudo']			=	'layouts/tipos_documentos_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function adicionar(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		if ($this->input->post()) {
			$dados = elements(array(
									'descricao',
									'link'
									),
									$this->input->post());
			$$tipo_documento = $this->tipos_documentos_model->salvar($dados);

			if ($$tipo_documento['code'] == 0) {
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
												<i class="fa fa-times"></i>&nbsp;Erro ao salvar registro!<br>Erro: '.$$tipo_documento['code'].'|'.$$tipo_documento['message'].' 
											</div>'
											);
			}
		}

		$this->dados['salvar']		=	'tipos_documentos/adicionar';
		$this->dados['voltar']		=	base_url('tipos_documentos');
		$this->dados['conteudo']	=	'layouts/tipos_documentos_adicionar_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function consultar(){
		
	}

	public function editar($idtipo_documento){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['tipos_documentos'] 	=	$this->tipos_documentos_model->consultarById($idtipo_documento);

		if ($this->input->post()) {
			$dados = elements(array(
									'descricao',
									'link'
									),
									$this->input->post());
			$$tipo_documento = $this->tipos_documentos_model->update($dados, $idtipo_documento);

			if ($$tipo_documento['code'] == 0) {
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
												<i class="fa fa-times"></i>&nbsp;Erro ao SALVAR registro!<br>Erro: '.$$tipo_documento['code'].'|'.$$tipo_documento['message'].'
											</div>'
											);
			}
		}

		$this->dados['salvar']	=	"tipos_documentos/editar/$idtipo_documento ";
		$this->dados['voltar']	=	base_url('tipos_documentos');
		$this->dados['conteudo']	=	'layouts/tipos_documentos_editar_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function excluir(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$idtipo_documento 	=	$this->uri->segment(3);
		$$tipo_documento = $this->tipos_documentos_model->excluir($idtipo_documento );

		if ($$tipo_documento['code'] == 0) {
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
										'<div class="alert alert-success" role="alert">
											<button type="button" class="close" data-dismiss="alert" aria-label="Close">
												<span aria-hidden="true">&times;</span>
											</button>
											<i class="fa fa-times"></i>&nbsp;Erro ao EXCLUIR registro!<br>Erro: '.$$tipo_documento['code'].'|'.$$tipo_documento['message'].' 
										</div>'
										);
		}
		redirect(base_url('tipos_documentos'));
	}
}