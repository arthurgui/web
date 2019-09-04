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
					<h5>Aprovações</h5>
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
								'<a class="btn btn-default btn-sm" href='.base_url("licencas/protocoloDocumentos/$protocolo->id/aprovacoes").' data-toggle="tooltip" title="Documentos"><i class="fas fa-copy"></i></a>&nbsp;'.
								($protocolo->dt_autorizacao ?
									'<a class="btn btn-default btn-sm" href="javascript:;" data-backdrop="static" data-keyboard="false" data-toggle="modal" data-target="#modalEncaminhar" data-id-licenca="'.$protocolo->id.'" data-num-protocolo="'.$protocolo->num_protocolo.'" data-requerente="'.$protocolo->rnome_razaosocial.'" data-cpf-cnpj="'.$protocolo->rcpf_cnpj.'" data-status-anterior="'.$protocolo->status_anterior.'" data-status="'.$protocolo->status.'" onclick="encaminharProtocolo(this);"><i class="fas fa-external-link-alt fc-brand-success" data-toggle="tooltip" title="Encaminhar"></i></a>' :
									($this->dados['perfil_usuario'] == 'A' ? '<a class="btn btn-default btn-sm" href="javascript:;" data-link="'.base_url("licencas/protocoloAprovar/$protocolo->id/$link").'" data-backdrop="static" data-keyboard="false" data-toggle="modal" data-target="#modalAprovar" data-id-licenca="'.$protocolo->id.'" data-num-protocolo="'.$protocolo->num_protocolo.'" data-requerente="'.$protocolo->rnome_razaosocial.'" data-cpf-cnpj="'.$protocolo->rcpf_cnpj.'" data-status-anterior="'.$protocolo->status_anterior.'" data-status="'.$protocolo->status.'"  onclick="aprovarProtocolo(this);"><i class="fas fa-share-square fc-brand-primary" data-toggle="tooltip" title="Aprovar"></i></a>' : '')).
								'&nbsp;<a class="btn btn-default btn-sm" href='. base_url("licencas/operacaoImprimir/$protocolo->id") .' target="_blank" data-toggle="tooltip" title="Imprimir Licença"><i class="fas fa-print"></i></a>
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