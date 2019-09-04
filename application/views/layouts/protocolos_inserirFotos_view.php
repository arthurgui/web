<?php
	//-- Table Initiation
	$this->table->set_template($table_tmpl);
	//-- Header Row
	$this->table->set_heading('Seq.', 'Descrição', 'Dt. Validade', 'Tipo Inserção', 'Ações');
?>
<!-- Conteúdo -->
<div class="container-fluid container-sistema enviar-fotosParecer">
	<div class="row mb-3">
		<div class="col-12">
			<div class="card border border-green-system">
				<div class="card-header bg-green-system fc-white m-1">
					<h6><i class="far fa-image" aria-hidden="true"></i>&nbsp;ADICIONAR FOTOS</h6>
				</div>
				<div class="card-body">
					<div class="alert bg-gray-lighter border-gray-light p-1">
						<div class="row m-auto">
							<div class="col-3">Requerente:&nbsp;<strong><?= $requerente->nome_razaosocial; ?></strong></div>
							<div class="col-3">CPF/CNPJ:&nbsp;<strong><?= $requerente->cpf_cnpj; ?></strong></div>
						</div>
						<div class="row m-auto">
							<div class="col-3">Protocolo nº:&nbsp;<strong><?= $protocolo->num_protocolo; ?></strong></div>
						</div>
					</div>
					<?= ($this->session->flashdata('doc_upload')) ? $this->session->flashdata('doc_upload') : ''; ?>
					<div class="alert bg-gray-lighter border-gray-light p-1">
						<form id="frm-fotosParecer" class="form-horizontal" action=<?= $link_empresa."licencas/enviarFotos"; ?> method="post">
							<input type="hidden" class="ce_licenca" name="ce_licenca" value="<?= $licenca->id; ?>">
							<div class="modal-body">
								<div class="form-group row">
									<div class="col-2 text-right">Legenda:</div>
									<div class="col-7"><input class="form-control" id="legenda" name="legenda" type="text"></div>
								</div>
								<div class="form-group row">
									<label for="assinatura" class="col-2 col-form-label text-right">Foto:</label>
									<div class="col-sm-7 pb-0">
										<div id="div-fileinput" class="fileinput fileinput-new" data-provides="fileinput" style="width: auto !important;">
											<div id="fileinput-preview" class="fileinput-preview img-thumbnail" data-trigger="fileinput">
												<img id="imagem-holder" class="img-fluid" data-src="holder.js/800x600?text=800px%20X%20600px&bg=98B240">
											</div>
											<div class="file-buttons p-3 text-center">
												<span class="btn btn-default btn-file">
													<span class="fileinput-new">Inserir Imagem</span>
													<span class="fileinput-exists">Alterar</span>
													<input class="form-control" type="file" id="file_fotoParecer" name="file_fotoParecer">
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
		</div>
	</div>
	<div class="row mb-3">
		<?php if((isset($fotos_parecer)) && (count($fotos_parecer) > 0)) : ?>
			<?php foreach($fotos_parecer as $foto_parecer) : ?>
				<div class="col-3">
					<div class="card border border-green-system">
						<div class="card-header bg-green-system fc-white m-1"><?= $foto_parecer->legenda ?></div>
						<div class="card-body">
							<img src=<?= $link_empresa.$foto_parecer->imagem; ?> alt="<?= $foto_parecer->legenda ?>" class="img-fluid thumbnail">
						</div>
					</div>
				</div>
			<?php endforeach; ?>
		<?php endif; ?>
	</div>
		<!-- <div class="row mb-3">
			<div class="col-12">
				<div class="card border border-green-system">
					<div class="card-header bg-green-system fc-white m-1">
						<h6><i class="far fa-file-alt" aria-hidden="true"></i>&nbsp;DOCUMENTOS DO REQUERIMENTO DE LICENÇA AMBIENTAL</h6>
					</div>
					<div class="card-body">
						<?= ($this->session->flashdata('excluir')) ? $this->session->flashdata('excluir') : ''; ?>
						<?php
							foreach ($fotos_parecer as $foto_parecer) {
								$this->table->add_row(
									$documento->sequencial,
									$documento->descricao,
									($documento->dt_validade)	?	date("d/m/Y",strtotime($documento->dt_validade)) : '',
									$documento->tipo_insercao,
									'<a class="btn btn-default btn-sm" href="'.$link_empresa.$documento->doc_path.'" target="_blank" data-toggle="tooltip" title="Visualizar"><i class="fa fa-file"></i></a>'
								);
							}
							$table = $this->table->generate();
						?>
						<?= $table; ?>
					</div>
					<div class="card-footer bg-green-system fc-white m-1">
						<a href="<?= base_url($voltar); ?>" class="btn btn-brand-primary"><i class="fa fa-reply fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;Voltar</a>
					</div>
				</div>
			</div>
		</div> -->
</div>