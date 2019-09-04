		<footer id="footer" class="bg-green-system fc-white">
			<div class="container-fluid">
				<div class="row">
					<div class="col-6 text-left">
						<?php if($db_conecta) : ?>
							<p><a href="<?= $link_empresa; ?>" target="_blank"><img src=<?= $logo_empresa; ?> class="navbar-brand"></a></p>
							<p><?= $nome_empresa; ?></p>
						<?php endif; ?>
					</div>
					<div class="col-6 text-right">
						<p><a href="http://www.logon.inf.br" target="_blank"><img src=<?= base_url("$images/logon-footer.png"); ?>></a></p>
						<p>LOGON® INFORMÁTICA 2018 - Todos os direitos reservados</p>
						<p><small>Av. Almirante Barroso, 600 - Ed. Villa Empresarial (Sala 1002) - Centro</small></p>
						<p><small>João Pessoa - PB | CEP: 58013-120 Fone/Fax: (83) 3241-4530</small></p>
					</div>
				</div>
			</div>
		</footer>
	</body>
</html>