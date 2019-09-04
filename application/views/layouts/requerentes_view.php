<?php
	//-- Table Initiation
	$this->table->set_template($table_tmpl);
	//-- Header Row
	$this->table->set_heading('Nome/Razão Social', 'Tipo Pessoa', 'CPF/CNPJ', 'Nome/Contato', 'Ações');
?>
<div class="container-fluid container-sistema">
	<div class="row mb-3">
		<div class="col-12">
			<div class="card border border-green-system">
				<div class="card-header bg-green-system fc-white m-1">
					<h6><i class="fas fa-users" aria-hidden="true"></i>&nbsp;REQUERENTES</h6>
				</div>
				<div class="card-body">
					<?= ($this->session->flashdata('excluir')) ? $this->session->flashdata('excluir') : ''; ?>
					<?php
						foreach ($requerentes as $requerente) {
							$tipo_pessoa	=	($requerente->tipo_pessoa == 'F') ? 'Física' : 'Jurídica';
							$this->table->add_row(
								$requerente->nome_razaosocial,
								$tipo_pessoa,
								$requerente->cpf_cnpj,
								$requerente->nome_contato,
								'<a class="btn btn-default btn-sm" href='.base_url("requerentes/editar/$requerente->id").' data-toggle="tooltip" title="Editar"><i class="fa fa-pen-square"></i></a>
								<a class="btn btn-default btn-sm" href="javascript:;" data-toggle="tooltip" title="Excluir"><i class="fas fa-times fc-brand-danger"></i></a>'
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