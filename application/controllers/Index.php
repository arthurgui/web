<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Index extends MY_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model('logs_model');
	}

	public function index(){
		// var_dump($this->db->database);exit();
		if ($this->session->userdata('is_logged_in')) {
			if ($this->input->post()) {
				$cpf_cnpj	=	$this->input->post('cpf_cnpj');
				$this->load->model('requerentes_model');
				$this->dados['requerente']	=	$this->requerentes_model->consultarPorCPFCNPJ($cpf_cnpj);
				if (count($this->dados['requerente']) > 0) {
					$logradouro		=	($this->dados['requerente']->logradouro) ? $this->dados['requerente']->logradouro : '';
					$numero			=	($this->dados['requerente']->numero) ? ', '.$this->dados['requerente']->numero : '';
					$complemento	=	($this->dados['requerente']->complemento) ? '<br>'.$this->dados['requerente']->complemento : '';
					$bairro			=	($this->dados['requerente']->bairro) ? ', '.$this->dados['requerente']->bairro: '';
					$cidade			=	($this->dados['requerente']->cidade) ? '<br>'.$this->dados['requerente']->cidade : '';
					$uf				=	($this->dados['requerente']->uf) ? '-'.$this->dados['requerente']->uf : '';
					$cep			=	($this->dados['requerente']->cep) ? ' CEP: '.$this->dados['requerente']->cep : '';
					$this->dados['requerente']->endereco	=	$logradouro.
																$numero.
																$complemento.
																$bairro.
																$cidade.
																$uf.
																$cep;
					$this->load->model('licencas_model');
					$this->dados['licencas']	=	$this->licencas_model->consultarPorRequerente($this->dados['requerente']->id);
					for ($i=0; $i < count($this->dados['licencas']); $i++) { 
						$this->dados['licencas'][$i]->logs_licenca	=	$this->logs_model->selecionarLogsPorIdLicenca($this->dados['licencas'][$i]->id);
					}
				}
			}
			$this->dados['frm_consulta']	=	base_url();
			$this->dados['conteudo']		=	'layouts/index_view';
		}
		else{
			if ($this->input->post()) {
				$id_empresa	=	$this->input->post('id_emp');
				$this->load->model('physisweb_model');
				$empresa	=	$this->physisweb_model->consultarPorId($id_empresa);
				if (count($empresa) > 0) {
					$this->session->set_userdata('empresa',$empresa);
				}
			}
			redirect(base_url('usuarios/login'));
		}
		$this->load->view('layouts/layout_master',$this->dados);
	}
}