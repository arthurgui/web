<?php defined('BASEPATH') OR exit('Acesso direto de script não é permitido.');

class Rotinas extends MY_Controller {

	public function __construct(){
		parent::__construct();

		$this->load->model('rotinas_model');
	}

	public function index(){

	}

	public function executarSQL(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		if ($this->input->post()) {
			if ($this->input->post('comando')) {
				$this->dados['sql_comando']	=	$this->rotinas_model->executarSQL($this->input->post('comando'));
				$parts						=	explode(" ",$this->input->post('comando'));
				$comando_sql				=	$parts[0];
				$this->dados['resultado']	=	'Ok';
				if ($comando_sql == "SELECT") {
					$this->load->dbutil();
					$config = array (
						'root'		=>	'root',
						'element'	=>	'element',
						'newline'	=>	"\n",
						'tab'		=>	"\t"
					);

					$this->dados['xml_result']	=	$this->dbutil->xml_from_result($this->dados['sql_comando'], $config);

					$data = $this->dados['xml_result'];
					if (!write_file('./assets/uploads/consulta_xml/consulta_sql.xml', $data)){
						echo 'Impossível criar arquivo!';
						$this->dados['arquivo_xml']	=	'Impossível criar arquivo!';
					}
					else{
						$this->dados['arquivo_xml']	=	'<a class="btn btn-primary" href="'.base_url("rotinas/viewConsultaXML").'" target="_blank"><i class="fa fa-file-code-o" aria-hidden="true"></i>&nbsp;&nbsp;Visualizar arquivo</a>';
					}
				}
				// else if ($comando_sql == "UPDATE") {
				else{
					$this->dados['resultado_sql']	=	"Registros afetados: ".$this->db->affected_rows();
				}
			}
		}
		$this->dados['executar']	=	'rotinas/executarSQL';
		$this->dados['conteudo']	=	'layouts/executarSQL_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function viewConsultaXML(){
		header("Content-type: text/xml");
		$xml_file = file_get_contents(base_url("assets/uploads/consulta_xml/consulta_sql.xml"));
		echo $xml_file;
	}
}