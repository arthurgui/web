<div class="print">
	<div class="container botoes mb-2">
		<div class="row">
			<button class="btn btn-primary" onclick="window.print();">Imprimir</button>
		</div>
	</div>
	<!-- <div class="container div-pagina licenca" id="pagina1" style="background-image: url(<?= base_url() .'assets/uploads/assinaturas_usuarios/1.png' ; ?>); background-repeat: no-repeat; background-position: center; background-clip: content-box; background-size: contain;"> -->
	<div class="container div-pagina licenca" id="pagina1">
		<input type="hidden" id="ce_usuario_aprovacao" name="ce_usuario_aprovacao" value="<?= $licenca->ce_usuario_aprovacao; ?>">

		<!-- <div class="bg"></div> -->
		<?php if ($licenca->ce_usuario_aprovacao == null || $licenca->ce_usuario_aprovacao == '0') : ?>
			<span style="z-index: 0; position: absolute; top: 50%; left: 50%; margin-right: -50%; transform: translate(-50%, -50%) rotate(60deg); opacity:.4; font-size: 90px; font-weight: 900;">LICENÇA NÃO APROVADA</span>
			<!-- <img src="<?= base_url(); ?>assets/uploads/assinaturas_usuarios/1.png" style="width: 50%; z-index: 0; position: absolute; top: 50%; left: 50%; margin-right: -50%; transform: translate(-50%, -50%) rotate(60deg); opacity:.5;"> -->
		<?php endif; ?>

		<div class="row">
			<div class="col-sm-4">
				<img src="<?= $logo_empresa; ?>" class="img-fluid">
			</div>
			<div class="col-sm-8">
				<div class="border p-2 text-center">
					<h6>ESTADO DA PARAÍBA</h6>
					<h6>PREFEITURA MUNICIPAL DE CABEDELO</h6>
					<h6>SECRETARIA DE MEIO AMBIENTE, PESCA E AQUICULTURA</h6>
				</div>
			</div>
		</div>
		<div class="row mt-5">
			<div class="col-sm-12">
				<div class="p-2 text-center">
					<h5 class="font-weight-bold">LICENÇA DE OPERAÇÃO - Nº <?= $licenca->num_licenca; ?></h5>
				</div>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col-sm-12">
				<div class="p-2 text-justify">
					<p><strong>A SEMAPA</strong> - Secretaria de Meio Ambiente de Cabedelo, no uso das atribuições que lhe são conferidas pela <strong>Lei Complementar Nº 23 de 04 de janeiro de 2008</strong>, que institui o Código de Meio Ambiente do Município de Cabedelo, dispõe sobre o Sistema Municipal de Meio Ambiente - SIMAC e de conformidade com o que estabelece a Lei Complementar Nº 140 de 08 de dezembro de 2011 e a <strong>Lei Municipal 1.734/2014</strong> concede a presente Autorização acima discriminada, nas condições especificadas.</p>
				</div>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col-sm-12">
				<div class="p-2 text-center">
					<h5 class="font-weight-bold">I - DADOS DA ATIVIDADE</h5>
				</div>
			</div>
			<div class="col-sm-12">
				<table width="100%" class="mb-2">
					<tbody>
						<tr>
							<td class="label-input" width="100%">Nome / Razão Social</td>
						</tr>
						<tr>
							<td class="input pl-1 pr-1 font-weight-bold">
								<?= $licenca->rnome_razaosocial; ?>
							</td>
						</tr>
					</tbody>
				</table>
				<table width="100%" class="mb-2">
					<tbody>
						<tr>
							<td class="label-input" width="100%">CPF / CNPJ</td>
						</tr>
						<tr>
							<td class="input pl-1 pr-1 font-weight-bold">
								<?= (($licenca->rtipo_pessoa == 'F') ? 'CPF: ' : 'CNPJ: ') . $licenca->rcpf_cnpj; ?>
							</td>
						</tr>
					</tbody>
				</table>
				<table width="100%" class="mb-2">
					<tbody>
						<tr>
							<td class="label-input" width="100%">Localização</td>
						</tr>
						<tr>
							<td class="input pl-1 pr-1 font-weight-bold">
								<?php $complemento = (trim($licenca->complemento)) ? ' '. $licenca->complemento : '' ?>
								<?= trim($licenca->logradouro) .', '. $licenca->numero . $complemento .', '. $licenca->bairro .' - '. $licenca->cidade .'/'. $licenca->uf; ?>
							</td>
						</tr>
						<tr>
							<td class="input pl-1 pr-1 font-weight-bold">
								Latitude: <?= $licenca->latitude; ?>	Longitude: <?= $licenca->longitude; ?>
							</td>
						</tr>
					</tbody>
				</table>
				<table width="100%" class="mb-3">
					<tbody>
						<tr>
							<td class="label-input" width="100%">Atividade Licenciada</td>
						</tr>
						<tr>
							<td class="input pl-1 pr-1 font-weight-bold">
								<?= $licenca->atividade_licenciada; ?>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col-sm-12">
				<div class="p-2 text-center">
					<h5 class="font-weight-bold">II - CONDICIONANTES</h5>
				</div>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col-sm-12">
				<table width="100%" class="mb-2">
					<tbody>
						<tr>
							<td class="input pl-1 pr-1" style="width: 6%"></td>
							<td class="input pl-1 pr-1 text-right align-top">1-</td>
							<td class="input pl-1 pr-1 text-justify">
								Esta Licença é válida pelo período de 1.460 dias, a contar da presente data conforme processo - Nº 2017.000431-1 - SEMAPA/PMC, observando as condições deste documento e seus anexos que, embora não transcritos, são partes integrantes do mesmo;
							</td>
						</tr>
					</tbody>
				</table>
				<table width="100%" class="mb-2">
					<tbody>
						<tr>
							<td class="input pl-1 pr-1" style="width: 6%"></td>
							<td class="input pl-1 pr-1 text-right align-top">2-</td>
							<td class="input pl-1 pr-1 text-justify">
								Este documento não contém emendas ou rasuras e sua cópia só terá validade com a autenticação em cartório;
							</td>
						</tr>
					</tbody>
				</table>
				<table width="100%" class="mb-2">
					<tbody>
						<tr>
							<td class="input pl-1 pr-1" style="width: 6%"></td>
							<td class="input pl-1 pr-1 text-right align-top">3-</td>
							<td class="input pl-1 pr-1 text-justify">
								A renovação desta Licença deverá ser requerida com antecedência de 120 (cento e vinte dias) antes de decorrido o prazo de validade da mesma;
							</td>
						</tr>
					</tbody>
				</table>
				<table width="100%" class="mb-2">
					<tbody>
						<tr>
							<td class="input pl-1 pr-1" style="width: 6%"></td>
							<td class="input pl-1 pr-1 text-right align-top">4-</td>
							<td class="input pl-1 pr-1 text-justify">
								Esta Licença diz respeito à análise de viabilidade ambiental de competência da SEMAPA - Secretaria de Meio Ambiente, Pesca e Aquicultura de Cabedelo, devendo o empreendedor obter, quando couber, a anuência das outras instancias no âmbito Federal, Estadual e Municipal, para que o mesmo alcance seus efeitos legais;
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col-sm-12">
				<div class="p-2 text-justify">
					<strong><p>Os demais condicionantes referentes a esta Licença estão descritos no verso deste documento</p></strong>
				</div>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col-sm-12">
				<table width="100%" class="mb-3">
					<tbody>
						<tr>
							<td class="label-input" width="50%">
								<div class="h-100 p-2 text-center">
									<img src=<?= base_url().'assets/images/qr/lic-'. $licenca->id .'.png'; ?>>
								</div>
							</td>
							<td class="label-input" width="50%">
								<div class="h-100 p-2 text-center">
									<?php
										setlocale(LC_TIME, 'pt_BR', 'pt_BR.utf-8', 'pt_BR.utf-8', 'portuguese');
										date_default_timezone_set('America/Sao_Paulo');
									?>
									<h6 class="font-weight-bold">VENCIMENTO: <?= ($licenca->dt_validainscricao) ? date('d/m/Y', strtotime($licenca->dt_validainscricao .'+'. $licenca->tlperiodo_validade .'MONTHS')) : ''; ?></h6>
									<h6 class="mb-1">Cabedelo, <?= strftime('%d de %B de %Y', strtotime('today')); ?></h6>
									<br>
									<br>
									<br>
									<?php if ($licenca->ce_usuario_aprovacao != null && $licenca->ce_usuario_aprovacao != '0') : ?>

										<img src=<?= base_url() . $licenca->upassinatura; ?>>
									<?php endif; ?>
									<div class="w-auto m-1 border-top">
										<p class="mb-1"><strong><?= $licenca->upnome; ?></strong></p>
										<p class="mb-1"><strong><?= $licenca->upfuncao; ?></strong></p>
										<!-- <p class="mb-1"><strong>Sec. de Meio Ambiente, Pesca e Aquicultura.</strong></p> -->
									</div>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="row mt-5">
			<div class="col-sm-12">
				<div id="footer" class="p-2 text-center">
					Rua Pastor José Alves de Oliveira, 306. Térreo. Centro - Cabedelo/PB CEP 58.101-082
					<p>Tel.(83) 3228-0596 Email: semapa.cabedelo@gmail.com</p>
				</div>
			</div>
		</div>
	</div>
		<div class="quebra">&nbsp;</div>
	<?php if (count($condicionantes) > 0) : ?>

		<div class="container div-pagina" id="pagina2">
			<div class="row mt-3">
				<div class="col-sm-12">
					<div class="p-2 text-center">
						<h5 class="font-weight-bold">III - DEMAIS CONDICIONANTES</h5>
					</div>
				</div>
			</div>
			<div class="row mt-3">
				<div class="col-sm-12">
					<?php foreach ($condicionantes as $key => $condicionate) : ?>
							<table width="100%" class="mb-2">
								<tbody>
									<tr>
										<td class="input pl-1 pr-1" style="width: 6%"></td>
										<td class="input pl-1 pr-1 text-right align-top">
											<?= ($key+1) .'-'; ?>
										</td>
										<td class="input pl-1 pr-1 text-justify">
											<?= $condicionate['descricao']; ?>
										</td>
									</tr>
								</tbody>
							</table>
					<?php endforeach; ?>
				</div>
			</div>
		</div>
	<?php endif; ?>
</div>