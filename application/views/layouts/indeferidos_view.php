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
					<h5>Indeferidos</h5>
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
								'<a class="btn btn-default btn-sm" href='.base_url("licencas/protocoloDocumentos/$protocolo->id").' data-toggle="tooltip" title="Documentos"><i class="fas fa-copy"></i></a>
								<a class="btn btn-default btn-sm" href='.base_url("licencas/protocoloImprimir/$protocolo->id").' data-toggle="tooltip" title="Imprimir"><i class="fas fa-print"></i></a>'
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