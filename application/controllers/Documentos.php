<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Documentos extends MY_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model('condicionantes_licenca_model');
		$this->load->model('documentos_licenca_model');
		$this->load->model('documentos_tipos_licencas_model');
		$this->load->model('licencas_model');
		$this->load->model('logs_model');
		$this->load->model('motivos_indeferimento_model');
		$this->load->model('requerentes_model');
		$this->load->model('tipos_licencas_model');
	}

	public function index(){

	}
}