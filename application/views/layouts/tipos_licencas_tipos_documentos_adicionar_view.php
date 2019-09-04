<?php
	$input_ordem	=	array(
								'id'			=>	'ordem',
								'name'			=>	'ordem',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	set_value("ordem"),
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
	$select_sn_obrigatorio	=	'class="form-control chosen-select-deselect"';
	$select_sn_validade		=	'class="form-control chosen-select-deselect"';
	$select_sn_renovacao	=	'class="form-control chosen-select-deselect"';
	$opt_sim_nao			=	array(
										'S'	=>	"SIM",
										'n'	=>	"NÃO"
									);
	$opt_tipo_documento['']	=	'*** Selecione ***';
	foreach ($tipos_documentos as $tipo_documento) {
		$opt_tipo_documento[$tipo_documento->tdid]	=	$tipo_documento->tddescricao;
	}
	//-- Table Initiation
	$this->table->set_template($table_tmpl);
?>
<!-- Conteúdo -->
<div class="container container-sistema">
	<div class="row mb-5">
		<div class="col-12">
			<div class="card border border-green-system">
				<div class="card-header bg-green-system fc-white m-1">
					<h5>Adicionar Documento (<?php echo $tipos_licencas->descricao; ?>)</h5>
				</div>
				<?= form_open($salvar, $attrInsert); ?>
					<div class="card-body">
						<?= ($this->session->flashdata('salvar')) ? $this->session->flashdata('salvar') : ''; ?>
						<div class="form-group row">
							<?= form_label('Tipo Documento:', 'ce_tipo_documento',$label2); ?>
							<div class="col-sm-5 pb-1">
								<?= form_dropdown('ce_tipo_documento',$opt_tipo_documento,'',$class.$required); ?>
								<font color="red"><?= form_error('ce_tipo_documento'); ?></font>
							</div>
							<?= form_label('Ordem:', 'ordem',$label2); ?>
							<div class="col-sm-2 pb-1">
								<?= form_input($input_ordem); ?>
								<font color="red"><?= form_error('ordem'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Obrigatório?','sn_obrigatorio',$label2); ?>
							<div class="col-sm-2 pb-1">
								<?= form_dropdown('sn_obrigatorio', $opt_sim_nao, set_value('sn_obrigatorio','N'),$sn_obrigatorio.$class); ?>
								<font color="red"><?= form_error('sn_obrigatorio'); ?></font>
							</div>
							<?= form_label('Validade?:','sn_validade',$label1); ?>
							<div class="col-sm-2 pb-1">
								<?= form_dropdown('sn_validade', $opt_sim_nao, set_value('sn_validade','N'),$sn_validade.$class); ?>
								<font color="red"><?= form_error('sn_validade'); ?></font>
							</div>
							<?= form_label('Renovação?:','sn_renovacao',$label2); ?>
							<div class="col-sm-2 pb-1">
								<?= form_dropdown('sn_renovacao', $opt_sim_nao, set_value('sn_renovacao','N'),$sn_renovacao.$class); ?>
								<font color="red"><?= form_error('sn_renovacao'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Detalhes:', 'detalhe', $label2); ?>
							<div class="col-sm-9 pb-1">
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
	
	<div class="row mb-5">
		<div class="col-12">
			<div class="card border border-green-system">
				<div class="card-header bg-green-system fc-white m-1">
					<h5>Documentos Adicionados (<?php echo $tipos_licencas->descricao; ?>)</h5>
				</div>
				<?php $this->table->set_heading('Ordem', 'Tipo Documento', 'Obrigatório?', 'Validade?', 'Renovação?', 'Ações'); ?>
				<div class="card-body">
					<?= ($this->session->flashdata('excluir')) ? $this->session->flashdata('excluir') : ''; ?>
					<?php
						foreach ($documentos_adicionados as $documento_adicionado) {
							$this->table->add_row(
								$documento_adicionado->ordem,
								$documento_adicionado->tddescricao,
								$documento_adicionado->sn_obrigatorio,
								$documento_adicionado->sn_validade,
								$documento_adicionado->sn_renovacao,
								'<a class="btn btn-default btn-sm" href='.base_url("tipos_licencas/editarTipoDocumento/$ce_tipo_licenca/$documento_adicionado->id").' data-toggle="tooltip" title="Editar"><i class="fa fa-pen-square"></i></a>
								<a class="btn btn-default btn-sm" href='.base_url("tipos_licencas/excluirTipoDocumento/$ce_tipo_licenca/$documento_adicionado->id").' data-toggle="tooltip" title="Excluir"><i class="fa fa-times"></i></a>'
							);
						}
						$table = $this->table->generate();
					?>
					<?= $table; ?>
				</div>
			</div>
		</div>
	</div>
</div>