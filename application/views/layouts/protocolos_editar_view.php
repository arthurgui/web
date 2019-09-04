<?php if(!$id_licenca) : ?>
	<?php
		$input_tipo_pessoa		=	array(
											'id'	=>	'tipo_pessoa',
											'name'	=>	'tipo_pessoa',
											'type'	=>	'hidden',
											'value'	=>	$tipo_pessoa
									);
		$select_tipolicenca		=	'id="tipo_licenca" name="tipo_licenca" class="form-control" required';
		$opt_tiposlicenca['']	=	'** Selecione **';
		foreach ($tipos_licenca as $tipo_licenca) {
			$opt_tiposlicenca[$tipo_licenca->id]	=	$tipo_licenca->descricao;
		}
		$input_codigo_letra	=	array(
									'id'			=>	'codigo_letra',
									'name'			=>	'codigo_letra',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	set_value("codigo_letra"),
									'maxlength'		=>	'50',
									'required'		=>	'',
									'oninvalid'		=>	"setCustomValidity('Informe o Código/Letra.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
								);
		$input_licenca_anterior	=	array(
									'id'			=>	'licenca_anterior',
									'name'			=>	'licenca_anterior',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	set_value("licencao_anterior"),
									'maxlength'		=>	'50',
									'required'		=>	'',
									'oninvalid'		=>	"setCustomValidity('Informe a Licença Anterior.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
								);
		$input_seplan_sefin	=	array(
									'id'			=>	'seplan_sefin',
									'name'			=>	'seplan_sefin',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	set_value("seplan_sefin"),
									'maxlength'		=>	'50',
									'required'		=>	'',
									'oninvalid'		=>	"setCustomValidity('Informe o n° do SEPLAN e/ou SEFIN.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
								);
		/* Dados do Requerente */
		$input_nome_razaosocial	=	array(
									'id'			=>	'nome_razaosocial',
									'name'			=>	'nome_razaosocial',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	$protocolo->rnome_razaosocial,
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
									'value'			=>	$protocolo->rcpf_cnpj,
									'onkeypress'	=>	"return txtBoxFormat(this, '999.999.999-99', event);",
									'onkeyup'		=>	'verificaCPF(this)',
									'maxlength'		=>	'14',
									'required'		=>	'',
									'oninvalid'		=>	"setCustomValidity('Informe o CPF.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}",
									'readonly'		=>	'',
									'tabindex'		=>	'-1'
								);
		if ($tipo_pessoa == 'F') {
			$input_rg_ie=	array(
									'id'			=>	'rg_ie',
									'name'			=>	'rg_ie',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	$protocolo->rrg_ie,
									'maxlength'		=>	'150',
									'required'		=>	'',
									'oninvalid'		=>	"setCustomValidity('Informe o RG.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
								);
		}
		elseif ($tipo_pessoa == 'J') {
			$input_rg_ie=	array(
										'id'			=>	'rg_ie',
										'name'			=>	'rg_ie',
										'type'			=>	'text',
										'class'			=>	'form-control',
										'value'			=>	$protocolo->rrg_ie,
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
									'value'			=>	$protocolo->logradouro,
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
									'value'			=>	$protocolo->numero,
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
									'value'			=>	$protocolo->complemento,
									'maxlength'		=>	'100',
								);
		$input_bairro=	array(
									'id'			=>	'bairro',
									'name'			=>	'bairro',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	$protocolo->bairro,
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
									'value'			=>	$protocolo->cidade,
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
									'value'			=>	$protocolo->cep,
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
									'value'			=>	$protocolo->rnome_rep1,
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
									'value'			=>	$protocolo->rcpf_rep1,
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
									'maxlength'		=>	'100',
									'oninvalid'		=>	"setCustomValidity('Informe o Nome.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}",
									'value'			=>	$protocolo->rnome_rep2
								);
		$input_cpf_rep2		=	array(
									'id'			=>	'cpf_rep2',
									'name'			=>	'cpf_rep2',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'onkeypress'	=>	"return txtBoxFormat(this, '999.999.999-99', event);",
									'onkeyup'		=>	'verificaCPF(this)',
									'maxlength'		=>	'14',
									'oninvalid'		=>	"setCustomValidity('Informe o CPF.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}",
									'value'			=>	$protocolo->rcpf_rep2
								);
		$input_nome_rep3	=	array(
									'id'			=>	'nome_rep3',
									'name'			=>	'nome_rep3',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'maxlength'		=>	'100',
									'oninvalid'		=>	"setCustomValidity('Informe o Nome.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}",
									'value'			=>	$protocolo->rnome_rep3
								);
		$input_cpf_rep3		=	array(
									'id'			=>	'cpf_rep3',
									'name'			=>	'cpf_rep3',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'onkeypress'	=>	"return txtBoxFormat(this, '999.999.999-99', event);",
									'onkeyup'		=>	'verificaCPF(this)',
									'maxlength'		=>	'14',
									'oninvalid'		=>	"setCustomValidity('Informe o CPF.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}",
									'value'			=>	$protocolo->rcpf_rep3
								);
		/* /Representantes Legais */

		/* Contato */
		$input_nome_contato	=	array(
									'id'			=>	'nome_contato',
									'name'			=>	'nome_contato',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	$protocolo->rnome_contato,
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
									'value'			=>	$protocolo->rtel_contato,
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
									'value'			=>	$protocolo->rendereco_contato,
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
									'value'			=>	$protocolo->remail_contato,
									'maxlength'		=>	'100',
									'oninvalid'		=>	"setCustomValidity('Informe o e-Mail.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
								);
		/* /Contato */

		$input_docs_anexados	=	array(
									'id'			=>	'docs_anexados',
									'name'			=>	'docs_anexados',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	set_value("docs_anexados"),
									'maxlength'		=>	'100',
									'required'		=>	'',
									'oninvalid'		=>	"setCustomValidity('Informe o núm. de documentos anexados.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
								);
		$input_folhas_anexadas	=	array(
									'id'			=>	'folhas_anexadas',
									'name'			=>	'folhas_anexadas',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	set_value("folhas_anexadas"),
									'maxlength'		=>	'100',
									'required'		=>	'',
									'oninvalid'		=>	"setCustomValidity('Informe o núm. de folhas anexadas.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
								);
		$textarea_desc_atividades=	array(
									'id'			=>	'desc_atividades',
									'name'			=>	'desc_atividades',
									'type'			=>	'textarea',
									'class'			=>	'form-control',
									'value'			=>	$protocolo->desc_atividades,
									'rows'			=>	'10',
									'required'		=>	'',
									'oninvalid'		=>	"setCustomValidity('Informe a descrição da(s) atividade(9)s).')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
								);

		/* Dados do Empreendimento */
		$input_logradouro_emp=	array(
									'id'			=>	'logradouro_emp',
									'name'			=>	'logradouro_emp',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'maxlength'		=>	'100',
									'required'		=>	'',
									'oninvalid'		=>	"setCustomValidity('Informe o Logradouro (Rua, Avenida,...).')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}",
									'value'			=>	$protocolo->logradouro
								);
		$input_numero_emp=	array(
									'id'			=>	'numero_emp',
									'name'			=>	'numero_emp',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'maxlength'		=>	'20',
									'required'		=>	'',
									'oninvalid'		=>	"setCustomValidity('Informe o Número.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}",
									'value'			=>	$protocolo->numero
								);
		$input_complemento_emp=	array(
									'id'			=>	'complemento_emp',
									'name'			=>	'complemento_emp',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'maxlength'		=>	'100',
									'value'			=>	$protocolo->complemento
								);
		$input_bairro_emp=	array(
									'id'			=>	'bairro_emp',
									'name'			=>	'bairro_emp',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'maxlength'		=>	'100',
									'required'		=>	'',
									'oninvalid'		=>	"setCustomValidity('Informe o Bairro.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}",
									'value'			=>	$protocolo->bairro
								);
		$input_cidade_emp=	array(
									'id'			=>	'cidade_emp',
									'name'			=>	'cidade_emp',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'maxlength'		=>	'100',
									'required'		=>	'',
									'oninvalid'		=>	"setCustomValidity('Informe a Cidade.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}",
									'value'			=>	$protocolo->cidade
								);
		$select_uf_emp					=	' id="uf_emp" class="form-control" required';
		$input_cep_emp=	array(
									'id'			=>	'cep_emp',
									'name'			=>	'cep_emp',
									'type'			=>	'text',
									'class'			=>	'form-control cep',
									'maxlength'		=>	'9',
									'required'		=>	'',
									'oninvalid'		=>	"setCustomValidity('Informe o CEP.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}",
									'onkeypress'	=>	"return txtBoxFormat(this, '99999-999', event);",
									'data-endereco'	=>	"#logradouro_emp",
									'data-bairro'	=>	"#bairro_emp",
									'data-cidade'	=>	"#cidade_emp",
									'data-cidade'	=>	"#cidade_emp",
									'data-uf'		=>	"#uf_emp",
									'data-erro'		=>	"#erroCEP_emp",
									'value'			=>	$protocolo->cep
								);
		$input_invest_total	=	array(
									'id'			=>	'invest_total',
									'name'			=>	'invest_total',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'maxlength'		=>	'15',
									'required'		=>	'',
									'onkeyup'		=>	'return moeda(this)',
									'oninvalid'		=>	"setCustomValidity('Informe o valor total do investimento.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}",
									'value'			=>	number_format($protocolo->invest_total,2,',','.')
								);
		$input_area_total	=	array(
									'id'			=>	'area_total',
									'name'			=>	'area_total',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'maxlength'		=>	'15',
									'required'		=>	'',
									'onkeyup'		=>	"return moeda(this);",
									'oninvalid'		=>	"setCustomValidity('Informe a área total.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}",
									'value'			=>	number_format($protocolo->area_total,2,',','.')
								);
		$input_num_empregados	=	array(
									'id'			=>	'num_empregados',
									'name'			=>	'num_empregados',
									'type'			=>	'number',
									'class'			=>	'form-control numero',
									'maxlength'		=>	'5',
									'required'		=>	'',
									'min'			=>	'0',
									'max'			=>	'9999',
									'onkeyup'		=>	"return txtBoxFormat(this, '99999', event);",
									'oninvalid'		=>	"setCustomValidity('Informe o núm. de empregados.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}",
									'value'			=>	$protocolo->num_empregados
								);
		/* /Dados do Empreendimento */

		/* Uso da SEMAPA */
		$input_porte_atividade	=	array(
									'id'			=>	'porte_atividade',
									'name'			=>	'porte_atividade',
									'type'			=>	'text',
									'class'			=>	'form-control numero',
									'value'			=>	set_value("porte_atividade"),
									'maxlength'		=>	'15'
								);
		$input_potencial_poluidor	=	array(
									'id'			=>	'potencial_poluidor',
									'name'			=>	'potencial_poluidor',
									'type'			=>	'text',
									'class'			=>	'form-control numero',
									'value'			=>	set_value("potencial_poluidor"),
									'maxlength'		=>	'15'
								);
		$input_valor_ufmc	=	array(
									'id'			=>	'valor_ufmc',
									'name'			=>	'valor_ufmc',
									'type'			=>	'text',
									'class'			=>	'form-control dados_ufmc',
									'maxlength'		=>	'15',
									'required'		=>	'',
									'onkeyup'		=>	"return moeda(this);",
									'oninvalid'		=>	"setCustomValidity('Informe a área total.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}",
									'value'			=>	number_format($protocolo->valor_ufmc,2,',','.')
								);
		$input_lp	=	array(
									'id'			=>	'lp',
									'name'			=>	'lp',
									'type'			=>	'text',
									'class'			=>	'form-control dados_ufmc',
									'value'			=>	number_format($protocolo->lp,2,',','.'),
									'maxlength'		=>	'15',
									'required'		=>	'',
									'min'			=>	'0',
									'max'			=>	'9999',
									'onkeyup'		=>	"return moeda(this);",
									'oninvalid'		=>	"setCustomValidity('Informe a LP.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
								);
		$input_li	=	array(
									'id'			=>	'li',
									'name'			=>	'li',
									'type'			=>	'text',
									'class'			=>	'form-control dados_ufmc',
									'value'			=>	number_format($protocolo->li,2,',','.'),
									'maxlength'		=>	'15',
									'required'		=>	'',
									'min'			=>	'0',
									'max'			=>	'9999',
									'onkeyup'		=>	"return moeda(this);",
									'oninvalid'		=>	"setCustomValidity('Informe a LI.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
								);
		$input_lo	=	array(
									'id'			=>	'lo',
									'name'			=>	'lo',
									'type'			=>	'text',
									'class'			=>	'form-control dados_ufmc',
									'value'			=>	number_format($protocolo->lo,2,',','.'),
									'maxlength'		=>	'15',
									'required'		=>	'',
									'onkeyup'		=>	"return moeda(this);",
									'oninvalid'		=>	"setCustomValidity('Informe a LO.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
								);
		$input_ls	=	array(
									'id'			=>	'ls',
									'name'			=>	'ls',
									'type'			=>	'text',
									'class'			=>	'form-control dados_ufmc',
									'value'			=>	number_format($protocolo->ls,2,',','.'),
									'maxlength'		=>	'15',
									'required'		=>	'',
									'onkeyup'		=>	"return moeda(this);",
									'oninvalid'		=>	"setCustomValidity('Informe a LS.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
								);
		$input_autorizacao_ambiental	=	array(
									'id'			=>	'autorizacao_ambiental',
									'name'			=>	'autorizacao_ambiental',
									'type'			=>	'text',
									'class'			=>	'form-control dados_ufmc',
									'value'			=>	number_format($protocolo->autorizacao_ambiental,2,',','.'),
									'maxlength'		=>	'15',
									'required'		=>	'',
									'onkeyup'		=>	"return moeda(this);",
									'oninvalid'		=>	"setCustomValidity('Informe a Autorização Ambiental.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
								);
		$input_total_ufmc	=	array(
									'id'			=>	'total_ufmc',
									'name'			=>	'total_ufmc',
									'type'			=>	'text',
									'class'			=>	'form-control dados_ufmc',
									'value'			=>	number_format($protocolo->total_ufmc,2,',','.'),
									'maxlength'		=>	'15',
									'readonly'		=>	'',
									'min'			=>	'0',
									'max'			=>	'9999',
									'onkeyup'		=>	"return moeda(this);",
									'oninvalid'		=>	"setCustomValidity('Informe o total UFMC.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
								);
		$input_total_ufmc_moeda	=	array(
									'id'			=>	'total_ufmc_moeda',
									'name'			=>	'total_ufmc_moeda',
									'type'			=>	'text',
									'class'			=>	'form-control dados_ufmc',
									'value'			=>	number_format($protocolo->total_ufmc_moeda,2,',','.'),
									'maxlength'		=>	'15',
									'readonly'		=>	'',
									'onkeyup'		=>	"return moeda(this);",
									'oninvalid'		=>	"setCustomValidity('Informe o valor total em R$.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
								);
		/* /Uso da SEMAPA */

		/* Data */
		$input_dia	=	array(
									'id'			=>	'dia',
									'name'			=>	'dia',
									'type'			=>	'text',
									'class'			=>	'form-control numero',
									'value'			=>	set_value(date("d")),
									'maxlength'		=>	'2',
									'required'		=>	'',
									'onkeyup'		=>	"return txtBoxFormat(this, '99', event);",
									'oninvalid'		=>	"setCustomValidity('Informe o dia do mês.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
								);
		$input_mes	=	array(
									'id'			=>	'mes',
									'name'			=>	'mes',
									'type'			=>	'text',
									'class'			=>	'form-control',
									'value'			=>	set_value(nomemes((int)date("d"))),
									'maxlength'		=>	'20',
									'required'		=>	'',
									'oninvalid'		=>	"setCustomValidity('Informe o mês.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
								);
		$input_ano	=	array(
									'id'			=>	'ano',
									'name'			=>	'ano',
									'type'			=>	'text',
									'class'			=>	'form-control numero',
									'value'			=>	set_value(date("Y")),
									'maxlength'		=>	'4',
									'required'		=>	'',
									'onkeyup'		=>	"return txtBoxFormat(this, '9999', event);",
									'oninvalid'		=>	"setCustomValidity('Informe o ano.')",
									'onchange'		=>	"try{setCustomValidity('')}catch(e){}"
								);
		/* /Data */
	?>
	<div class="container-fluid container-sistema licenca-cadastro">
		<div class="row">
			<div class="col-12">
				<div class="card border border-green-system">
					<div class="card-header bg-green-system fc-white m-1">
						<h6>REQUERIMENTO DE LICENÇA AMBIENTAL</h6>
					</div>
					<?= form_open($salvar,$form_attr); ?>
						<?= form_hidden('id_requerente',$protocolo->id); ?>
						<?= form_input($input_tipo_pessoa); ?>
						<div class="card-body">
							<?= ($this->session->flashdata('salvar')) ? $this->session->flashdata('salvar') : ''; ?>
							<fieldset>
								<div class="form-group row">
									<?= form_label('Tipo de Licença:','tipo_licenca',$label2); ?>
									<div class="col-3">
										<?= form_dropdown('tipo_licenca',$opt_tiposlicenca,$protocolo->ce_tipo_licenca,$select_tipolicenca); ?>
									</div>
								</div>
							</fieldset>
							<fieldset class="border-top border-brand-primary">
								<legend>Dados do Requerente</legend>
								<div class="form-group row">
									<?php if($tipo_pessoa == 'F') : ?>
										<?= form_label('CPF:','cpf_cnpj',$label2); ?>
									<?php else : ?>
										<?= form_label('CNPJ:','cpf_cnpj',$label2); ?>
									<?php endif; ?>
									<div class="col-2">
										<?= form_input($input_cpf_cnpj); ?>
									</div>
									<?php if($tipo_pessoa == 'F') : ?>
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
							<fieldset class="border-top border-brand-primary">
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
										<?= form_dropdown('uf', $opt_uf, $protocolo->uf,$select_uf); ?>
									</div>
								</div>
							</fieldset>
							<?php if($tipo_pessoa == 'J') : ?>
								<fieldset class="border-top border-brand-primary">
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
							<fieldset class="border-top border-brand-primary">
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
							<fieldset class="border-top border-brand-primary">
								<!-- Adicionar os campos XII -->
								<legend>Dados do Empreendimento</legend>
								<div class="form-group row">
									<?= form_label('CEP:','cep_emp',$label2); ?>
									<div class="col-2">
										<?= form_input($input_cep_emp); ?>
									</div>
									<div class="col-2">
										<a class="btn btn-primary" href="http://www.buscacep.correios.com.br/sistemas/buscacep" target="_blank"><i class="fa fa-search" aria-hidden="true"></i>&nbsp;&nbsp;Busca CEP</a>
									</div>
									<div class="col-2" id="erroCEP_emp"></div>
								</div>
								<div class="form-group row">
									<?= form_label('Logradouro:','logradouro_emp',$label2); ?>
									<div class="col-4">
										<?= form_input($input_logradouro_emp); ?>
									</div>
									<?= form_label('Número:','numero_emp',$label1); ?>
									<div class="col-1">
										<?= form_input($input_numero_emp); ?>
									</div>
								</div>
								<div class="form-group row">
									<?= form_label('Complemento:','complemento_emp',$label2); ?>
									<div class="col-4">
										<?= form_input($input_complemento_emp); ?>
									</div>
									<?= form_label('Bairro:','bairro_emp',$label1); ?>
									<div class="col-3">
										<?= form_input($input_bairro_emp); ?>
									</div>
								</div>
								<div class="form-group row">
									<?= form_label('Cidade:','cidade_emp',$label2); ?>
									<div class="col-4">
										<?= form_input($input_cidade_emp); ?>
									</div>
									<?= form_label('UF:','uf',$label1); ?>
									<div class="col-1">
										<?= form_dropdown('uf_emp', $opt_uf, $protocolo->ruf,$select_uf_emp); ?>
									</div>
									<?= $protocolo->ruf; ?>
								</div>
								<div class="form-group row">
									<?= form_label('Descrição da(s) Atividade(s):','desc_atividades',$label2); ?>
									<div class="col-8">
										<?= form_textarea($textarea_desc_atividades); ?>
									</div>
								</div>
								<div class="form-group row">
									<?= form_label('a) Investimento total (R$):','invest_total',$label2); ?>
									<div class="col-2">
										<?= form_input($input_invest_total); ?>
									</div>
									<?= form_label('b) Área Construída (m²):','area_total',$label2); ?>
									<div class="col-1">
										<?= form_input($input_area_total); ?>
									</div>
									<?= form_label('c) N° de Empregados:','num_empregados',$label2); ?>
									<div class="col-1">
										<?= form_input($input_num_empregados); ?>
									</div>
								</div>
									<div class="form-group row">
									<?= form_label('Porte de Atividade:','porte_atividade',$label2); ?>
									<div class="col-2">
										<?= form_input($input_porte_atividade); ?>
									</div>
									<?= form_label('Potencial Poluidor:','potencial_poluidor',$label1); ?>
									<div class="col-2">
										<?= form_input($input_potencial_poluidor); ?>
									</div>
								</div>
								<div class="form-group row">
									<?= form_label('Valor da UFMC:','valor_ufmc',$label2); ?>
									<div class="col-2">
										<?= form_input($input_valor_ufmc); ?>
									</div>
								</div>
								<div class="form-group row">
									<?= form_label('LP:','lp',$label2); ?>
									<div class="col-2">
										<?= form_input($input_lp); ?>
									</div>
									<?= form_label('LI:','li',$label1); ?>
									<div class="col-2">
										<?= form_input($input_li); ?>
									</div>
								</div>
								<div class="form-group row">
									<?= form_label('LO:','lo',$label2); ?>
									<div class="col-2">
										<?= form_input($input_lo); ?>
									</div>
									<?= form_label('LS:','ls',$label1); ?>
									<div class="col-2">
										<?= form_input($input_ls); ?>
									</div>
								</div>
								<div class="form-group row">
									<?= form_label('Autorização Ambiental:','autorizacao_ambiental',$label2); ?>
									<div class="col-2">
										<?= form_input($input_autorizacao_ambiental); ?>
									</div>
									<?= form_label('Total da UFMC:','total_ufmc',$label1); ?>
									<div class="col-2">
										<?= form_input($input_total_ufmc); ?>
									</div>
									<?= form_label('Total em R$:','total_ufmc_moeda',$label1); ?>
									<div class="col-2">
										<?= form_input($input_total_ufmc_moeda); ?>

								</div>
							</fieldset>
						</div>
						<div class="card-footer bg-green-system fc-white m-1">
							<div class="form-group row">
								<div class="col-5">
									<button type="submit" class="btn btn-brand-primary"><i class="fa fa-save"></i>&nbsp;Salvar</button>
									<!-- <button type="button" class="btn btn-brand-primary"><i class="fa fa-print"></i>&nbsp;Imprimir</button> -->
									<a href=<?= base_url($voltar); ?> class="btn btn-brand-primary"><i class="fa fa-reply"></i>&nbsp;Voltar</a>
								</div>
							</div>
						</div>
					<?= form_close(); ?>
				</div>
			</div>
		</div>
	</div>
<?php else : ?>
	<div class="container-fluid container-cadastro licenca-docs">
		<div class="row mb-3">
			<div class="col-12">
				<div class="card border border-brand-primary">
					<div class="card-header bg-brand-primary fc-white m-1">
						<h6><i class="far fa-file-alt" aria-hidden="true"></i>&nbsp;ENVIAR DOCUMENTOS DO REQUERIMENTO DE LICENÇA AMBIENTAL</h6>
					</div>
					<div class="card-body">
						<div class="alert alert-light p-0">
							<div class="row m-auto">
								<div class="col-3">Requerente:&nbsp;<strong><?= $protocolo->nome_razaosocial; ?></strong></div>
								<div class="col-3">CPF/CNPJ:&nbsp;<strong><?= $protocolo->cpf_cnpj; ?></strong></div>
							</div>
							<div class="row m-auto">
								<div class="col-3">Licença nº:&nbsp;<strong><?= $licenca->num_protocolo; ?></strong></div>
							</div>
						</div>
						<div class="alert alert-danger">
							<i class="fas fa-exclamation-circle"></i>&nbsp;&nbsp;Efetue o upload dos arquivos necessários à sua habilitação.<br>
							<i class="fas fa-exclamation-circle"></i>&nbsp;&nbsp;Os arquivos marcados em <strong>vermelho</strong> são obrigatórios. Sem eles sua inscrição será <strong>INDEFERIDA</strong>.
						</div>
						<?= ($this->session->flashdata('doc_upload')) ? $this->session->flashdata('doc_upload') : ''; ?>
						<div class="row border-bottom bg-brand-primary fc-white">
							<div class="col-3 text-center border-right m-auto p-1">
								<strong>Documento</strong>
							</div>
							<div class="col-2 text-center border-right m-auto p-1">
								<strong>Dt. Validade</strong>
							</div>
							<div class="col-1 text-center border-right m-auto p-1">
								<strong><i class="fas fa-print" aria-hidden="true"></i>&nbsp;Imprimir</strong>
							</div>
							<div class="col-3 text-center border-right m-auto p-1">
								<strong><i class="fas fa-file-alt" aria-hidden="true"></i>&nbsp;Selecionar Arquivo</strong>
							</div>
							<div class="col-1 text-center border-right m-auto p-1">
								<strong><i class="fas fa-upload" aria-hidden="true"></i>&nbsp;Enviar</strong>
							</div>
							<div class="col-2 text-center m-auto p-1">
								<strong>Progresso</strong>
							</div>
						</div>
						<?php foreach($tipos_documentos as $tipo_documento) : ?>
							<?php
								$input_dt_validade	=	array(
															'id'		=>	"dt_validade$tipo_documento->id",
															'name'		=>	'dt_validade',
															'type'		=>	'date',
															'class'		=>	'form-control dt_validade',
															'required'	=>	''
														);
							?>
							<?= form_open_multipart($docs_enviar,$form_upload); ?>
								<?= form_hidden('ce_requerente',$id_requerente); ?>
								<?= form_hidden('ce_licenca',$id_licenca); ?>
								<?= form_hidden('tipo_pessoa',$tipo_pessoa); ?>
								<?= form_hidden('ce_tipo_licenca',$ce_tipo_licenca); ?>
								<?= form_hidden('ce_tipo_documento',$tipo_documento->tdid); ?>
								<?= form_hidden('tipo_insercao',$tipo_documento->tipo_insercao); ?>
								<?= form_hidden('desc_documento',$tipo_documento->tddescricao); ?>
								<div class="row border-bottom">
									<div class="col-3 text-center m-auto p-1 <?= ($tipo_documento->sn_obrigatorio == 'S') ? 'fc-brand-danger' : ''; ?>" id="tipo_documento">
										<strong><?= $tipo_documento->tddescricao; ?></strong>
									</div>
									<div class="col-2 text-center m-auto p-1">
										<?= ($tipo_documento->sn_validade == 'S') ? form_input($input_dt_validade) : ''; ?>
									</div>
									<div class="col-1 text-center m-auto p-1">
										<?= ($tipo_documento->tdlink != '') ? "<a href='$tipo_documento->tdlink' target='_blank' id='btnPrint_$tipo_documento->tdid' class='btn btn-primary btn-print' data-toggle='tooltip' title='Imprimir arquivo'><i class='fas fa-print' aria-hidden='true'></i></a>" : ''; ?>
									</div>
									<div class="col-3 text-center m-auto p-1 input-group">
										<div class="input-group-prepend">
											<button class="btn btn-default" type="button" id="btn<?= $tipo_documento->id; ?>" data-file="#file<?= $tipo_documento->id; ?>" onclick="fileclick(this);" data-toggle="tooltip" title="Selecionar arquivo..."><i class="fas fa-file-alt" aria-hidden="true"></i></button>
										</div>
										<input type="text" class="form-control" readonly placeholder="Arquivo" id="inputtext<?= $tipo_documento->id; ?>">
										<input type="file" class="file-input d-none" name="file" id="file<?= $tipo_documento->id; ?>" data-text="#inputtext<?= $tipo_documento->id; ?>" data-validade="<?= ($tipo_documento->sn_validade == 'S') ? 'S' : 'N'; ?>" data-dt-validade="#dt_validade<?= $tipo_documento->id; ?>" data-btn-enviar="#btn-enviar<?= $tipo_documento->id; ?>" data-progress="#progress<?= $tipo_documento->id; ?>">
										<div class="input-group-append">
											<button class="btn btn-default btn-removeFile" id="remmove-file<?= $tipo_documento->id; ?>" type="button" data-toggle="tooltip" title="Remover arquivo" data-file="#file<?= $tipo_documento->id; ?>" data-text="#inputtext<?= $tipo_documento->id; ?>"><i class="fas fa-trash-alt" aria-hidden="true"></i></button>
											<!-- <button class="btn btn-default" type="reset" data-toggle="tooltip" title="Remover arquivo"><i class="fas fa-trash-alt" aria-hidden="true"></i></button> -->
										</div>
									</div>
									<div class="col-1 text-center m-auto p-1">
										<button id="btn-enviar<?= $tipo_documento->id; ?>" class="btn btn-default btn-enviar d-none"><i class="fas fa-upload" aria-hidden="true"></i></button>
									</div>
									<div class="col-2 text-center m-auto p-1">
										<div class="progress d-none" id="progress<?= $tipo_documento->id; ?>">
											<div class="progress-bar progress-bar-striped progress-bar-animated bg-brand-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%">100%</div>
										</div>
									</div>
								</div>
							<?= form_close(); ?>
						<?php endforeach; ?>
					</div>
				</div>
			</div>
		</div>
		<div class="row mb-3">
			<div class="col-12">
				<div class="card border border-brand-primary">
					<div class="card-header bg-brand-primary fc-white m-1">
						<h6><i class="far fa-copy" aria-hidden="true"></i>&nbsp;DOCUMENTOS DO REQUERIMENTO DE LICENÇA AMBIENTAL</h6>
					</div>
					<div class="card-body">
						<?php
							//-- Table Initiation
							$this->table->set_template($table_tmpl);
							//-- Header Row
							$this->table->set_heading('Tipo Documento', 'Validade', 'Ações');

							foreach ($documentos_licenca as $documento_licenca) {
								$this->table->add_row(
									$documento_licenca->descricao,
									($documento_licenca->dt_validade != '') ? date("d/m/Y",strtotime($documento_licenca->dt_validade)) : '',
									''
								);
							}
							$table	=	$this->table->generate();
						?>
						<?= $table; ?>
					</div>
					<div class="card-footer bg-brand-primary fc-white m-1">
						<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalFinalizarCadastro"><i class="far fa-check-square"></i>&nbsp;&nbsp;Finalizar</button>
					</div>
				</div>
			</div>
		</div>
	</div>
<?php endif; ?>