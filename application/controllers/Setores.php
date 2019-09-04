<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Setores extends MY_Controller {

	public function __construct(){
		parent::__construct();

		$this->load->model('setores_model');
	}

	public function index(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['setores']				=	$this->setores_model->selecionar();
		$this->dados['conteudo']			=	'layouts/setores_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function adicionar(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		if ($this->input->post()) {
			$dados = elements(array(
										'descricao',
										'acesso_auxiliares',
										'acesso_auxgerais',
										'acesso_auxfiscalizacao',
										'acesso_auxlicencas',
										'acesso_fiscalizacao',
										'acesso_fisadicionar',
										'acesso_fisdistribuir',
										'acesso_licencas',
										// 'acesso_relatorios',
										'acesso_usuarios',
										// 'acesso_requerentes',
										'acesso_protocolos',
										'acesso_analises',
										'acesso_aprovacoes',
										'acesso_auditoria',
										'acesso_finalizados',
										'acesso_indeferidos',
										// 'acesso_licenrelatorios'
									),
									$this->input->post());
			$setor = $this->setores_model->salvar($dados);

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

		$this->dados['salvar']		=	'setores/adicionar';
		$this->dados['voltar']		=	base_url('setores');
		$this->dados['conteudo']	=	'layouts/setores_adicionar_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function consultar(){
		
	}

	public function editar($idsetor){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['setores'] 	=	$this->setores_model->consultarById($idsetor);
		if ($this->input->post()) {
			$dados = elements(array(
										'descricao',
										'acesso_auxiliares',
										'acesso_auxgerais',
										'acesso_auxfiscalizacao',
										'acesso_auxlicencas',
										'acesso_fiscalizacao',
										'acesso_fisadicionar',
										'acesso_fisdistribuir',
										'acesso_licencas',
										// 'acesso_relatorios',
										'acesso_usuarios',
										// 'acesso_requerentes',
										'acesso_protocolos',
										'acesso_analises',
										'acesso_aprovacoes',
										'acesso_auditoria',
										'acesso_finalizados',
										'acesso_indeferidos',
										// 'acesso_licenrelatorios'
									),
									$this->input->post());
			$setor = $this->setores_model->update($dados, $idsetor);

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
													<i class="fa fa-times"></i>&nbsp;Erro ao SALVAR registro!<br>Erro: '.$setor['code'].'|'.$setor['message'].' 
												</div>'
											);
			}
		}

		$this->dados['salvar']		=	"setores/editar/$idsetor ";
		$this->dados['voltar']		=	base_url('setores');
		$this->dados['conteudo']	=	'layouts/setores_editar_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function excluir(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$idsetor 	= $this->uri->segment(3);
		$setor 		= $this->setores_model->excluir($idsetor);

		if ($setor['code'] == 0) {
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
											<i class="fa fa-times"></i>&nbsp;Erro ao EXCLUIR registro!<br>Erro: '.$setor['code'].'|'.$setor['message'].' 
										</div>'
										);
		}
		redirect(base_url('setores'));
	}
}