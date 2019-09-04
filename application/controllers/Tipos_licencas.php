<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Tipos_licencas extends MY_Controller {

	public function __construct(){
		parent::__construct();

		$this->load->model('documentos_tipos_licencas_model');
		$this->load->model('tipos_licencas_model');
		$this->load->model('tipos_documentos_model');
	}

	public function index(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['tipos_licencas']	=	$this->tipos_licencas_model->selecionartodos();
		$this->dados['conteudo']		=	'layouts/tipos_licencas_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function adicionar(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		if ($this->input->post()) {
			$dados = elements(array(
									'descricao',
									'periodo_validade',
									'detalhe'
									),
									$this->input->post());

			$modalidade_emprestimos = $this->tipos_licencas_model->salvar($dados);

			if ($modalidade_emprestimos['code'] == 0) {
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
												<i class="fa fa-times"></i>&nbsp;Erro ao salvar registro!<br>Erro: '.$modalidade_emprestimos['code'].'|'.$modalidade_emprestimos['message'].'
											</div>'
											);
			}
		}

		$this->dados['salvar']		=	'tipos_licencas/adicionar';
		$this->dados['voltar']		=	base_url('tipos_licencas');
		$this->dados['conteudo']	=	'layouts/tipos_licencas_adicionar_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function consultar(){
		
	}

	public function editar($ce_tipo_licenca){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['tipos_licencas'] 	=	$this->tipos_licencas_model->consultarById($ce_tipo_licenca);

		if ($this->input->post()) {
			$dados = elements(array(
									'descricao',
									'periodo_validade',
									'sn_ativo',
									'detalhe'
									),
									$this->input->post());
			$tipo_licenca = $this->tipos_licencas_model->update($dados,$ce_tipo_licenca);

			redirect(base_url("tipos_licencas/editar/$ce_tipo_licenca"));
		}

		$this->dados['salvar']		=	"tipos_licencas/editar/$ce_tipo_licenca";
		$this->dados['voltar']		=	base_url('tipos_licencas');
		$this->dados['conteudo']	=	'layouts/tipos_licencas_editar_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function excluir(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$ce_tipo_licenca	=	$this->uri->segment(3);
		$tipo_licenca 		= 	$this->tipos_licencas_model->excluir($ce_tipo_licenca);

		if ($tipo_licenca['code'] == 0) {
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
											<i class="fa fa-times"></i>&nbsp;Erro ao EXCLUIR registro!<br>Erro: '.$tipo_licenca['code'].'|'.$tipo_licenca['message'].' 
										</div>'
										);
		}
		redirect(base_url('tipos_licencas'));
	}

	/* Tipos de Documentos */
	public function addTipoDocumento(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$ce_tipo_licenca	=	$this->uri->segment(3);
		$this->form_validation->set_rules("ce_tipo_documento","Tipo de Documento","trim|required");

		if ($this->form_validation->run() == TRUE) {
			$dados = elements(array(
									'ce_tipo_licenca',
									'ce_tipo_documento',
									'ordem',
									'detalhe',
									'sn_validade',
									'sn_obrigatorio',
									'sn_renovacao'
									),
									$this->input->post());
			$dados['ce_tipo_licenca']	=	$ce_tipo_licenca;
			$tipo_documento = $this->documentos_tipos_licencas_model->salvar($dados);
			
			if ($tipo_documento['code'] == 0) {
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
												<i class="fa fa-times"></i>&nbsp;Erro ao salvar registro!<br>Erro: '.$tipo_documento['code'].'|'.$tipo_documento['message'].'
											</div>'
											);
			}
			redirect("tipos_licencas/addTipoDocumento/$ce_tipo_licenca");
		}
		
		$this->dados['tipos_licencas']			=	$this->tipos_licencas_model->consultarById($ce_tipo_licenca);
		$this->dados['tipos_documentos']		=	$this->tipos_documentos_model->selecionar();
		$this->dados['documentos_adicionados']	=	$this->documentos_tipos_licencas_model->selecionarByTipoLicenca($ce_tipo_licenca);
		$this->dados['ce_tipo_licenca']			=	$ce_tipo_licenca;
		$this->dados['salvar']					=	"tipos_licencas/addTipoDocumento/$ce_tipo_licenca";
		$this->dados['voltar']					=	base_url('tipos_licencas');
		$this->dados['conteudo']				=	'layouts/tipos_licencas_tipos_documentos_adicionar_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function editarTipoDocumento(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$ce_tipo_licenca	=	$this->uri->segment(3);
		$idTipo_documento	=	$this->uri->segment(4);
		$this->form_validation->set_rules("ce_tipo_documento","Tipo de Documento","trim|required");

		if ($this->form_validation->run() == TRUE) {
			$dados = elements(array(
									'ce_tipo_documento',
									'ordem',
									'sn_validade',
									'detalhe',
									'sn_obrigatorio',
									'sn_renovacao'
									),
									$this->input->post());
			$dados['ce_tipo_licenca']	=	$ce_tipo_licenca;
			$tipo_documento = $this->documentos_tipos_licencas_model->update($dados,$idTipo_documento);
			
			if ($tipo_documento['code'] == 0) {
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
												<i class="fa fa-times"></i>&nbsp;Erro ao salvar registro!<br>Erro: '.$tipo_documento['code'].'|'.$tipo_documento['message'].' 
											</div>'
											);
			}
		}
		
		$this->dados['tipos_licencas']			=	$this->tipos_licencas_model->consultarById($ce_tipo_licenca);
		$this->dados['tipos_documentos']		=	$this->tipos_documentos_model->selecionar();
		$this->dados['documento']				=	$this->documentos_tipos_licencas_model->consultarById($idTipo_documento);
		$this->dados['ce_tipo_licenca']			=	$ce_tipo_licenca;
		$this->dados['salvar']					=	"tipos_licencas/editarTipoDocumento/$ce_tipo_licenca/$idTipo_documento";
		$this->dados['voltar']					=	base_url("tipos_licencas/addTipoDocumento/$ce_tipo_licenca");
		$this->dados['conteudo']				=	'layouts/tipos_licencas_tipos_documentos_editar_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function excluirTipoDocumento(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$ce_tipo_licenca	=	$this->uri->segment(3);
		$idTipo_documento	=	$this->uri->segment(4);
		$tipo_documento 	= 	$this->documentos_tipos_licencas_model->excluir($idTipo_documento);
		if ($tipo_documento['code'] == 0) {
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
											<i class="fa fa-times"></i>&nbsp;Erro ao EXCLUIR registro!<br>Erro: '.$tipo_documento['code'].'|'.$tipo_documento['message'].' 
										</div>'
										);
		}
		redirect(base_url("tipos_licencas/addTipoDocumento/$ce_tipo_licenca"));
	}
	/* Tipos de Documentos */
}