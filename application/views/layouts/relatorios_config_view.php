<?php
	$nome_relatorio			=	array(
									'id'			=>	"nome_relatorio",
									'name'			=>	"nome_relatorio",
									'class'			=>	"form-control",
									'type'			=>	'text',
									'maxlength'		=>	"100",
									'placeholder'	=>	"",
									'value'			=>	set_value("nome_relatorio", $relatorio->nome_relatorio)
								);
	$titulo_relatorio		=	array(
									'name'			=>	"titulo_relatorio",
									'id'			=>	"titulo_relatorio",
									'class'			=>	"form-control",
									'type'			=>	'text',
									'maxlength'		=>	"100",
									'placeholder'	=>	"",
									'value'			=>	set_value("titulo_relatorio", $relatorio->titulo_relatorio)
								);
	$logomarca				=	array(
									'id'			=>	"logomarca",
									'name'			=>	"logomarca",
									'class'			=>	"form-control",
									'type'			=>	'text',
									'maxlength'		=>	"100",
									'placeholder'	=>	"",
									'value'			=>	set_value("logomarca", $relatorio->logomarca)
								);
	$tam_fonte_titulo 		=	array(
									'id'			=>	"tam_fonte_titulo",
									'name'			=>	"tam_fonte_titulo",
									'class'			=>	"form-control",
									'type'			=>	'text',
									'maxlength'		=>	"3",
									'placeholder'	=>	"Tam. Fonte Título",
									'value'			=>	set_value("tam_fonte_titulo", $relatorio->tam_fonte_titulo)
								);
	$tam_fonte_detalhe		=	array(
									'id'			=>	"tam_fonte_detalhe",
									'name'			=>	"tam_fonte_detalhe",
									'class'			=>	"form-control",
									'type'			=>	'text',
									'maxlength'		=>	"3",
									'placeholder'	=>	"",
									'value'			=>	set_value("tam_fonte_detalhe", $relatorio->tam_fonte_detalhe)
								);
	$tam_fonte_rodape		=	array(
									'id'			=>	"tam_fonte_rodape",
									'name'			=>	"tam_fonte_rodape",
									'class'			=>	"form-control",
									'type'			=>	'text',
									'maxlength'		=>	"3",
									'placeholder'	=>	"",
									'value'			=>	set_value("tam_fonte_rodape", $relatorio->tam_fonte_rodape)
								);
	$campo_agrupamento		=	array(
									'name'			=>	"campo_agrupamento",
									'id'			=>	"campo_agrupamento",
									'class'			=>	"form-control",
									'type'			=>	'text',
									'maxlength'		=>	"20",
									'placeholder'	=>	"",
									'value'			=>	set_value("campo_agrupamento", $relatorio->campo_agrupamento)
								);
	$titulo_agrupamento		=	array(
									'id'			=>	"titulo_agrupamento",
									'name'			=>	"titulo_agrupamento",
									'class'			=>	"form-control",
									'type'			=>	'text',
									'maxlength'		=>	"50",
									'placeholder'	=>	"",
									'value'			=>	set_value("titulo_agrupamento", $relatorio->titulo_agrupamento)
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
			<?= form_open($salvar, $form_attr); ?>
				<div class="card border border-gray-light">
					<div class="card-header bg-brand-primary fc-white m-1">
						<h5>Configurações do Relatório</h5>
					</div>
					<div class="card-body">
						<nav aria-label="breadcrumb">
							<ol class="breadcrumb">
								<li class="breadcrumb-item" aria-current="page">Relatório: <strong><?= $relatorio->titulo_relatorio; ?></strong></li>
							</ol>
						</nav>
						<?= ($this->session->flashdata('salvar')) ? $this->session->flashdata('salvar') : ''; ?>

						<div class="form-group row">
							<?= form_label('Nome do Relatório', 'nome_relatorio', $label2); ?>
							<div class="col-sm-5">
								<?= form_input($nome_relatorio); ?>
								<font color="red"><?= form_error('nome_relatorio'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Título do Relatório', 'titulo_relatorio', $label2); ?>
							<div class="col-sm-5">
								<?= form_input($titulo_relatorio); ?>
								<font color="red"><?= form_error('titulo_relatorio'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Caminho Logomarca', 'logomarca', $label2); ?>
							<div class="col-sm-5">
								<?= form_input($logomarca); ?>
								<font color="red"><?= form_error('logomarca'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Orientação', 'orientacao', $label2) ?>
							<div class="col-sm-2">
								<?= form_dropdown('orientacao', $opt_orientacao, $relatorio->orientacao, $orientacao) ?>
							</div>
							<?= form_label('Papel', 'tam_papel', $label1) ?>
							<div class="col-sm-2">
								<?= form_dropdown('tam_papel', $opt_tam_papel, $relatorio->tam_papel, $tam_papel) ?>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Fonte Título', 'fonte_titulo', $label2) ?>
							<div class="col-sm-2">
								<?= form_dropdown('fonte_titulo', $opt_fonte, $relatorio->fonte_titulo, $fonte_titulo) ?>
							</div>
							<?= form_label('Tamanho', 'tam_fonte_titulo', $label1); ?>
							<div class="col-sm-1">
								<?= form_input($tam_fonte_titulo); ?>
								<font color="red"><?= form_error('tam_fonte_titulo'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Fonte Detalhe', 'fonte_detalhe', $label2) ?>
							<div class="col-sm-2">
								<?= form_dropdown('fonte_detalhe', $opt_fonte, $relatorio->fonte_detalhe, $fonte_detalhe) ?>
							</div>

							<?= form_label('Tamanho', 'tam_fonte_detalhe', $label1); ?>
							<div class="col-sm-1">
								<?= form_input($tam_fonte_detalhe); ?>
								<font color="red"><?= form_error('tam_fonte_detalhe'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Fonte Rodapé', 'fonte_rodape', $label2); ?>
							<div class="col-sm-2">
								<?= form_dropdown('fonte_rodape', $opt_fonte, $relatorio->fonte_rodape, $fonte_rodape); ?>
							</div>
							<?= form_label('Tamanho', 'tam_fonte_rodape', $label1); ?>
							<div class="col-sm-1">
								<?= form_input($tam_fonte_rodape); ?>
								<font color="red"><?= form_error('tam_fonte_rodape'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Agrupar pelo Campo', 'campo_agrupamento', $label2); ?>
							<div class="col-sm-2">
								<?= form_input($campo_agrupamento); ?>
								<font color="red"><?= form_error('campo_agrupamento'); ?></font>
							</div>
							<?= form_label('Tipo', 'tipo_campo_agrupamento', $label1) ?>
							<div class="col-sm-2">
								<?= form_dropdown('tipo_campo_agrupamento', $opt_tipo_campo, $relatorio->tipo_campo_agrupamento, $tipo_campo_agrupamento) ?>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Título Agrupamento', 'titulo_agrupamento', $label2); ?>
							<div class="col-sm-3">
								<?= form_input($titulo_agrupamento); ?>
								<font color="red"><?= form_error('titulo_agrupamento'); ?></font>
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
<!-- /Conteúdo -->