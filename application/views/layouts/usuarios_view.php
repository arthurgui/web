<?php
	//-- Table Initiation
	$this->table->set_template($table_tmpl);
	//-- Header Row
	$this->table->set_heading('Usuário', 'Login', 'Status', 'Perfil', 'Ações');
?>
<!-- Conteúdo -->
<div class="container container-sistema container-usuarios">
	<div class="row mb-5">
		<div class="col-12">
			<div class="card border border-green-system">
				<div class="card-header bg-green-system fc-white m-1">
					<h5>Usuários</h5>
				</div>
				<div class="card-body">
					<div class="navbar navbar-default mb-2">
						<a class="btn btn-default" href=<?= base_url('usuarios/adicionar'); ?> data-toggle="tooltip" title="Adicionar"><i class="fa fa-plus"></i>&nbsp;Adicionar</a>
					</div>
					<?= ($this->session->flashdata('excluir')) ? $this->session->flashdata('excluir') : ''; ?>
					<?php
						foreach ($usuarios as $usuario) {
							$btn_assinatura	=	($this->session->userdata('empresa')) ? '&nbsp;<a class="btn btn-default btn-sm btn-assinatura" href="javascript:;" data-toggle="tooltip" title="Assinatura" data-usuario-nome="'.$usuario->unome.'" data-usuario-id="'.$usuario->uid.'" data-usuario-assinatura="'.$usuario->uassinatura.'" onclick="alterarAssinatura(this);"><i class="fa fa-image"></i></a>&nbsp;' : '&nbsp;';
							$this->table->add_row(
								$usuario->unome,
								$usuario->ulogin,
								$usuario->ustatus,
								$usuario->uperfil,
								'<a class="btn btn-default btn-sm" href='.base_url("usuarios/editar/$usuario->uid").' data-toggle="tooltip" title="Editar"><i class="fa fa-pen-square"></i></a>'.
								$btn_assinatura.
								'<a class="btn btn-default btn-sm" href="javascript:;" data-toggle="tooltip" title="Alterar senha" data-id-usuario="'.$usuario->uid.'" data-nome-usuario="'.$usuario->unome.'" onclick="alterarSenha(this);"><i class="fa fa-lock"></i></a>
								<a class="btn btn-default btn-sm" href='.base_url("usuarios/excluir/$usuario->uid").' data-toggle="tooltip" title="Excluir"><i class="fa fa-times"></i></a>'
							);
						}
						$table = $this->table->generate();
					?>
					<?= $table; ?>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- /Conteúdo -->