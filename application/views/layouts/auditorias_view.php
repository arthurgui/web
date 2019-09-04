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
					<h5>Auditorias</h5>
				</div>
				<div class="card-body">
					<?= ($this->session->flashdata('excluir')) ? $this->session->flashdata('excluir') : ''; ?>
					<?= ($this->session->flashdata('encaminhar')) ? $this->session->flashdata('encaminhar') : ''; ?>
					<?php
						foreach ($protocolos as $protocolo) {
							$this->table->add_row(
								$protocolo->num_protocolo,
								$protocolo->desc_tipo_licenca,
								$protocolo->rcpf_cnpj,
								$protocolo->rnome_razaosocial,
								$protocolo->endereco,
								'<a class="btn btn-default btn-sm" href='.base_url("licencas/protocoloDocumentos/$protocolo->id/auditorias").' data-toggle="tooltip" title="Documentos"><i class="fas fa-copy"></i></a> '.
								(
									($protocolo->ce_usuario_aprovacao != null && $protocolo->ce_usuario_aprovacao != '0') ? '<a class="btn btn-default btn-sm" href='. base_url("licencas/operacaoImprimir/$protocolo->id") .' target="_blank" data-toggle="tooltip" title="Imprimir Licença"><i class="fas fa-print"></i></a>' : ''
								) .'
								<a class="btn btn-default btn-sm" href="javascript:;" data-backdrop="static" data-keyboard="false" data-toggle="modal" data-target="#modalEncaminhar" data-id-licenca="'.$protocolo->id.'" data-num-protocolo="'.$protocolo->num_protocolo.'" data-id-requerente="'.$protocolo->rid.'" data-requerente="'.$protocolo->rnome_razaosocial.'" data-tipo-pessoa="'.$protocolo->rtipo_pessoa.'" data-cpf-cnpj="'.$protocolo->rcpf_cnpj.'" data-ce-tipo-licenca="'.$protocolo->ce_tipo_licenca.'" data-ce-tipo-documento="11" data-status-anterior="'.$protocolo->status_anterior.'" data-status="'.$protocolo->status.'" onclick="encaminharProtocolo(this);"><i class="fas fa-external-link-alt fc-brand-success" data-toggle="tooltip" title="Encaminhar"></i></a>
								<a class="btn btn-default btn-sm" href="javascript:;" data-toggle="modal" data-target="#modalIndeferir" data-id-licenca="'.$protocolo->id.'" data-num-protocolo="'.$protocolo->num_protocolo.'" data-status="'.$protocolo->status.'" onclick="indeferirProtocolo(this);"><i class="fas fa-exclamation fc-brand-danger"  data-toggle="tooltip" title="Indeferir"></i></a>'
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