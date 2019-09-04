<?php
	$input_despacho	=	array(
								'id'			=>	'despacho',
								'name'			=>	'despacho',
								'type'			=>	'textarea',
								'class'			=>	'form-control text-tinymce',
								// 'value'			=>	set_value("despacho"),
								'placeholder'	=>	'Despacho Técnico',
								'rows'			=>	'10',
								// 'required'		=>	''
								);
?>
<!-- Conteúdo -->
<div class="container-fluid container-sistema">
	<div class="row">
		<div class="col-12">
			<div class="card border border-green-system">
				<div class="card-header bg-green-system fc-white m-1">
					<h5><i class="fas fa-external-link-alt"></i>&nbsp;&nbsp;Protocolo - Encaminhar</h5>
				</div>
				<?= form_open($formEncaminhar,$form_protEncaminhar); ?>
					<div class="card-body">
						<?= ($this->session->flashdata('encaminhar')) ? $this->session->flashdata('encaminhar') : ''; ?>
						<div class="alert bg-gray-lighter border-gray-light p-1">
							<div class="row m-auto">
								<div class="col-3">Requerente:&nbsp;<strong><?= $requerente->nome_razaosocial; ?></strong></div>
								<div class="col-3">CPF/CNPJ:&nbsp;<strong><?= $requerente->cpf_cnpj; ?></strong></div>
							</div>
							<div class="row m-auto">
								<div class="col-3">Protocolo nº:&nbsp;<strong><?= $protocolo->num_protocolo; ?></strong></div>
							</div>
						</div>
						<?= form_hidden('id_usuario',$id_usuario); ?>
						<?= form_hidden('id_licenca',$id_licenca); ?>
						<?= form_hidden('status_anterior',$status_anterior); ?>
						<?= form_hidden('status_atual',$status_atual); ?>
						<?= form_hidden('encaminhar','sim'); ?>
						<!-- <fieldset> -->
						<div class="form-group row">
							<?= form_label('Despacho Técnico:', 'despacho',$label2); ?>
							<div class="col-sm-8 pb-1 h-75">
								<?= form_textarea($input_despacho); ?>
								<font color="red"><?= form_error('despacho'); ?></font>
							</div>
						</div>
						<!-- </fieldset> -->
					</div>
					<div class="card-footer border-top bg-green-system fc-white m-1">
						<div class="form-row mt-1">
							<div class="col-md-12 pb-1">
								<button class="btn btn-brand-primary" type="button"><i class="fas fa-file-alt"></i>&nbsp;Visualizar</button>
								<button class="btn btn-brand-primary" type="submit"><i class="fas fa-save"></i>&nbsp;Salvar</button>
								<a href=<?= base_url($voltar); ?> class="btn btn-brand-primary"><i class="fa fa-reply"></i>&nbsp;Voltar</a>
							</div>
						</div>
					</div>
				<?= form_close(); ?>
			</div>
		</div>
	</div>
</div>
<!-- /Conteúdo -->