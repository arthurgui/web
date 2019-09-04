<?php
	//-- Table Initiation
	$this->table->set_template($table_tmpl);
	//-- Header Row

	$this->table->set_heading('URL', 'Descrição', 'Tabela', 'Ordenação', 'Opções');
?>
<!-- Conteúdo -->
<div class="container container-sistema">
	<div class="row">
		<div class="col-12">
			<div class="card border border-gray-light">
				<div class="card-header bg-gray-light fc-white m-1">
					<h5>Cadastros</h5>
				</div>
				<div class="card-body">
					<div class="navbar navbar-default mb-2">
						<a class="btn btn-gray" href=<?= base_url("cad_cadastros/adicionar/"); ?> data-toggle="tooltip" title="Adicionar"><i class="fa fa-plus"></i>&nbsp;Adicionar</a>
					</div>
					<?= ($this->session->flashdata('excluir')) ? $this->session->flashdata('excluir') : ''; ?>
					<?php
						foreach ($cadastros as $cadastro) {
							$this->table->add_row(
								$cadastro->id,
								$cadastro->descricao,
								$cadastro->nome_tabela,
								$cadastro->campo_ordenacao,
								'<a class="btn btn-default btn-sm" href='. base_url("cad_cadastros/editar/$cadastro->id") .' data-toggle="tooltip" title="Editar"><i class="fa fa-pen-square"></i></a>
								<a class="btn btn-default btn-sm" href='. base_url("cad_cadastros/campos/$cadastro->id") .' data-toggle="tooltip" title="Campos"><i class="fas fa-th-list"></i></a>
								<a class="btn btn-default btn-sm copiar-tabela" href="javascript:;" data-nome-tabela="'.$cadastro->nome_tabela.'" data-descricao-tabela="'.$cadastro->descricao.'" data-ordenacao-tabela="'.$cadastro->campo_ordenacao.'" data-toggle="tooltip" title="Clonar tabela"><i class="fas fa-copy"></i></a>
								<a class="btn btn-default btn-sm btn-excluir" href="javascript:;" data-toggle="tooltip" title="Excluir" data-link="'.base_url("cad_cadastros/excluir/$cadastro->id").'" data-voltar="" data-id="'.$cadastro->url.'" data-descricao="'.'registro'.'"><i class="fa fa-times"></i></a>'
							);
						}
					?>
					<?= $this->table->generate(); ?>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- /Conteúdo -->