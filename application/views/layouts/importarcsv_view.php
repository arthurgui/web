	<?php
		$attrFrmImportar	= 	array(
								'class'	=>	"form-horizontal",
								'role'	=>	"form",
								'id'	=>	'form_importacao',
								'name'	=>	'form_importacao'
							);
		$file_input		=	array(
								'class'	=>	'form-control div-gray-lighter',
								'type'	=>	'file',
								'id'	=>	'arquivo',
								'name'	=>	'arquivo'
								);
		$button		=	array(
								'class'	=>	'btn btn-primary',
								'type'	=>	'submit',
								'onclick'	=>	'loaderShow();'
								);
		
		$label2				= 	array(
									'class'	=>	"col-lg-2 control-label"
									);
		$label1				= 	array(
									'class'	=>	"col-lg-1 control-label"
									);
	?>
	<!-- Conteúdo -->
<div class="container-fluid container-sistema">
	<div class="row">
		<div class="col-12">
			<div class="card border border-green-system">
				<div class="card-header bg-green-system fc-white m-1">
					Importar CSV
				</div>
				<div class="card-body">
					<?= (isset($msg)) ? $msg : ''; ?>
					<?= form_open_multipart($importar,$attrFrmImportar); ?>
					<?= form_hidden('importar','importar'); ?>
					<div class="form-group row">
						<?= form_label('Arquivo:', 'arquivo',$label1); ?>
						<div class="col-lg-6">
							<?= form_input($file_input); ?>
						</div>
					</div>
					<div class="form-group row">
						<div class="col-lg-1"></div>
						<div class="col-lg-3">
							<?= form_button($button, 'Importar'); ?>
						</div>
						<div class="col-lg-4" id="div-loader" style="display:none">
							<i class="fa fa-spinner fa-spin"></i>&nbsp;&nbsp;Processando.&nbsp;&nbsp;Aguarde...
						</div>
					</div>
					<?= form_close(); ?>
				</div>
			</div>
		</div>
	</div>
</div>
	<!-- /Conteúdo -->