<?php
	//-- Table Initiation
	$this->table->set_template($table_tmpl);
	//-- Header Row
	$this->table->set_heading('Descrição', 'Ativo?', 'Ações');
?>
<!-- Conteúdo -->
<div class="container container-sistema">
	<div class="row">
		<div class="col-12">
			<div class="card border border-green-system">
				<div class="card-header bg-green-system fc-white m-1">
					<h5>Tipos de Licenças</h5>
				</div>
				<div class="card-body">
					<div class="navbar navbar-default mb-2">
						<a class="btn btn-default" href=<?= base_url('tipos_licencas/adicionar'); ?> data-toggle="tooltip" title="Adicionar"><i class="fa fa-plus"></i>&nbsp;Adicionar</a>
					</div>
					<?= ($this->session->flashdata('excluir')) ? $this->session->flashdata('excluir') : ''; ?>
					<?php
						foreach ($tipos_licencas as $tipo_licenca) {
							$this->table->add_row(
								$tipo_licenca->descricao,
								$tipo_licenca->sn_ativo,
								'<a class="btn btn-default btn-sm" href='.base_url("tipos_licencas/addTipoDocumento/$tipo_licenca->id").' data-toggle="tooltip" title="Inserir Documentos"><i class="fa fa-clone"></i></a>
								<a class="btn btn-default btn-sm" href='.base_url("tipos_licencas/editar/$tipo_licenca->id").' data-toggle="tooltip" title="Editar"><i class="fa fa-pen-square"></i></a>
								<a class="btn btn-default btn-sm" href='.base_url("tipos_licencas/excluir/$tipo_licenca->id").' data-toggle="tooltip" title="Excluir"><i class="fa fa-times"></i></a>'
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