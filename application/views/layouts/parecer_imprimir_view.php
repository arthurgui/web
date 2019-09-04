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
			<div class="col-sm-4 text-center">
				<p class="mb-1"><?= $pdf_cabecalho1; ?></p>
				<p class="mb-1"><?= $pdf_cabecalho2; ?></p>
				<p class="mb-1"><?= $pdf_cabecalho3; ?></p>
				<p class="mb-1"><?= $pdf_cabecalho4; ?></p>
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
				<div class="card border-brand-primary">
					<div class="card-header bg-brand-primary fc-white text-center m-1"><h6>PARECER TÉCNICO <?= $licenca->num_parecer; ?></h6></div>
					<div class="card-body">
						<table width="100%" class="mb-auto">
							<tbody>
								<tr>
									<th style="width:20%">Tipo de Licença:</th>
									<td class="text-uppercase"><?= $licenca->tldescricao; ?></td>
								</tr>
								<tr>
									<th>Interessado:</th>
									<td class="text-uppercase"><?= $licenca->rnome_razaosocial; ?></td>
								</tr>
								<tr>
									<th><?= ($licenca->rtipo_pessoa == 'F') ? 'CPF' : 'CNPJ' ?>:</th>
									<td class="text-uppercase"><?= $licenca->rcpf_cnpj; ?></td>
								</tr>
								<tr>
									<th>Endereço:</th>
									<td class="text-uppercase"><?= $licenca->lendereco; ?></td>
								</tr>
								<tr>
									<th>Coord. Geográficas:</th>
									<td class="text-uppercase"><strong>Latitude:</strong>&nbsp;<?= $licenca->latitude; ?>&nbsp;/&nbsp;<strong>Longitude:</strong>&nbsp;<?= $licenca->longitude; ?></td>
								</tr>
								<tr>
									<th>Atividade Principal:</th>
									<td class="text-uppercase"></td>
								</tr>
								<tr>
									<th>Atividade Licenciada:</th>
									<td class="text-uppercase"></td>
								</tr>
								<tr>
									<th>Validade da Licença:</th>
									<td class="text-uppercase"></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		<div class="row mt-2">
			<div class="col-sm-12">
				<fieldset>
					<legend class="text-uppercase">1. CONTEXTUALIZAÇÃO</legend>
					<?= $licenca->contextualizacao; ?>
				</fieldset>
				<fieldset>
					<legend class="text-uppercase">2. ANÁLISE</legend>
					<?= $licenca->analise; ?>
				</fieldset>
			</div>
		</div>
	</div>

	<div class="quebra">&nbsp;</div>

	<div class="container div-pagina" id="pagina2">
		<div class="row">
			<div class="col-sm-4">
				<img src="<?= $logo_empresa; ?>" class="img-fluid">
			</div>
			<div class="col-sm-4 text-center">
				<p class="mb-1"><?= $pdf_cabecalho1; ?></p>
				<p class="mb-1"><?= $pdf_cabecalho2; ?></p>
				<p class="mb-1"><?= $pdf_cabecalho3; ?></p>
				<p class="mb-1"><?= $pdf_cabecalho4; ?></p>
			</div>
			<div class="col-sm-4">
				<div class="float-right border p-2 text-center">
					<h5>PROCESSO NÚMERO</h5>
					<h5 class="font-weight-bold"><?= $licenca->num_protocolo; ?></h5>
				</div>
			</div>
		</div>
		<div class="row mt-2">
			<div class="col-sm-12">
				<fieldset>
					<legend class="text-uppercase">3. PARECER</legend>
					<?= $licenca->parecer; ?>
				</fieldset>
			</div>
		</div>
		<?php if(count($condicionantes) > 0) : ?>
			<div class="row mt-2">
				<div class="col-sm-12">
					<fieldset>
						<legend class="text-uppercase">4. CONDICIONANTES</legend>
						<ul>
						<?php foreach($condicionantes as $condicionante) : ?>
							<li class="text-justify"><?= $condicionante->descricao; ?></li>
						<?php endforeach; ?>
						</ul>
					</fieldset>
				</div>
			</div>
		<?php endif; ?>
		<div class="row mt-1 mt-auto ml-auto mr-auto mb-0 justify-content-center align-items-end">
			<div class="col-sm-3">
				<img src=<?= "$link_empresa$assinatura_usuario"; ?> alt="Assinatura do Usuário" class="img-fluid">
			</div>
		<!-- </div> -->
		<!-- <div class="row m-auto justify-content-center"> -->
			<div class="col-sm-5 text-left">
				<p class="text-uppercase font-weight-bold m-auto"><?= $nome_usuario; ?></p>
				<p class="font-weight-bold m-auto">Matrícula: <?= $matricula_usuario; ?></p>
				<p class="font-weight-bold m-auto">Função: <?= $funcao_usuario; ?></p>
				<p class="font-weight-bold m-auto">Setor: <?= $setor_usuario; ?></p>
			</div>
		</div>
		<div class="row m-5 justify-content-center">
			<div class="col-sm-5 text-center">Cabedelo, <?= date("d/m/Y") ?>.</div>
		</div>
	</div>
</div>