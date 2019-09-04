
<!-- Conteúdo -->
<div class="container container-sistema">
	<div class="row">
		<div class="col-12">
			<div class="card border border-green-system">
				<div class="card-header bg-green-system fc-white m-1"><h5>Editando <?= $cadastro->descricao ?></h5>
				</div>
				<?= form_open($salvar, $form_attr); ?>
					<div class="card-body">
						<?php
							echo $this->session->flashdata('salvar');
							
							foreach ($campos_cadastro as $i => $campo) {

								$input = [
									'id'			=>	$campo->nome,
									'name'			=>	$campo->nome,
									'type'			=>	$campo->tipo,
									'class'			=>	$campo->class,
									'value'			=>	$dados[$campo->nome],
									'placeholder'	=>	'',
									'maxlength'		=>	$campo->tamanho,
								];

								if($campo->sn_obrigatorio == 'S')
									$input['required'] = '';
								if($campo->valor_maximo)
									$input['max'] = '';
								if($campo->valor_minimo)
									$input['min'] = '';
								if($campo->onkeypress)
									$input['onkeypress'] = '';
								if($campo->onkeyup)
									$input['onkeyup'] = '';

								if($campo->tipo == 'select') {
									$opt = json_decode($campo->opcoes);
									$opcoes = [];

									if($opt->tipo == 'tabela') {
										$opt_dados = $this->cadastro_model->selecionar_dados($opt->nome, $opt->chave);
										$opcoes['']	=	'** Selecione **';

										foreach ($opt_dados as $d) {
											$d = (array)$d;
											$chave = $d[$opt->chave];
											$valor = "";

											foreach ($opt->valores as $val)
												$valor .= $d[$val].' - ';

											$opcoes[$chave] = substr($valor, 0, -3);
										}
									}
									elseif($opt->tipo == 'json') {
										$opcoes['']	=	'** Selecione **';

										foreach ($opt->opcoes as $key => $val)
											$opcoes[$key] = $val;
									}

									$input = form_dropdown($campo->nome, $opcoes, $dados[$campo->nome], $input);
								}
								else {
									$input = form_input($input);
								}

								$label = $label2;

								if($campo->sn_nova_linha == 'S' || $i == 0) {
									if($i > 0)
										echo '</div>';
								?> <div class="form-group row"> <?php } else $label = $label1;?>
									<?= form_label($campo->label, $campo->nome, $label) ?>
									<div class="<?="col-sm-$campo->colunas"?> pb-1">
										<?= $input; ?>
										<font color="red"><?= form_error($campo->nome); ?></font>
									</div>
						<?php } ?>
								</div>
					</div>
					<div class="card-footer border-top bg-green-system fc-white m-1">
						<div class="form-row mt-1">
							<div class="col-md-12 pb-1">
								<button class="btn btn-gray" type="submit"><i class="fas fa-save"></i>&nbsp;Salvar</button>
								<a class="btn btn-green-system" href=<?= $voltar; ?>><i class="fa fa-reply"></i>&nbsp;Voltar</a>
							</div>
						</div>
					</div>
				<?= form_close(); ?>
			</div>
		</div>
	</div>
</div>
<!-- /Conteúdo -->