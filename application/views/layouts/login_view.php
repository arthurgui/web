<?php
	$input_login	=	array(
							'id'			=>	'login',
							'name'			=>	'login',
							'value'			=>	set_value('login'),
							'class'			=>	'form-control',
							'type'			=>	'text',
							'maxlength'		=>	'100',
							'placeholder'	=>	'Usuário',
							'required'		=>	''
						);
	$input_senha	=	array(
							'id'			=>	'senha',
							'name'			=>	'senha',
							'value'			=>	set_value('senha'),
							'class'			=>	'form-control',
							'type'			=>	'password',
							'maxlength'		=>	'20',
							'placeholder'	=>	'Senha',
							'required'		=>	''
						);
?>
<div class="container" id="container-login">
	<div class="row justify-content-md-center mb-3">
		<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
<!-- 			<img class="img-fluid" src="<?= base_url('assets/images/LogoWithShadow.svg'); ?>"></img>
 -->		</div>
	</div>
	<?php if($logo_empresa) : ?>
		<div class="row justify-content-md-center">
		<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
			<img class="img-fluid" src="<?= $logo_empresa; ?>"></img>
		</div>
	</div>
	<?php endif; ?>
	<div class="row justify-content-md-center">
		<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
			<?= form_open($login,$form_login); ?>
				<div class="card">
					<div class="card-header bg-green-system fc-white m-1">
						<h3 class="text-center"><i class="fa fa-power-off" aria-hidden="true"></i>&nbsp;&nbsp;Login</h3>
					</div>
					<div class="card-body">
						<?= ($this->session->flashdata('login')) ? $this->session->flashdata('login') : ''; ?>
						<div class="input-group">
							<span class="input-group-addon fc-green-system"><i class="fa fa-user fa-lg"></i></span>
							<?= form_input($input_login); ?>
						</div>
						<div class="input-group">
							<span class="input-group-addon fc-green-system"><i class="fa fa-lock fa-lg"></i></span>
							<?= form_input($input_senha); ?>
						</div>
					</div>
					<div class="card-footer bg-green-system fc-white m-1">
						<div class="form-group">
							<button type="submit" class="btn btn-physis btn-block">Entrar</button>
						</div>
					</div>
				</div>
			<?= form_close(); ?>
		</div>
	</div> 
</div>