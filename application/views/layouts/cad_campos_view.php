<?php
	//-- Table Initiation
	$this->table->set_template($table_tmpl);
	//-- Header Row

	$this->table->set_heading('Label', 'Nome', 'Tipo', 'Ordem Exibição', 'Ordem Cadastro', 'Opções');
?>
<!-- Conteúdo -->
<div class="container container-sistema">
	<div class="row">
		<div class="col-12">
			<div class="card border border-gray-light">
				<div class="card-header bg-gray-light fc-white m-1">
					<h5>Campos</h5>
				</div>
				<div class="card-body">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">Cadastro: <strong><?= $cadastro->descricao .' ('. $cadastro->id .')'; ?></strong></li>
						</ol>
					</nav>
					<div class="navbar navbar-default mb-2">
						<a class="btn btn-gray" href=<?= base_url("cad_cadastros/adicionar_campo/$cadastro->id"); ?> data-toggle="tooltip" title="Adicionar"><i class="fa fa-plus"></i>&nbsp;Adicionar</a>
					</div>
					<?= ($this->session->flashdata('excluir')) ? $this->session->flashdata('excluir') : ''; ?>
					<?php
						foreach ($campos as $campo) {
							$this->table->add_row(
								$campo->label,
								$campo->nome,
								$campo->tipo,
								$campo->ordem_exibicao,
								$campo->ordem_cadastro,
								'<a class="btn btn-default btn-sm" href='. base_url("cad_cadastros/editar_campo/$cadastro->id/$campo->id") .' data-toggle="tooltip" title="Editar"><i class="fa fa-pen-square"></i></a>
								<a class="btn btn-default btn-sm btn-excluir" href="javascript:;" data-toggle="tooltip" title="Excluir" data-link="'.base_url("cad_cadastros/excluir_campo/$cadastro->id/$campo->id").'" data-voltar="" data-id="'.$campo->id.'" data-descricao="'.'registro'.'"><i class="fa fa-times"></i></a>'
							);
						}
					?>
					<?= $this->table->generate(); ?>
				</div>
				<div class="card-footer border-top bg-gray-light fc-white m-1">
					<a class="btn btn-gray-light" href=<?= $voltar; ?>><i class="fa fa-reply"></i>&nbsp;Voltar</a>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- /Conteúdo -->