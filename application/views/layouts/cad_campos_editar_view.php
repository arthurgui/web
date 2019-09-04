<style type="text/css">
	.legenda {
		border-bottom: 1px solid #e5e5e5;
		width: 100%;
	}
</style>
<?php
	$input_label			=	array(
									'id'			=>	'label',
									'name'			=>	'label',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	set_value("label", $campo->label),
									'placeholder'	=>	'',
									'maxlength'		=>	'100',
									'required'		=>	''
								);
	$input_nome				=	array(
									'id'			=>	'nome',
									'name'			=>	'nome',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	set_value("nome", $campo->nome),
									'placeholder'	=>	'',
									'maxlength'		=>	'100',
									'required'		=>	''
								);

	$input_tipo				=	$campo->tipo;
	$classe_tipo			=	array(
									'id'			=>	'tipo',
									'name'			=>	'tipo',
									'class'			=>	'form-control'
								);
	$opt_tipo				=	array(
									'text'		=> 'Texto',
									'number'	=> 'Número',
									'date'		=> 'Data',
									'url'		=> 'URL',
									'select'	=> 'Combo',
									'radio'		=> 'Rádio',
									'checkbox'	=> 'Checkbox'
								);

	$input_tamanho			=	array(
									'id'			=>	'tamanho',
									'name'			=>	'tamanho',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	set_value("tamanho", $campo->tamanho),
									'placeholder'	=>	'',
									'maxlength'		=>	'11',
									'onkeypress'	=>	"return txtBoxFormat(this, '99999999999', event);",
									'required'		=>	''
								);
	$input_valor_minimo		=	array(
									'id'			=>	'valor_minimo',
									'name'			=>	'valor_minimo',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	set_value("valor_minimo", $campo->valor_minimo),
									'placeholder'	=>	'',
									'maxlength'		=>	'11',
									'onkeypress'	=>	"return txtBoxFormat(this, '99999999999', event);"
								);
	$input_valor_maximo		=	array(
									'id'			=>	'valor_maximo',
									'name'			=>	'valor_maximo',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	set_value("valor_maximo", $campo->valor_maximo),
									'placeholder'	=>	'',
									'maxlength'		=>	'11',
									'onkeypress'	=>	"return txtBoxFormat(this, '99999999999', event);"
								);
	$input_ordem_exibicao	=	array(
									'id'			=>	'ordem_exibicao',
									'name'			=>	'ordem_exibicao',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	set_value("ordem_exibicao", $campo->ordem_exibicao),
									'placeholder'	=>	'',
									'maxlength'		=>	'11',
									'onkeypress'	=>	"return txtBoxFormat(this, '99999999999', event);",
									'required'		=>	''
								);
	$input_ordem_cadastro	=	array(
									'id'			=>	'ordem_cadastro',
									'name'			=>	'ordem_cadastro',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	set_value("ordem_cadastro", $campo->ordem_cadastro),
									'placeholder'	=>	'',
									'maxlength'		=>	'11',
									'onkeypress'	=>	"return txtBoxFormat(this, '99999999999', event);",
									'required'		=>	''
								);
	$input_obrigatorio		=	array(
									'id'		=> 'sn_obrigatorio',
									'name'		=> 'sn_obrigatorio',
									'class'		=> 'custom-control-input',
									'value'		=> 'S',
									'checked'	=> ($campo->sn_obrigatorio == 'S') ? TRUE : FALSE
								);
	$input_class			=	array(
									'id'			=>	'class',
									'name'			=>	'class',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	set_value("class", $campo->class),
									'placeholder'	=>	'Adicionar classes separadas por espaço',
									'maxlength'		=>	'150'
								);
	$input_onkeypress		=	array(
									'id'			=>	'onkeypress',
									'name'			=>	'onkeypress',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	set_value("onkeypress", $campo->onkeypress),
									'placeholder'	=>	'',
									'maxlength'		=>	'150'
								);
	$input_onkeyup			=	array(
									'id'			=>	'onkeyup',
									'name'			=>	'onkeyup',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	set_value("onkeyup", $campo->onkeyup),
									'placeholder'	=>	'',
									'maxlength'		=>	'150'
								);
	$input_colunas			=	array(
									'id'			=>	'colunas',
									'name'			=>	'colunas',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	set_value("colunas", $campo->colunas),
									'placeholder'	=>	'',
									'maxlength'		=>	'11',
									'onkeypress'	=>	"return txtBoxFormat(this, '99999999999', event);"
								);
	$input_linha			=	array(
									'id'		=> 'sn_nova_linha',
									'name'		=> 'sn_nova_linha',
									'class'		=> 'custom-control-input',
									'value'		=> 'S',
									'checked'	=> ($campo->sn_nova_linha == 'S') ? TRUE : FALSE
								);

	$opts = json_decode($campo->opcoes);

	if($opts->valores)
		$valores = implode(' ', $opts->valores);

	$input_tipo_dados		=	$opts->tipo;
	$classe_tipo_dados		=	array(
									'id'			=>	'tipo_dados',
									'name'			=>	'tipo_dados',
									'class'			=>	'form-control'
								);

	$opt_tipo_dados			=	array(
									''			=> '** Selecione **',
									'tabela'	=> 'Tabela',
									'json'		=> 'Json'
								);
	$input_tabela			=	array(
									'id'			=>	'tabela',
									'name'			=>	'tabela',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	set_value("tabela", $opts->nome),
									'placeholder'	=>	'',
									'maxlength'		=>	'50'
								);
	$input_chave			=	array(
									'id'			=>	'chave',
									'name'			=>	'chave',
									'type'			=>	'text',
									'value'			=>	set_value("chave", $opts->chave),
									'class'			=>	'form-control',
									'placeholder'	=>	'',
									'maxlength'		=>	'50'
								);
	$input_valor			=	array(
									'id'			=>	'valor',
									'name'			=>	'valor',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	set_value("valor", $valores),
									'placeholder'	=>	'Separados por espaços',
									'maxlength'		=>	'50'
								);
	$input_chaves			=	array(
									'id'			=>	'chaves',
									'name'			=>	'chaves[]',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'placeholder'	=>	'',
									'maxlength'		=>	'50'
								);
	$input_valores			=	array(
									'id'			=>	'valores',
									'name'			=>	'valores[]',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'placeholder'	=>	'',
									'maxlength'		=>	'50'
								);
