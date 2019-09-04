<?php
	$input_descricao	=	array(
								'id'			=>	'descricao',
								'name'			=>	'descricao',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$empresa->descricao,
								'placeholder'	=>	'Descrição',
								'maxlength'		=>	'100',
								'required'		=>	''
								);
	$input_hostname	=	array(
								'id'			=>	'hostname',
								'name'			=>	'hostname',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$empresa->hostname,
								'placeholder'	=>	'Host',
								'maxlength'		=>	'100',
								'required'		=>	''
								);
	$input_username	=	array(
								'id'			=>	'username',
								'name'			=>	'username',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$empresa->username,
								'placeholder'	=>	'Username',
								'maxlength'		=>	'100',
								'required'		=>	''
								);
	$input_password	=	array(
								'id'			=>	'password',
								'name'			=>	'password',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$empresa->password,
								'placeholder'	=>	'Password',
								'maxlength'		=>	'100',
								'required'		=>	''
								);
	$input_database	=	array(
								'id'			=>	'database',
								'name'			=>	'database',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$empresa->database,
								'placeholder'	=>	'Database',
								'maxlength'		=>	'100',
								'required'		=>	''
								);
	$input_img_logo	=	array(
								'id'			=>	'img_logo',
								'name'			=>	'img_logo',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$empresa->img_logo,
								'placeholder'	=>	'Img Logo',
								'maxlength'		=>	'100',
								'required'		=>	''
								);
	$input_link	=	array(
								'id'			=>	'link',
								'name'			=>	'link',
								'type'			=>	'url',
								'class'			=>	'form-control',
								'value'			=>	$empresa->link,
								'placeholder'	=>	'Link',
								'maxlength'		=>	'100',
								'placeholder'	=>	'http://www.exemplo.com',
								'required'		=>	''
								);
	$input_dt_cadastro	=	array(
								'id'			=>	'dt_cadastro',
								'name'			=>	'dt_cadastro',
								'type'			=>	'date',
								'class'			=>	'form-control',
								'value'			=>	date("Y-m-d",strtotime($empresa->dt_cadastro)),
								'maxlength'		=>	'10',
								'required'		=>	''
								);
	$input_dt_validade	=	array(
								'id'			=>	'dt_validade',
								'name'			=>	'dt_validade',
								'type'			=>	'date',
								'class'			=>	'form-control',
								'value'			=>	date("Y-m-d",strtotime($empresa->dt_validade)),
								'maxlength'		=>	'10',
								'required'		=>	''
								);
?>
<!-- Conteúdo -->
<div class="container container-sistema">
	<div class="row">
		<div class="col-12">
			<div class="card border border-green-system">
				<div class="card-header bg-green-system fc-white m-1">
					<h5>Adicionar Empresa</h5>
				</div>
				<?= form_open($salvar, $form_attr); ?>
					<div class="card-body">
						<?= ($this->session->flashdata('salvar')) ? $this->session->flashdata('salvar') : ''; ?>
						<div class="form-group row">
							<?= form_label('Descrição:', 'descricao',$label2); ?>
							<div class="col-sm-10 pb-1">
								<?= form_input($input_descricao); ?>
								<font color="red"><?= form_error('descricao'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Hostname:', 'hostname',$label2); ?>
							<div class="col-sm-4 pb-1">
								<?= form_input($input_hostname); ?>
								<font color="red"><?= form_error('hostname'); ?></font>
							</div>
							<?= form_label('User:', 'username',$label2); ?>
							<div class="col-sm-4 pb-1">
								<?= form_input($input_username); ?>
								<font color="red"><?= form_error('username'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Password:', 'password',$label2); ?>
							<div class="col-sm-4 pb-1">
								<?= form_input($input_password); ?>
								<font color="red"><?= form_error('password'); ?></font>
							</div>
							<?= form_label('Database:', 'database',$label2); ?>
							<div class="col-sm-4 pb-1">
								<?= form_input($input_database); ?>
								<font color="red"><?= form_error('database'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Img Logo:', 'img_logo',$label2); ?>
							<div class="col-sm-10 pb-1">
								<?= form_input($input_img_logo); ?>
								<font color="red"><?= form_error('img_logo'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Link:', 'link',$label2); ?>
							<div class="col-sm-10 pb-1">
								<?= form_input($input_link); ?>
								<font color="red"><?= form_error('link'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Dt. Cadastro:', 'dt_cadastro',$label2); ?>
							<div class="col-sm-4 pb-1">
								<?= form_input($input_dt_cadastro); ?>
								<font color="red"><?= form_error('dt_cadastro'); ?></font>
							</div>
							<?= form_label('Dt. Validade:', 'dt_validade',$label2); ?>
							<div class="col-sm-4 pb-1">
								<?= form_input($input_dt_validade); ?>
								<font color="red"><?= form_error('dt_validade'); ?></font>
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