<?php
	$input_sequencial	=	array(
								'id'			=>	'sequencial',
								'name'			=>	'sequencial',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$condicionante_licenca->sequencial,
								'placeholder'	=>	'Sequencial',
								'onkeypress'	=>	"return txtBoxFormat(this, '99999', event);",
								'maxlength'		=>	'5',
								'required'		=>	''
								);

	$input_descricao	=	array(
								'id'			=>	'descricao',
								'name'			=>	'descricao',
								'type'			=>	'textarea',
								'rows' 			=>	'2',
								'class'			=>	'form-control',
								'placeholder'	=>	'Descrição',
								'maxlength'		=>	'500',
								'value'			=>	$condicionante_licenca->descricao, 
								'required'		=>	''
								);

	$input_dias_prazo	=	array(
								'id'			=>	'dias_prazo',
								'name'			=>	'dias_prazo',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$condicionante_licenca->dias_prazo,
								'placeholder'	=>	'Prazo',
								'maxlength'		=>	'3',
								'onkeypress'	=>	"return txtBoxFormat(this, '999', event);"
								);

	$select_sn_pendente		=	'class="form-control chosen-select-deselect"';

	$opt_sim_nao			=	array(
										'S'	=>	"SIM",
										'n'	=>	"NÃO"
									);

	//-- Table Initiation
	$this->table->set_template($table_tmpl);
?>
<!-- Conteúdo -->
<div class="container container-sistema">
	<div class="row mb-5">
		<div class="col-12">
			<div class="card border border-green-system">
				<div class="card-header bg-green-system fc-white m-1">
					<h5>Editar Condicionante (<?php echo $licenca->num_protocolo; ?>)</h5>
				</div>
				<?= form_open($salvar, $attrInsert); ?>
					<div class="card-body">
						<?= ($this->session->flashdata('salvar')) ? $this->session->flashdata('salvar') : ''; ?>
						<div class="form-group row">
							<?= form_label('Sequencial:', 'sequencial',$label2); ?>
							<div class="col-sm-1 pb-1">
								<?= form_input($input_sequencial); ?>
								<font color="red"><?= form_error('sequencial'); ?></font>
							</div>
							<?= form_label('Prazo','dias_prazo', $label1); ?>
							<div class="col-sm-3 pb-1">
								<?= form_input($input_dias_prazo); ?>
								<font color="red"><?= form_error('dias_prazo'); ?></font>
							</div>
							<?= form_label('Pendente?','sn_pendente', $label2); ?>
							<div class="col-sm-2 pb-1">
								<?= form_dropdown('sn_pendente', $opt_sim_nao, $condicionante_licenca->sn_pendente, $sn_pendente.$class); ?>
								<font color="red"><?= form_error('sn_pendente'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Descrição','descricao',$label2); ?>
							<div class="col-sm-9 pb-1">
								<?= form_textarea($input_descricao); ?>
								<font color="red"><?= form_error('descricao'); ?></font>
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