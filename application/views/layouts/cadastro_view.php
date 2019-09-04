<?php
	//-- Table Initiation
	$this->table->set_template($table_tmpl);
	//-- Header Row

	$cabecalho = [];

	foreach ($campos_cadastro as $campo) 
		$cabecalho[] = $campo->label;
	
	$cabecalho[] = 'Opções';
	
	$this->table->set_heading($cabecalho);
?>
<!-- Conteúdo -->
<div class="container container-sistema">
	<div class="row">
		<div class="col-12">
			<div class="card border border-green-system">
				<div class="card-header bg-green-system fc-white m-1"><h5>Cadastro de <?= $cadastro->descricao ?></h5></div>
				<div class="card-body">
					<div class="navbar navbar-default mb-2">
						<a class="btn btn-default" href=<?= base_url($adicionar); ?> data-toggle="tooltip" title="Adicionar"><i class="fa fa-plus"></i>&nbsp;Adicionar</a>
					</div>
					<?php
						echo $this->session->flashdata('excluir');

						foreach ($itens_tabela as $item) {
							$linha	=	[];
							$item	=	(array)$item;
							$descricao = '';

							foreach ($campos_cadastro as $i => $campo) {
								$nome	=	$item[$campo->nome];
								if($campo->tipo == 'date') {
									if($nome)
										$nome = date_format(date_create($nome), 'd/m/Y');
								}
								elseif($campo->tipo == 'select') {
									$opt	=	json_decode($campo->opcoes);
									if($opt->tipo == 'tabela') {
										$opt_dados	=	$this->cadastro_model->selecionar_dadosById($opt->nome, $nome);
										$opt_dados	=	(array)$opt_dados;
										$chave		=	$opt_dados[$opt->chave];
										$valor		=	"";
										foreach ($opt->valores as $val)
											$valor .= $opt_dados[$val].' - ';

										$nome = substr($valor, 0, -3);
									}
									elseif($opt->tipo == 'json') {
										$opcoes = (array)$opt->opcoes;
										$nome = $opcoes[$nome];
									}
								}

								$linha[] = $nome;

								if($i == 0)
									$descricao = $nome;
							}
							$linha[] = '<a class="btn btn-default btn-sm" href='.base_url("$editar/{$item['id']}").' data-toggle="tooltip" title="Editar"><i class="fa fa-pen-square"></i></a>'.
											'<a class="btn btn-default btn-sm btn-excluir" href="javascript:;" data-toggle="tooltip" title="Excluir" data-link="'.base_url("$excluir/{$item['id']}").'" data-voltar="" data-id="'.$item['id'].'" data-descricao="<b>'.$descricao.'</b>"><i class="fa fa-times"></i></a>';
							$this->table->add_row($linha);
						}

						echo $this->table->generate();
					?>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- /Conteúdo -->