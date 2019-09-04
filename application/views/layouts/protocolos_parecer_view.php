<?php
	$input_latitude				=	array(
									'id'			=>	'latitude',
									'name'			=>	'latitude',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'maxlength'		=>	'11',
									'required'		=>	'',
									'oninvalid'		=>	"setCustomValidity('Informe a latitude.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}",
									'onkeypress'	=>	"return txtBoxFormat(this, '99°99ʹ99,9ʺ', event);",
									'value'			=>	$protocolo->latitude
								);

	$input_longitude				=	array(
									'id'			=>	'longitude',
									'name'			=>	'longitude',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'maxlength'		=>	'11',
									'required'		=>	'',
									'oninvalid'		=>	"setCustomValidity('Informe a longitude.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}",
									'onkeypress'	=>	"return txtBoxFormat(this, '99°99ʹ99,9ʺ', event);",
									'value'			=>	$protocolo->longitude
								);

	$textarea_contextualizacao	=	array(
									'id'			=>	'contextualizacao',
									'name'			=>	'contextualizacao',
									'type'			=>	'textarea',
									'class'			=>	'form-control text-tinymce',
									'value'			=>	$protocolo->contextualizacao,
									'rows'			=>	'10',
									'required'		=>	'',
									'oninvalid'		=>	"setCustomValidity('Informe a descrição da(s) contextualização(s).')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}",
									'required'		=>	''
								);

	$textarea_analise			=	array(
									'id'			=>	'analise',
									'name'			=>	'analise',
									'type'			=>	'textarea',
									'class'			=>	'form-control text-tinymce',
									'value'			=>	$protocolo->analise,
									'rows'			=>	'10',
									'required'		=>	'',
									'oninvalid'		=>	"setCustomValidity('Informe a descrição da(s) análise(s).')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}",
									'required'		=>	''
								);

	$textarea_referencias	=	array(
									'id'			=>	'referencias',
									'name'			=>	'referencias',
									'type'			=>	'textarea',
									'class'			=>	'form-control text-tinymce',
									'value'			=>	$protocolo->referencias,
									'rows'			=>	'10',
									'required'		=>	'',
									'oninvalid'		=>	"setCustomValidity('Informe a descrição da(s) referências(s).')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}",
									'required'		=>	''
								);

	$textarea_parecer		=	array(
									'id'			=>	'parecer',
									'name'			=>	'parecer',
									'type'			=>	'textarea',
									'class'			=>	'form-control text-tinymce',
									'value'			=>	$protocolo->parecer,
									'rows'			=>	'10',
									'required'		=>	'',
									'oninvalid'		=>	"setCustomValidity('Informe a descrição do(s) parecer(es).')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}",
									'required'		=>	''
								);

	/* Data */
	$input_dia	=	array(
								'id'			=>	'dia',
								'name'			=>	'dia',
								'type'			=>	'text',
								'class'			=>	'form-control numero',
								'value'			=>	set_value(date("d")),
								'maxlength'		=>	'2',
								'required'		=>	'',
								'onkeyup'		=>	"return txtBoxFormat(this, '99', event);",
								'oninvalid'		=>	"setCustomValidity('Informe o dia do mês.')",
								'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
							);
	$input_mes	=	array(
								'id'			=>	'mes',
								'name'			=>	'mes',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	set_value(nomemes((int)date("d"))),
								'maxlength'		=>	'20',
								'required'		=>	'',
								'oninvalid'		=>	"setCustomValidity('Informe o mês.')",
								'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
							);
	$input_ano	=	array(
								'id'			=>	'ano',
								'name'			=>	'ano',
								'type'			=>	'text',
								'class'			=>	'form-control numero',
								'value'			=>	set_value(date("Y")),
								'maxlength'		=>	'4',
								'required'		=>	'',
								'onkeyup'		=>	"return txtBoxFormat(this, '9999', event);",
								'oninvalid'		=>	"setCustomValidity('Informe o ano.')",
								'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
							);
	/* /Data */
?>
<div class="container-fluid container-sistema parecer-tecnico">
	<div class="row">
		<div class="col-12">
			<div class="card border border-green-system">
				<div class="card-header bg-green-system fc-white m-1">
					<h6>PARECER TÉCNICO</h6>
				</div>
				<?= form_open($salvar,$form_parecer); ?>
					<?= form_hidden('id_requerente',$protocolo->id); ?>
					<?= form_hidden('num_parecer',$protocolo->num_parecer); ?>
					<div class="card-body">
						<?= ($this->session->flashdata('salvar')) ? $this->session->flashdata('salvar') : ''; ?>
						<fieldset class="border-top border-brand-primary">
							<legend>Dados da Licença</legend>
							<div class="form-group row">
								<?= form_label('Latitude:','latitude',$label2); ?>
								<div class="col-3">
									<?= form_input($input_latitude); ?>
								</div>
								<?= form_label('Longitude:','longitude',$label1); ?>
								<div class="col-3">
									<?= form_input($input_longitude); ?>
								</div>
							</div>
						</fieldset>
						<fieldset class="border-top border-brand-primary">
							<legend>Dados do Parecer</legend>
							<div class="form-group row">
								<?= form_label('Contextualização:','contextualizacao',$label2); ?>
								<div class="col-7">
									<?= form_textarea($textarea_contextualizacao); ?>
								</div>
							</div>
							<div class="form-group row">
								<?= form_label('Análise:','analise',$label2); ?>
								<div class="col-7">
									<?= form_textarea($textarea_analise); ?>
								</div>
							</div>
							<div class="form-group row">
								<?= form_label('Parecer:','parecer',$label2); ?>
								<div class="col-7">
									<?= form_textarea($textarea_parecer); ?>
								</div>
							</div>
							<div class="form-group row">
								<?= form_label('Referências:','referencias',$label2); ?>
								<div class="col-7">
									<?= form_textarea($textarea_referencias); ?>
								</div>
							</div>
						</fieldset>
						<fieldset class="border-top border-brand-primary">
							<legend>Condicionantes</legend>
							<?php $this->table->set_template($table_tmpl_tbno); ?>
							<?php $this->table->set_heading('Seq.', 'Descrição', 'Validade', 'Pendente?'); ?>
							<div class="form-group row">
								<?= ($this->session->flashdata('excluir')) ? $this->session->flashdata('excluir') : ''; ?>
								<?php
									foreach ($condicionantes_licenca as $condicionante_licenca) {
										$this->table->add_row(
											$condicionante_licenca->sequencial,
											$condicionante_licenca->descricao,
											$condicionante_licenca->data_prazo,
											($condicionante_licenca->sn_pendente == 'S') ? 'SIM' : 'NÃO'
										);
									}
									$table = $this->table->generate();
								?>
								<?= $table; ?>
							</div>
						</fieldset>
					</div>
					<div class="card-footer bg-green-system fc-white m-1">
						<div class="form-group row">
							<div class="col-5">
								<button type="submit" class="btn btn-brand-primary"><i class="fas fa-save"></i>&nbsp;Salvar</button>
								<!-- <button type="button" class="btn btn-brand-primary"><i class="fa fa-print"></i>&nbsp;Imprimir</button> -->
								<a href="<?= base_url($voltar); ?>" class="btn btn-brand-primary"><i class="fas fa-reply"></i>&nbsp;Voltar</a>
							</div>
						</div>
					</div>
				<?= form_close(); ?>
			</div>
		</div>
	</div>
</div>
