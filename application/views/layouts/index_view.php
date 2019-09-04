<main role="main" class="container container-sistema">
	<?php if ($this->session->userdata('empresa')) : ?>
		<?php
			$input_cpf_cnpj	=	array(
									'id'			=>	'cpf_cnpj',
									'name'			=>	'cpf_cnpj',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	set_value("cpf_cnpj"),
									'maxlength'		=>	'14',
									'onkeypress'	=>	"return txtBoxFormat(this, '999.999.999-99', event);",
									'required'		=>	''
								);

			$select_cpf_cnpj				=	'id="select_cpf_cnpj" class="form-control"';
		?>
		<script type="text/javascript">
			$(document).ready(function(){
				if ($(".principal-sistema").length) {
					$("#select_cpf_cnpj").on('change',function(){
						$pessoa	=	$(this).val();
						if ($pessoa == 'J') {
							$('label[for="cpf_cnpj"]').html('CNPJ:');
							$("#cpf_cnpj").val('').attr('maxlength','18').attr('onkeypress',"return txtBoxFormat(this, '99.999.999/9999-99', event);");
						}
						else if ($pessoa == 'F') {
							$('label[for="cpf_cnpj"]').html('CPF:');
							$("#cpf_cnpj").val('').attr('maxlength','14').attr('onkeypress',"return txtBoxFormat(this, '999.999.999-99', event);");
						}
					});

					$("#modalAndamentoProcesso").on('show.bs.modal',function(e){
						$("#modalAndamentoProcesso #table-AndamentoProcesso tbody").remove();
						$pf_pj		=	$("#pf_pj").val();
						$cpf_cnpj	=	$("#cpf_cnpj").val();
						if (($pf_pj == '') || ($cpf_cnpj == '')) {
							e.preventDefault();
						}
						else{
							$.post(
									_sistempath+'processos/consultarPorCPFCNPJ',
									{
										pf_pj:$pf_pj,
										cpf_cnpj:$cpf_cnpj
									},
									function(retorno){
										if (retorno.length > 0) {
											$processos	=	retorno.split(";"); // processos
											for (var i = 0; i < $processos.length; i++) {
												$processo		=	$processos[i].split("&");
												$dados_processo = $processo[0].split("|");
												$("#modalAndamentoProcesso #table-AndamentoProcesso").append(
																											'<tr>'+
																												'<td style="vertical-align: middle !important;">'+
																													$dados_processo[1]+
																												'</td>'+
																												'<td style="vertical-align: middle !important;">'+
																													$dados_processo[2]+
																												'</td>'+
																												'<td style="vertical-align: middle !important;">'+
																													$dados_processo[3]+
																												'</td>'+
																												'<td>'+
																													'<a class="btn btn-default btn-sm" data-toggle="tooltip" title="Visualizar" href="'+_sistempath+'processos/consultarPorId/'+$dados_processo[0]+'"><i class="fa fa-search" aria-hidden="true"></i></a>'+
																												'</td>'+
																											'</tr>'
																										);
												$logs			=	$processo[1].split("-");
												for (var j = 0; j < $logs.length; j++) {
													$dados_log	=	logs[j].split("_");
													$("#modalAndamentoProcesso #table-AndamentoProcesso").append(
																											'<tr>'+
																												'<td style="vertical-align: middle !important;">'+
																													$dados_processo[1]+
																												'</td>'+
																												'<td style="vertical-align: middle !important;">'+
																													$dados_processo[2]+
																												'</td>'+
																												'<td style="vertical-align: middle !important;">'+
																													$dados_processo[3]+
																												'</td>'+
																												'<td>'+
																													'<a class="btn btn-default btn-sm" data-toggle="tooltip" title="Visualizar" href="'+_sistempath+'processos/consultarPorId/'+$dados_processo[0]+'"><i class="fa fa-search" aria-hidden="true"></i></a>'+
																												'</td>'+
																											'</tr>'
																										);
												}
												
											}
										}
									}
							);
						}
					});
				}
				$('[data-toggle="tooltip"]').tooltip();
			});

			function exibeLogs(link){
				_num_protocolo	=	$(link).attr('data-protocolo');
				_count_logs		=	$(link).attr('data-count-logs');
				_logs 			=	$(link).attr('data-logs');
				if (_count_logs > 0) {
					$("#modalLogsLicenca div.modal-body").html($(_logs).html());
					$("#modalLogsLicenca span#num_protocolo").html(_num_protocolo);
					$("#modalLogsLicenca").modal('show');
				}
				else{
					toastr.error("Não há logs para esse protocolo!");
				}
			}
		</script>
		<div class="row justify-content-md-center mb-2 principal-sistema">
			<div class="col-sm-7">
				<div class="card border border-green-system">
					<div class="card-header bg-green-system fc-white m-1">
						<h6>Consulta Andamento Licença</h6>
					</div>
					<?= form_open($frm_consulta,$form_consulta); ?>
						<div class="card-body">
							<div class="form-group row">
								<?= form_label('Física/Jurídica:', 'pf_pj',$label3); ?>
								<div class="col-sm-3 pb-1">
									<?= form_dropdown('pf_pj', $opt_pf_pj, set_value('pf_pj','F'), $select_cpf_cnpj); ?>
									<font color="red"><?= form_error('descricao'); ?></font>
								</div>
								<?= form_label('CPF:', 'cpf_cnpj',$label2); ?>
								<div class="col-sm-4 pb-1">
									<?= form_input($input_cpf_cnpj); ?>
									<font color="red"><?= form_error('cpf_cnpj'); ?></font>
								</div>
							</div>
						</div>
						<div class="card-footer border-top bg-green-system fc-white m-1">
							<div class="form-row mt-1">
								<div class="col-md-12 pb-1">
									<button class="btn btn-physis" type="submit"><i class="fas fa-search"></i>&nbsp;Consultar</button>
								</div>
							</div>
						</div>
					<?= form_close(); ?>
				</div>
			</div>
		</div>
		<?php if(isset($requerente)) : ?>
			<div class="row justify-content-md-center principal-sistema">
				<div class="col-sm-7">
					<div class="card border border-green-system">
						<div class="card-header bg-green-system fc-white m-1">
							<h6>Resultado da consulta - CPF/CNPJ nº <?= $requerente->cpf_cnpj; ?></h6>
						</div>
						<div class="card-body">
							<div class="row">
								<div class="col-sm-2 text-right">Nome:</div>
								<div class="col-sm-10"><?= $requerente->nome_razaosocial; ?></div>
							</div>
							<div class="row">
								<div class="col-sm-2 text-right">Endereço:</div>
								<div class="col-sm-10"><?= $requerente->endereco; ?></div>
							</div>
							<div class="row mt-2">
								<div class="col-sm-12">
									<div class="card">
										<div class="card-body">
											<div class="row pb-2">
												<!-- <div class="col-sm-2"></div> -->
												<div class="col-sm-6 text-center border border-green-system bg-green-system fc-white">Núm. Protocolo</div>
												<div class="col-sm-6 text-center border border-green-system bg-green-system fc-white">Status</div>
											</div>
											<?php for($i = 0; $i < count($licencas); $i++) : ?>
												<div class="row pb-2 hover border-bottom" data-logs="#logs<?= $licencas[$i]->id; ?>" data-count-logs="<?= count($licencas[$i]->logs_licenca); ?>" data-protocolo="<?= $licencas[$i]->num_protocolo; ?>" onclick="exibeLogs(this);" >
													<div id="logs<?= $licencas[$i]->id; ?>" class="d-none">
														<div class="row">
															<div class="col-sm-12">
																<table class="table table-bordered table-sm">
																	<thead>
																		<tr>
																			<th class="text-center">Status Anterior</th>
																			<th class="text-center">Status Atual</th>
																			<th class="text-center">Data/Hora</th>
																			<th class="text-center">Usuário</th>
																		</tr>
																	</thead>
																	<tbody>
																		<?php for($j = 0; $j < count($licencas[$i]->logs_licenca); $j++) : ?>
																		<tr>
																			<td class="text-center"><?= $licencas[$i]->logs_licenca[$j]->lgstatus_anterior; ?></td>
																			<td class="text-center"><?= $licencas[$i]->logs_licenca[$j]->lgstatus_atual; ?></td>
																			<td class="text-center"><?= date("d/m/Y H:i:s",strtotime($licencas[$i]->logs_licenca[$j]->data_hora)); ?></td>
																			<td class="text-center"><?= $licencas[$i]->logs_licenca[$j]->unome; ?></td>
																		</tr>
																		<?php endfor; ?>
																	</tbody>
																</table>
															</div>
														</div>
													</div>
													<!-- <div class="col-sm-2"><i class="fas fa-arrow-right"></i></div> -->
													<div class="col-sm-6 text-center"><?= $licencas[$i]->num_protocolo; ?></div>
													<div class="col-sm-6 text-center"><?= $licencas[$i]->lstatus; ?></div>
												</div>
											<?php endfor; ?>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		<?php endif; ?>
	<?php endif; ?>
</main>