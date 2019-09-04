<?php
	$input_nome	=	array(
								'id'			=>	'nome',
								'name'			=>	'nome',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'placeholder'	=>	'Nome',
								'maxlength'		=>	'50',
								'required'		=>	''
								);
	$input_login	=	array(
								'id'			=>	'login',
								'name'			=>	'login',
								'type'			=>	'text',
								'class'			=>	'form-control',
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
								'maxlength'		=>	'20',
								'required'		=>	''
								);
	$input_email	=	array(
								'id'			=>	'email',
								'name'			=>	'email',
								'type'			=>	'email',
								'class'			=>	'form-control',
								'placeholder'	=>	'e-Mail',
								'maxlength'		=>	'100',
								'required'		=>	''
								);
	$opt_perfil		=	array(
								''	=>	'Selecione',
								'A'	=>	'Administrador',
								'O'	=>	'Operador',
								'S'	=>	'Superusuário'
								);
	$select_perfil	=	"id='perfil' class='form-control' required";
	if ($this->session->userdata('empresa')) {
		$select_ce_funcao	=	"id='ce_funcao' class='form-control' required";
		$opt_funcoes['']	=	'*** Selecione ***';
		foreach ($funcoes as $funcao) {
			$opt_funcoes[$funcao->id]	=	$funcao->descricao;
		}
		$select_ce_setor	=	"id='ce_setor' class='form-control' required";
		$opt_setores['']	=	'*** Selecione ***';
		foreach ($setores as $setor) {
			$opt_setores[$setor->id]	=	$setor->descricao;
		}
	}
?>
<!-- Conteúdo -->
<div class="container container-sistema conatainer-usuarios">
	<div class="row mb-5">
		<div class="col-12">
			<div class="card border border-green-system">
				<div class="card-header bg-green-system fc-white m-1">
					<h5>Adicionar Usuário</h5>
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
						</div>
						<div class="form-group row">
							<?= form_label('Perfil:', 'perfil',$label2); ?>
							<div class="col-sm-3 pb-1">
								<?= form_dropdown('perfil',$opt_perfil, set_value('perfil'), $select_perfil); ?>
								<font color="red"><?= form_error('perfil'); ?></font>
							</div>
							<div class="col-sm-4 pb-1">
								<label class=" form-check form-check-inline">
									<input type="radio" name="status" id="status1" value="A" checked>&nbsp;Ativo
								</label>
								<label class=" form-check form-check-inline">
									<input type="radio" name="status" id="status2" value="I">&nbsp;Inativo
								</label>
							</div>
						</div>
						<?php if ($this->session->userdata('empresa')) : ?>
							<div class="form-group row">
								<?= form_label('Função:', 'ce_funcao',$label2); ?>
								<div class="col-sm-3 pb-1">
									<?= form_dropdown('ce_funcao',$opt_funcoes,set_value('ce_funcao'),$select_ce_funcao); ?>
									<font color="red"><?= form_error('ce_funcao'); ?></font>
								</div>
								<?= form_label('Setor:', 'ce_setor',$label1); ?>
								<div class="col-sm-3 pb-1">
									<?= form_dropdown('ce_setor',$opt_setores,set_value('ce_setor'),$select_ce_setor); ?>
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
					</div>
					<div class="card-footer border-top bg-green-system fc-white m-1">
						<div class="form-row mt-1">
							<div class="col-md-12 pb-1">
								<button class="btn btn-brand-primary" type="submit"><i class="fas fa-save"></i>&nbsp;Salvar</button>
								<a class="btn btn-success" href=<?= $voltar; ?>><i class="fa fa-reply"></i>&nbsp;Voltar</a>
							</div>
						</div>
					</div>
				<?= form_close(); ?>
			</div>
		</div>
	</div>
</div>