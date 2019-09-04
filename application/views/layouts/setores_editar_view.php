<?php
	$input_descricao		=	array(
										'id'			=>	'descricao',
										'name'			=>	'descricao',
										'type'			=>	'text',
										'class'			=>	'form-control',
										'value'			=>	$setores->descricao,
										'placeholder'	=>	'Descrição',
										'maxlength'		=>	'50',
										'required'		=>	''
									);
	$select_auxiliares		=	'id="acesso_auxiliares" class="custom-select" required';
	$select_auxgerais		=	'id="acesso_auxgerais" class="custom-select" required';
	$select_auxfiscalizacao	=	'id="acesso_auxfiscalizacao" class="custom-select" required';
	$select_auxlicencas		=	'id="acesso_auxlicencas" class="custom-select" required';
	$select_fiscalizacao	=	'id="acesso_fiscalizacao" class="custom-select" required';
	$select_fisadicionar	=	'id="acesso_fisadicionar" class="custom-select" required';
	$select_fisdistribuir	=	'id="acesso_fisdistribuir" class="custom-select" required';
	$select_licencas		=	'id="acesso_licencas" class="custom-select" required';
	$select_relatorios		=	'id="acesso_relatorios" class="custom-select" required';
	$select_usuarios		=	'id="acesso_usuarios" class="custom-select" required';
	$select_requerentes		=	'id="acesso_requerentes" class="custom-select" required';
	$select_protocolos		=	'id="acesso_protocolos" class="custom-select" required';
	$select_analises		=	'id="acesso_analises" class="custom-select" required';
	$select_aprovacoes		=	'id="acesso_aprovacoes" class="custom-select" required';
	$select_auditoria		=	'id="acesso_auditoria" class="custom-select" required';
	$select_finalizados		=	'id="acesso_finalizados" class="custom-select" required';
	$select_indeferidos		=	'id="acesso_indeferidos" class="custom-select" required';
	$select_licenrelatorios	=	'id="acesso_licenrelatorios" class="custom-select" required';
