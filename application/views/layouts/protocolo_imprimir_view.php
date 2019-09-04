<div class="print">
	<div class="container botoes mb-2">
		<div class="row">
			<button class="btn btn-primary" onclick="window.print();">Imprimir</button>
		</div>
	</div>
	<div class="container div-pagina" id="pagina1">
		<div class="row">
			<div class="col-sm-4">
				<img src="<?= $logo_empresa; ?>" class="img-fluid">
			</div>
			<div class="col-sm-8">
				<div class="float-right border p-2 text-center">
					<h5>PROCESSO NÚMERO</h5>
					<h5 class="font-weight-bold"><?= $licenca->num_protocolo; ?></h5>
				</div>
			</div>
		</div>
		<div class="row mt-5">
			<div class="col-sm-12">
				<table width="100%" class="mb-3">
					<tbody>
						<tr>
							<td class="label-input border-left border-right" width="70%">Nome ou Razão Social do Requerente</td>
							<td class="label-input border-left border-right" width="30%">Documento</td>
						</tr>
						<tr>
							<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold">
								<?= $licenca->rnome_razaosocial; ?>
							</td>
							<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold">
								<?= (($licenca->rtipo_pessoa == 'F') ? 'CPF: ' : 'CNPJ: ').$licenca->rcpf_cnpj; ?>
							</td>
						</tr>
					</tbody>
				</table>
				<table width="100%" class="mb-3">
					<tbody>
						<tr>
							<td class="label-input border-left border-right" width="100%">Localização do Imóvel / Empresa</td>
						</tr>
						<tr>
							<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold">
								<?= $licenca->lendereco; ?>
							</td>
						</tr>
					</tbody>
				</table>
				<table width="100%" class="mb-3">
					<tbody>
						<tr>
							<td class="label-input border-left border-right" width="20%"><?= (($licenca->rtipo_pessoa == 'F') ? 'RG: ' : 'Inscrição Municipal: '); ?></td>
							<td class="label-input border-left border-right" width="40%">e-Mail</td>
							<td class="label-input border-left border-right" width="20%">Fone para contato</td>
							<td class="label-input border-left border-right" width="20%">Processo original</td>
						</tr>
						<tr>
							<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold">
								<?= $licenca->rrg_ie; ?>
							</td>
							<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold">
								<?= $licenca->remail; ?>
							</td>
							<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold">
								<?= $licenca->rtel_contato; ?>
							</td>
							<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold">
								&nbsp;
							</td>
						</tr>
					</tbody>
				</table>
				<table width="100%" class="mb-3">
					<tbody>
						<tr>
							<td class="label-input border-left border-right" width="100%">Endereço para Correspondência</td>
						</tr>
						<tr>
							<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold">
								<?= $licenca->rendereco; ?>
							</td>
						</tr>
					</tbody>
				</table>
				<table width="100%" class="mb-1">
					<tbody>
						<tr>
							<td class="label-input" width="100%"><p>VEM REQUERER DE V. Sª. CONFORME PEDIDO ABAIXO:</p></td>
						</tr>
					</tbody>
				</table>
				<table width="100%" class="mb-3 border-bottom">
					<tbody>
						<tr>
							<td class="label-input" width="100%"><p class="text-uppercase font-weight-bold"><?= $licenca->tldescricao; ?></p></td>
						</tr>
						<tr>
							<td class="label-input pb-3" width="100%">
								<div class="">Deseja receber as comunicações por e-mail:</div>
								<div class="form-check form-check-inline">
									<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked>
									<label class="form-check-label" for="inlineRadio1">Sim</label>
								</div>
								<div class="form-check form-check-inline">
									<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
									<label class="form-check-label" for="inlineRadio2">Não</label>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
				<table width="100%" class="mb-3">
					<tbody>
						<tr>
							<td class="label-input" width="50%">
								<div class="border h-100 p-2">
									<p class="font-weight-bold">Data <?= date("d") ?> de <?= nomemes(date("n")); ?> de <?= date("Y"); ?>.</p>
									<br>
									<br>
									<br>
									<br>
									<div class="w-auto border-top m-1">
										<p class="mb-1">Nome:</p>
										<?= $this->session->userdata('login'); ?>
										<br>
										<p class="mb-1">Matrícula:</p>
										<?= $this->session->userdata('matrícula'); ?>
										<div class="col-sm-3">
										<img src=<?= "$link_empresa$assinatura_usuario"; ?> alt="Assinatura do Usuário" class="img-fluid">
										</div>
									</div>
								</div>
							</td>
							<td class="label-input" width="50%">
								<div class="border h-100 p-2">
									<p class="font-weight-bold">ESPERA DE DEFERIMENTO</p>
									<p class="mb-1">Cabedelo, ________/________/________</p>
									<br>
									<br>
									<br>
									<br>
									<div class="w-auto m-1 border-top">
										<p class="mb-1">Requerente</p>
									</div>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>