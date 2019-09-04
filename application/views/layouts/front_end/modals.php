<!-- Modals -->
<?php if($this->session->userdata('is_logged_in')): ?>
	<!-- #logoutModal -->
	<div id="logoutModal" name="logoutModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-sm modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header bg-brand-danger fc-white">
					<h4><i class="fas fa-power-off"></i>&nbsp;&nbsp;Logout</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				</div>
				<div class="modal-body">
					Confirma a saída do sistema?
				</div>
				<div class="modal-footer">
					<button name="btn-cancela" type="button" class="btn btn-danger" data-dismiss="modal">Não</button>
					<button name="btn-confirma" type="button" class="btn btn-primary btn-confirma">Sim</button>
				</div>
			</div>
		</div>
	</div>
	<!-- /#logoutModal -->

	<!-- #assinaturaModal -->
	<div id="assinaturaModal" name="assinaturaModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header bg-brand-primary fc-white">
					<h4><i class="far fa-image"></i>&nbsp;&nbsp;Assinatura</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				</div>
				<form id="frm-assinaturaUsuario" class="form-horizontal" action=<?= $link_empresa."usuarios/assinatura"; ?> method="post">
					<input type="hidden" class="id_usuario" name="id_usuario" value="">
					<div class="modal-body">
						<div class="form-group row">
							<div class="col-2 text-right">Usuário:</div>
							<div class="col-10 div-nome-usuario">&nbsp;</div>
						</div>
						<div class="form-group row">
							<label for="assinatura" class="col-2 col-form-label text-right">Assinatura:</label>
							<div class="col-sm-10 pb-0">
								<div id="div-fileinput" class="fileinput fileinput-new" data-provides="fileinput">
									<div id="fileinput-preview" class="fileinput-preview img-thumbnail" data-trigger="fileinput">
										<img id="img-holder" data-src="holder.js/860x320?text=860px%20X%20320px&bg=98B240">
									</div>
									<div class="file-buttons p-3 text-center">
										<span class="btn btn-default btn-file">
											<span class="fileinput-new">Inserir Imagem</span>
											<span class="fileinput-exists">Alterar</span>
											<input class="form-control" type="file" id="file_assinatura" name="file_assinatura">
										</span>
										<a id="btn-removerImg" href="#" class="btn btn-default fileinput-exists" data-dismiss="fileinput">Remover</a>
									</div>
								</div>
							</div>
						</div>
						<div class="form-group row row-progress d-none">
							<div class="col-sm-10 offset-sm-2 pb-0">
								<div class="progress" id="progress1">
									<div class="progress-bar progress-bar-striped progress-bar-animated bg-brand-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%">0%</div>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button name="btn-cancela" type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
						<button name="btn-confirma" type="submit" class="btn btn-default btn-enviar d-none btn-confirma"><i class="far fa-save"></i>&nbsp;&nbsp;Salvar</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<!-- #assinaturaModal -->

	<!-- #alterarSenhaModal -->
	<?php $form_action	=	($this->session->userdata('empresa')) ? $link_empresa."usuarios/alterarSenha" : base_url("usuarios/alterarSenha"); ?>
	<div id="alterarSenhaModal" name="alterarSenhaModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header bg-brand-primary fc-white">
					<h4><i class="fa fa-lock"></i>&nbsp;&nbsp;Alterar Senha</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				</div>
				<form id="frm-alterarsenha" class="form-horizontal" action=<?= base_url('usuarios/alterarSenha/'); ?> method="post">
					<input type="hidden" class="id_usuario" name="id_usuario" value="">
					<div class="modal-body">
						<div class="form-group row">
							<div class="col-4 text-right">Usuário:</div>
							<div class="col-8 div-nome-usuario">&nbsp;</div>
						</div>
						<div class="form-group row">
							<label for="senha" class="col-4 col-form-label text-right">Nova senha:</label>
							<div class="col-sm-5 pb-0">
								<input type="password" name="senha" value="" id="senha" class="form-control" placeholder="Nova senha" maxlength="100" minlength="10" required>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<span class="loading d-none"><i class="fas fa-spinner fa-pulse fa-2x"></i>&nbsp;Aguarde...</span>
						<button name="btn-cancela" type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
						<button id="btn-confirma" name="btn-confirma" type="submit" class="btn btn-default btn-enviar"><i class="far fa-save"></i>&nbsp;&nbsp;Salvar</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<!-- #alterarSenhaModal -->
