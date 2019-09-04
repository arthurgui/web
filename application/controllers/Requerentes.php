<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Requerentes extends MY_Controller {

	public function __construct(){
		parent::__construct();

		$this->load->model('empresas_model');
		$this->load->model('requerentes_model');
	}

	public function index(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['requerentes']	=	$this->requerentes_model->selecionar();
		$this->dados['conteudo']	=	'layouts/requerentes_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function adicionar(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

	}

	public function editar($id_requente){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		if ($this->input->post()) {
			$id_requerente	=	$this->input->post('id_requerente');
			$tipo_pessoa	=	$this->input->post('tipo_pessoa');
			$dadosUpdate	=	array(
									'rg_ie'				=>	$this->input->post('rg_ie'),
									'nome_razaosocial'	=>	$this->input->post('nome_razaosocial'),
									'cep'				=>	$this->input->post('cep'),
									'logradouro'		=>	$this->input->post('logradouro'),
									'numero'			=>	$this->input->post('numero'),
									'complemento'		=>	$this->input->post('complemento'),
									'bairro'			=>	$this->input->post('bairro'),
									'cidade'			=>	$this->input->post('cidade'),
									'uf'				=>	$this->input->post('uf'),
									'nome_contato'		=>	$this->input->post('nome_contato'),
									'tel_contato'		=>	$this->input->post('telefone_contato'),
									'email_contato'		=>	$this->input->post('email_contato')
								);
			if ($tipo_pessoa == 'J') {
				$dadosUpdate['nome_rep1']	=	$this->input->post('nome_rep1');
				$dadosUpdate['cpf_rep1']	=	$this->input->post('cpf_rep1');

				$dadosUpdate['nome_rep2']	=	$this->input->post('nome_rep2');
				$dadosUpdate['cpf_rep2']	=	$this->input->post('cpf_rep2');

				$dadosUpdate['nome_rep3']	=	$this->input->post('nome_rep3');
				$dadosUpdate['cpf_rep3']	=	$this->input->post('cpf_rep3');
			}

			$update	=	$this->requerentes_model->update($dadosUpdate,$id_requerente);
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
			else{
				$this->session->set_flashdata(
											'salvar',
											'<div class="alert alert-danger" role="alert">
												<button type="button" class="close" data-dismiss="alert" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
												<i class="fa fa-times"></i>&nbsp;Erro ao salvar registro!<br>Erro: '.$update['code'].'|'.$update['message'].'
											</div>'
											);
			}
		}

		$this->dados['requerente']	=	$this->requerentes_model->consultarPorId($id_requente);
		$this->dados['salvar']		=	"requerentes/editar/$id_requente";
		$this->dados['voltar']		=	'requerentes';
		$this->dados['conteudo']	=	'layouts/requerente_editar_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function excluir($id_requente){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

	}
}