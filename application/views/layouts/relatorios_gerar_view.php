<script type="text/javascript">
	$(document).ready(function() {
		$('input[name="inlineRadioOptions"]').on('click',function(){
			$valor = $(this).val();
			if ($valor == 'cpf') {
				$("#cpf_cnpj").val('').attr('onkeypress',"return txtBoxFormat(this, '999.999.999-99', event);").attr('maxlength','14').focus();
			}
			else if ($valor == 'cnpj') {
				$("#cpf_cnpj").val('').attr('onkeypress',"return txtBoxFormat(this, '99.999.999/9999-99', event);").attr('maxlength','18').focus();
			}
		});
	});
</script>
<?php
	if ($tipos_licencas) {
		if (count($tipos_licencas) > 1) {
			$opt_tipo_licenca[''] = '*** Todos ***';
		}
		foreach ($tipos_licencas as $tl) {
			$opt_tipo_licenca[$tl->id] = $tl->descricao;
		}
	}
	else {
		$opt_tipo_licenca[''] = '*** Não há tipos de licenças cadastrados ***';
	}

	$tipo_licenca			=	array(
									'id'			=>	'ce_tipo_licenca',
									'name'			=>	'ce_tipo_licenca',
									'class'			=>	'form-control'
								);

	$cpf_cnpj				=	array(
									'id'	=>	'cpf_cnpj',
									'name'	=>	'cpf_cnpj',
									'class'	=>	'form-control',
									'type'	=>	'text',
									'onkeypress'	=>	"return txtBoxFormat(this, '999.999.999-99', event);",
									'maxlength'	=>	'14'
								);
	$nome_requerente				=	array(
									'id'			=>	'nome_requerente',
									'name'			=>	'nome_requerente',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	set_value("nome_requerente"),
									'placeholder'	=>	'',
									'maxlength'		=>	'60'
								);
	$dt_inicio	=	array(
									'id'	=>	'dt_inicio',
									'name'	=>	'dt_inicio',
									'class'	=>	'form-control',
									'type'	=>	'date'
								);
	$dt_fim		=	array(
									'id'	=>	'dt_fim',
									'name'	=>	'dt_fim',
									'class'	=>	'form-control input-group-append',
									'type'	=>	'date'
								);
	$status			=	array(
									'id'			=>	'status',
									'name'			=>	'status',
									'class'			=>	'form-control'
								);
	$opt_status[''] 	= 	'*** Todos ***';
	$opt_status['PR'] 	= 	'Protocolo';
	$opt_status['AN'] 	= 	'Análise';
	$opt_status['AP'] 	= 	'Aprovação (Secretário)';
	$opt_status['AU'] 	= 	'Auditoria (COMMEA)';
	$opt_status['FI'] 	= 	'Finalizado';
	$opt_status['IN'] 	= 	'Indeferido';

	$attrForm 			=	array(
								'class'		=>	'form-horizontal',
								'role'		=>	'form',
								'id'		=>	'form_consulta',
								'target'	=>	'_blank'
							);
?>
<!-- Conteúdo -->
<div class="container container-sistema">
	<div class="row">
		<div class="col-12">
			<?= form_open($form_relatorios, $attrForm); ?>
				<div class="card border border-green-system">
					<div class="card-header bg-green-system fc-white m-1">
						<h5>Relatórios</h5>
					</div>
					<div class="card-body">
						<?= ($this->session->flashdata('salvar')) ? $this->session->flashdata('salvar') : ''; ?>
						<div class="row">
							<div class="col-lg-5">
								<fieldset>
									<legend>Tipos de Relatório</legend>
									<div class="form-group">
										<?php foreach ($relatorios as $key => $relatorio) : ?>
											<div class="form-check mb-3">
												<div class="custom-control custom-radio mb-3">
													<?php
														$checked = ($key == 0) ? true : false;
														$input_relatorio =	array(
																				'id'		=> $relatorio->id,
																				'name'		=> 'relatorio',
																				'type'		=> 'radio',
																				'class'		=> 'custom-control-input',
																				'value'		=> $relatorio->id,
																				'checked'	=> $checked
																			);
													?>
													<?= form_radio($input_relatorio); ?>
													<label class="custom-control-label" for="<?= $relatorio->id; ?>"><?= $relatorio->titulo_relatorio; ?></label>
												</div>
											</div>
										<?php endforeach; ?>
									</div>
								</fieldset>
							</div>
							<div class="col-lg-7">
								<fieldset class="border">
									<legend>Filtros</legend>
									<!-- Tipo de Licença -->
									<?php if ($opcaoMenu == 'LICEN') : ?>
										<div class="form-group row">
											<?= form_label('Tipo Licença:', 'ce_tipo_licenca', $label3); ?>
											<div class="col-lg-9">
												<?= form_dropdown('ce_tipo_licenca', $opt_tipo_licenca, set_value("ce_tipo_licenca"), $tipo_licenca); ?>
											</div>
										</div>
									<?php endif; ?>
									<!-- CPF / CNPJ-->
									<div class="form-group row">
										<div class="col-lg-3 text-right">
											<label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="cpf" checked>&nbsp;CPF</label>&nbsp;&nbsp;
											<label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="cnpj">&nbsp;CNPJ</label>
										</div>
										<!-- <div class="col-lg-3">
											<div class="form-check form-check-inline">
												<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="cpf">
												<label class="form-check-label" for="inlineRadio1">CPF</label>
											</div>
											<div class="form-check form-check-inline">
												<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="cnpj">
												<label class="form-check-label" for="inlineRadio1">CNPJ</label>
											</div>
										</div> -->
										<div class="col-lg-4">
											<?= form_input($cpf_cnpj); ?>
										</div>
									</div>
									<!-- Requerente -->
									<div class="form-group row">
										<?= form_label('Contribuinte:', 'nome_requerente', $label3); ?>
										<div class="col-lg-9">
											<?= form_input($nome_requerente); ?>
										</div>
									</div>
									<!-- PERÍODO -->
									<?php if ($opcaoMenu == 'LICEN') : ?>
										<div class="form-group row">
											<?= form_label('Período:', 'dt_inicio', $label3); ?>
											<div class="form-inline">
												<div class="input-group col-lg-10">
													<?= form_input($dt_inicio); ?>
													<div class="input-group-append">
														<span class="input-group-text">a</span>
													</div>
													<?= form_input($dt_fim); ?>
												</div>
											</div>
										</div>
									<?php endif; ?>
									<!-- Status -->
									<?php if ($opcaoMenu == 'LICEN') : ?>
										<div class="form-group row">
											<?= form_label('Status:', 'status', $label3); ?>
											<div class="col-lg-7">
												<?= form_dropdown('status', $opt_status, set_value("status"), $tipo_licenca); ?>
											</div>
										</div>
									<?php endif; ?>
								</fieldset>
							</div>
						</div>
					</div>
					<div class="card-footer border-top bg-green-system fc-white m-1">
						<button class="btn btn-brand-primary"><i class="fa fa-print"></i>&nbsp;Gerar</button>
					</div>
				</div>
			<?= form_close(); ?>
		</div>
	</div>
</div>
<!-- /Conteúdo -->