<?php
	//-- Table Initiation
	$this->table->set_template($table_tmpl);
	//-- Header Row
	$this->table->set_heading('Seq.', 'Descrição', 'Dt. Validade', 'Tipo Inserção', 'Ações');
?>
<!-- Conteúdo -->
<div class="container-fluid container-sistema enviar-documentos">
	<div class="row mb-3">
		<div class="col-12">
			<div class="card border border-green-system enviar-documentos">
				<div class="card-header bg-green-system fc-white m-1">
					<h6><i class="far fa-folder-open" aria-hidden="true"></i>&nbsp;ADICIONAR DOCUMENTOS</h6>
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
					<div class="row border border-gray-light bg-gray-lighter fc-gray-base">
						<div class="col-3 text-center border-right border-gray-light m-auto p-1">
							<strong>Documento</strong>
						</div>
						<div class="col-2 text-center border-right border-gray-light m-auto p-1">
							<strong>Dt. Validade</strong>
						</div>
						<div class="col-1 text-center border-right border-gray-light m-auto p-1">
							<strong><i class="fas fa-print" aria-hidden="true"></i>&nbsp;Imprimir</strong>
						</div>
						<div class="col-3 text-center border-right border-gray-light m-auto p-1">
							<strong><i class="fas fa-file-alt" aria-hidden="true"></i>&nbsp;Selecionar Arquivo</strong>
						</div>
						<div class="col-1 text-center border-right border-gray-light m-auto p-1">
							<strong><i class="fas fa-upload" aria-hidden="true"></i>&nbsp;Enviar</strong>
						</div>
						<div class="col-2 text-center m-auto p-1">
							<strong>Progresso</strong>
						</div>
					</div>
					<?php foreach($tipos_documentos as $tipo_documento) : ?>
						<?php
							$input_dt_validade	=	array(
														'id'		=>	"dt_validade$tipo_documento->id",
														'name'		=>	'dt_validade',
														'type'		=>	'date',
														'class'		=>	'form-control dt_validade',
														'required'	=>	''
													);
						?>
						<?= form_open_multipart($docs_enviar,$form_upload); ?>
							<?= form_hidden('ce_requerente',$requerente->id); ?>
							<?= form_hidden('ce_licenca',$licenca->id); ?>
							<?= form_hidden('tipo_pessoa',$requerente->tipo_pessoa); ?>
							<?= form_hidden('ce_tipo_licenca',$licenca->ce_tipo_licenca); ?>
							<?= form_hidden('ce_tipo_documento',$tipo_documento->tdid); ?>
							<?= form_hidden('tipo_insercao',$tipo_documento->tipo_insercao); ?>
							<?= form_hidden('desc_documento',$tipo_documento->tddescricao); ?>
							<div class="row border-bottom">
								<div class="col-3 text-center m-auto p-1 <?= ($tipo_documento->sn_obrigatorio == 'S') ? 'fc-brand-danger' : ''; ?>" id="tipo_documento">
									<strong><?= $tipo_documento->tddescricao; ?></strong>
								</div>
								<div class="col-2 text-center m-auto p-1">
									<?= ($tipo_documento->sn_validade == 'S') ? form_input($input_dt_validade) : ''; ?>
								</div>
								<div class="col-1 text-center m-auto p-1">
									<?= ($tipo_documento->tdlink != '') ? "<a href='$tipo_documento->tdlink' target='_blank' id='btnPrint_$tipo_documento->tdid' class='btn btn-primary btn-print' data-toggle='tooltip' title='Imprimir arquivo'><i class='fas fa-print' aria-hidden='true'></i></a>" : ''; ?>
								</div>
								<div class="col-3 text-center m-auto p-1 input-group">
									<div class="input-group-prepend">
										<button class="btn btn-default" type="button" id="btn<?= $tipo_documento->id; ?>" data-file="#file<?= $tipo_documento->id; ?>" onclick="fileclick(this);" data-toggle="tooltip" title="Selecionar arquivo..."><i class="fas fa-file-alt" aria-hidden="true"></i></button>
									</div>
									<input type="text" class="form-control" readonly placeholder="Arquivo" id="inputtext<?= $tipo_documento->id; ?>">
									<input type="file" class="file-input d-none" name="file" id="file<?= $tipo_documento->id; ?>" data-text="#inputtext<?= $tipo_documento->id; ?>" data-validade="<?= ($tipo_documento->sn_validade == 'S') ? 'S' : 'N'; ?>" data-dt-validade="#dt_validade<?= $tipo_documento->id; ?>" data-btn-enviar="#btn-enviar<?= $tipo_documento->id; ?>" data-progress="#progress<?= $tipo_documento->id; ?>">
									<div class="input-group-append">
										<button class="btn btn-default btn-removeFile" id="remmove-file<?= $tipo_documento->id; ?>" type="button" data-toggle="tooltip" title="Remover arquivo" data-file="#file<?= $tipo_documento->id; ?>" data-text="#inputtext<?= $tipo_documento->id; ?>"><i class="fas fa-trash-alt" aria-hidden="true"></i></button>
										<!-- <button class="btn btn-default" type="reset" data-toggle="tooltip" title="Remover arquivo"><i class="fas fa-trash-alt" aria-hidden="true"></i></button> -->
									</div>
								</div>
								<div class="col-1 text-center m-auto p-1">
									<button id="btn-enviar<?= $tipo_documento->id; ?>" class="btn btn-default btn-enviar d-none"><i class="fas fa-upload" aria-hidden="true"></i></button>
								</div>
								<div class="col-2 text-center m-auto p-1">
									<div class="progress d-none" id="progress<?= $tipo_documento->id; ?>">
										<div class="progress-bar progress-bar-striped progress-bar-animated bg-brand-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%">100%</div>
									</div>
								</div>
							</div>
						<?= form_close(); ?>
					<?php endforeach; ?>
				</div>
			</div>
		</div>
	</div>
	<div class="row mb-3">
		<div class="col-12">
			<div class="card border border-green-system">
				<div class="card-header bg-green-system fc-white m-1">
					<h6><i class="far fa-file-alt" aria-hidden="true"></i>&nbsp;DOCUMENTOS DO REQUERIMENTO DE LICENÇA AMBIENTAL</h6>
				</div>
				<div class="card-body">
					<?= ($this->session->flashdata('excluir')) ? $this->session->flashdata('excluir') : ''; ?>
					<?php
						foreach ($documentos as $documento) {
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
	</div>
</div>