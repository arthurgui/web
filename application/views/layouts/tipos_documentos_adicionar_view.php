<?php
	$input_descricao	=	array(
								'id'			=>	'descricao',
								'name'			=>	'descricao',
								'type'			=>	'text',
								'class'			=>	'form-control',
								// 'value'			=>	set_value("descricao"),
								'placeholder'	=>	'Descrição',
								'maxlength'		=>	'500',
								'required'		=>	''
								);
	$input_link	=	array(
								'id'			=>	'link',
								'name'			=>	'link',
								'type'			=>	'text',
								'class'			=>	'form-control',
								// 'value'			=>	set_value("link"),
								'placeholder'	=>	'Link',
								'maxlength'		=>	'100'
								);
?>
<!-- Conteúdo -->
<div class="container container-sistema">
	<div class="row">
		<div class="col-12">
			<div class="card border border-green-system">
				<div class="card-header bg-green-system fc-white m-1">
					<h5>Adicionar Tipo de Documento</h5>
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
							<?= form_label('Link:', 'link',$label2); ?>
							<div class="col-sm-6 pb-1">
								<?= form_input($input_link); ?>
								<font color="red"><?= form_error('link'); ?></font>
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