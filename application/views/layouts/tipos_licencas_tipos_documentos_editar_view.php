<?php
	$input_ordem	=	array(
								'id'			=>	'ordem',
								'name'			=>	'ordem',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	set_value("ordem",$documento->ordem),
								'placeholder'	=>	'Ordem',
								'onkeypress'	=>	"return txtBoxFormat(this, '99999', event);",
								'maxlength'		=>	'5',
								'required'		=>	''
								);
	$input_detalhe	=	array(
								'id'			=>	'detalhe',
								'name'			=>	'detalhe',
								'type'			=>	'textarea',
								'class'			=>	'form-control',
								'value'			=>	set_value("detalhe",$documento->detalhe),
								'placeholder'	=>	'Detalhes',
								'rows' 			=>  '6'
								);

	$select_sn_obrigatorio	=	'class="form-control"';
	$select_sn_validade		=	'class="form-control"';
	$select_sn_renovacao	=	'class="form-control"';
	$opt_sim_nao['S']		=	'Sim';
	$opt_sim_nao['N']		=	'Não';
	$select_tipo_documento	=	'class="form-control"';
	$opt_tipo_documento['']	=	'*** Selecione ***';
	foreach ($tipos_documentos as $tipo_documento) {
		$opt_tipo_documento[$tipo_documento->tdid]	=	substr($tipo_documento->tddescricao,0,120);
	}
?>
<!-- Conteúdo -->
<div class="container-fluid container-sistema">
	<div class="row mb-5">
		<div class="col-12">
			<div class="card border border-green-system">
				<div class="card-header bg-green-system fc-white m-1"><h5>Adicionar Documento</h5></div>
				<?= form_open($salvar, $form_attr); ?>
					<div class="card-body">
						<?= ($this->session->flashdata('salvar')) ? $this->session->flashdata('salvar') : ''; ?>
						<div class="form-group row">
							<?= form_label('Tipo Documento:', 'ce_tipo_documento',$label2); ?>
							<div class="col-sm-5 pb-1">
								<?= form_dropdown('ce_tipo_documento',$opt_tipo_documento,$documento->ce_tipo_documento,$select_tipo_documento); ?>
								<font color="red"><?= form_error('ce_tipo_documento'); ?></font>
							</div>
							<?= form_label('Ordem:', 'ordem', $label1); ?>
							<div class="col-sm-1 pb-1">
								<?= form_input($input_ordem); ?>
								<font color="red"><?= form_error('ordem'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Obrigatório?','sn_obrigatorio',$label2); ?>
							<div class="col-sm-2 pb-1">
								<?= form_dropdown('sn_obrigatorio', $opt_sim_nao, $documento->sn_obrigatorio, $select_sn_obrigatorio); ?>
								<font color="red"><?= form_error('sn_obrigatorio'); ?></font>
							</div>
							<?= form_label('Validade?:','sn_validade',$label1); ?>
							<div class="col-sm-2 pb-1">
								<?= form_dropdown('sn_validade', $opt_sim_nao, $documento->sn_validade, $select_sn_validade); ?>
								<font color="red"><?= form_error('sn_validade'); ?></font>
							</div>
							<?= form_label('Renovação?:','sn_renovacao',$label1); ?>
							<div class="col-sm-1 pb-1">
								<?= form_dropdown('sn_renovacao', $opt_sim_nao, $documento->sn_renovacao, $select_sn_renovacao); ?>
								<font color="red"><?= form_error('sn_renovacao'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Detalhes:', 'detalhe', $label2); ?>
							<div class="col-sm-7 pb-1">
								<?= form_textarea($input_detalhe); ?>
								<font color="red"><?= form_error('detalhe'); ?></font>
							</div>
						</div>
					</div>
					<div class="card-footer border-top bg-green-system fc-white m-1">
						<button class="btn btn-brand-primary" type="submit"><i class="fas fa-save"></i>&nbsp;Salvar</button>
						<a class="btn btn-physis" href=<?= $voltar; ?>><i class="fa fa-reply"></i>&nbsp;Voltar</a>
					</div>
				<?= form_close(); ?>
			</div>
		</div>
	</div>
</div>