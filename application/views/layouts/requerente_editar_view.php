<?php
	$input_tipo_pessoa		=	array(
										'id'	=>	'tipo_pessoa',
										'name'	=>	'tipo_pessoa',
										'type'	=>	'hidden',
										'value'	=>	$requerente->tipo_pessoa
								);
	/* Dados do Requerente */
	$input_nome_razaosocial	=	array(
								'id'			=>	'nome_razaosocial',
								'name'			=>	'nome_razaosocial',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$requerente->nome_razaosocial,
								'maxlength'		=>	'100',
								'required'		=>	'',
								'oninvalid'		=>	"setCustomValidity('Informe o Nome.')",
								'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
							);
	$input_cpf_cnpj		=	array(
								'id'			=>	'cpf_cnpj',
								'name'			=>	'cpf_cnpj',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$requerente->cpf_cnpj,
								'onkeypress'	=>	"return txtBoxFormat(this, '999.999.999-99', event);",
								'onkeyup'		=>	'verificaCPF(this)',
								'maxlength'		=>	'14',
								'required'		=>	'',
								'oninvalid'		=>	"setCustomValidity('Informe o CPF.')",
								'onchange'		=>	"try{setCustomValidity('')}catch(e){}",
								'readonly'		=>	'',
								'tabindex'		=>	'-1'
							);
	if ($requerente->tipo_pessoa == 'F') {
		$input_rg_ie=	array(
								'id'			=>	'rg_ie',
								'name'			=>	'rg_ie',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$requerente->rg_ie,
								'maxlength'		=>	'150',
								'required'		=>	'',
								'oninvalid'		=>	"setCustomValidity('Informe o RG.')",
								'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
							);
	}
	elseif ($requerente->tipo_pessoa == 'J') {
		$input_rg_ie=	array(
									'id'			=>	'rg_ie',
									'name'			=>	'rg_ie',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	$requerente->rg_ie,
									'onkeypress'	=>	"return txtBoxFormat(this, '99999999-9', event);",
									'maxlength'		=>	'10',
									'required'		=>	'',
									'oninvalid'		=>	"setCustomValidity('Informe a Insc. Estadual.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
								);
	}
	$input_logradouro=	array(
								'id'			=>	'logradouro',
								'name'			=>	'logradouro',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$requerente->logradouro,
								'maxlength'		=>	'100',
								'required'		=>	'',
								'oninvalid'		=>	"setCustomValidity('Informe o Logradouro (Rua, Avenida,...).')",
								'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
							);
	$input_numero=	array(
								'id'			=>	'numero',
								'name'			=>	'numero',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$requerente->numero,
								'maxlength'		=>	'20',
								'required'		=>	'',
								'oninvalid'		=>	"setCustomValidity('Informe o Número.')",
								'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
							);
	$input_complemento=	array(
								'id'			=>	'complemento',
								'name'			=>	'complemento',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$requerente->complemento,
								'maxlength'		=>	'100',
							);
	$input_bairro=	array(
								'id'			=>	'bairro',
								'name'			=>	'bairro',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$requerente->bairro,
								'maxlength'		=>	'100',
								'required'		=>	'',
								'oninvalid'		=>	"setCustomValidity('Informe o Bairro.')",
								'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
							);
	$input_cidade=	array(
								'id'			=>	'cidade',
								'name'			=>	'cidade',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$requerente->cidade,
								'maxlength'		=>	'100',
								'required'		=>	'',
								'oninvalid'		=>	"setCustomValidity('Informe a Cidade.')",
								'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
							);
	$select_uf					=	' id="uf" class="form-control" required';
	$input_cep=	array(
								'id'			=>	'cep',
								'name'			=>	'cep',
								'type'			=>	'text',
								'class'			=>	'form-control cep',
								'value'			=>	$requerente->cep,
								'maxlength'		=>	'9',
								'required'		=>	'',
								'oninvalid'		=>	"setCustomValidity('Informe o CEP.')",
								'onchange'		=>	"try{setCustomValidity('')}catch(e){}",
								'onkeypress'	=>	"return txtBoxFormat(this, '99999-999', event);",
								'data-endereco'	=>	"#logradouro",
								'data-bairro'	=>	"#bairro",
								'data-cidade'	=>	"#cidade",
								'data-cidade'	=>	"#cidade",
								'data-uf'		=>	"#uf",
								'data-erro'		=>	"#erroCEP",
							);
	/* /Dados do Requerente */

	/* Representantes Legais */
	$input_nome_rep1	=	array(
								'id'			=>	'nome_rep1',
								'name'			=>	'nome_rep1',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$requerente->nome_rep1,
								'maxlength'		=>	'100',
								'required'		=>	'',
								'oninvalid'		=>	"setCustomValidity('Informe o Nome.')",
								'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
							);
	$input_cpf_rep1		=	array(
								'id'			=>	'cpf_rep1',
								'name'			=>	'cpf_rep1',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$requerente->cpf_rep1,
								'onkeypress'	=>	"return txtBoxFormat(this, '999.999.999-99', event);",
								'onkeyup'		=>	'verificaCPF(this)',
								'maxlength'		=>	'14',
								'required'		=>	'',
								'oninvalid'		=>	"setCustomValidity('Informe o CPF.')",
								'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
							);
	$input_nome_rep2	=	array(
								'id'			=>	'nome_rep2',
								'name'			=>	'nome_rep2',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$requerente->nome_rep2,
								'maxlength'		=>	'100',
								'oninvalid'		=>	"setCustomValidity('Informe o Nome.')",
								'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
							);
	$input_cpf_rep2		=	array(
								'id'			=>	'cpf_rep2',
								'name'			=>	'cpf_rep2',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$requerente->cpf_rep2,
								'onkeypress'	=>	"return txtBoxFormat(this, '999.999.999-99', event);",
								'onkeyup'		=>	'verificaCPF(this)',
								'maxlength'		=>	'14',
								'oninvalid'		=>	"setCustomValidity('Informe o CPF.')",
								'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
							);
	$input_nome_rep3	=	array(
								'id'			=>	'nome_rep3',
								'name'			=>	'nome_rep3',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$requerente->nome_rep3,
								'maxlength'		=>	'100',
								'oninvalid'		=>	"setCustomValidity('Informe o Nome.')",
								'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
							);
	$input_cpf_rep3		=	array(
								'id'			=>	'cpf_rep3',
								'name'			=>	'cpf_rep3',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$requerente->cpf_rep3,
								'onkeypress'	=>	"return txtBoxFormat(this, '999.999.999-99', event);",
								'onkeyup'		=>	'verificaCPF(this)',
								'maxlength'		=>	'14',
								'oninvalid'		=>	"setCustomValidity('Informe o CPF.')",
								'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
							);
	/* /Representantes Legais */

	/* Contato */
	$input_nome_contato	=	array(
								'id'			=>	'nome_contato',
								'name'			=>	'nome_contato',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$requerente->nome_contato,
								'maxlength'		=>	'100',
								'required'		=>	'',
								'oninvalid'		=>	"setCustomValidity('Informe o Nome.')",
								'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
							);
	$input_telefone_contato	=	array(
								'id'			=>	'telefone_contato',
								'name'			=>	'telefone_contato',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$requerente->tel_contato,
							  	'onkeypress'	=> "return txtBoxFormat(this, '(99)99999-9999', event);",
							  	'onblur'		=>	"verificaTelefone('telefone_celular','telefone_residencial')",
								'maxlength'		=>	'14',
								'required'		=>	'',
								'oninvalid'		=>	"setCustomValidity('Informe um número válido.')",
								'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
							);
	$input_endereco_contato	=	array(
								'id'			=>	'endereco_contato',
								'name'			=>	'endereco_contato',
								'type'			=>	'text',
								'class'			=>	'form-control',
								'value'			=>	$requerente->endereco_contato,
								'maxlength'		=>	'100',
								'required'		=>	'',
								'oninvalid'		=>	"setCustomValidity('Informe o Endereço.')",
								'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
							);
	$input_email_contato	=	array(
								'id'			=>	'email_contato',
								'name'			=>	'email_contato',
								'type'			=>	'email_contato',
								'class'			=>	'form-control',
								'value'			=>	$requerente->email_contato,
								'maxlength'		=>	'100',
								'oninvalid'		=>	"setCustomValidity('Informe o e-Mail.')",
								'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
							);
	/* /Contato */
