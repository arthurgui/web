<?php
	$input_descricao	=	array(
								'id'			=>	'descricao',
								'name'			=>	'descricao',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	set_value("descricao"),
								'placeholder'	=>	'Descrição',
								'maxlength'		=>	'50',
								'required'		=>	''
								);

	$input_periodo_validade	=	array(
								'id'			=>	'periodo_validade',
								'name'			=>	'periodo_validade',
								'type'			=>	'number',
								'class'			=>	'form-control',
								'value'			=>	set_value("periodo_validade"),
								'placeholder'	=>	'Nº Meses de Validade',
								'required'		=>	'',
								);

	$input_detalhe	=	array(
								'id'			=>	'detalhe',
								'name'			=>	'detalhe',
								'type'			=>	'textarea',
								'class'			=>	'form-control',
								'value'			=>	set_value("detalhe"),
								'placeholder'	=>	'Detalhes do Tipo de Licença',
								'maxlength'		=>	'1024'
								);
?>
<!-- Conteúdo -->
<div class="container container-sistema">
	<div class="row">
		<div class="col-12">
			<div class="card border border-green-system">
				<div class="card-header bg-green-system fc-white m-1">
					<h5>Adicionar Tipo de Licença</h5>
				</div>
				<?= form_open_multipart($salvar, $form_attr); ?>
					<div class="card-body">
						<?= ($this->session->flashdata('salvar')) ? $this->session->flashdata('salvar') : ''; ?>
						<?= ($this->session->flashdata('Erro_anexo')) ? $this->session->flashdata('Erro_anexo') : ''; ?>
						<?= ($this->session->flashdata('Erro_envio')) ? $this->session->flashdata('Erro_envio') : ''; ?>
						<?= ($this->session->flashdata('Erro_formato')) ? $this->session->flashdata('Erro_formato') : ''; ?>
						<div class="form-group row">
							<?= form_label('Descrição:', 'descricao',$label2); ?>
							<div class="col-sm-6 pb-1">
								<?= form_input($input_descricao); ?>
								<font color="red"><?= form_error('descricao'); ?></font>
							</div>
							<?= form_label('Período de Validade:', 'periodo_validade', $label2); ?>
							<div class="col-sm-2 pb-1">
								<?= form_input($input_periodo_validade); ?>
								<font color="red"><?= form_error('periodo_validade'); ?></font>
							</div>
						</div>

						<div class="form-group row">
							<?= form_label('Detalhes:', 'detalhe', $label2); ?>
							<div class="col-sm-10 pb-1">
								<?= form_textarea($input_detalhe); ?>
								<font color="red"><?= form_error('detalhe'); ?></font>
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