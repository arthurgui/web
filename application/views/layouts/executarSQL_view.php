<?php
	$input_comando	=	array(
								'id'			=>	'comando',
								'name'			=>	'comando',
								'class'			=>	'form-control',
								'value'			=>	set_value("comando",'',FALSE),
								'placeholder'	=>	'Comando a ser executado',
								'rows'			=>	'10',
								'required'		=>	''
								);
	$class 				=	'class="form-control"';
	$required			=	' required ';
	$label2				= 	array(
								'class'	=>	"col-lg-2 control-label"
								);
	$label1				= 	array(
								'class'	=>	"col-lg-1 control-label"
								);
	$attrInsert			= 	array(
								'class'	=>	"form-horizontal" ,
								'role'	=>	"form",
								'id'	=>	'form_insert',
								// 'target'=>	'_blank'
								);
?>
<!-- Conteúdo -->
<div class="container container-sistema container-usuarios">
	<div class="row mb-5">
		<div class="col-12">
			<div class="card border border-gray-light">
				<div class="card-header bg-gray-light fc-white m-1">
					<h5>Executar Comando SQL</h5>
				</div>
				<div class="card-body">
					<?= form_open($executar, $attrInsert); ?>
						<div class="form-group">
							<?= form_label('Comando SQL:', 'comando',$label2); ?>
							<div class="col-lg-12">
								<?= form_textarea($input_comando); ?>
								<font color="red"><?= form_error('comando'); ?></font>
							</div>
						</div>
						<div class="form-group">
							<div class="col-lg-3 offset-col-lg-2">
								<button class="btn btn-primary" type="submit"><i class="fas fa-sign-out-alt"></i>&nbsp;Executar</button>
							</div>
						</div>
					<?= form_close(); ?>
				</div>
			</div>
		</div>
	</div>
	<?php if(isset($resultado)) : ?>
		<div class="row mb-5">
			<div class="col-12">
				<div class="card border border-gray-light">
					<div class="card-header bg-gray-light fc-white m-1">
						<h5>Resultado</h5>
					</div>
					<div class="card-body">
						<?= (isset($arquivo_xml)) ? $arquivo_xml : ''; ?>
						<?= (isset($resultado_sql)) ? "Linhas afetadas: ".$resultado_sql : ''; ?>
						<?= (isset($show_sql)) ? var_dump($show_sql) : ''; ?>
					</div>
				</div>
			</div>
		</div>
	<?php endif; ?>
</div>
<!-- /Conteúdo -->