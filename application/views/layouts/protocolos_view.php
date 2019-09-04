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
					<h5>Protocolos</h5>
				</div>
				<div class="card-body">
					<?= ($this->session->flashdata('excluir')) ? $this->session->flashdata('excluir') : ''; ?>
					<?= ($this->session->flashdata('encaminhar')) ? $this->session->flashdata('encaminhar') : ''; ?>
					<?= ($this->session->flashdata('indeferir')) ? $this->session->flashdata('indeferir') : ''; ?>
					<?php
						// <a class="btn btn-default btn-sm" href='.base_url("licencas/protocoloImprimir/$protocolo->id").' data-toggle="tooltip" title="Imprimir" target="_blank"><i class="fas fa-print"></i></a>
						foreach ($protocolos as $protocolo) {
							$this->table->add_row(
								$protocolo->num_protocolo,
								$protocolo->desc_tipo_licenca,
								$protocolo->rcpf_cnpj,
								$protocolo->rnome_razaosocial,
								$protocolo->endereco,
								'<a class="btn btn-default btn-sm" href='.base_url("licencas/protocoloEditar/$protocolo->id").' data-toggle="tooltip" title="Editar"><i class="fa fa-pen-square"></i></a>
								<a class="btn btn-default btn-sm" href='.base_url("licencas/protocoloDocumentos/$protocolo->id/protocolos").' data-toggle="tooltip" title="Documentos"><i class="fas fa-copy"></i></a>
								<div class="btn-group btn-default">
									<button type="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-print"></i></button>
									<div class="dropdown-menu dropdown-menu-right bg-gray-lighter">
										<a class="dropdown-item" href="'.base_url("licencas/protocoloImprimir/$protocolo->id").'" target="_blank">Protocolo</a>
										<a class="dropdown-item" href="'.base_url("licencas/requerimentoInscricaoImprimir/$protocolo->id").'" target="_blank">Req. de Inscrição</a> '.
										(
											($protocolo->ce_usuario_aprovacao != null && $protocolo->ce_usuario_aprovacao != '0') ? '<a class="dropdown-item" href="'. base_url("licencas/operacaoImprimir/$protocolo->id") .'" target="_blank">Licença</a>' : ''
										) .'
									</div>
								</div>
								<a class="btn btn-default btn-sm" href="javascript:;" data-backdrop="static" data-keyboard="false" data-toggle="modal" data-target="#modalEncaminhar" data-id-licenca="'.$protocolo->id.'" data-num-protocolo="'.$protocolo->num_protocolo.'" data-requerente="'.$protocolo->rnome_razaosocial.'" data-cpf-cnpj="'.$protocolo->rcpf_cnpj.'" data-status-anterior="'.$protocolo->status_anterior.'" data-status="'.$protocolo->status.'" onclick="encaminharProtocolo(this);"><i class="fas fa-external-link-alt fc-brand-success" data-toggle="tooltip" title="Encaminhar"></i></a>
								<a class="btn btn-default btn-sm" href="javascript:;" data-backdrop="static" data-keyboard="false" data-toggle="modal" data-target="#modalIndeferir" data-id-licenca="'.$protocolo->id.'" data-num-protocolo="'.$protocolo->num_protocolo.'" data-requerente="'.$protocolo->rnome_razaosocial.'" data-cpf-cnpj="'.$protocolo->rcpf_cnpj.'" data-status-anterior="'.$protocolo->status_anterior.'" data-status="'.$protocolo->status.'" onclick="indeferirProtocolo(this);"><i class="fas fa-exclamation fc-brand-danger"  data-toggle="tooltip" title="Indeferir"></i></a>'
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