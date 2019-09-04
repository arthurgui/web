<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<!DOCTYPE HTML>
<html lang="pt-BR">
	<head>
		<!-- <meta http-equiv="pragma"		content="no-cache" /> -->
		<!-- <meta http-equiv="expires"		content="-1" /> -->
		<meta charset="utf-8"/>
		<meta name="viewport"			content="width=device-width, initial-scale = 1">
		<meta name='author'				content='Walder B. Andriola'>
		<meta name='Copyright'			content="<?= $copyright; ?>">
		<link rel='shortcut icon'		type='image/x-icon'	href=<?= base_url($favicon); ?>>

		<!-- styles -->
		<link rel="stylesheet"			type="text/css"		href=<?= base_url($bootstrap4css); ?> />
		<!-- <link rel="stylesheet"			type="text/css"		href=<?= base_url($fontawesomecss); ?> /> -->
		<link rel="stylesheet"			type="text/css"		href=<?= base_url($bootstrap_chosencss); ?> />
		<link rel="stylesheet"			type="text/css"		href=<?= base_url($jasny_bootstrapcss); ?> />
		<link rel="stylesheet"			type="text/css"		href=<?= base_url($toastrcss); ?> />
		<link rel="stylesheet"			type="text/css"		href=<?= base_url($stylecss); ?> />
		<!-- styles -->

		<!-- scripts -->
		<script src=<?= base_url($jqueryslimjs); ?>></script>
		<script src=<?= base_url($popperjs); ?>></script>
		<script src=<?= base_url($jqueryformjs); ?>></script>
		<script src=<?= base_url($jasny_bootstrapjs); ?>></script>
		<script src=<?= base_url($holderjs); ?>></script>
		<script src=<?= base_url($fontawesomejs); ?>></script>
		<script src=<?= base_url($ckeditor5js); ?>></script>
		<script src=<?= base_url($ckeditor5ptbrjs); ?>></script>
		<script src=<?= base_url($bootstrap4js); ?>></script>
		<script src=<?= base_url($bootstrap_chosenjs); ?>></script>
		<script src=<?= base_url($pagingjs); ?>></script>
		<script src=<?= base_url($functionsjs); ?>></script>
		<script src=<?= base_url($cpf_cnpjjs); ?>></script>
		<script src=<?= base_url($momentjs); ?>></script>
		<script src=<?= base_url($datatablesjs); ?>></script>
		<script src=<?= base_url($datetimemomentjs); ?>></script>
		<script src=<?= base_url($datatablesbootstrapjs); ?>></script>
		<script src=<?= base_url($moment_localejs); ?>></script>
		<script src=<?= base_url($webshim); ?>></script>
		<script src=<?= base_url($tinymcejs); ?>></script>
		<script src=<?= base_url($toastrjs); ?>></script>
		<script src=<?= base_url($scriptjs); ?>></script>
		<!-- scripts -->

		<title><?= $title; ?></title>
	</head>
	<body>
		<script type="text/javascript">var _systempath	=	"<?= base_url(); ?>";</script>
		<?php if($this->session->userdata('is_logged_in')): ?>
			<input type="hidden" id="is_logged_in" name="is_logged_in" value="<?= $this->session->userdata('is_logged_in'); ?>">
			<input type="hidden" id="hour" name="hour" value="1">
			<input type="hidden" id="min" name="min" value="59">
			<input type="hidden" id="sec" name="sec" value="60">
			<nav class="navbar navbar-expand-md fixed-top bg-gray-light navbar-sistema">
				<a class="navbar-brand" href="<?= base_url(); ?>">
					<img src=<?= base_url("$images/logo.svg") ?> class="img-fluid">
				</a>
				<button class="navbar-toggler border-white fc-white" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<i class="fas fa-align-justify"></i>
				</button>
				<!-- Se estiver logado como usuário - empresa -->
				<?php if ($this->session->userdata('empresa')): ?>
					<script type="text/javascript">var _empresapath	=	"<?= $this->dados['link_empresa']; ?>";</script>
					<div id="navbarCollapse" class="collapse navbar-collapse">
						<ul class="navbar-nav mr-auto">
							<li class="nav-item">
								<a class="nav-link" href="<?= base_url(); ?>" role="button"><i class="fas fa-home"></i>&nbsp;&nbsp;Principal<span class="sr-only">(current)</span></a>
							</li>
							<?php if (($this->session->userdata('AUX') != 'N') or ($this->session->userdata('USU') != 'N')): ?>
								<li class="nav-item dropdown">
									<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownClientes" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Auxiliares<span class="sr-only">(current)</span></a>
									<div class="dropdown-menu" aria-labelledby="navbarDropdownClientes">
										<?php if (($this->session->userdata('AUX') != 'N') and ($this->session->userdata('perfil') != 'O')): ?>
											<a class="dropdown-item" href="<?= base_url('funcoes'); ?>">Funções</a>
											<a class="dropdown-item" href="<?= base_url('motivos_indeferimento'); ?>">Motivos Indeferimento</a>
											<a class="dropdown-item" href="<?= base_url('cadastro/o_processo'); ?>">Origens do Processo</a>
											<a class="dropdown-item" href="<?= base_url('setores'); ?>">Setores</a>
											<a class="dropdown-item" href="<?= base_url('tipos_documentos'); ?>">Tipos de Documentos</a>
											<a class="dropdown-item" href="<?= base_url('cadastro/t_infracao'); ?>">Tipos de Infração</a>
											<a class="dropdown-item" href="<?= base_url('tipos_licencas'); ?>">Tipos de Licença</a>
										<?php endif; ?>
										<?php if ($this->session->userdata('USU') != 'N'): ?>
											<div class="dropdown-divider"></div>
											<a class="dropdown-item" href="<?= base_url('usuarios'); ?>">Usuários</a>
										<?php endif; ?>
									</div>
								</li>
							<?php endif; ?>
							<?php if (($this->session->userdata('LIC') != 'N') or ($this->session->userdata('USU') != 'N')): ?>
								<li class="nav-item dropdown">
									<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownClientes" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Licenças<span class="sr-only">(current)</span></a>
									<div class="dropdown-menu" aria-labelledby="navbarDropdownClientes">
										<a class="dropdown-item" href="<?= base_url('requerentes'); ?>">Requerentes</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="<?= base_url('licencas/protocolos'); ?>">PR - Protocolos</a>
										<a class="dropdown-item" href="<?= base_url('licencas/analises'); ?>">AN - Análises</a>
										<a class="dropdown-item" href="<?= base_url('licencas/aprovacoes'); ?>">AP - Aprovações (Secretário)</a>
										<a class="dropdown-item" href="<?= base_url('licencas/auditorias'); ?>">AU - Auditorias (COMMEA)</a>
										<a class="dropdown-item" href="<?= base_url('licencas/finalizados'); ?>">FI - Finalizados</a>
										<a class="dropdown-item" href="<?= base_url('licencas/indeferidos'); ?>">IN - Indeferidos</a>
										<a class="dropdown-item" href="<?= base_url('relatorios/gerar/LICEN'); ?>">Relatórios</a>
									</div>
								</li>
							<?php endif; ?>
							<?php if (($this->session->userdata('FIS') != 'N') or ($this->session->userdata('USU') != 'N')): ?>
								<!-- Desabilitado temporariamente -->
								<!-- <li class="nav-item dropdown">
									<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownClientes" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Fiscalizações<span class="sr-only">(current)</span></a>
									<div class="dropdown-menu" aria-labelledby="navbarDropdownClientes">
										<a class="dropdown-item" href="<?= base_url('processos/adicionar'); ?>">Adicionar</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="<?= base_url('processos/a_distribuir'); ?>">PD - A Distribuir</a>
										<a class="dropdown-item" href="<?= base_url('relatorios/gerar/FISCAL'); ?>">Relatórios</a>
									</div>
								</li> -->
							<?php endif; ?>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownRelatorios" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Relatórios<span class="sr-only">(current)</span></a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdownRelatorios">
								<?php if($this->session->userdata('perfil') == 'S') : ?>
									<div class="dropdown-header">Administrador</div>
									<a class="dropdown-item" href="<?= base_url('relatorios/cadastrar'); ?>">Cadastrar</a>
									<!-- <a class="dropdown-item" href="<?= base_url('relatorios/configurar'); ?>">Configurar</a> -->
									<a class="dropdown-item" href="<?= base_url('rotinas/executarSQL'); ?>">Executar SQL</a>
								<?php endif; ?>
								<a class="dropdown-item" href="<?= base_url('relatorios/gerar/LICEN');  ?>">Licenças</a>
								<a class="dropdown-item" href="<?= base_url('relatorios/gerar/FISCAL'); ?>">Fiscalizações</a>

								<?php if($this->session->userdata('itens_relatorios')) : ?>
									<div class="dropdown-divider"></div>
									<?php foreach($this->session->userdata('itens_relatorios') as $item_relatorio) : ?>
										<a class="dropdown-item" href=<?= base_url("relatorios/gerar/$item_relatorio->opcao_menu"); ?>><?= $item_relatorio->titulo_opcao_menu; ?></a>
									<?php endforeach; ?>
								<?php endif; ?>
							</div>
						</li>
							<li class="nav-item">
								<a class="nav-link" href="javascript:;" id="nav-btn-user" data-css="popover-green-system" data-container="body" title='<i class="fas fa-user-circle"></i>&nbsp;<?= $this->session->userdata('nome'); ?></a>&nbsp;' ><i class="fas fa-user-circle"></i>&nbsp;Usuário</a>
							</li>
							<li class="nav-item">
								<span class="navbar-text"><i class="fas fa-clock"></i></span>
								<span class="navbar-text" id="timer"><i class="fas fa-spinner fa-pulse"></i></span>
							</li>
							<div id="user-content" class="d-none">
								<div class="container-fluid" >
									<div class="row">
										<div class="col-12">
											<span class="navbar-text fs-small90"><i class='fas fa-unlock'></i>&nbsp;Licenciado:&nbsp;<?= $this->session->userdata('empresa')->descricao; ?></span>
										</div>
									</div>
									<div class="row">
										<div class="col-12">
											<a class='btn btn-default fs-small90' id="btn-perfil" href=<?= base_url("usuarios/perfil/$id_usuario"); ?>><i class="far fa-user-circle"></i>&nbsp;Meu perfil</a>
											<a class='btn btn-default fs-small90' id="btn-logout" href="javascript:;" onclick="logout();"><i class="fas fa-power-off"></i>&nbsp;Logout</a></li></a>
										</div>
									</div>
								</div>
							</div>
							<li class="nav-item m-auto">
								<a href="javascript:;" aria-hidden="true"></i>&nbsp;</a><i class="fa fa-database" aria-hidden="true"></i>&nbsp;<?= $this->db->database; ?></a>
							</li>
						</ul>
						<ul class="nav navbar-nav navbar-right">
							<li class="nav-item">
								<img src="<?= $logo_empresa; ?>" class="navbar-brand m-auto">
							</li>
							<!-- <li class="nav-item m-auto"><a href="javascript:;" id="btn-logout" class="nav-link" data-css="popover-primary" data-container="body" title="<?= $this->session->userdata('nome'); ?>" ><i class="fas fa-user-circle"></i>&nbsp;Usuário</a></li> -->
						</ul>
					</div>
				<!-- Se estiver logado como usuário - Physisweb -->
				<?php else : ?>
					<!-- Menu -->
					<div id="navbar" class="collapse navbar-collapse">
						<ul class="navbar-nav mr-auto">
							<li class="nav-item">
								<a class="nav-link" href="<?= base_url(); ?>" role="button"><i class="fas fa-home"></i>&nbsp;&nbsp;Principal<span class="sr-only">(current)</span></a>
							</li>
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownClientes" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Auxiliares<span class="sr-only">(current)</span></a>
								<div class="dropdown-menu" aria-labelledby="navbarDropdownClientes">
									<a class="dropdown-item" href="<?= base_url('usuarios'); ?>">Usuários</a>
									<a class="dropdown-item" href="<?= base_url('cad_cadastros'); ?>">Cadastros</a>
									<a class="dropdown-item" href="<?= base_url('rotinas/executarSQL'); ?>">Executar SQL</a>
								</div>
							</li>
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownClientes" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Acesso<span class="sr-only">(current)</span></a>
								<div class="dropdown-menu" aria-labelledby="navbarDropdownClientes">
									<a class="dropdown-item" href="<?= base_url('empresas'); ?>">Empresas</a>
								</div>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="javascript:;" id="nav-btn-user" data-css="popover-green-system" data-container="body" title='<i class="fas fa-user-circle"></i>&nbsp;<?= $this->session->userdata('nome'); ?></a>&nbsp;' ><i class="fas fa-user-circle"></i>&nbsp;Usuário</a>
							</li>
							<li class="nav-item">
								<span class="navbar-text"><i class="fas fa-clock"></i></span>
								<span class="navbar-text" id="timer"><i class="fas fa-spinner fa-pulse"></i></span>
							</li>
							<div id="user-content" class="d-none">
								<div class="container-fluid" >
									<div class="row">
										<div class="col-12">
											<span class="navbar-text fs-small90"><i class='fas fa-unlock'></i>&nbsp;Licenciado:&nbsp;<?= $this->session->userdata('empresa')->descricao; ?></span>
										</div>
									</div>
									<div class="row">
										<div class="col-12">
											<a class='btn btn-default fs-small90' id="btn-perfil" href=<?= base_url("usuarios/perfil/$id_usuario"); ?>><i class="far fa-user-circle"></i>&nbsp;Meu perfil</a>
											<a class='btn btn-default fs-small90' id="btn-logout" href="javascript:;" onclick="logout();"><i class="fas fa-power-off"></i>&nbsp;Logout</a></li></a>
										</div>
									</div>
								</div>
							</div>
							<li class="nav-item m-auto">
						<a href="javascript:;" aria-hidden="true"></i>&nbsp;</a><i class="fa fa-database" aria-hidden="true"></i>&nbsp;<?= $this->db->database; ?></a>
					</li>
						</ul>
						<!-- <ul class="nav navbar-nav navbar-right">
							<li class="nav-item  m-auto">
								<a href="javascript:;" id="nav-btn-user" class="nav-link" data-toggle="popover" data-placement="bottom" data-css="popover-green-system" data-container="body" title='<i class="fas fa-user-circle"></i>&nbsp;<?= $this->session->userdata('nome'); ?></a>&nbsp;<span class="" id="timer"></span>' ><i class="fas fa-user-circle"></i>&nbsp;Usuário</a>
							</li>
							<div id="user-content" class="d-none">
								<div class="container-fluid" >
									<div class="row">
										<div class="col-12">
											<a class='btn btn-default fs-small90' id="btn-perfil" href=<?= base_url("usuarios/perfil/$id_usuario"); ?>><i class="far fa-user-circle"></i>&nbsp;Meu perfil</a>
											<a class='btn btn-default fs-small90' id="btn-logout" href="javascript:;" onclick="logout();"><i class="fas fa-power-off"></i>&nbsp;Logout</a></li></a>
										</div>
									</div>
								</div>
							</div>
						</ul> -->
					</div>
					<!-- /Menu -->
				<?php endif; ?>
			</nav>
		<?php endif; ?>