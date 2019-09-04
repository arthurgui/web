<?php

	$ce_relatorio			=	array(
									'id'			=>	'ce_relatorio',
									'name'			=>	'ce_relatorio',
									'class'			=>	'form-control',
									'required'		=>	''
								);
	$opt_relatorio[''] = '*** Selecione ***';
	foreach ($relatorios as $relatorio) {
		$opt_relatorio[$relatorio->id] = $relatorio->nome_relatorio;
	}

	$titulo_relatorio		=	array(
									'id'			=>	'titulo_relatorio',
									'name'			=>	'titulo_relatorio',
									'class'			=>	'form-control',
									'type'			=>	'text',
									'placeholder'	=>	'',
									'maxlength'		=>	'100',
									'required'		=>	''
								);
	$opcao_menu				=	array(
									'id'			=>	'opcao_menu',
									'name'			=>	'opcao_menu',
									'class'			=>	'form-control',
									'type'			=>	'text',
									'placeholder'	=>	'',
									'maxlength'		=>	'10',
									'required'		=>	''
								);
	$opt_opcao_filtro		=	array(
									''	=>	'** Selecione **',
									'S'	=>	'Sim',
									'N'	=>	'Não'
								);
	$sn_filtro				=	array(
									'id'			=>	'sn_filtro',
									'name'			=>	'sn_filtro',
									'class'			=>	'form-control',
									'required'		=>	''
								);
	$sql 					=	array(
									'id'			=>	'sql',
									'name'			=>	'sql',
									'class'			=>	'form-control',
									'rows'			=>	'5'
								);
	$groupby 				=	array(
									'id'			=>	'groupby',
									'name'			=>	'groupby',
									'class'			=>	'form-control',
									'rows'			=>	'2'
								);
	$ordenacao				=	array(
									'id'			=>	'ordenacao',
									'name'			=>	'ordenacao',
									'class'			=>	'form-control',
									'rows'			=>	'3'
								);

	$nome_relatorio			=	array(
									'id'			=>	"nome_relatorio",
									'name'			=>	"nome_relatorio",
									'class'			=>	"form-control",
									'type'			=>	'text',
									'maxlength'		=>	"100",
									'placeholder'	=>	"",
									'value'			=>	set_value("nome_relatorio")
								);
	$titulo_relatorio_cfg	=	array(
									'name'			=>	"titulo_relatorio_config",
									'id'			=>	"titulo_relatorio_config",
									'class'			=>	"form-control",
									'type'			=>	'text',
									'maxlength'		=>	"100",
									'placeholder'	=>	"",
									'value'			=>	set_value("titulo_relatorio_config")
								);
	$logomarca				=	array(
									'id'			=>	"logomarca",
									'name'			=>	"logomarca",
									'class'			=>	"form-control",
									'type'			=>	'text',
									'maxlength'		=>	"100",
									'placeholder'	=>	"",
									'value'			=>	set_value("logomarca", '/assets/images/logo_report.png')
								);
	$tam_fonte_titulo 		=	array(
									'id'			=>	"tam_fonte_titulo",
									'name'			=>	"tam_fonte_titulo",
									'class'			=>	"form-control",
									'type'			=>	'text',
									'maxlength'		=>	"3",
									'placeholder'	=>	"Tam. Fonte Título",
									'value'			=>	set_value("tam_fonte_titulo", '11')
								);
	$tam_fonte_detalhe		=	array(
									'id'			=>	"tam_fonte_detalhe",
									'name'			=>	"tam_fonte_detalhe",
									'class'			=>	"form-control",
									'type'			=>	'text',
									'maxlength'		=>	"3",
									'placeholder'	=>	"",
									'value'			=>	set_value("tam_fonte_detalhe", '8')
								);
	$tam_fonte_rodape		=	array(
									'id'			=>	"tam_fonte_rodape",
									'name'			=>	"tam_fonte_rodape",
									'class'			=>	"form-control",
									'type'			=>	'text',
									'maxlength'		=>	"3",
									'placeholder'	=>	"",
									'value'			=>	set_value("tam_fonte_rodape", '6')
								);
	$campo_agrupamento		=	array(
									'name'			=>	"campo_agrupamento",
									'id'			=>	"campo_agrupamento",
									'class'			=>	"form-control",
									'type'			=>	'text',
									'maxlength'		=>	"20",
									'placeholder'	=>	"",
									'value'			=>	set_value("campo_agrupamento")
								);
	$titulo_agrupamento		=	array(
									'id'			=>	"titulo_agrupamento",
									'name'			=>	"titulo_agrupamento",
									'class'			=>	"form-control",
									'type'			=>	'text',
									'maxlength'		=>	"50",
									'placeholder'	=>	"",
									'value'			=>	set_value("titulo_agrupamento")
								);

	$opt_orientacao			=	array(
									'P'	=>	'Retrato',
									'L'	=>	'Paisagem',
								);
	$orientacao				=	array(
									'id'			=>	"orientacao",
									'name'			=>	"orientacao",
									'class'			=>	"form-control"
								);

	$opt_tam_papel			=	array(
									'A4'	=>	'A4',
								);
	$tam_papel				=	array(
									'id'			=>	"tam_papel",
									'name'			=>	"tam_papel",
									'class'			=>	"form-control"
								);

	$opt_fonte				=	array(
									'Arial'	=>	'Arial',
								);
	$fonte_rodape			=	array(
									'id'			=>	"fonte_rodape",
									'name'			=>	"fonte_rodape",
									'class'			=>	"form-control"
								);
	$fonte_detalhe			=	array(
									'id'			=>	"fonte_detalhe",
									'name'			=>	"fonte_detalhe",
									'class'			=>	"form-control"
								);
	$fonte_titulo			=	array(
									'id'			=>	"fonte_titulo",
									'name'			=>	"fonte_titulo",
									'class'			=>	"form-control"
								);

	$opt_tipo_campo			=	array(
									'S'	=>	'String',
									'D'	=>	'Data',
									'C'	=>	'Valor',
								);
	$tipo_campo_agrupamento	=	array(
									'id'		=>	"tipo_campo_agrupamento",
									'class'		=>	"form-control",
								);
