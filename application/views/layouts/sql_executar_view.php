<?php
	$comando	=	array(
						'id'			=>	'comando',
						'name'			=>	'comando',
						'class'			=>	'form-control',
						'value'			=>	set_value("comando"),
						'placeholder'	=>	'Comando a ser executado',
						'rows'			=>	'10',
						'required'		=>	''
					);
	$attrInsert	= 	array(
						'class'	=>	"form-horizontal",
						'role'	=>	"form",
						'id'	=>	'form_insert',
						// 'target'=>	'_blank'
					);
?>
<!-- Conteúdo -->
<div class="container container-sistema">
	<div class="row">
		<div class="col-12">
			<?= form_open($executar, $attrInsert); ?>
				<div class="card border border-green-system">
					<div class="card-header bg-green-system fc-white m-1">
						<h5>Executar Comando SQL</h5>
					</div>
					<div class="card-body">
						<div class="form-group row">
							<?= form_label('Comando SQL:', 'comando', $label2); ?>
							<div class="col-lg-8">
								<?= form_textarea($comando); ?>
								<font color="red"><?= form_error('comando'); ?></font>
							</div>
						</div>
					</div>
					<div class="card-footer border-top fc-white m-1">
						<button class="btn btn-brand-primary"><i class="fas fa-cog"></i>&nbsp;Executar</button>
					</div>
				</div>
			<?= form_close(); ?>

			<?php if (isset($resultado)) : ?>
				<div class="card border border-gray-light mt-3">
					<div class="card-header bg-brand-primary fc-white m-1">
						<h5>Resultado</h5>
					</div>
					<div class="card-body">
						<div class="col-lg-2"></div>
						<div class="col-lg-6">
							<?php
								if (isset($arquivo_xml)) {
									echo $arquivo_xml;
								}
								else if (isset($resultado_sql)) {
									echo "Linhas afetadas: ". $resultado_sql;
								}
								else if (isset($show_sql)) {
									var_dump($show_sql);
								}
							?>
						</div>
					</div>
				</div>
			<?php endif; ?>
		</div>
	</div>
</div>
<!-- /Conteúdo -->