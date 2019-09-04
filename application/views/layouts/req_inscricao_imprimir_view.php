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
			<div class="col-sm-4">
				<h5>REQUERIMENTO DE LICENÇA AMBIENTAL</h5>
			</div>
			<div class="col-sm-4">
				<div class="float-right border p-2 text-center">
					<h5>PROCESSO NÚMERO</h5>
					<h5 class="font-weight-bold"><?= $licenca->num_protocolo; ?></h5>
				</div>
			</div>
		</div>
		<div class="row mt-5">
			<div class="col-12">
				<!-- CAMPO TIPO DE LICENÇA-->
				<table width="100%" class="mb-4">
					<tbody>
						<tr>
							<td class="label-input border-left border-right" style="width: 10%;">Tipo de Licença</td> <!-- Nome do quadrado, tipo de licença -->
						</tr>
						<tr>
							<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold"><?= $licenca->tldescricao; ?></td>
						</tr>
						<tr>
							<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold"><?= $licenca->rnome_razaosocial; ?></td>
 						</tr>
					</table>
					<table  width="100%" class="mb-4">
					<fieldset>
							<div class="w-auto border-top m-1">
							<tr>
							<td class="label-input border-left border-right" width="70%">PARA USO DA SECRETARIA</td>
						</tr>
						<tr>
							<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold">
					<br>
					<br>
					<br>
					<br>
					</fieldset>
					</table>
					<fieldset style="padding: 1px !important;">
					<legend>Dados do Requerente</legend>
					<table width="100%" class="mb-3">
						<tbody>
							<tr>
								<td class="label-input border-left border-right" width="22%"><?= ($Licença->rtipo_pessoa == 'F') ? 'CPF:' : 'CNPJ:' ?></td>
								<td class="label-input border-left border-right" width="25%"><?= ($Licença->rtipo_pessoa == 'F') ? 'RG:' : 'Insc. Estadual:' ?></td>
								<td class="label-input border-left border-right" width="53%"><?= ($Licença->rtipo_pessoa == 'F') ? 'Nome:' : 'Razão Social do Requerente:' ?></td>
							</tr>
							<tr>
								<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold"><?= $licenca->rcpf_cnpj; ?></td>
								<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold"><?= $licenca->rrg_ie; ?></td>
								<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold"><?= $licenca->rnome_razaosocial; ?></td>
							</tr>
						</tbody>
					</table>
				</fieldset>
				<fieldset style="padding: 0px !important;">
					<legend>Endereço do Requerente</legend>
					<table width="100%" class="mb-3">
						<tbody>
							<tr>
								<td class="label-input border-left border-right" width="22%">CEP</td>
								<td class="label-input border-left border-right" width="78%">Endereço</td>
							</tr>
							<tr>
								<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold"><?= ($licenca->rcep != '') ? $licenca->rcep : '&nbsp;'; ?></td>
								<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold"><?= ($licenca->rendereco != '') ? $licenca->rendereco : '&nbsp;'; ?></td>
							</tr>
						</tbody>
					</table>
				</fieldset>
				<fieldset style="padding: 0px !important;">
					<legend>Representantes Legais</legend>
					<table width="100%" class="mb-3">
						<tbody>
							<tr>
								<td class="label-input border-left border-right" width="78%">Representante 1</td>
								<td class="label-input border-left border-right" width="22%">CPF</td>
							</tr>
							<tr>
								<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold"><?= ($licenca->rnome_rep1 != '') ? $licenca->rnome_rep1 : '&nbsp;'; ?></td>
								<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold"><?= ($licenca->rcpf_rep1 != '') ? $licenca->rcpf_rep1 : '&nbsp;'; ?></td>
							</tr>
						</tbody>
					</table>
					<?php if($licenca->rnome_rep2 != '') : ?>
						<table width="100%" class="mb-3">
							<tbody>
								<tr>
									<td class="label-input border-left border-right" width="78%">Representante 2</td>
									<td class="label-input border-left border-right" width="22%">CPF</td>
								</tr>
								<tr>
									<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold"><?= ($licenca->rnome_rep2 != '') ? $licenca->rnome_rep2 : '&nbsp;'; ?></td>
									<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold"><?= ($licenca->rcpf_rep2 != '') ? $licenca->rcpf_rep2 : '&nbsp;'; ?></td>
								</tr>
							</tbody>
						</table>
					<?php endif; ?>
					<?php if($licenca->rnome_rep3 != '') : ?>
						<table width="100%" class="mb-3">
							<tbody>
								<tr>
									<td class="label-input border-left border-right" width="78%">Representante 3</td>
									<td class="label-input border-left border-right" width="22%">CPF</td>
								</tr>
								<tr>
									<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold"><?= ($licenca->rnome_rep3 != '') ? $licenca->rnome_rep3 : '&nbsp;'; ?></td>
									<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold"><?= ($licenca->rcpf_rep3 != '') ? $licenca->rcpf_rep3 : '&nbsp;'; ?></td>
								</tr>
							</tbody>
						</table>
					<?php endif; ?>
				</fieldset>
				<fieldset style="padding: 0px !important;">
					<legend>Contato</legend>
					<table width="100%" class="mb-3">
						<tbody>
							<tr>
								<td class="label-input border-left border-right" width="78%">Nome</td>
								<td class="label-input border-left border-right" width="22%">Telefone</td>
							</tr>
							<tr>
								<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold"><?= ($licenca->rnome_contato != '') ? $licenca->rnome_contato : '&nbsp;'; ?></td>
								<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold"><?= ($licenca->rtel_contato != '') ? $licenca->rtel_contato : '&nbsp;'; ?></td>
							</tr>
						</tbody>
					</table>
				</fieldset>
				<fieldset style="padding: 0px !important;">
					<legend>Dados do Empreendimento</legend>
					<table width="100%" class="mb-3">
						<tbody>
							<tr>
								<td class="label-input border-left border-right" width="22%">CEP</td>
								<td class="label-input border-left border-right" width="78%">Endereço</td>
							</tr>
							<tr>
								<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold">
									<?= ($licenca->lcep != '') ? $licenca->lcep : '&nbsp;'; ?>
								</td>
								<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold">
									<?= ($licenca->lendereco != '') ? $licenca->lendereco : '&nbsp;'; ?>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="row mt-5">
					<table width="100%" class="mb-3">
						<tbody>
							<tr>
								<td class="label-input border-left border-right">Descrição da(s) Atividade(s):</td>
							</tr>
							<tr>
								<td class="input border-left border-right border-bottom pl-1 pr-1 font-weight-bold">
									<?= ($licenca->desc_atividades != '') ? $licenca->desc_atividades : '&nbsp;'; ?>
								</td>
							</tr>
							<tr>
								<td class="label-input border-left border-right" width="35%">A) Investimento Total</td>
								<td class="label-input border-left border-right" width="25%">B)	Área Construída</td>
								<td class="label-input border-left border-right" width="40%">C)	N° de Empregado</td>
							</tr>
						</tbody>
					</table>
				</div>
					<div class="row mt-5">
					<legend>Para uso da SEMAPA</legend>
					<table width="100%" class="mb3">
					<tr>
								<td class="label-input border-left border-right" width="35%">Porte da atividade</td>
								<td class="label-input border-left border-right" width="25%"> Potencial Poluiidor</td>
								<td class="label-input border-left border-right" width="40%">Valor da (UFMC)</td>
							<tr>
					</table>
				</div>
						<table width="100%" class="mb-3">
						<tr>
								<td class="label-input border-left border-right" width="35%">lp</td>
								<td class="label-input border-left border-right" width="25%">Li</td>
								<td class="label-input border-left border-right" width="40%">Lo</td>
							</tr>
						</table>
						<div class="row mt-5">
						<table width="100%" class="mb-3">
							<tr>
								<td class="label-input border-left border-right" width="50%">Ls</td>
								<td class="label-input border-left border-right" width="50%">Autorização Ambiental<br>_________________________</br></td>
							</tr>
						</table>
					</div>
						<div class="row mt-5">
						<table width="100%" class="mb-3">
							<tr>
								<td class="label-input border-left border-right" width="50%">Total da UFMC</td>
								<td class="label-input border-left border-right" width="50%">Total em R$</td>
							</tr>
						</table>
					</div>
						<table width="100%" class="col-sm-4">
						<br><legend>
							DECLARO PARA OS DEVIDOS FINS,QUE O DESENVOLVIMENTO DAS ATIVIDADES RELACIONADAS NESTE REQUERIMENTO REALIZA-SE DE ACORDO COM DADOS TRANSCRITOS E 	ANEXOS INDICADOS NO ITEM 11(ONZE),PELO QUE VENHO REQUERER A ESTA SECRETARIA, 	A EXPEDIÇÃO DA RESPECTIVA LICENÇA.
							<div class="text-center">
							<br>Cabedelo,______de_______Do ano de _______.</br>
							<br>__________________________________________________________________</br>
						</div>	
						<div class="text-center">(Assinatura)</div>
						</legend></br>
			</table>
			</div>
			</fieldset>
			</div>
		</div>
	</div>
</div>