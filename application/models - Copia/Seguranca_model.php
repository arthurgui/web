<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Seguranca_model extends CI_Model{
	public function SessionActivo($url){

		if ($this->session->userdata('is_logged_in')) {

		}
		else{
			$this->session->set_flashdata('errorSession','<strong>Usuário NÂO Logado.</strong>');
			redirect(base_url());
		}
	}
}