?>
<!-- Conteúdo -->
<div class="container container-sistema">
	<div class="row">
		<div class="col-12">
			<div class="card border border-green-system">
				<div class="card-header bg-green-system fc-white m-1">
					<h5>Adicionar Setor</h5>
				</div>
				<?= form_open($salvar, $form_attr); ?>
					<div class="card-body">
						<?= ($this->session->flashdata('salvar')) ? $this->session->flashdata('salvar') : ''; ?>
						<div class="form-group row">
							<?= form_label('Descrição:', 'descricao',$label2); ?>
							<div class="col-sm-6 pb-1">
								<?= form_input($input_descricao); ?>
								<font color="red"><?= form_error('descricao'); ?></font>
							</div>
						</div>
						<fieldset class="border-top border-green-system">
							<legend>Restrições de Acesso</legend>
							<div class="card border-green-system">
								<div class="card-header"><h5>Menu</h5></div>
								<div class="card-body">
									<ul class="nav nav-pills pills-green-system" id="myTab" role="tablist">
										<li class="nav-item">
											<a class="nav-link active" id="tab1-tab" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">Auxiliares</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" id="tab2-tab" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">Licenças</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" id="tab3-tab" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">Fiscalizações</a>
										</li>
									</ul>
									<div class="tab-content border-green-system border-top border-right border-bottom border-left p-2" id="myTabContent">
										<div class="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
											<div class="form-group row mt-auto mr-auto mb-2 ml-auto">
												<label for="acesso_auxiliares" class="col-sm-2 col-form-label col-form-label text-right">Acesso:</label>
												<div class="col-sm-3">
													<?= form_dropdown('acesso_auxiliares',$opt_acessos, set_value('acesso_auxiliares',$setores->acesso_auxiliares), $select_auxiliares); ?>
												</div>
											</div>
											<hr class="border-green-system">
											<div class="form-group row mt-auto mr-auto mb-2 ml-auto">
												<label for="acesso_auxiliares" class="col-sm-2 col-form-label col-form-label text-right">Gerais:</label>
												<div class="col-sm-3">
													<?= form_dropdown('acesso_auxgerais',$opt_acessos, set_value('acesso_auxgerais',$setores->acesso_auxgerais), $select_auxgerais); ?>
												</div>
											</div>
											<div class="form-group row mt-auto mr-auto mb-2 ml-auto">
												<label for="acesso_auxfiscalizacao" class="col-sm-2 col-form-label col-form-label text-right">Fiscalização:</label>
												<div class="col-sm-3">
													<?= form_dropdown('acesso_auxfiscalizacao',$opt_acessos, set_value('acesso_auxfiscalizacao',$setores->acesso_auxfiscalizacao), $select_auxfiscalizacao); ?>
												</div>
											</div>
											<div class="form-group row mt-auto mr-auto mb-2 ml-auto">
												<label for="acesso_auxlicencas" class="col-sm-2 col-form-label col-form-label text-right">Licenças:</label>
												<div class="col-sm-3">
													<?= form_dropdown('acesso_auxlicencas',$opt_acessos, set_value('acesso_auxlicencas',$setores->acesso_auxlicencas), $select_auxlicencas); ?>
												</div>
											</div>
											<div class="form-group row mt-auto mr-auto mb-2 ml-auto">
												<label for="acesso_auxlicencas" class="col-sm-2 col-form-label col-form-label text-right">Usuários:</label>
												<div class="col-sm-3">
													<?= form_dropdown('acesso_usuarios',$opt_acessos, set_value('acesso_usuarios',$setores->acesso_usuarios), $select_usuarios); ?>
												</div>
											</div>
										</div>
										<div class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
											<div class="form-group row mt-auto mr-auto mb-2 ml-auto">
												<label for="acesso_auxlicencas" class="col-sm-2 col-form-label col-form-label text-right">Acesso:</label>
												<div class="col-sm-3">
													<?= form_dropdown('acesso_licencas',$opt_acessos, set_value('acesso_licencas',$setores->acesso_licencas), $select_licencas); ?>
												</div>
											</div>
											<hr class="border-green-system">
											<div class="form-group row mt-auto mr-auto mb-2 ml-auto">
												<label for="acesso_auxlicencas" class="col-sm-2 col-form-label col-form-label text-right">PR - Protocolos:</label>
												<div class="col-sm-3">
													<?= form_dropdown('acesso_protocolos',$opt_acessos, set_value('acesso_protocolos',$setores->acesso_protocolos), $select_protocolos); ?>
												</div>
											</div>
											<div class="form-group row mt-auto mr-auto mb-2 ml-auto">
												<label for="acesso_auxlicencas" class="col-sm-2 col-form-label col-form-label text-right">AN - Análises:</label>
												<div class="col-sm-3">
													<?= form_dropdown('acesso_analises',$opt_acessos, set_value('acesso_analises',$setores->acesso_analises), $select_analises); ?>
												</div>
											</div>
											<div class="form-group row mt-auto mr-auto mb-2 ml-auto">
												<label for="acesso_auxlicencas" class="col-sm-2 col-form-label col-form-label text-right">AP - Aprovacoes:</label>
												<div class="col-sm-3">
													<?= form_dropdown('acesso_aprovacoes',$opt_acessos, set_value('acesso_aprovacoes',$setores->acesso_aprovacoes), $select_aprovacoes); ?>
												</div>
											</div>
											<div class="form-group row mt-auto mr-auto mb-2 ml-auto">
												<label for="acesso_auxlicencas" class="col-sm-2 col-form-label col-form-label text-right">AU - Auditorias:</label>
												<div class="col-sm-3">
													<?= form_dropdown('acesso_auditoria',$opt_acessos, set_value('acesso_auditoria',$setores->acesso_auditoria), $select_auditoria); ?>
												</div>
											</div>
											<div class="form-group row mt-auto mr-auto mb-2 ml-auto">
												<label for="acesso_auxlicencas" class="col-sm-2 col-form-label col-form-label text-right">FI - Finalizados:</label>
												<div class="col-sm-3">
													<?= form_dropdown('acesso_finalizados',$opt_acessos, set_value('acesso_finalizados',$setores->acesso_finalizados), $select_finalizados); ?>
												</div>
											</div>
											<div class="form-group row mt-auto mr-auto mb-2 ml-auto">
												<label for="acesso_auxlicencas" class="col-sm-2 col-form-label col-form-label text-right">IN - Indeferidos:</label>
												<div class="col-sm-3">
													<?= form_dropdown('acesso_indeferidos',$opt_acessos, set_value('acesso_indeferidos',$setores->acesso_indeferidos), $select_indeferidos); ?>
												</div>
											</div>
										</div>
										<div class="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
											<div class="form-group row mt-auto mr-auto mb-2 ml-auto">
												<label for="acesso_auxiliares" class="col-sm-2 col-form-label col-form-label text-right">Acesso:</label>
												<div class="col-sm-3">
													<?= form_dropdown('acesso_fiscalizacao',$opt_acessos, set_value('acesso_fiscalizacao',$setores->acesso_fiscalizacao), $select_fiscalizacao); ?>
												</div>
											</div>
											<hr class="border-green-system">
											<div class="form-group row mt-auto mr-auto mb-2 ml-auto">
												<label for="acesso_auxiliares" class="col-sm-2 col-form-label col-form-label text-right">Adicionar:</label>
												<div class="col-sm-3">
													<?= form_dropdown('acesso_fisadicionar',$opt_acessos, set_value('acesso_fisadicionar',$setores->acesso_fisadicionar), $select_fisadicionar); ?>
												</div>
											</div>
											<div class="form-group row mt-auto mr-auto mb-2 ml-auto">
												<label for="acesso_auxiliares" class="col-sm-2 col-form-label col-form-label text-right">PD - A Distribuir:</label>
												<div class="col-sm-3">
													<?= form_dropdown('acesso_fisdistribuir',$opt_acessos, set_value('acesso_fisdistribuir',$setores->acesso_fisdistribuir), $select_fisdistribuir); ?>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</fieldset>
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