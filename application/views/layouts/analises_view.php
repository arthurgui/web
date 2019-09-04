<?php
	//-- Table Initiation
	$this->table->set_template($table_tmpl);
	//-- Header Row
	$this->table->set_heading('Núm. Protocolo', 'Tipo de Licença', 'CPF/CNPJ', 'Requerente', 'Local Atividade', 'Ações');
?>
<!-- Conteúdo -->
<div class="container-fluid container-sistema">
	<div class="row">
		<div class="col-12">
			<div class="card border border-green-system">
				<div class="card-header bg-green-system fc-white m-1">
					<h5>Análises</h5>
				</div>
				<div class="card-body">
					<?= ($this->session->flashdata('excluir')) ? $this->session->flashdata('excluir') : ''; ?>
					<?= ($this->session->flashdata('encaminhar')) ? $this->session->flashdata('encaminhar') : ''; ?>
					<?php
						foreach ($protocolos as $protocolo) {
							$imp_parecer	=	($protocolo->num_parecer != '') ? '&nbsp;<a class="btn btn-default btn-sm" href="'.base_url("licencas/parecerImprimir/$protocolo->id").'" target="_blank" data-toggle="tooltip" data-id-licenca="'.$protocolo->id.'" data-num-protocolo="'.$protocolo->num_protocolo.'" data-status-anterior="'.$protocolo->status_anterior.'" data-status="'.$protocolo->status.'"><i class="fas fa-print fc-brand-primary" data-toggle="tooltip" title="Imprimir Parecer Técnico"></i></a>&nbsp;' : '&nbsp;';
							$encaminhar		=	($protocolo->num_parecer != '') ? '&nbsp;<a class="btn btn-default btn-sm" href="javascript:;" data-backdrop="static" data-keyboard="false" data-toggle="modal" data-target="#modalEncaminhar" data-id-licenca="'.$protocolo->id.'" data-num-protocolo="'.$protocolo->num_protocolo.'" data-requerente="'.$protocolo->rnome_razaosocial.'" data-cpf-cnpj="'.$protocolo->rcpf_cnpj.'" data-status-anterior="'.$protocolo->status_anterior.'" data-status="'.$protocolo->status.'" onclick="encaminharProtocolo(this);"><i class="fas fa-external-link-alt fc-brand-success" data-toggle="tooltip" title="Encaminhar"></i></a>&nbsp;' : '&nbsp;';
							$btnimagem		=	($protocolo->num_parecer != '') ? '&nbsp;<a class="btn btn-default btn-sm" href="'.base_url("licencas/inserirFotosParecer/$protocolo->id").'" data-id-licenca="'.$protocolo->id.'" data-num-protocolo="'.$protocolo->num_protocolo.'" data-requerente="'.$protocolo->rnome_razaosocial.'" data-cpf-cnpj="'.$protocolo->rcpf_cnpj.'" data-status-anterior="'.$protocolo->status_anterior.'" data-status="'.$protocolo->status.'" ><i class="fas fa-image fc-brand-success" data-toggle="tooltip" title="Inserir Fotos"></i></a>&nbsp;' : '';
							$this->table->add_row(
								$protocolo->num_protocolo,
								$protocolo->desc_tipo_licenca,
								$protocolo->rcpf_cnpj,
								$protocolo->rnome_razaosocial,
								$protocolo->endereco,
								'<a class="btn btn-default btn-sm" href='.base_url("licencas/protocoloEditar/$protocolo->id").' data-toggle="tooltip" title="Editar"><i class="fa fa-pen-square"></i></a>
								<a class="btn btn-default btn-sm" href='.base_url("licencas/protocoloDocumentos/$protocolo->id/analises").' data-toggle="tooltip" title="Documentos"><i class="fas fa-copy"></i></a>
								<a class="btn btn-default btn-sm" href='.base_url("licencas/addCondicionante/$protocolo->id").' data-toggle="tooltip" title="Condicionantes"><i class="fas fa-project-diagram"></i></i></a>
								<div class="btn-group btn-default">
									<button type="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-print"></i></button>
									<div class="dropdown-menu dropdown-menu-right bg-gray-lighter">
										<a class="dropdown-item" href="'. base_url("licencas/protocoloImprimir/$protocolo->id") .'" target="_blank">Protocolo</a>
										<a class="dropdown-item" href="'. base_url("licencas/operacaoImprimir/$protocolo->id") .'" target="_blank">Licença</a>
									</div>
								</div>
								<a class="btn btn-default btn-sm" href="'.base_url("licencas/protocoloParecer/$protocolo->id/$link").'" data-toggle="tooltip" data-id-licenca="'.$protocolo->id.'" data-num-protocolo="'.$protocolo->num_protocolo.'" data-status-anterior="'.$protocolo->status_anterior.'" data-status="'.$protocolo->status.'"><i class="fas fa-share-square fc-brand-primary" data-toggle="tooltip" title="Parecer Técnico"></i></a>'.
								$imp_parecer.
								$btnimagem.
								'<a class="btn btn-default btn-sm" href="javascript:;" data-backdrop="static" data-keyboard="false" data-toggle="modal" data-target="#modalDevolver" data-id-licenca="'.$protocolo->id.'" data-num-protocolo="'.$protocolo->num_protocolo.'" data-requerente="'.$protocolo->rnome_razaosocial.'" data-cpf-cnpj="'.$protocolo->rcpf_cnpj.'" data-status-anterior="'.$protocolo->status_anterior.'" data-status="'.$protocolo->status.'" onclick="devolverProtocolo(this);"><i class="fas fa-angle-double-left fc-brand-warning" data-toggle="tooltip" title="Devolver"></i></a>'.
								$encaminhar.
								'<a class="btn btn-default btn-sm" href="javascript:;" data-backdrop="static" data-keyboard="false" data-toggle="modal" data-target="#modalIndeferir" data-id-licenca="'.$protocolo->id.'" data-num-protocolo="'.$protocolo->num_protocolo.'" data-requerente="'.$protocolo->rnome_razaosocial.'" data-cpf-cnpj="'.$protocolo->rcpf_cnpj.'" data-status-anterior="'.$protocolo->status_anterior.'" data-status="'.$protocolo->status.'" onclick="indeferirProtocolo(this);"><i class="fas fa-exclamation fc-brand-danger"  data-toggle="tooltip" title="Indeferir"></i></a>'
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
<!-- /Conteúdo -->