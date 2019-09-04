<?php
	$cabecalho			=	array(
								'id'			=>	"cabecalho",
								'name'			=>	"cabecalho",
								'class'			=>	"form-control",
								'type'			=>	'text',
								'maxlenght'		=>	"20",
								'placeholder'	=>	"",
								'value'			=>	set_value("cabecalho", $campo_relatorio->cabecalho),
								'required'		=>	''
							);
	$nome				=	array(
								'id'			=>	"nome",
								'name'			=>	"nome",
								'class'			=>	"form-control",
								'type'			=>	'text',
								'maxlenght'		=>	"50",
								'placeholder'	=>	"",
								'value'			=>	set_value("nome", $campo_relatorio->nome),
								'required'		=>	''
							);

	$tipo				=	array(
								'id'	=> "tipo",
								'class'	=> "form-control"
							);
	$opt_tipo			=	array(
								'S'	=>	'String',
								'D'	=>	'Data',
								'C'	=>	'Valor'
							);

	$origem				=	array(
								'id'	=> "origem",
								'class'	=> "form-control"
							);
	$opt_origem			=	array(
								'B'	=>	'Banco',
								'F'	=>	'Função',
							);


	$calculo			=	array(
								'id'			=>	"calculo",
								'class'			=>	"form-control"
							);
	$opt_calculo		=	array(
								''	=>	'Sem Cálculo',
								'C'	=>	'Contar',
								'S'	=>	'Somar',
							);

	$posx				=	array(
								'id'			=>	"posx",
								'name'			=>	"posx",
								'class'			=>	"form-control",
								'type'			=>	'text',
								'maxlenght'		=>	"50",
								'placeholder'	=>	"",
								'value'			=>	set_value("posx", $campo_relatorio->posx)
							);
	$ordem				=	array(
								'id'			=>	"ordem",
								'name'			=>	"ordem",
								'class'			=>	"form-control",
								'type'			=>	'text',
								'maxlenght'		=>	"50",
								'placeholder'	=>	"",
								'value'			=>	set_value("ordem", $campo_relatorio->ordem),
								'required'		=>	''
							);
	$tamanho			=	array(
								'id'			=>	"tamanho",
								'name'			=>	"tamanho",
								'class'			=>	"form-control",
								'type'			=>	'text',
								'maxlenght'		=>	"50",
								'placeholder'	=>	"",
								'value'			=>	set_value("tamanho", $campo_relatorio->tamanho)
							);

	$alinhamento		=	array(
								'id'			=>	"alinhamento",
								'class'			=>	"form-control"
							);
	$opt_alinhamento	=	array(
								'L'	=>	'Esquerda',
								'C'	=>	'Centralizado',
								'R'	=>	'Direita'
							);

	$pode_repetir		=	array(
								'id'			=>	"pode_repetir",
								'class'			=>	"form-control"
							);
	$opt_pode_repetir	=	array(
								'N'	=>	'Não',
								'S'	=>	'Sim'
							);
?>
<!-- Conteúdo -->
<div class="container container-sistema">
	<div class="row mb-5">
		<div class="col-12">
			<?= form_open($form_relatorios, $form_attr); ?>
				<div class="card border border-gray-light">
					<div class="card-header bg-brand-primary fc-white m-1">
						<h5>Editar Campo</h5>
					</div>
					<div class="card-body">
						<!-- <nav aria-label="breadcrumb">
							<ol class="breadcrumb">
								<li class="breadcrumb-item" aria-current="page">Relatório: <strong><?= $relatorio->titulo_relatorio; ?></strong></li>
							</ol>
						</nav> -->
						<?= ($this->session->flashdata('salvar')) ? $this->session->flashdata('salvar') : ''; ?>

						<?= form_hidden('ce_relatorio', $campo_relatorio->ce_relatorio); ?>
						<div class="form-group row">
							<?= form_label('Cabeçalho', 'cabecalho', $label2); ?>
							<div class="col-sm-3">
								<?= form_input($cabecalho); ?>
								<font color="red"><?= form_error('cabecalho'); ?></font>
							</div>
							<?= form_label('Nome Campo', 'nome', $label2); ?>
							<div class="col-sm-3">
								<?= form_input($nome); ?>
								<font color="red"><?= form_error('nome'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Tipo Campo', 'tipo', $label2) ?>
							<div class="col-sm-2">
								<?= form_dropdown('tipo', $opt_tipo, $campo_relatorio->tipo, $tipo) ?>
							</div>
							<?= form_label('Origem', 'origem', $label1) ?>
							<div class="col-sm-2">
								<?= form_dropdown('origem', $opt_origem, $campo_relatorio->origem, $origem) ?>
							</div>
							<?= form_label('Calcula?', 'calculo', $label1) ?>
							<div class="col-sm-2">
								<?= form_dropdown('calculo', $opt_calculo, $campo_relatorio->calculo, $calculo) ?>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Posição X', 'posx', $label2); ?>
							<div class="col-sm-1">
								<?= form_input($posx); ?>
								<font color="red"><?= form_error('posx'); ?></font>
							</div>
							<?= form_label('Ordem', 'ordem', $label2); ?>
							<div class="col-sm-1">
								<?= form_input($ordem); ?>
								<font color="red"><?= form_error('ordem'); ?></font>
							</div>
							<?=	form_label('Tamanho', 'tamanho', $label2); ?>
							<div class="col-sm-1">
								<?= form_input($tamanho); ?>
								<font color="red"><?= form_error('tamanho'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Alinhamento', 'alinhamento', $label2) ?>
							<div class="col-sm-2">
								<?= form_dropdown('alinhamento', $opt_alinhamento, 'L', $alinhamento) ?>
							</div>
							<?= form_label('Repetir?', 'pode_repetir', $label1) ?>
							<div class="col-sm-2">
								<?= form_dropdown('pode_repetir', $opt_pode_repetir, 'S', $pode_repetir) ?>
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