?>
<!-- Conteúdo -->
<div class="container container-sistema">
	<div class="row mb-5">
		<div class="col-12">
			<?= form_open($form_relatorios, $form_attr); ?>
				<div class="card border border-gray-light">
					<div class="card-header bg-brand-primary fc-white m-1">
						<h5>Adicionar Relatório</h5>
					</div>
					<div class="card-body">
						<?= ($this->session->flashdata('salvar')) ? $this->session->flashdata('salvar') : ''; ?>

						<?= form_hidden('ce_empresa', $ce_empresa); ?>
						<!-- <div class="form-group row">
							<?= form_label('Nome do Relatório:', 'ce_relatorio', $label2); ?>
							<div class="col-sm-5">
								<?= form_dropdown('ce_relatorio', $opt_relatorio, '', $ce_relatorio); ?>
							</div>
						</div> -->
						<div class="form-group row">
							<?= form_label('Título (Menu):', 'titulo_relatorio', $label2); ?>
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
								<?= form_dropdown('sn_filtro', $opt_opcao_filtro, '', $sn_filtro); ?>
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

						<fieldset class="border-top">
							<legend>Configurações</legend>

							<div class="form-group row">
								<?= form_label('Nome do Relatório:', 'nome_relatorio', $label2); ?>
								<div class="col-sm-5">
									<?= form_input($nome_relatorio); ?>
									<font color="red"><?= form_error('nome_relatorio'); ?></font>
								</div>
							</div>
							<div class="form-group row">
								<?= form_label('Título (Relatório):', 'titulo_relatorio_config', $label2); ?>
								<div class="col-sm-5">
									<?= form_input($titulo_relatorio_cfg); ?>
									<font color="red"><?= form_error('titulo_relatorio_config'); ?></font>
								</div>
							</div>
							<div class="form-group row">
								<?= form_label('Caminho Logomarca:', 'logomarca', $label2); ?>
								<div class="col-sm-5">
									<?= form_input($logomarca); ?>
									<font color="red"><?= form_error('logomarca'); ?></font>
								</div>
							</div>
							<div class="form-group row">
								<?= form_label('Orientação:', 'orientacao', $label2) ?>
								<div class="col-sm-2">
									<?= form_dropdown('orientacao:', $opt_orientacao, 'P', $orientacao) ?>
								</div>
								<?= form_label('Papel:', 'tam_papel', $label1) ?>
								<div class="col-sm-2">
									<?= form_dropdown('tam_papel', $opt_tam_papel, 'A4', $tam_papel) ?>
								</div>
							</div>
							<div class="form-group row">
								<?= form_label('Fonte Título:', 'fonte_titulo', $label2) ?>
								<div class="col-sm-2">
									<?= form_dropdown('fonte_titulo', $opt_fonte, 'Arial', $fonte_titulo) ?>
								</div>
								<?= form_label('Tamanho:', 'tam_fonte_titulo', $label2); ?>
								<div class="col-sm-1">
									<?= form_input($tam_fonte_titulo); ?>
									<font color="red"><?= form_error('tam_fonte_titulo'); ?></font>
								</div>
							</div>
							<div class="form-group row">
								<?= form_label('Fonte Detalhe:', 'fonte_detalhe', $label2) ?>
								<div class="col-sm-2">
									<?= form_dropdown('fonte_detalhe', $opt_fonte, 'Arial', $fonte_detalhe) ?>
								</div>

								<?= form_label('Tamanho:', 'tam_fonte_detalhe', $label2); ?>
								<div class="col-sm-1">
									<?= form_input($tam_fonte_detalhe); ?>
									<font color="red"><?= form_error('tam_fonte_detalhe'); ?></font>
								</div>
							</div>
							<div class="form-group row">
								<?= form_label('Fonte Rodapé', 'fonte_rodape', $label2); ?>
								<div class="col-sm-2">
									<?= form_dropdown('fonte_rodape', $opt_fonte, 'Arial', $fonte_rodape); ?>
								</div>
								<?= form_label('Tamanho:', 'tam_fonte_rodape', $label2); ?>
								<div class="col-sm-1">
									<?= form_input($tam_fonte_rodape); ?>
									<font color="red"><?= form_error('tam_fonte_rodape'); ?></font>
								</div>
							</div>
							<div class="form-group row">
								<?= form_label('Agrupar pelo Campo:', 'campo_agrupamento', $label2); ?>
								<div class="col-sm-2">
									<?= form_input($campo_agrupamento); ?>
									<font color="red"><?= form_error('campo_agrupamento'); ?></font>
								</div>
								<?= form_label('Tipo:', 'tipo_campo_agrupamento', $label1) ?>
								<div class="col-sm-2">
									<?= form_dropdown('tipo_campo_agrupamento', $opt_tipo_campo, 'S', $tipo_campo_agrupamento) ?>
								</div>
							</div>
							<div class="form-group row">
								<?= form_label('Título Agrupamento:', 'titulo_agrupamento', $label2); ?>
								<div class="col-sm-3">
									<?= form_input($titulo_agrupamento); ?>
									<font color="red"><?= form_error('titulo_agrupamento'); ?></font>
								</div>
							</div>
						</fieldset>
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