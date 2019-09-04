<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Usuarios extends MY_Controller {

	public function __construct(){
		parent::__construct();

		$this->load->model('funcoes_model');
		$this->load->model('setores_model');
		$this->load->model('usuarios_model');
	}

	public function index(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['usuarios']	=	$this->usuarios_model->selecionar();
		$this->dados['conteudo']	=	'layouts/usuarios_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function adicionar(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		if ($this->input->post()) {
			$dados = elements(array(
									'nome',
									'login',
									'status',
									'perfil',
									'email'
									),
									$this->input->post());
			$dados['senha']	=	md5('L0G0N00');
			if ($this->session->userdata('empresa')) {
				$dados['ce_funcao']	=	$this->input->post('ce_funcao');
				$dados['ce_setor']	=	$this->input->post('ce_setor');
			}

			$usuario = $this->usuarios_model->salvar($dados);
			if ($usuario['code'] == 0) {
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
												<i class="fa fa-times"></i>&nbsp;Erro ao salvar registro!<br>Erro: '.$usuario['code'].'|'.$usuario['message'].'
											</div>'
											);
			}
		}

		if ($this->session->userdata('empresa')) {
			$this->dados['setores']		=	$this->setores_model->selecionar();
			$this->dados['funcoes']		=	$this->funcoes_model->selecionar();
		}

		$this->dados['salvar']		=	'usuarios/adicionar';
		$this->dados['voltar']		=	base_url('usuarios');
		$this->dados['conteudo']	=	'layouts/usuarios_adicionar_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function consultar(){
		
	}

	public function editar($idusuario){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		if ($this->input->post()) {
			$dados = elements(array(
									'nome',
									'login',
									'status',
									'perfil',
									'email',
									),
									$this->input->post());
			if ($this->session->userdata('empresa')) {
				$dados['ce_funcao']	=	$this->input->post('ce_funcao');
				$dados['ce_setor']	=	$this->input->post('ce_setor');
			}

			$usuario = $this->usuarios_model->update($dados,$idusuario);
			if ($usuario['code'] == 0) {
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
												<i class="fa fa-times"></i>&nbsp;Erro ao SALVAR registro!<br>Erro: '.$usuario['code'].'|'.$usuario['message'].'
											</div>'
											);
			}
		}

		if ($this->session->userdata('empresa')) {
			$this->dados['funcoes']		=	$this->funcoes_model->selecionar();
			$this->dados['setores']		=	$this->setores_model->selecionar();
		}

		$this->dados['usuario'] 	=	$this->usuarios_model->consultarPorId($idusuario);
		$this->dados['salvar']		=	"usuarios/editar/$idusuario";
		$this->dados['voltar']		=	base_url('usuarios');
		$this->dados['conteudo']	=	'layouts/usuarios_editar_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function excluir(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$idusuario	=	$this->uri->segment(3);
		$usuario	=	$this->usuarios_model->excluir($idusuario);

		if ($usuario['code'] == 0) {
				$this->session->set_flashdata(
											'excluir',
											'<div class="alert alert-success" role="alert">
												<button type="button" class="close" data-dismiss="alert" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
												<i class="fa fa-check"></i>Registro EXCLUÍDO com sucesso.
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
											<i class="fa fa-times"></i>Erro ao EXCLUIR registro!<br>Erro: '.$usuario['code'].'|'.$usuario['message'].'
										</div>'
										);
		}
		redirect(base_url('usuarios'));
	}

	public function login(){
		if ($this->input->post()) {
			$login		=	trim($this->input->post('login'));
			$senha		=	md5(trim($this->input->post('senha')));
			if ($this->session->userdata('empresa')) {
				$usuario	=	$this->usuarios_model->loginEmpresa($login,$senha);
			}
			else{
				$usuario	=	$this->usuarios_model->login($login,$senha);
			}

			if (count($usuario) === 1) {
				$session	=	array(
										'id_usuario'			=>	$usuario->uid,
										'nome'					=>	$usuario->unome,
										'matricula'				=>	$usuario->umatricula,
										'login'					=>	$usuario->ulogin,
										'status'				=>	$usuario->ustatus,
										'perfil'				=>	$usuario->perfil,
										'email'					=>	$usuario->uemail,
										'assinatura'			=>	$usuario->uassinatura,
										'funcao'				=>	$usuario->fdescricao,
										'setor'					=>	$usuario->stdescricao,
										'acesso_auxiliares'		=>	$usuario->acesso_auxiliares,
										'acesso_auxgerais'		=>	$usuario->acesso_auxgerais,
										'acesso_auxfiscalizacao'=>	$usuario->acesso_auxfiscalizacao,
										'acesso_auxlicencas'	=>	$usuario->acesso_auxlicencas,
										'acesso_fiscalizacao'	=>	$usuario->acesso_fiscalizacao,
										'acesso_fisadicionar'	=>	$usuario->acesso_fisadicionar,
										'acesso_fisdistribuir'	=>	$usuario->acesso_fisdistribuir,
										'acesso_licencas'		=>	$usuario->acesso_licencas,
										'acesso_relatorios'		=>	$usuario->acesso_relatorios,
										'acesso_usuarios'		=>	$usuario->acesso_usuarios,
										'acesso_requerentes'	=>	$usuario->acesso_requerentes,
										'acesso_protocolos'		=>	$usuario->acesso_protocolos,
										'acesso_analises'		=>	$usuario->acesso_analises,
										'acesso_aprovacoes'		=>	$usuario->acesso_aprovacoes,
										'acesso_auditoria'		=>	$usuario->acesso_auditoria,
										'acesso_finalizados'	=>	$usuario->acesso_finalizados,
										'acesso_indeferidos'	=>	$usuario->acesso_indeferidos,
										'acesso_licenrelatorios'=>	$usuario->acesso_licenrelatorios,
										'is_logged_in'			=>	TRUE
										);
				
				$this->session->set_userdata($session);//Gravar a session do usuario logado
				redirect(base_url());
			}
			else{
				$this->session->set_flashdata('login', '<div class="alert alert-danger text-center">Usuário e/ou senha inválido(s)</div>');
			}
		}

		$this->dados['login']		=	base_url('usuarios/login');
		$this->dados['conteudo']	=	'layouts/login_view';
		$this->load->view('layouts/layout_master',$this->dados);
	}

	public function perfil($id_usuario){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		if ($this->input->post()) {
			$dadosUpdate['nome']		=	$this->input->post('nome');
			$dadosUpdate['login']		=	$this->input->post('login');

			if ($this->session->userdata('empresa')) {
				$dadosUpdate['ce_funcao']	=	$this->input->post('ce_funcao');
				$dadosUpdate['ce_setor']	=	$this->input->post('ce_setor');
			}

			if ($this->input->post('chcksenha')) {
				$dadosUpdate['senha']	=	md5(trim($this->input->post('senha')));
			}

			$updateUsuario	=	$this->usuarios_model->update($dadosUpdate,$id_usuario);

			if ($updateUsuario['code'] == 0) {
				$this->session->set_flashdata(
											'salvar',
											'<div class="alert alert-success" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><i class="fa fa-check"></i>&nbsp;Registro SALVO com sucesso.</div>'
											);
			}
			else{
				$this->session->set_flashdata(
											'salvar',
											'<div class="alert alert-success" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><i class="fa fa-times"></i>&nbsp;Erro ao SALVAR registro!<br>Erro: '.$updateUsuario['code'].'|'.$updateUsuario['message'].' </div>'
											);
			}
		}

		if ($this->session->userdata('empresa')) {
			$this->dados['funcoes']	=	$this->funcoes_model->selecionar();
			$this->dados['setores']	=	$this->setores_model->selecionar();
		}

		$this->dados['usuario'] =	$this->usuarios_model->consultarPorId($id_usuario);
		$this->dados['salvar']		=	"usuarios/perfil/$id_usuario";
		$this->dados['conteudo']	=	'layouts/usuario_perfil_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function alterarSenha(){
		if ($this->input->post()) {
			$id_usuario	=	$this->input->post('id_usuario');
			$senha		=	md5(trim($this->input->post('senha')));
			$dadosUpdate=	array('senha'	=>	$senha);
			$updateSenha=	$this->usuarios_model->update($dadosUpdate,$id_usuario);
			echo $updateSenha;
		}
	}

	public function logout(){
		if($this->session->userdata('is_logged_in')) {
			$this->session->sess_destroy();
		}
		redirect(base_url());
	}
}