<?php endif; ?>

<?php if ($this->session->userdata('empresa')) : ?>
	<!-- #modalDevolver -->
	<div id="modalDevolver" name="modalDevolver" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header bg-brand-warning fc-white">
					<h4><i class="fas fa-angle-double-left"></i>&nbsp;&nbsp;Devolver Protocolo <span class="small font-weight-bold num_protocolo"></span></h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				</div>
				<form id="frm-devolver" class="form-horizontal" action=<?= base_url('licencas/protocoloDevolver'); ?> method="post">
					<input type="hidden" class="id_usuario" name="id_usuario" value="<?= $this->session->userdata('id_usuario'); ?>">
					<input type="hidden" class="id_licenca" name="id_licenca">
					<input type="hidden" class="status" name="status">
					<input type="hidden" class="status_anterior" name="status_anterior">
					<input type="hidden" class="acao" name="acao" value="devolver">
					<div class="modal-body">
						<div class="row mb-2">
							<div class="col-sm-12">
								Confirma devolver o protocolo nº <span class="font-weight-bold num_protocolo"></span> ?
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<span class="loading d-none"><i class="fas fa-spinner fa-pulse fa-2x"></i>&nbsp;Aguarde...</span>
						<button name="btn-cancela" type="button" class="btn btn-danger" data-dismiss="modal">Não</button>
						<button name="btn-confirma" type="button" class="btn btn-primary btn-confirma" data-dismiss="modal">Sim</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<!-- /#modalDevolver -->

	<!-- #modalEncaminhar -->
	<div id="modalEncaminhar" name="modalEncaminhar" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header bg-brand-success fc-white">
					<h4><i class="fas fa-external-link-alt"></i>&nbsp;&nbsp;Encaminhar Protocolo <span class="small font-weight-bold num_protocolo"></span></h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				</div>
				<form class="form-horizontal frm-encaminhar" action=<?= base_url('licencas/protocoloEncaminhar'); ?> method="post">
					<input type="hidden" class="id_usuario" name="id_usuario" value="<?= $this->session->userdata('id_usuario'); ?>">
					<input type="hidden" class="id_licenca" name="id_licenca">
					<input type="hidden" class="id_requerente" name="id_requerente">
					<input type="hidden" class="ce_tipo_licenca" name="ce_tipo_licenca">
					<input type="hidden" class="ce_tipo_documento" name="ce_tipo_documento">
					<input type="hidden" class="ordem_documento" name="ordem_documento" value="0">
					<input type="hidden" class="dt_validade" name="dt_validade">
					<input type="hidden" class="tipo_insercao" name="tipo_insercao">
					<input type="hidden" class="id_protocolo" name="id_protocolo">
					<input type="hidden" class="num_protocolo" name="num_protocolo">
					<input type="hidden" class="requerente" name="requerente">
					<input type="hidden" class="tipo_pessoa" name="tipo_pessoa">
					<input type="hidden" class="cpf_cnpj" name="cpf_cnpj">
					<input type="hidden" class="status" name="status">
					<input type="hidden" class="status_anterior" name="status_anterior">
					<input type="hidden" class="acao" name="acao" value="encaminhar">
					<div class="modal-body">
						<div class="row mb-2">
							<div class="col-sm-12">
								Confirma encaminhar o protocolo nº <span class="font-weight-bold num_protocolo"></span> ?
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<span class="loading d-none"><i class="fas fa-spinner fa-pulse fa-2x"></i>&nbsp;Aguarde...</span>
						<button name="btn-cancela" type="button" class="btn btn-danger" data-dismiss="modal">Não</button>
						<button name="btn-confirma" type="button" class="btn btn-primary btn-confirma" data-dismiss="modal">Sim</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<!-- /#modalEncaminhar -->

	<!-- #modalProtocoloEncaminhar -->
	<div id="modalProtocoloEncaminhar" name="modalProtocoloEncaminhar" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header bg-brand-success fc-white">
					<h4><i class="fas fa-external-link-alt"></i>&nbsp;&nbsp;Despacho Técnico <span class="small font-weight-bold num_protocolo"></span></h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				</div>
				<form id="frm-ProtocoloEncaminhar" class="form-horizontal" action=<?= base_url("licencas/protocoloEncaminhar"); ?> method="post" target="_blank">
					<input type="hidden" class="id_usuario" name="id_usuario" value="<?= $this->session->userdata('id_usuario'); ?>">
					<input type="hidden" class="id_licenca" name="id_licenca">
					<input type="hidden" class="requerente" name="requerente">
					<input type="hidden" class="cpf_cnpj" name="cpf_cnpj">
					<input type="hidden" class="num_protocolo" name="num_protocolo">
					<input type="hidden" class="status" name="status">
					<input type="hidden" class="status_anterior" name="status_anterior">
					<input type="hidden" class="acao" name="acao" value="">
					<div class="modal-body">
						<!-- <div class="card border border-green-system"> -->
							<!-- <div class="card-body"> -->
								<div class="alert bg-gray-lighter border-gray-light p-1">
									<div class="row m-auto">
										<div class="col-6">Requerente:&nbsp;<span class="font-weight-bold requerente"></span></div>
										<div class="col-4">CPF/CNPJ:&nbsp;<span class="font-weight-bold cpf-cnpj"></span></div>
									</div>
									<div class="row m-auto">
										<div class="col-6">Protocolo nº:&nbsp;<span class="font-weight-bold num-protocolo"></span></div>
									</div>
								</div>
								<!-- <fieldset> -->
								<div class="form-group row">
									<div class="col-sm-12 pb-1 h-75">
										<textarea name="despacho" cols="40" rows="10" id="despacho" type="textarea" class="form-control despacho-text-tinymce" placeholder="Despacho Técnico" aria-hidden="true"></textarea>
									</div>
								</div>
								<!-- </fieldset> -->
							<!-- </div> -->
						<!-- </div> -->
					</div>
					<div class="modal-footer">
						<span class="loading d-none"><i class="fas fa-spinner fa-pulse fa-2x"></i>&nbsp;Aguarde...</span>
						<button name="btn-cancela" type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
						<button class="btn btn-brand-primary" type="submit"><i class="fas fa-save"></i>&nbsp;Salvar</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<!-- /#modalProtocoloEncaminhar -->

	<!-- #modalAnexarArquivo -->
	<div id="modalAnexarArquivo" name="modalAnexarArquivo" class="modal fade enviar-documentos" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header bg-brand-success fc-white">
					<h4><i class="fas fa-external-link-alt"></i>&nbsp;&nbsp;Anexar Arquivo Protocolo <span class="small font-weight-bold num-protocolo"></span></h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				</div>
				<form class="frm-encaminhar" action=<?= $link_empresa."documentos/receberDocumentos"; ?> method="post" class="form-upload-docs form-horizontal">
					<input type="hidden" class="id_usuario" name="id_usuario" value="<?= $this->session->userdata('id_usuario'); ?>">
					<input type="hidden" class="ce_requerente" name="ce_requerente">
					<input type="hidden" class="tipo_pessoa" name="tipo_pessoa">
					<input type="hidden" class="ce_tipo_licenca" name="ce_tipo_licenca">
					<input type="hidden" class="ce_tipo_documento" name="ce_tipo_documento">
					<input type="hidden" class="ordem_documento" name="ordem_documento" value="0">
					<input type="hidden" class="ce_licenca" name="ce_licenca">
					<input type="hidden" class="dt_validade" name="dt_validade">
					<input type="hidden" class="tipo_insercao" name="tipo_insercao" value="SIS">
					<input type="hidden" class="status" name="status">
					<input type="hidden" class="status_anterior" name="status_anterior">
					<input type="hidden" class="acao" name="acao" value="encaminhar">
					<div class="modal-body">
						<div class="row m-auto mb-2">
							<label for="desc_documento" class="col-2 col-form-label text-left">Descrição:</label>
						</div>
						<div class="form-group row m-auto mb-2">
							<div class="col-6 p-1">
								<input type="text" name="desc_documento" value="COMMEA" readonly id="desc_documento" class="form-control" maxlength="100" required placeholder="Descrição do documento" tabindex="-1">
							</div>
						</div>
						<div class="row m-auto mb-2">
							<label for="file" class="col-2 col-form-label text-left">Arquivo:</label>
						</div>
						<div class="row m-auto mb-2">
							<div class="col-6 text-center m-auto p-1 input-group">
								<div class="input-group-prepend">
									<button class="btn btn-default" type="button" id="btn" data-file="#file" onclick="fileclick(this);" data-toggle="tooltip" title="" data-original-title="Selecionar arquivo..."><i class="fas fa-file-alt" aria-hidden="true"></i></button>
								</div>
								<input type="text" class="form-control" readonly placeholder="Arquivo" id="inputtext">
								<input type="file" class="file-input d-none" name="file" id="file" data-text="#inputtext" data-validade="N" data-dt-validade="#dt_validade" data-btn-enviar="#btn-enviar" data-progress="#progress" required>
								<div class="input-group-append">
									<button class="btn btn-default btn-removeFile" id="remmove-file" type="button" data-toggle="tooltip" title="" data-file="#file" data-text="#inputtext" data-original-title="Remover arquivo"><i class="fas fa-trash-alt" aria-hidden="true"></i></button>
								</div>
							</div>
							<div class="col-1 text-center m-auto p-1">
								<button id="btn-enviar" class="btn btn-default btn-enviar d-none" data-toggle="tooltip" data-title="Enviar arquivo"><i class="fas fa-upload" aria-hidden="true"></i></button>
							</div>
							<div class="col-5 text-center m-auto p-1">
								<div class="progress d-none" id="progress">
									<div class="progress-bar progress-bar-striped progress-bar-animated bg-brand-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%">0%</div>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<span class="loading d-none"><i class="fas fa-spinner fa-pulse fa-2x"></i>&nbsp;Aguarde...</span>
						<button name="btn-cancela" type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
						<!-- <button id="btn-enviar" class="btn btn-default btn-enviar d-none"><i class="fas fa-upload" aria-hidden="true"></i>Enviar</button> -->
						<!-- <button id="btn-confirma" name="btn-confirma" type="submit" class="btn btn-primary"><i class="fas fa-share-square" aria-hidden="true"></i>&nbsp;Enviar</button> -->
					</div>
				</form>
			</div>
		</div>
	</div>
	<!-- /#modalAnexarArquivo -->

	<!-- #modalEnviaArquivoCOMMEA -->
	<div id="modalAnexarArquivoCOMMEA" name="modalAnexarArquivoCOMMEA" class="modal fade enviar-documentos" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header bg-brand-success fc-white">
					<h4><i class="fas fa-external-link-alt"></i>&nbsp;&nbsp;Anexar Arquivo COMMEA <span class="small font-weight-bold num-protocolo"></span></h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				</div>
				<form action=<?= $link_empresa."documentos/receberDocumentos"; ?> method="post" class="form-upload-docsCOMMEA form-horizontal frm-encaminhar">
					<input type="hidden" class="id_usuario" name="id_usuario" value="<?= $this->session->userdata('id_usuario'); ?>">
					<input type="hidden" class="ce_requerente" name="ce_requerente">
					<input type="hidden" class="tipo_pessoa" name="tipo_pessoa">
					<input type="hidden" class="ce_tipo_licenca" name="ce_tipo_licenca">
					<input type="hidden" class="ce_tipo_documento" name="ce_tipo_documento">
					<input type="hidden" class="ordem_documento" name="ordem_documento" value="0">
					<input type="hidden" class="ce_licenca" name="ce_licenca">
					<input type="hidden" class="dt_validade" name="dt_validade">
					<input type="hidden" class="tipo_insercao" name="tipo_insercao" value="SIS">
					<input type="hidden" class="status" name="status">
					<input type="hidden" class="status_anterior" name="status_anterior">
					<input type="hidden" class="acao" name="acao" value="encaminhar">
					<div class="modal-body">
						<div class="row m-auto mb-2">
							<label for="desc_documento" class="col-2 col-form-label text-left">Descrição:</label>
						</div>
						<div class="form-group row m-auto mb-2">
							<div class="col-6 p-1">
								<input type="text" name="desc_documento" value="COMMEA" readonly id="desc_documentoCOMMEA" class="form-control" maxlength="100" required placeholder="Descrição do documento" tabindex="-1">
							</div>
						</div>
						<div class="row m-auto mb-2">
							<label for="file" class="col-2 col-form-label text-left">Arquivo:</label>
						</div>
						<div class="row m-auto mb-2">
							<div class="col-6 text-center m-auto p-1 input-group">
								<div class="input-group-prepend">
									<button class="btn btn-default" type="button" id="btnCOMMEA" data-file="#fileCOMMEA" onclick="fileclick(this);" data-toggle="tooltip" title="" data-original-title="Selecionar arquivo..."><i class="fas fa-file-alt" aria-hidden="true"></i></button>
								</div>
								<input type="text" class="form-control" readonly placeholder="Arquivo" id="inputtextCOMMEA">
								<input type="file" class="file-input d-none" name="file" id="fileCOMMEA" data-text="#inputtextCOMMEA" data-validade="N" data-dt-validade="#dt_validadeCOMMEA" data-btn-enviar="#btn-enviarCOMMEA" data-progress="#progressCOMMEA" required>
								<div class="input-group-append">
									<button class="btn btn-default btn-removeFile" id="remmove-fileCOMMEA" type="button" data-toggle="tooltip" title="" data-file="#fileCOMMEA" data-text="#inputtextCOMMEA" data-original-title="Remover arquivo"><i class="fas fa-trash-alt" aria-hidden="true"></i></button>
								</div>
							</div>
							<div class="col-1 text-center m-auto p-1">
								<button id="btn-enviarCOMMEA" class="btn btn-default btn-enviar d-none" data-toggle="tooltip" data-title="Enviar arquivo"><i class="fas fa-upload" aria-hidden="true"></i></button>
							</div>
							<div class="col-5 text-center m-auto p-1">
								<div class="progress d-none" id="progressCOMMEA">
									<div class="progress-bar progress-bar-striped progress-bar-animated bg-brand-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%">0%</div>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<span class="loading d-none"><i class="fas fa-spinner fa-pulse fa-2x"></i>&nbsp;Aguarde...</span>
						<button name="btn-cancela" type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
						<button type="button" class="btn btn-default d-none btn-encaminhar"><i class="fas fa-share" aria-hidden="true"></i>Encaminhar</button>
						<!-- <button id="btn-confirma" name="btn-confirma" type="submit" class="btn btn-primary"><i class="fas fa-share-square" aria-hidden="true"></i>&nbsp;Enviar</button> -->
					</div>
				</form>
			</div>
		</div>
	</div>
	<!-- /#modalAnexarArquivoCOMMEA -->

	<!-- #modalLogsLicenca -->
	<div id="modalLogsLicenca" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modalLogsLicencaLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header bg-brand-success fc-white">
					<h4 ><i class="fa fa-info" aria-hidden="true"></i>&nbsp;Logs Processo nº <span id="num_protocolo" class="font-weight-bold"></span></h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
				</div>
				<div class="modal-body">
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-danger" data-dismiss="modal">Fechar</button>
				</div>
			</div>
		</div>
	</div>
	<!-- /#modalLogsLicenca -->

	<!-- #modalLoading -->
	<div id="modalLoading" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modalLoadingLabel" aria-hidden="true">
		<div class="modal-dialog modal-sm modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-body text-center">
					<i class="fas fa-spinner fa-pulse fa-2x"></i>&nbsp;Aguarde...
				</div>
			</div>
		</div>
	</div>
	<!-- /#modalLoading -->

	<?php if($motivos_indeferimento) : ?>
		<!-- #modalIndeferir -->
		<div id="modalIndeferir" name="modalIndeferir" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header bg-brand-danger fc-white">
						<h4><i class="fas fa-exclamation"></i>&nbsp;&nbsp;Indeferir Protocolo <span class="small font-weight-bold num_protocolo"></span></h4>
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
					</div>
					<form class="form-horizontal frm-encaminhar" action=<?= base_url('licencas/protocoloIndeferir'); ?> method="post">
						<input type="hidden" class="id_usuario" name="id_usuario" value="<?= $this->session->userdata('id_usuario'); ?>">
						<input type="hidden" class="id_licenca" name="id_licenca">
						<input type="hidden" class="num_protocolo" name="num_protocolo">
						<input type="hidden" class="status" name="status">
						<div class="modal-body">
							<div class="row mb-3">
								<div class="col-sm-12">
									Confirma indeferir o protocolo nº <span class="font-weight-bold num_protocolo"></span>?
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-12">
									<span class="font-weight-bold">Motivos Indeferimento</span>
								</div>
							</div>
							<div class="form-group m-auto">
								<?php foreach($motivos_indeferimento as $motivo_indeferimento) : ?>
									<div class="form-check mb-2">
										<input class="form-check-input motivo-indeferimento" type="checkbox" name="motivos_indeferimento[]" id="motivos_indeferimento<?= $motivo_indeferimento->id; ?>" value="<?= $motivo_indeferimento->id; ?>">
										<label class="form-check-label" for="motivos_indeferimento<?= $motivo_indeferimento->id; ?>"><?= $motivo_indeferimento->descricao; ?></label>
									</div>
								<?php endforeach; ?>
							</div>
						</div>
						<div class="modal-footer">
							<span class="loading d-none"><i class="fas fa-spinner fa-pulse fa-2x"></i>&nbsp;Aguarde...</span>
							<button name="btn-cancela" type="button" class="btn btn-danger" data-dismiss="modal">Não</button>
							<button name="btn-confirma" type="button" class="btn btn-primary btn-confirma">Sim</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- /#modalIndeferir -->
	<?php endif; ?>

	<!-- #modalAprovar -->
	<div id="modalAprovar" name="modalAprovar" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header bg-brand-success fc-white">
					<h4><i class="fas fa-external-link-alt"></i>&nbsp;&nbsp;Aprovar Licença <span class="small font-weight-bold num_protocolo"></span></h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				</div>
				<form class="form-horizontal frm-encaminhar" action="" method="get" id="form-aprovar">
					<div class="modal-body">
						<div class="row mb-2">
							<div class="col-sm-12">
								Confirma aprovar a licença de protocolo nº <span class="font-weight-bold num_protocolo"></span> ?
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<span class="loading d-none"><i class="fas fa-spinner fa-pulse fa-2x"></i>&nbsp;Aguarde...</span>
						<button name="btn-cancela" type="button" class="btn btn-danger" data-dismiss="modal">Não</button>
						<button name="btn-confirma" type="button" class="btn btn-primary btn-confirma" data-dismiss="modal">Sim</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<!-- /#modalAprovar -->
<?php endif; ?>
<!-- /Modals -->