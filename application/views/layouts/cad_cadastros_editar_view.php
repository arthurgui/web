<?php
	$input_url				=	array(
									'id'			=>	'id',
									'name'			=>	'id',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'placeholder'	=>	'',
									'maxlength'		=>	'15',
									'value'			=>	set_value("id", $cadastro->id),
									'required'		=>	''
								);
	$input_descricao		=	array(
									'id'			=>	'descricao',
									'name'			=>	'descricao',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'placeholder'	=>	'',
									'maxlength'		=>	'100',
									'value'			=>	set_value("descricao", $cadastro->descricao),
									'required'		=>	''
								);
	$input_nome_tabela		=	array(
									'id'			=>	'nome_tabela',
									'name'			=>	'nome_tabela',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'placeholder'	=>	'',
									'maxlength'		=>	'100',
									'value'			=>	set_value("nome_tabela", $cadastro->nome_tabela),
									'required'		=>	''
								);
	$input_campo_ordenacao	=	array(
									'id'			=>	'campo_ordenacao',
									'name'			=>	'campo_ordenacao',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'placeholder'	=>	'',
									'maxlength'		=>	'100',
									'value'			=>	set_value("campo_ordenacao", $cadastro->campo_ordenacao),
									'required'		=>	''
								);
?>
<!-- Conteúdo -->
<div class="container container-sistema conatainer-usuarios">
	<div class="row mb-5">
		<div class="col-12">
			<div class="card border border-gray-light">
				<div class="card-header bg-gray-light fc-white m-1">
					<h5>Editar Cadastro</h5>
				</div>
				<?= form_open($salvar, $form_attr); ?>
					<div class="card-body">
						<?= ($this->session->flashdata('salvar')) ? $this->session->flashdata('salvar') : ''; ?>
						<div class="form-group row">
							<?= form_label('URL:', 'id', $label2); ?>
							<div class="col-sm-4 pb-1">
								<?= form_input($input_url); ?>
								<font color="red"><?= form_error('id'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Descrição:', 'descricao', $label2); ?>
							<div class="col-sm-6 pb-1">
								<?= form_input($input_descricao); ?>
								<font color="red"><?= form_error('descricao'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Nome da Tabela:', 'nome_tabela', $label2); ?>
							<div class="col-sm-4 pb-1">
								<?= form_input($input_nome_tabela); ?>
								<font color="red"><?= form_error('nome_tabela'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Campo de Ordenação:', 'campo_ordenacao', $label2); ?>
							<div class="col-sm-4 pb-1">
								<?= form_input($input_campo_ordenacao); ?>
								<font color="red"><?= form_error('campo_ordenacao'); ?></font>
							</div>
						</div>
					</div>
					<div class="card-footer border-top bg-gray-light fc-white m-1">
						<button class="btn btn-gray"><i class="fas fa-save"></i>&nbsp;Salvar</button>
						<a class="btn btn-gray-light" href=<?= $voltar; ?>><i class="fa fa-reply"></i>&nbsp;Voltar</a>
					</div>
				<?= form_close(); ?>
			</div>
		</div>
	</div>
</div>