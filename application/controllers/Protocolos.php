<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Protocolos extends MY_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model('licencas_model');
		$this->load->model('protocolos_model');
		$this->load->model('tipos_licencas_model');
	}

	public function index(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['protocolos']	=	$this->licencas_model->selecionar();
		for ($i=0; $i < count($this->dados['protocolos']); $i++) { 
			$logradouro		=	($this->dados['protocolos'][$i]->logradouro) ? $this->dados['protocolos'][$i]->logradouro : '';
			$numero			=	($this->dados['protocolos'][$i]->numero) ? ', '.$this->dados['protocolos'][$i]->numero : '';
			$complemento	=	($this->dados['protocolos'][$i]->complemento) ? ', '.$this->dados['protocolos'][$i]->complemento : '';
			$bairro			=	($this->dados['protocolos'][$i]->bairro) ? ', '.$this->dados['protocolos'][$i]->bairro: '';
			$cidade			=	($this->dados['protocolos'][$i]->cidade) ? '<br>'.$this->dados['protocolos'][$i]->cidade : '';
			$uf				=	($this->dados['protocolos'][$i]->uf) ? '-'.$this->dados['protocolos'][$i]->uf : '';
			$cep			=	($this->dados['protocolos'][$i]->cep) ? ' CEP: '.$this->dados['protocolos'][$i]->cep : '';
			$this->dados['protocolos'][$i]->endereco	=	$logradouro.
															$numero.
															$complemento.
															$bairro.
															$cidade.
															$uf.
															$cep;
		}
		$this->dados['conteudo']	=	'layouts/protocolos_view';
		$this->load->view('layouts/layout_master',$this->dados);
	}

	public function editar($id_protocolo){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['tipos_licenca']=	$this->tipos_licencas_model->selecionar();
		$this->dados['protocolo']	=	$this->protocolos_model->consultarPorId($id_protocolo);
		$this->dados['voltar']		=	"licencas/protocolos";
		$this->dados['salvar']		=	"protocolos/editar/$id_protocolo";
		$this->dados['conteudo']	=	'layouts/protocolos_editar_view';
		$this->load->view('layouts/layout_master',$this->dados);
	}

}