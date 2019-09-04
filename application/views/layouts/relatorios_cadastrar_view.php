<!-- Conteúdo -->
<div class="container container-sistema">
	<div class="row">
		<div class="col-12">
			<div class="card border border-gray-light">
				<div class="card-header bg-brand-primary fc-white m-1">
					<h5>Cadastro de Relatórios</h5>
				</div>
				<div class="card-body">
					<div class="navbar navbar-default mb-2">
						<a class="btn btn-brand-primary" href=<?= base_url("relatorios/adicionar"); ?> data-toggle="tooltip" title="Adicionar"><i class="fa fa-plus"></i>&nbsp;Adicionar</a>
					</div>
					<?= ($this->session->flashdata('excluir')) ? $this->session->flashdata('excluir') : ''; ?>
					<?php
						//-- Table Initiation
						$this->table->set_template($table_tmpl);
						//-- Header Row
						$this->table->set_heading('Nome Relatório', 'Título Relatório', 'Opção Menu', 'Opções');

						foreach ($relatorios_empresas as $relatorio_empresa) {
							$this->table->add_row(
								$relatorio_empresa->nome_relatorio,
								$relatorio_empresa->titulo_relatorio,
								$relatorio_empresa->opcao_menu,
								'<a class="btn btn-default btn-sm" href='. base_url("relatorios/view/$relatorio_empresa->id") .' data-toggle="tooltip" title="Visualizar"><i class="fa fa-search"></i></a>
								<a class="btn btn-default btn-sm" href='. base_url("relatorios/editar/$relatorio_empresa->id") .' data-toggle="tooltip" title="Editar"><i class="fa fa-pen-square"></i></a>
								<a class="btn btn-default btn-sm" href='. base_url("relatorios/campos/$relatorio_empresa->ce_relatorio") .' data-toggle="tooltip" title="Campos"><i class="fas fa-th-list"></i></a>
								<a class="btn btn-default btn-sm" href='. base_url("relatorios/configuracoes/$relatorio_empresa->ce_relatorio") .' data-toggle="tooltip" title="Configurações"><i class="fas fa-cog"></i></a>
								<a class="btn btn-default btn-sm copiar-relatorio" href="javascript:;" data-titulo-relatorio="'. $relatorio_empresa->titulo_relatorio .'" data-id-relatorio="'. $relatorio_empresa->ce_relatorio .'" data-toggle="tooltip" title="Clonar Relatório"><i class="fas fa-copy"></i></a>
								<a class="btn btn-default btn-sm btn-excluir" href="javascript:;" data-toggle="tooltip" title="Excluir" data-link="'. base_url("relatorios/excluir/$relatorio_empresa->id") .'" data-voltar="" data-id="'. $relatorio_empresa->id .'" data-descricao="'. $relatorio_empresa->titulo_relatorio .'"><i class="fa fa-times"></i></a>'
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