?>
<div class="container-fluid container-sistema">
	<div class="row">
		<div class="col-12">
			<div class="card border border-green-system">
				<div class="card-header bg-green-system fc-white m-1">
					<h6 class="float-left"><i class="fas fa-user"></i>&nbsp;REQUERENTE</h6>
					<h6 class="float-right"><i class="fas fa-user-edit"></i>&nbsp;EDITAR</h6>
				</div>
				<?= form_open($salvar,$form_attr); ?>
					<?= form_hidden('id_requerente',$requerente->id); ?>
					<?= form_input($input_tipo_pessoa); ?>
					<div class="card-body">
						<?= ($this->session->flashdata('salvar')) ? $this->session->flashdata('salvar') : ''; ?>
						<fieldset class="border-top border-green-system">
							<legend>Dados do Requerente</legend>
							<div class="form-group row">
								<?php if($requerente->tipo_pessoa == 'F') : ?>
									<?= form_label('CPF:','cpf_cnpj',$label2); ?>
								<?php else : ?>
									<?= form_label('CNPJ:','cpf_cnpj',$label2); ?>
								<?php endif; ?>
								<div class="col-2">
									<?= form_input($input_cpf_cnpj); ?>
								</div>
								<?php if($requerente->tipo_pessoa == 'F') : ?>
									<?= form_label('RG:','rg_ie',$label1); ?>
								<?php else : ?>
									<?= form_label('Inscrição Estadual:','rg_ie',$label1); ?>
								<?php endif; ?>
								<div class="col-2">
									<?= form_input($input_rg_ie); ?>
								</div>
							</div>
							<div class="form-group row">
								<?= form_label('Nome:','nome_razaosocial',$label2); ?>
								<div class="col-5">
									<?= form_input($input_nome_razaosocial); ?>
								</div>
							</div>
						</fieldset>
						<fieldset class="border-top border-green-system">
							<legend>Endereço do Requerente</legend>
							<div class="form-group row">
								<?= form_label('CEP:','cep',$label2); ?>
								<div class="col-2">
									<?= form_input($input_cep); ?>
								</div>
								<div class="col-2">
									<a class="btn btn-primary" href="http://www.buscacep.correios.com.br/sistemas/buscacep" target="_blank"><i class="fa fa-search" aria-hidden="true"></i>&nbsp;&nbsp;Busca CEP</a>
								</div>
								<div class="col-2" id="erroCEP"></div>
							</div>
							<div class="form-group row">
								<?= form_label('Logradouro:','logradouro',$label2); ?>
								<div class="col-4">
									<?= form_input($input_logradouro); ?>
								</div>
								<?= form_label('Número:','numero',$label1); ?>
								<div class="col-1">
									<?= form_input($input_numero); ?>
								</div>
							</div>
							<div class="form-group row">
								<?= form_label('Complemento:','complemento',$label2); ?>
								<div class="col-4">
									<?= form_input($input_complemento); ?>
								</div>
								<?= form_label('Bairro:','bairro',$label1); ?>
								<div class="col-3">
									<?= form_input($input_bairro); ?>
								</div>
							</div>
							<div class="form-group row">
								<?= form_label('Cidade:','cidade',$label2); ?>
								<div class="col-4">
									<?= form_input($input_cidade); ?>
								</div>
								<?= form_label('UF:','uf',$label1); ?>
								<div class="col-1">
									<?= form_dropdown('uf', $opt_uf, $requerente->uf,$select_uf); ?>
								</div>
							</div>
						</fieldset>
						<?php if($requerente->tipo_pessoa == 'J') : ?>
							<fieldset class="border-top border-green-system">
								<legend>Representantes Legais</legend>
								<div class="form-group row">
									<?= form_label('Nome:','nome_rep1',$label2); ?>
									<div class="col-5">
										<?= form_input($input_nome_rep1); ?>
									</div>
									<?= form_label('CPF:','cpf_rep1',$label1); ?>
									<div class="col-2">
										<?= form_input($input_cpf_rep1); ?>
									</div>
								</div>
								<div class="form-group row">
									<?= form_label('Nome:','nome_rep2',$label2); ?>
									<div class="col-5">
										<?= form_input($input_nome_rep2); ?>
									</div>
									<?= form_label('CPF:','cpf_rep2',$label1); ?>
									<div class="col-2">
										<?= form_input($input_cpf_rep2); ?>
									</div>
								</div>
								<div class="form-group row">
									<?= form_label('Nome:','nome_rep3',$label2); ?>
									<div class="col-5">
										<?= form_input($input_nome_rep3); ?>
									</div>
									<?= form_label('CPF:','cpf_rep3',$label1); ?>
									<div class="col-2">
										<?= form_input($input_cpf_rep3); ?>
									</div>
								</div>
							</fieldset>
						<?php endif; ?>
						<fieldset class="border-top border-green-system">
							<legend>Contato</legend>
							<div class="form-group row">
								<?= form_label('Nome:','nome_contato',$label2); ?>
								<div class="col-5">
									<?= form_input($input_nome_contato); ?>
								</div>
								<?= form_label('Telefone:','telefone_contato',$label1); ?>
								<div class="col-2">
									<?= form_input($input_telefone_contato); ?>
								</div>
							</div>
							<div class="form-group row">
								<?= form_label('e-Mail:','email_contato',$label2); ?>
								<div class="col-3">
									<?= form_input($input_email_contato); ?>
								</div>
							</div>
						</fieldset>
					</div>
					<div class="card-footer border-top bg-green-system fc-white m-1">
						<div class="form-group row">
							<div class="col-5">
								<button type="submit" class="btn btn-brand-primary"><i class="fa fa-save"></i>&nbsp;Salvar</button>
								<a href="<?= base_url($voltar); ?>" class="btn btn-physis"><i class="fa fa-reply"></i>&nbsp;Voltar</a>
							</div>
						</div>
					</div>
				<?= form_close(); ?>
			</div>
		</div>
	</div>
</div>