?>
<!-- Conteúdo -->
<div class="container container-sistema conatainer-usuarios">
	<div class="row mb-5">
		<div class="col-12">
			<div class="card border border-gray-light">
				<div class="card-header bg-gray-light fc-white m-1">
					<h5>Adicionar Campo</h5>
				</div>
				<?= form_open($salvar, $form_attr); ?>
					<div class="card-body">
						<input type="hidden" name="cadastro" value="<?= $cadastro->id; ?>">
						<nav aria-label="breadcrumb">
							<ol class="breadcrumb">
								<li class="breadcrumb-item">Cadastro: <strong><?= $cadastro->descricao .' ('. $cadastro->id .')'; ?></strong></li>
							</ol>
						</nav>
						<?= ($this->session->flashdata('salvar')) ? $this->session->flashdata('salvar') : ''; ?>
						<div class="form-group row">
							<?= form_label('Label:', 'label', $label2); ?>
							<div class="col-sm-6 pb-1">
								<?= form_input($input_label); ?>
								<font color="red"><?= form_error('label'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Nome:', 'nome', $label2); ?>
							<div class="col-sm-6 pb-1">
								<?= form_input($input_nome); ?>
								<font color="red"><?= form_error('nome'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Tipo:', 'tipo', $label2); ?>
							<div class="col-sm-2 pb-1">
								<?= form_dropdown('tipo', $opt_tipo, $input_tipo, $classe_tipo); ?>
								<font color="red"><?= form_error('tipo'); ?></font>
							</div>
							<?= form_label('', 'tipo_dados', $label2); ?>
							<div class="col-sm-2 pb-1 tipo_dados" style="display: none;">
								<?= form_dropdown('tipo_dados', $opt_tipo_dados, $input_tipo_dados, $classe_tipo_dados); ?>
								<font color="red"><?= form_error('tipo_dados'); ?></font>
							</div>
						</div>
						<div class="tabela-config" style="display: none;">
							<fieldset>
							<legend class="legenda">Dados da tabela</legend>
								<div class="form-group row">
									<?= form_label('Tabela:', 'tabela', $label2); ?>
									<div class="col-sm-3 pb-1">
										<?= form_input($input_tabela); ?>
										<font color="red"><?= form_error('tabela'); ?></font>
									</div>
									<?= form_label('Coluna chave:', 'chave', $label1); ?>
									<div class="col-sm-2 pb-1">
										<?= form_input($input_chave); ?>
										<font color="red"><?= form_error('chave'); ?></font>
									</div>
								</div>
								<div class="form-group row">
									<?= form_label('Colunas valores:', 'valor', $label2); ?>
									<div class="col-sm-6 pb-1">
										<?= form_input($input_valor); ?>
										<font color="red"><?= form_error('valor'); ?></font>
									</div>
								</div>
							</fieldset>
							<hr>
						</div>
						
						<div class="json-config" style="display: none;">
							<fieldset>
							<legend class="legenda">Dados json</legend>
								<div class="pares">
									<div class="par">
										<div class="form-group row">
											<?= form_label('Chave:', 'chaves[]', $label2); ?>
											<div class="col-sm-2 pb-1">
												<?= form_input($input_chaves); ?>
												<font color="red"><?= form_error('chaves[]'); ?></font>
											</div>
											<?= form_label('Valor:', 'valores[]', $label2); ?>
											<div class="col-sm-2 pb-1">
												<?= form_input($input_valores); ?>
												<font color="red"><?= form_error('valores[]'); ?></font>
											</div>
											<div class="col-sm-2 btn-remove"></div>
										</div>
									</div>
								</div>
								<div class="form-group row">
									<div class="col-sm-2 pb-1 offset-sm-2">
										<button type="button" id="btn-add" class="btn"><i class="fas fa-plus"></i>&nbsp;add</button>
									</div>
								</div>
							</fieldset>
							<hr>
						</div>
						<div class="form-group row">
							<?= form_label('Tamanho:', 'tamanho', $label2); ?>
							<div class="col-sm-2 pb-1">
								<?= form_input($input_tamanho); ?>
								<font color="red"><?= form_error('tamanho'); ?></font>
							</div>
							<div class="col-sm-2 pb-1"></div>
							<div class="col-sm-2 pb-1 custom-control custom-checkbox">
								<?= form_checkbox($input_obrigatorio); ?>
								<?= form_label('Obrigatório', 'sn_obrigatorio', array('class' => 'custom-control-label')); ?>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Valor Mínimo:', 'valor_minimo', $label2); ?>
							<div class="col-sm-2 pb-1">
								<?= form_input($input_valor_minimo); ?>
								<font color="red"><?= form_error('valor_minimo'); ?></font>
							</div>
							<?= form_label('Valor Máximo:', 'valor_maximo', $label2); ?>
							<div class="col-sm-2 pb-1">
								<?= form_input($input_valor_maximo); ?>
								<font color="red"><?= form_error('valor_maximo'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Ordem de Exibição:', 'ordem_exibicao', $label2); ?>
							<div class="col-sm-2 pb-1">
								<?= form_input($input_ordem_exibicao); ?>
								<font color="red"><?= form_error('ordem_exibicao'); ?></font>
							</div>
							<?= form_label('Ordem de Cadastro:', 'ordem_cadastro', $label2); ?>
							<div class="col-sm-2 pb-1">
								<?= form_input($input_ordem_cadastro); ?>
								<font color="red"><?= form_error('ordem_cadastro'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Classe:', 'class', $label2); ?>
							<div class="col-sm-6 pb-1">
								<?= form_input($input_class); ?>
								<font color="red"><?= form_error('class'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('On Key Press:', 'onkeypress', $label2); ?>
							<div class="col-sm-6 pb-1">
								<?= form_input($input_onkeypress); ?>
								<font color="red"><?= form_error('onkeypress'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('On Key Up:', 'onkeyup', $label2); ?>
							<div class="col-sm-6 pb-1">
								<?= form_input($input_onkeyup); ?>
								<font color="red"><?= form_error('onkeyup'); ?></font>
							</div>
						</div>
						<div class="form-group row">
							<?= form_label('Colunas:', 'colunas', $label2); ?>
							<div class="col-sm-2 pb-1">
								<?= form_input($input_colunas); ?>
								<font color="red"><?= form_error('colunas'); ?></font>
							</div>
							<div class="col-sm-2 pb-1"></div>
							<div class="col-sm-2 pb-1 custom-control custom-checkbox">
								<?= form_checkbox($input_linha); ?>
								<?= form_label('Nova linha', 'sn_nova_linha', array('class' => 'custom-control-label')); ?>
							</div>
						</div>
					</div>
					<div class="card-footer border-top bg-green-system fc-white m-1">
						<button class="btn btn-brand-primary"><i class="fas fa-save"></i>&nbsp;Salvar</button>
						<a class="btn btn-physis" href=<?= $voltar; ?>><i class="fa fa-reply"></i>&nbsp;Voltar</a>
					</div>
				<?= form_close(); ?>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">
	$(document).ready(function() {
		$('#tipo').change(function() {
			if($('#tipo').val() == 'select') {
				$('.tipo_dados').show();
				$("#tipo_dados").val(tipo_dados);
			}
			else {
				$('.tipo_dados').hide();
				$("#tipo_dados").val('');
			}

			$("#tipo_dados").triggerHandler('change');
		});

		$('#tipo_dados').change(function() {
			if($('#tipo_dados').val() == 'tabela') {
				$('.tabela-config').show();
				$('.json-config').hide();
			}
			else if($('#tipo_dados').val() == 'json') {
				$('.json-config').show();
				$('.tabela-config').hide();
			}
			else {
				$('.tabela-config').hide();
				$('.json-config').hide();
			}
		});

		$("#btn-add").click(function(){
			if($('.par').length == 1)
				$('.btn-remove').append(botao_remover);

			var dados = $('.par:first').clone();
			dados.find(':text').val('');
			dados.appendTo('.pares');
		});

		$(document).on('click', '.remove', function(){
			$(this).closest('.par').remove();

			if($('.par').length == 1)
				$('.remove').remove();
		});

		const botao_remover = '<button class="btn btn-primary remove" type="button"><i class="fa fa-minus"></i>&nbsp;&nbsp;Remover</button>'
		const opcoes = JSON.parse('<?= json_encode($opts->opcoes) ?>');
		const tipo_dados = '<?= $opts->tipo ?>';

		if(opcoes) {
			let   count = Object.keys(opcoes).length;

			Object.entries(opcoes).forEach(([k, v]) => {
				$('[name="chaves[]"]:last').val(k);
				$('[name="valores[]"]:last').val(v);

				if(--count > 0)
					$("#btn-add").triggerHandler('click');
			});
		}

		$("#tipo").triggerHandler('change');
	});
</script>