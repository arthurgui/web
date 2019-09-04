<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Seguranca_model extends CI_Model{
	public function SessionActivo($url, $redirect=true){

		if (!$this->session->userdata('is_logged_in')) {
			$this->session->set_flashdata('errorSession','<strong>Usuário NÂO Logado.</strong>');

			if($redirect)
				redirect(base_url());
		}

		return $this->session->userdata('is_logged_in');
	}
}