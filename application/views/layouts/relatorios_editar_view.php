<?php
	$opt_relatorio	= array();

	$opt_relatorio['']	= '*** Selecione ***';
	foreach ($relatorios as $relatorio) {
		$opt_relatorio[$relatorio->id]	= $relatorio->nome_relatorio;
	}

	$titulo_relatorio	=	array(
								'id'			=>	'titulo_relatorio',
								'name'			=>	'titulo_relatorio',
								'class'			=>	'form-control',
								'type'			=>	'text',
								'value'			=>	set_value('titulo_relatorio', $relatorio_empresa->titulo_relatorio),
								'placeholder'	=>	'',
								'maxlength'		=>	'100',
								'required'		=>	''
							);
	$opcao_menu			=	array(
								'id'			=>	'opcao_menu',
								'name'			=>	'opcao_menu',
								'class'			=>	'form-control',
								'type'			=>	'text',
								'value'			=>	set_value('opcao_menu', $relatorio_empresa->opcao_menu),
								'placeholder'	=>	'',
								'maxlength'		=>	'10',
								'required'		=>	''
							);
	$opt_opcao_filtro	=	array(
								''	=>	'** Selecione **',
								'S'	=>	'Sim',
								'N'	=>	'Não'
							);
	$att_select			=	array(
								'class'			=>	'form-control',
								'required'		=>	''
							);
	$sql 				=	array(
								'name'			=>	'sql',
								'class'			=>	'form-control',
								'value'			=>	set_value('sql', $relatorio_empresa->sql),
								'rows'			=>	'5'
							);
	$groupby 			=	array(
								'name'			=>	'groupby',
								'class'			=>	'form-control',
								'value'			=>	set_value('groupby', $relatorio_empresa->groupby),
								'rows'			=>	'2'
							);
	$ordenacao 			=	array(
								'name'			=>	'ordenacao',
								'class'			=>	'form-control',
								'value'			=>	set_value('ordenacao', $relatorio_empresa->ordenacao),
								'rows'			=>	'3'
							);
?>
<!-- Conteúdo -->
<div class="container container-sistema">
	<div class="row mb-5">
		<div class="col-12">
			<?= form_open($form_relatorios, $form_attr); ?>
				<div class="card border border-gray-light">
					<div class="card-header bg-brand-primary fc-white m-1">
						<h5>Editar Relatório</h5>
					</div>
					<div class="card-body">
						<?= ($this->session->flashdata('edicao')) ? $this->session->flashdata('edicao') : ''; ?>

						<?= form_hidden('ce_empresa', $ce_empresa); ?>
						<div class="form-group row">
							<?= form_label('Nome do Relatório:', 'ce_relatorio', $label2); ?>
							<div class="col-sm-5">
								<?= form_dropdown('ce_relatorio', $opt_relatorio, $relatorio_empresa->ce_relatorio, $att_select); ?>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Título Relatório:', 'titulo_relatorio', $label2); ?>
							<div class="col-sm-5">
								<?= form_input($titulo_relatorio); ?>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Opção Menu:', 'opcao_menu', $label2); ?>
							<div class="col-sm-2">
								<?= form_input($opcao_menu); ?>
							</div>
							<?= form_label('Filtro:', 'sn_filtro', $label1); ?>
							<div class="col-sm-2">
								<?= form_dropdown('sn_filtro', $opt_opcao_filtro, $relatorio_empresa->sn_filtro, $att_select); ?>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('SQL:', 'sql', $label2); ?>
							<div class="col-sm-5">
								<?= form_textarea($sql); ?>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Group By:', 'groupby', $label2); ?>
							<div class="col-sm-5">
								<?= form_textarea($groupby); ?>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Ordenação:', 'ordenacao', $label2); ?>
							<div class="col-sm-5">
								<?= form_textarea($ordenacao); ?>
							</div>
						</div>
					</div>
					<div class="card-footer border-top bg-brand-primary fc-white m-1">
						<button class="btn btn-brand-primary"><i class="fas fa-save"></i>&nbsp;Salvar</button>
						<a class="btn btn-success" href=<?= $voltar; ?>><i class="fa fa-reply"></i>&nbsp;Voltar</a>
					</div>
				</div>
			<?= form_close(); ?>
		</div>
	</div>
</div>
