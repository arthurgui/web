<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Empresas extends MY_Controller {

	public function __construct(){
		parent::__construct();

		$this->load->model('empresas_model');
	}

	public function index(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['empresas']	=	$this->empresas_model->selecionar();
		$this->dados['conteudo']	=	'layouts/empresas_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function adicionar(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		if ($this->input->post()) {
			$dadosInsert	=	elements(
										array(
												'descricao',
												'hostname',
												'username',
												'password',
												'database',
												'img_logo',
												'link',
												'dt_cadastro',
												'dt_validade'
											),
										$this->input->post()
									);
			$insert			=	$this->empresas_model->salvar($dadosInsert);

			if ($insert['code'] == 0) {
				$this->session->set_flashdata(
											'salvar',
											'<div class="alert alert-success" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><i class="fa fa-check"></i>&nbsp;Registro SALVO com sucesso.</div>'
											);
			}
			else{
				$this->session->set_flashdata(
											'salvar',
											'<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><i class="fa fa-times"></i>&nbsp;Erro ao salvar registro!<br>Erro: '.$insert['code'].'|'.$insert['message'].' </div>'
											);
			}
		}

		$this->dados['salvar']		=	'empresas/adicionar';
		$this->dados['voltar']		=	base_url('empresas');
		$this->dados['conteudo']	=	'layouts/empresas_adicionar_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function editar($id_empresa){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		if ($this->input->post()) {
			$dadosUpdate	=	elements(
										array(
												'descricao',
												'hostname',
												'username',
												'password',
												'database',
												'img_logo',
												'link',
												'dt_cadastro',
												'dt_validade'
											),
										$this->input->post()
									);
			$update			=	$this->empresas_model->update($dadosUpdate,$id_empresa);

			if ($update['code'] == 0) {
				$this->session->set_flashdata(
											'salvar',
											'<div class="alert alert-success" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><i class="fa fa-check"></i>&nbsp;Registro SALVO com sucesso.</div>'
											);
			}
			else{
				$this->session->set_flashdata(
											'salvar',
											'<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><i class="fa fa-times"></i>&nbsp;Erro ao salvar registro!<br>Erro: '.$update['code'].'|'.$update['message'].' </div>'
											);
			}
		}

		$this->dados['empresa']		=	$this->empresas_model->consultarPorId($id_empresa);
		$this->dados['salvar']		=	"empresas/editar/$id_empresa";
		$this->dados['voltar']		=	base_url('empresas');
		$this->dados['conteudo']	=	'layouts/empresas_editar_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function excluir($id_empresa){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema


	}
}