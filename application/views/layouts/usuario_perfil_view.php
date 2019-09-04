<?php
	$input_nome	=	array(
								'id'			=>	'nome',
								'name'			=>	'nome',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	set_value("nome", $usuario->nome),
								'placeholder'	=>	'Nome',
								'maxlength'		=>	'50',
								'required'		=>	''
								);
	$input_login	=	array(
								'id'			=>	'login',
								'name'			=>	'login',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	set_value("login", $usuario->login),
								'placeholder'	=>	'Login',
								'maxlength'		=>	'20',
								'required'		=>	''
								);
	$input_senha	=	array(
								'id'			=>	'senha',
								'name'			=>	'senha',
								'type'			=>	'password',
								'class'			=>	'form-control',
								'placeholder'	=>	'Senha',
								'minlength'		=>	'10',
								'maxlength'		=>	'20',
								'required'		=>	''
								);
	$input_email	=	array(
								'id'			=>	'email',
								'name'			=>	'email',
								'type'			=>	'email',
								'class'			=>	'form-control',
								'value'			=>	set_value("email", $usuario->email),
								'placeholder'	=>	'e-Mail',
								'maxlength'		=>	'100',
								'required'		=>	''
								);
	$input_perfil	=	array(
								'id'			=>	'perfil',
								'name'			=>	'perfil',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$usuario->uperfil,
								'maxlength'		=>	'100',
								'required'		=>	'',
								'readonly'		=>	''
								);
	if ($this->session->userdata('empresa')) {
		$opt_funcoes['']	=	'*** Selecione ***';
		foreach ($funcoes as $funcao) {
			$opt_funcoes[$funcao->id]	=	$funcao->descricao;
		}
		$opt_setores['']	=	'*** Selecione ***';
		foreach ($setores as $setor) {
			$opt_setores[$setor->id]	=	$setor->descricao;
		}
	}
?>
<!-- Conteúdo -->
<div class="container container-sistema">
	<div class="row mb-5">
		<div class="col-12">
			<div class="card border border-green-system">
				<div class="card-header bg-green-system fc-white m-1">
					<h5><i class="far fa-user-circle"></i>&nbsp;&nbsp;<?= $nome_usuario; ?></h5>
				</div>
				<?= form_open($salvar, $form_attr); ?>
					<div class="card-body">
						<?= ($this->session->flashdata('salvar')) ? $this->session->flashdata('salvar') : ''; ?>
						<div class="form-group row">
							<?= form_label('Nome:', 'nome',$label2); ?>
							<div class="col-sm-7 pb-1">
								<?= form_input($input_nome); ?>
								<font color="red"><?= form_error('nome'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Login:', 'login',$label2); ?>
							<div class="col-sm-3 pb-1">
								<?= form_input($input_login); ?>
								<font color="red"><?= form_error('login'); ?></font>
							</div>
							<?= form_label('Perfil:', 'perfil',$label1); ?>
							<div class="col-sm-3 pb-1">
								<?= form_input($input_perfil); ?>
								<font color="red"><?= form_error('perfil'); ?></font>
							</div>
						</div>
						<?php if ($this->session->userdata('empresa')) : ?>
							<div class="form-group row">
								<?= form_label('Função:', 'ce_funcao',$label2); ?>
								<div class="col-sm-3 pb-1">
									<?= form_dropdown('ce_funcao',$opt_funcoes,set_value('ce_funcao',$usuario->ce_funcao),$class.$required); ?>
									<font color="red"><?= form_error('ce_funcao'); ?></font>
								</div>
								<?= form_label('Setor:', 'ce_setor',$label1); ?>
								<div class="col-sm-3 pb-1">
									<?= form_dropdown('ce_setor',$opt_setores,set_value('ce_setor',$usuario->ce_setor),$class.$required); ?>
									<font color="red"><?= form_error('ce_setor'); ?></font>
								</div>
							</div>
						<?php endif; ?>
						<div class="form-group row">
							<?= form_label('e-Mail:', 'email',$label2); ?>
							<div class="col-sm-7 pb-1">
								<?= form_input($input_email); ?>
								<font color="red"><?= form_error('email'); ?></font>
							</div>
						</div>
						<hr>
						<div class="form-group row">
							<?= form_label('Senha:', 'senha',$label2); ?>
							<div class="col-sm-3 pb-1">
								<?= form_input($input_senha); ?>
								<font color="red"><?= form_error('senha'); ?></font>
							</div>
							<label class="checkbox-inline" for="chcksenha">
								<input type="checkbox" id="chcksenha" name="chcksenha" value="S">&nbsp;Atualizar senha
							</label>
						</div>
					</div>
					<div class="card-footer border-top bg-green-system fc-white m-1">
						<div class="form-row mt-1">
							<div class="col-md-12 pb-1">
								<button class="btn btn-brand-primary" type="submit"><i class="fas fa-save"></i>&nbsp;Salvar</button>
							</div>
						</div>
					</div>
				<?= form_close(); ?>
			</div>
		</div>
	</div>
</div>