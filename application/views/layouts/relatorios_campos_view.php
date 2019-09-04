<!-- Conteúdo -->
<div class="container container-sistema">
	<div class="row">
		<div class="col-12">
			<div class="card border border-gray-light">
				<div class="card-header bg-brand-primary fc-white m-1">
					<h5>Campos do Relatório</h5>
				</div>
				<div class="card-body">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item" aria-current="page">Relatório: <strong><?= $relatorio->titulo_relatorio; ?></strong></li>
						</ol>
					</nav>
					<div class="navbar navbar-default mb-2">
						<a class="btn btn-brand-primary" href=<?= base_url("relatorios/adicionar_campo/".$relatorio->id); ?> data-toggle="tooltip" title="Adicionar"><i class="fa fa-plus"></i>&nbsp;Adicionar</a>
					</div>
					<?= ($this->session->flashdata('excluir')) ? $this->session->flashdata('excluir') : ''; ?>
					<?php
						//-- Table Initiation
						$this->table->set_template($table_tmpl);
						//-- Header Row
						$this->table->set_heading('#', 'Cabeçalho', 'Nome', 'Pos.X', 'Tamanho', 'Opções');

						foreach ($campos_relatorios as $campo) {
							$this->table->add_row(
								$campo->ordem,
								$campo->cabecalho,
								$campo->nome,
								$campo->posx,
								$campo->tamanho,
								'<a class="btn btn-default btn-sm" href='. base_url("relatorios/editar_campo/$campo->id") .' data-toggle="tooltip" title="Editar"><i class="fa fa-pen-square"></i></a>'./*
								<a class="btn btn-default btn-sm copiar-campo" href="javascript:;" data-nome-campo="'. $campo->nome_tabela .'" data-descricao-campo="'. $campo->descricao .'" data-ordenacao-campo="'. $campo->campo_ordenacao .'" data-toggle="tooltip" title="Clonar campo"><i class="fas fa-copy"></i></a>*/'
								<a class="btn btn-default btn-sm" data-href='. base_url("relatorios/excluir_campo/$campo->ce_relatorio/$campo->id") .' data-id='. $campo->id .' data-toggle="modal" data-target="#modalConfirmaExcluir" title="Excluir"><i class="fa fa-times"></i></a>'
							);
						}
					?>
					<?= $this->table->generate(); ?>
				</div>
				<?php if($voltar) : ?>
					<div class="card-footer border-top bg-brand-primary">
						<a class="btn btn-success" href="<?= $voltar; ?>"><i class="fa fa-reply"></i>&nbsp;Voltar</a>
					</div>
				<?php endif; ?>
			</div>
		</div>
	</div>
</div>
<!-- /Conteúdo -->