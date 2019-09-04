<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Licencas extends MY_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model('condicionantes_licenca_model');
		$this->load->model('documentos_licenca_model');
		$this->load->model('documentos_tipos_licencas_model');
		$this->load->model('fotos_parecer_model');
		$this->load->model('licencas_model');
		$this->load->model('logs_model');
		$this->load->model('motivos_indeferimento_model');
		$this->load->model('requerentes_model');
		$this->load->model('tipos_licencas_model');
		$this->load->model('empresas_model');
		$this->load->model('usuarios_model');
		$this->load->library('qrcode');
	}

	public function index(){

	}

	public function protocolos(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['protocolos']	=	$this->licencas_model->selecionarPorStatus('PR');
		for ($i=0; $i < count($this->dados['protocolos']); $i++) { 
			$logradouro		=	($this->dados['protocolos'][$i]->logradouro) ? $this->dados['protocolos'][$i]->logradouro : '';
			$numero			=	($this->dados['protocolos'][$i]->numero) ? ', '.$this->dados['protocolos'][$i]->numero : '';
			$complemento	=	($this->dados['protocolos'][$i]->complemento) ? ', '.$this->dados['protocolos'][$i]->complemento : '';
			$bairro			=	($this->dados['protocolos'][$i]->bairro) ? ', '.$this->dados['protocolos'][$i]->bairro: '';
			$cidade			=	($this->dados['protocolos'][$i]->cidade) ? '<br>'.$this->dados['protocolos'][$i]->cidade : '';
			$uf				=	($this->dados['protocolos'][$i]->uf) ? '-'.$this->dados['protocolos'][$i]->uf : '';
			$cep			=	($this->dados['protocolos'][$i]->cep) ? ' CEP: '.$this->dados['protocolos'][$i]->cep : '';
			$this->dados['protocolos'][$i]->endereco	=	$logradouro.
															$numero.
															$complemento.
															$bairro.
															$cidade.
															$uf.
															$cep;
		}
		$this->dados['motivos_indeferimento']	=	$this->motivos_indeferimento_model->selecionar();
		$this->dados['link']					=	'protocolos';
		$this->dados['voltar']					=	"licencas/protocolos";
		$this->dados['conteudo']				=	'layouts/protocolos_view';
		$this->load->view('layouts/layout_master',$this->dados);
	}

	public function analises(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['protocolos']	=	$this->licencas_model->selecionarPorStatus('AN');
		for ($i=0; $i < count($this->dados['protocolos']); $i++) { 
			$logradouro		=	($this->dados['protocolos'][$i]->logradouro) ? $this->dados['protocolos'][$i]->logradouro : '';
			$numero			=	($this->dados['protocolos'][$i]->numero) ? ', '.$this->dados['protocolos'][$i]->numero : '';
			$complemento	=	($this->dados['protocolos'][$i]->complemento) ? ', '.$this->dados['protocolos'][$i]->complemento : '';
			$bairro			=	($this->dados['protocolos'][$i]->bairro) ? ', '.$this->dados['protocolos'][$i]->bairro: '';
			$cidade			=	($this->dados['protocolos'][$i]->cidade) ? '<br>'.$this->dados['protocolos'][$i]->cidade : '';
			$uf				=	($this->dados['protocolos'][$i]->uf) ? '-'.$this->dados['protocolos'][$i]->uf : '';
			$cep			=	($this->dados['protocolos'][$i]->cep) ? ' CEP: '.$this->dados['protocolos'][$i]->cep : '';
			$this->dados['protocolos'][$i]->endereco	=	$logradouro.
															$numero.
															$complemento.
															$bairro.
															$cidade.
															$uf.
															$cep;
		}
		$this->dados['motivos_indeferimento']	=	$this->motivos_indeferimento_model->selecionar();
		$this->dados['link']		=	'analises';
		$this->dados['conteudo']	=	'layouts/analises_view';
		$this->load->view('layouts/layout_master',$this->dados);
	}

	public function aprovacoes(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['protocolos']	=	$this->licencas_model->selecionarPorStatus('AP');
		for ($i=0; $i < count($this->dados['protocolos']); $i++) {
			$logradouro		=	($this->dados['protocolos'][$i]->logradouro) ? $this->dados['protocolos'][$i]->logradouro : '';
			$numero			=	($this->dados['protocolos'][$i]->numero) ? ', '.$this->dados['protocolos'][$i]->numero : '';
			$complemento	=	($this->dados['protocolos'][$i]->complemento) ? ', '.$this->dados['protocolos'][$i]->complemento : '';
			$bairro			=	($this->dados['protocolos'][$i]->bairro) ? ', '.$this->dados['protocolos'][$i]->bairro: '';
			$cidade			=	($this->dados['protocolos'][$i]->cidade) ? '<br>'.$this->dados['protocolos'][$i]->cidade : '';
			$uf				=	($this->dados['protocolos'][$i]->uf) ? '-'.$this->dados['protocolos'][$i]->uf : '';
			$cep			=	($this->dados['protocolos'][$i]->cep) ? ' CEP: '.$this->dados['protocolos'][$i]->cep : '';
			$this->dados['protocolos'][$i]->endereco	=	$logradouro.
															$numero.
															$complemento.
															$bairro.
															$cidade.
															$uf.
															$cep;
		}
		$this->dados['motivos_indeferimento']	=	$this->motivos_indeferimento_model->selecionar();
		$this->dados['link']		=	'aprovacoes';
		$this->dados['conteudo']	=	'layouts/aprovacoes_view';
		$this->load->view('layouts/layout_master',$this->dados);
	}

	public function auditorias(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['protocolos']	=	$this->licencas_model->selecionarPorStatus('AU');
		for ($i=0; $i < count($this->dados['protocolos']); $i++) { 
			$logradouro		=	($this->dados['protocolos'][$i]->logradouro) ? $this->dados['protocolos'][$i]->logradouro : '';
			$numero			=	($this->dados['protocolos'][$i]->numero) ? ', '.$this->dados['protocolos'][$i]->numero : '';
			$complemento	=	($this->dados['protocolos'][$i]->complemento) ? ', '.$this->dados['protocolos'][$i]->complemento : '';
			$bairro			=	($this->dados['protocolos'][$i]->bairro) ? ', '.$this->dados['protocolos'][$i]->bairro: '';
			$cidade			=	($this->dados['protocolos'][$i]->cidade) ? '<br>'.$this->dados['protocolos'][$i]->cidade : '';
			$uf				=	($this->dados['protocolos'][$i]->uf) ? '-'.$this->dados['protocolos'][$i]->uf : '';
			$cep			=	($this->dados['protocolos'][$i]->cep) ? ' CEP: '.$this->dados['protocolos'][$i]->cep : '';
			$this->dados['protocolos'][$i]->endereco	=	$logradouro.
															$numero.
															$complemento.
															$bairro.
															$cidade.
															$uf.
															$cep;
		}
		$this->dados['motivos_indeferimento']	=	$this->motivos_indeferimento_model->selecionar();
		$this->dados['conteudo']	=	'layouts/auditorias_view';
		$this->load->view('layouts/layout_master',$this->dados);
	}

	public function finalizados(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['protocolos']	=	$this->licencas_model->selecionarPorStatus('FI');
		for ($i=0; $i < count($this->dados['protocolos']); $i++) { 
			$logradouro		=	($this->dados['protocolos'][$i]->logradouro) ? $this->dados['protocolos'][$i]->logradouro : '';
			$numero			=	($this->dados['protocolos'][$i]->numero) ? ', '.$this->dados['protocolos'][$i]->numero : '';
			$complemento	=	($this->dados['protocolos'][$i]->complemento) ? ', '.$this->dados['protocolos'][$i]->complemento : '';
			$bairro			=	($this->dados['protocolos'][$i]->bairro) ? ', '.$this->dados['protocolos'][$i]->bairro: '';
			$cidade			=	($this->dados['protocolos'][$i]->cidade) ? '<br>'.$this->dados['protocolos'][$i]->cidade : '';
			$uf				=	($this->dados['protocolos'][$i]->uf) ? '-'.$this->dados['protocolos'][$i]->uf : '';
			$cep			=	($this->dados['protocolos'][$i]->cep) ? ' CEP: '.$this->dados['protocolos'][$i]->cep : '';
			$this->dados['protocolos'][$i]->endereco	=	$logradouro.
															$numero.
															$complemento.
															$bairro.
															$cidade.
															$uf.
															$cep;
		}
		$this->dados['conteudo']	=	'layouts/finalizados_view';
		$this->load->view('layouts/layout_master',$this->dados);
	}

	public function indeferidos(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['protocolos']	=	$this->licencas_model->selecionarPorStatus('IN');
		for ($i=0; $i < count($this->dados['protocolos']); $i++) { 
			$logradouro		=	($this->dados['protocolos'][$i]->logradouro) ? $this->dados['protocolos'][$i]->logradouro : '';
			$numero			=	($this->dados['protocolos'][$i]->numero) ? ', '.$this->dados['protocolos'][$i]->numero : '';
			$complemento	=	($this->dados['protocolos'][$i]->complemento) ? ', '.$this->dados['protocolos'][$i]->complemento : '';
			$bairro			=	($this->dados['protocolos'][$i]->bairro) ? ', '.$this->dados['protocolos'][$i]->bairro: '';
			$cidade			=	($this->dados['protocolos'][$i]->cidade) ? '<br>'.$this->dados['protocolos'][$i]->cidade : '';
			$uf				=	($this->dados['protocolos'][$i]->uf) ? '-'.$this->dados['protocolos'][$i]->uf : '';
			$cep			=	($this->dados['protocolos'][$i]->cep) ? ' CEP: '.$this->dados['protocolos'][$i]->cep : '';
			$this->dados['protocolos'][$i]->endereco	=	$logradouro.
															$numero.
															$complemento.
															$bairro.
															$cidade.
															$uf.
															$cep;
		}
		$this->dados['conteudo']	=	'layouts/indeferidos_view';
		$this->load->view('layouts/layout_master',$this->dados);
	}

	public function importarCSV(){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		if ($this->input->post('importar')) {

			/* configurações de upload */
			$config['upload_path']		=	"assets/arquivos_temporarios/";		//caminho para o upload
			$config['allowed_types']	=	'csv';								//extensões aceitas
			$config["overwrite"]		=	TRUE;								//sobrescrever o arquivo caso já exista

			// var_dump($config);

			$this->load->library('upload', $config);							// carregando a biblioteca de upload
			$this->upload->initialize($config);

			if ($this->upload->do_upload('arquivo')) {												// se o upload ocorrer
				$arq_info		=	get_file_info($config["upload_path"].$this->upload->file_name);	// informações sobre o arquivo
				$arq_name		=	$config["upload_path"].$this->upload->file_name;				// path do arquivo após o upload
				$ext			=	pathinfo($arq_name, PATHINFO_EXTENSION);						// extensão do arquivo

				$arq_numLinhas	=	file($arq_name);												// conteúdo do arquivo
				$arquivo_csv 	=	fopen($arq_name,'r');											//Abrindo o arquivo

				$retorno 		= 	array('insert' => 0, 'update' => 0);

				$cpf_cnpj_anterior 	=	'';

				$cont 			=	0;

				while(! feof($arquivo_csv)){
					$conteudo_csv[$cont]	=	utf8_encode(fgets($arquivo_csv));
					$cont++;
				}

				fclose($arquivo_csv);

				$_delete = unlink("./$arq_name");

				// Pegar os índices
				$campos   		= explode(';',utf8_encode($conteudo_csv[0]));

				$indice_fis_jur   			= 	array_search('F_J', $campos);
				$indice_nome   				= 	array_search('NOME', $campos);
				$indice_cpf_cnpj  			= 	array_search('CNPJ_CPF', $campos);
				$indice_num_processo   		= 	array_search('NUMERO PROCESSO', $campos);
				$indice_ano   				= 	array_search('ANO', $campos);
				$indice_arquivo   			= 	array_search('NOME ARQUIVO', $campos);

				for ($contador=1; $contador < $cont; $contador++) { 
					$valores_campos 		= 	explode(';',$conteudo_csv[$contador]);

					$fis_jur    			= 	$valores_campos[$indice_fis_jur];
					$nome 					= 	$valores_campos[$indice_nome];
					$cpf_cnpj    			= 	$valores_campos[$indice_cpf_cnpj];
					$cpf_cnpj 				= 	trim($cpf_cnpj);
					$num_processo 			= 	$valores_campos[$indice_num_processo];
					if (strlen($num_processo) < 9) {
						$num_processo 		= 	str_repeat('0', 7-strlen($num_processo)).$num_processo;
					}
					$ano 					= 	$valores_campos[$indice_ano];
					$num_protocolo 			= 	$ano.'.'.$num_processo;
					$arquivo 				= 	$valores_campos[$indice_arquivo];

					if (($cpf_cnpj_anterior <> $cpf_cnpj)) {
						$cpf_cnpj_anterior	=	$cpf_cnpj;
						$requerente			=	$this->requerentes_model->consultarPorCPFCNPJ($cpf_cnpj);

						if (count($requerente) == 0) {

							$_dados 		= 	array(
							  								'tipo_pessoa' 			=>	$fis_jur,
															'nome_razaosocial' 		=>	$nome,
															'cpf_cnpj'				=>	$cpf_cnpj);

							$this->requerentes_model->salvar($_dados);

							$requerente		=	$this->requerentes_model->consultarPorCPFCNPJ($cpf_cnpj);
						}
					}

					$licenca				=	$this->licencas_model->consultarPorNumProtocolo($num_protocolo);


					$_dados 				= 	array(
														'ce_requerente' 			=>	$requerente->id,
														'ce_tipo_licenca'			=>	'8',
														'num_protocolo' 			=>	$num_protocolo,
														'status' 					=>	'FI');

					if (count($licenca) == 0) {
						$retorno['insert']++;
						$this->licencas_model->salvar($_dados);

						$licenca	=	$this->licencas_model->consultarPorNumProtocolo($num_protocolo);
					} else {
						$retorno['update']++;
						$this->licencas_model->update($_dados,$licenca->id);
					}

					$_dados 				= 	array(
														'ce_licenca' 			=>	$licenca->id,
														'sequencial'			=>	'1',
														'descricao'				=>	'Processo Físico Anterior ao Sistema',
														'nome' 					=>	$arquivo,
														'doc_path' 				=>	'assets/uploads/docs_licencas/'.$arquivo);

					$this->documentos_licenca_model->salvar($_dados);
				}

				$this->dados['msg']	=	"<div class='alert alert-success' role='alert'>Arquivo ".$this->upload->file_name." importado com sucesso!<br>Adicionados: ".$retorno['insert']."<br>Atualizados: ".$retorno['update']."<br></div>";
			}
			else{
				$this->dados['msg']	=	"<div class='alert alert-danger' role='alert'>Erro: ".$this->upload->display_errors()."</div>";
			}
		}

		$this->dados['importar']	=	'licencas/importarCSV';
		$this->dados['conteudo']	=	'layouts/importarcsv_view';

		$this->load->view('layouts/layout_master',$this->dados);
	}

	public function protocoloEditar($id_licenca){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		if ($this->input->post()) {
			$id_requerente		=	$this->input->post('id_requerente');
			$tipo_pessoa		=	$this->input->post('tipo_pessoa');
			$nome_razaosocial	=	$this->input->post('nome_razaosocial');
			$cpf_cnpj			=	$this->input->post('cpf_cnpj');
			$rg_ie				=	$this->input->post('rg_ie');
			$cep				=	$this->input->post('cep');
			$logradouro			=	$this->input->post('logradouro');
			$numero				=	$this->input->post('numero');
			$complemento		=	$this->input->post('complemento');
			$bairro				=	$this->input->post('bairro');
			$cidade				=	$this->input->post('cidade');
			$uf					=	$this->input->post('uf');
			$nome_contato		=	$this->input->post('nome_contato');
			$tel_contato		=	$this->input->post('telefone_contato');
			$email_contato		=	$this->input->post('email_contato');

			$dadosRequerente	=	array(
											'tipo_pessoa'		=>	$tipo_pessoa,
											'nome_razaosocial'	=>	$nome_razaosocial,
											'cpf_cnpj'			=>	$cpf_cnpj,
											'rg_ie'				=>	$rg_ie,
											'cep'				=>	$cep,
											'logradouro'		=>	$logradouro,
											'numero'			=>	$numero,
											'complemento'		=>	$complemento,
											'bairro'			=>	$bairro,
											'cidade'			=>	$cidade,
											'uf'				=>	$uf,
											'nome_contato'		=>	$nome_contato,
											'tel_contato'		=>	$tel_contato,
											'email_contato'		=>	$email_contato,
											// 'endereco_contato'	=>	$endereco_contato,
										);
			if ($tipo_pessoa == 'J') {
				$nome_rep1	=	$this->input->post('nome_rep1');
				$cpf_rep1	=	$this->input->post('cpf_rep1');
				$nome_rep2	=	$this->input->post('nome_rep2');
				$cpf_rep2	=	$this->input->post('cpf_rep2');
				$nome_rep3	=	$this->input->post('nome_rep3');
				$cpf_rep3	=	$this->input->post('cpf_rep3');

				$dadosRequerente['nome_rep1']	=	$nome_rep1;
				$dadosRequerente['cpf_rep1']	=	$cpf_rep1;
				$dadosRequerente['nome_rep2']	=	$nome_rep2;
				$dadosRequerente['cpf_rep2']	=	$cpf_rep2;
				$dadosRequerente['nome_rep3']	=	$nome_rep3;
				$dadosRequerente['cpf_rep3']	=	$cpf_rep3;
			}

			/* Salvando os dados do Requerente */
			$salvarRequerente	=	$this->requerentes_model->update($dadosRequerente,$id_requerente);

			/* Salvando os dados da Licença */
			$ce_tipo_licenca		=	$this->input->post('tipo_licenca');
			$cep_emp				=	$this->input->post('cep_emp');
			$logradouro_emp			=	$this->input->post('logradouro_emp');
			$numero_emp				=	$this->input->post('numero_emp');
			$complemento_emp		=	$this->input->post('complemento_emp');
			$bairro_emp				=	$this->input->post('bairro_emp');
			$cidade_emp				=	$this->input->post('cidade_emp');
			$uf_emp					=	$this->input->post('uf_emp');
			$desc_atividades		=	$this->input->post('desc_atividades');
			$invest_total			=	str_replace(",", ".", (str_replace(".", "", $this->input->post('invest_total'))));
			$area_total				=	$this->input->post('area_total');
			$num_empregados			=	$this->input->post('num_empregados');
			$porte_atividade		=	$this->input->post('porte_atividade');
			$potencial_poluidor		=	$this->input->post('potencial_poluidor');
			$valor_ufmc				=	$this->input->post('valor_ufmc');
			$lp						=	$this->input->post('lp');
			$li						=	$this->input->post('li');
			$lo						=	$this->input->post('lo');
			$ls						=	$this->input->post('ls');
			$autorizacao_ambiental	=	$this->input->post('autorizacao_ambiental');
			$total_ufmc				=	$this->input->post('total_ufmc');
			$total_ufmc_moeda		=	$this->input->post('total_ufmc_moeda');

			$dadosLicenca		=	array(
										'ce_tipo_licenca'			=>	$ce_tipo_licenca,
										'cep'						=>	$cep_emp,
										'logradouro'				=>	$logradouro_emp,
										'numero'					=>	$numero_emp,
										'complemento'				=>	$complemento_emp,
										'bairro'					=>	$bairro_emp,
										'cidade'					=>	$cidade_emp,
										'uf'						=>	$uf_emp,
										'desc_atividades'			=>	$desc_atividades,
										'invest_total'				=>	$invest_total,
										'area_total'				=>	$area_total,
										'num_empregados'			=>	$num_empregados,
										'porte_atividade'			=>	$porte_atividade,
										'potencial_poluidor'		=>	$potencial_poluidor,
										'valor_ufmc'				=>	$valor_ufmc,
										'lp'						=>	$lp,
										'li'						=>	$li,
										'lo'						=>	$lo,
										'ls'						=>	$ls,
										'autorizacao_ambiental'		=>	$autorizacao_ambiental,
										'total_ufmc'				=>	$total_ufmc,
										'total_ufmc_moeda'			=>	$total_ufmc_moeda
									);

			$updateLicenca		=	$this->licencas_model->update($dadosLicenca,$id_licenca);

			if ($updateLicenca['code'] == 0) {
				$this->session->set_flashdata(
										'salvar',
										'<div class="alert alert-success" role="alert">
											<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
											<i class="fa fa-check"></i>&nbsp;&nbsp;Registro SALVO com sucesso.
										</div>'
										);
			}
			else{
				$this->session->set_flashdata(
										'salvar',
										'<div class="alert alert-danger" role="alert">
											<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
											<p><i class="fas fa-times"></i>&nbsp;&nbsp;Erro ao atualizar registro!<br>Erro: '.$updateLicenca['code'].'|'.$updateLicenca['message'].'</p>
											<p>Contate o administrador.</p>
										</div>'
										);
			}
		}

		$this->dados['tipos_licenca']=	$this->tipos_licencas_model->selecionar();
		$this->dados['protocolo']	=	$this->licencas_model->consultarPorId($id_licenca);
		$this->dados['tipo_pessoa']	=	$this->dados['protocolo']->rtipo_pessoa;
		$this->dados['salvar']		=	"licencas/protocoloEditar/$id_licenca";
		$this->dados['voltar']		=	"licencas/protocolos";
		$this->dados['conteudo']	=	'layouts/protocolos_editar_view';
		$this->load->view('layouts/layout_master',$this->dados);
	}

	public function carregarDBEmpresa($ce_empresa='') {
		$empresa = $this->empresas_model->consultarPorId($ce_empresa);
		$this->dados['db_empresa']	=	array(
											'dsn'			=>	'',
											'hostname'		=>	$empresa->hostname,
											'username'		=>	$empresa->username,
											'password'		=>	$empresa->password,
											'database'		=>	$empresa->database,
											'dbdriver'		=>	'mysqli',
											'dbprefix'		=>	'',
											'pconnect'		=>	FALSE,
											'db_debug'		=>	(ENVIRONMENT !== 'production'),
											'cache_on'		=>	FALSE,
											'cachedir'		=>	'',
											'char_set'		=>	'utf8',
											'dbcollat'		=>	'utf8_general_ci',
											'swap_pre'		=>	'',
											'encrypt'		=>	FALSE,
											'compress'		=>	FALSE,
											'stricton'		=>	FALSE,
											'failover'		=>	array(),
											'save_queries'	=>	TRUE
										);

		$this->db							=	$this->load->database($this->dados['db_empresa'], TRUE);
		$this->dados['nome_empresa']		=	$empresa->descricao;
		$this->dados['logo_empresa']		=	$empresa->img_logo;
		$this->dados['link_empresa']		=	$empresa->link;
		$this->dados['path_images']			=	$empresa->path_images;
		$this->dados['path_uploads']		=	$empresa->path_uploads;
		$this->dados['path_docs_despachos']	=	$empresa->path_docs_despachos;
		$this->dados['pdf_cabecalho1']		=	$empresa->pdf_cabecalho1;
		$this->dados['pdf_cabecalho2']		=	$empresa->pdf_cabecalho2;
		$this->dados['pdf_cabecalho3']		=	$empresa->pdf_cabecalho3;
		$this->dados['pdf_cabecalho4']		=	$empresa->pdf_cabecalho4;
	}

	public function protocoloImprimir($id_licenca/*, $cpf_cnpj=''*/, $ce_empresa='') {
		$logado = $this->Seguranca(false);	//Se o Usuario nao estiver Logado sai do Sistema

		if(!$logado /*&& !$cpf_cnpj */&& !$ce_empresa)
			redirect(base_url());

		/*if($cpf_cnpj) {
			//		$this->dados['nome'] = '';
		}*/

		if ($ce_empresa) {
			$this->carregarDBEmpresa($ce_empresa);
		}

		$this->dados['licenca']	=	$this->licencas_model->consultarPorId($id_licenca);
		$llogradouro	=	($this->dados['licenca']->logradouro) ? $this->dados['licenca']->logradouro : '';
		$lnumero		=	($this->dados['licenca']->numero) ? ', '.$this->dados['licenca']->numero : '';
		$lcomplemento	=	($this->dados['licenca']->complemento) ? ', '.$this->dados['licenca']->complemento : '';
		$lbairro		=	($this->dados['licenca']->bairro) ? ', '.$this->dados['licenca']->bairro: '';
		$lcidade		=	($this->dados['licenca']->cidade) ? '<br>'.$this->dados['licenca']->cidade : '';
		$luf			=	($this->dados['licenca']->uf) ? '-'.$this->dados['licenca']->uf : '';
		$lcep			=	($this->dados['licenca']->cep) ? ' CEP: '.$this->dados['licenca']->cep : '';

		$this->dados['licenca']->lendereco	=	$llogradouro.
												$lnumero.
												$lcomplemento.
												$lbairro.
												$lcidade.
												$luf.
												$lcep;

		$rlogradouro	=	($this->dados['licenca']->rlogradouro) ? $this->dados['licenca']->rlogradouro : '';
		$rnumero		=	($this->dados['licenca']->rnumero) ? ', '.$this->dados['licenca']->rnumero : '';
		$rcomplemento	=	($this->dados['licenca']->rcomplemento) ? ', '.$this->dados['licenca']->rcomplemento : '';
		$rbairro		=	($this->dados['licenca']->rbairro) ? ', '.$this->dados['licenca']->rbairro: '';
		$rcidade		=	($this->dados['licenca']->rcidade) ? '<br>'.$this->dados['licenca']->rcidade : '';
		$ruf			=	($this->dados['licenca']->ruf) ? '-'.$this->dados['licenca']->ruf : '';
		$rcep			=	($this->dados['licenca']->rcep) ? ' CEP: '.$this->dados['licenca']->rcep : '';

		$this->dados['licenca']->rendereco	=	$rlogradouro.
												$rnumero.
												$rcomplemento.
												$rbairro.
												$rcidade.
												$ruf.
												$rcep;

		$this->dados['conteudo']	=	'layouts/protocolo_imprimir_view';
		$this->load->view('layouts/layout_master', $this->dados);
	}

	/* chamada via javascript */
	public function protocoloDevolver(){
		if ($this->input->post()) {
			$id_usuario		=	$this->input->post('id_usuario');
			$id_licenca		=	$this->input->post('id_licenca');
			$status_atual	=	$this->input->post('status');
			$status_anterior	=	$this->input->post('status_anterior');
			/*$id_usuario		=	'1';
			$id_licenca		=	'1';
			$status_atual	=	'PR';*/

			// 'PR','AN','AP','AU','FI','IN'
			switch ($status_atual) {
				case 'PR':
					$status	=	'AN';
					break;
				case 'AN':
					$status	=	'AP';
					break;
				case 'AP':
					$status	=	'AU';
					break;
				case 'AU':
					$status	=	'FI';
					break;
			}

			$dadosUpdateLicenca	=	array(
										'status_anterior'	=>	$status_atual,
										'status'			=>	$status
									);
			$updateLicenca		=	$this->licencas_model->update($dadosUpdateLicenca,$id_licenca);
			if ($updateLicenca == '1') {
				$dadosInsertLog		=	array(
											'ce_usuario'		=>	$id_usuario,
											'ce_licenca'		=>	$id_licenca,
											'status_anterior'	=>	$status_atual,
											'status_atual'		=>	$status
										);
				$insertLog			=	$this->logs_model->salvar($dadosInsertLog);
				$this->session->set_flashdata(
											'devolver',
											'<div class="alert alert-success" role="alert">
												<button type="button" class="close" data-dismiss="alert" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
												<i class="fa fa-check"></i>&nbsp;&nbsp;Protocolo DEVOLVIDO com sucesso!
											</div>'
										);
			}
			else{
				$this->session->set_flashdata(
											'devolver',
											'<div class="alert alert-danger" role="alert">
												<button type="button" class="close" data-dismiss="alert" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
												<i class="fa fa-times"></i>&nbsp;&nbsp;ERRO ao DEVOLVER o protocolo
												<p>Erro: '.$updateLicenca['code'].'|'.$updateLicenca['message'].'</p>
											</div>'
										);
			}
		}
	}

	public function protocoloEncaminhar(){
		if ($this->input->post('acao')) {
			$id_usuario			=	$this->input->post('id_usuario');
			$id_licenca			=	$this->input->post('id_licenca');
			$status_atual		=	$this->input->post('status');
			$status_anterior	=	$this->input->post('status_anterior');
			$acao				=	$this->input->post('acao');
			$retorno			=	'0';

			// 'PR','AN','AP','AU','FI','IN'
			if ($acao == 'encaminhar') {
				$upper		=	'ENCAMINHADO';
				$lower		=	'encaminhar';
				$doc_desc 	=	'_encaminhado';
				switch ($status_atual) {
					case 'PR':
						$status	=	'AN';
						break;
					case 'AN':
						$status	=	'AP';
						break;
					case 'AP':
						$status	=	'AU';
						break;
					case 'AU':
						$status	=	'FI';
						break;
				}
			}
			elseif ($acao == 'devolver') {
				$upper		=	'DEVOLVIDO';
				$lower		=	'devolver';
				$doc_desc 	=	'_devolvido';
				switch ($status_atual) {
					case 'AN':
						$status	=	'PR';
						break;
					case 'AP':
						$status	=	'AN';
						break;
					case 'AU':
						$status	=	'AP';
						break;
					case 'FI':
						$status	=	'AU';
						break;
				}
			}

			$dadosUpdateLicenca	=	array(
										'status_anterior'	=>	$status_atual,
										'status'			=>	$status
									);
			$updateLicenca		=	$this->licencas_model->update($dadosUpdateLicenca,$id_licenca);
			if ($updateLicenca == '1') {
				$dadosInsertLog		=	array(
											'ce_usuario'		=>	$id_usuario,
											'ce_licenca'		=>	$id_licenca,
											'status_anterior'	=>	$status_atual,
											'status_atual'		=>	$status
										);
				$insertLog			=	$this->logs_model->salvar($dadosInsertLog);
				$retorno			=	$updateLicenca;
				$this->session->set_flashdata(
											'encaminhar',
											'<div class="alert alert-success" role="alert">
												<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
												<i class="fa fa-check"></i>&nbsp;&nbsp;Protocolo <strong>'.$num_protocolo.'</<strong> '.$upper.' com sucesso!
											</div>'
										);
			}
			else{
				$this->session->set_flashdata(
											'encaminhar',
											'<div class="alert alert-danger" role="alert">
												<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
												<i class="fa fa-check"></i>&nbsp;&nbsp;ERRO ao '.$lower.' o protocolo <strong>'.$num_protocolo.'</strong> !
												<p>Erro: '.$updateLicenca['code'].'|'.$updateLicenca['message'].'</p>
											</div>'
										);
			}
			echo $retorno;
		}
		else{
			echo "Sem POST!";
		}
	}

	public function protocoloEncaminharDireto(){
		if ($this->input->post()) {
			$id_usuario			=	$this->input->post('id_usuario');
			$id_licenca			=	$this->input->post('id_licenca');
			$status_atual		=	$this->input->post('status');
			$status_anterior	=	$this->input->post('status_anterior');
			$acao				=	$this->input->post('acao');
			$retorno			=	'0';

			// 'PR','AN','AP','AU','FI','IN'
			switch ($status_atual) {
				case 'PR':
					$status	=	'AN';
					break;
				case 'AN':
					$status	=	'AP';
					break;
				case 'AP':
					$status	=	'AU';
					break;
				case 'AU':
					$status	=	'FI';
					break;
			}

			$dadosUpdateLicenca	=	array(
										'status_anterior'	=>	$status_atual,
										'status'			=>	$status
									);
			$updateLicenca		=	$this->licencas_model->update($dadosUpdateLicenca,$id_licenca);
			if ($updateLicenca == '1') {
				$dadosInsertLog		=	array(
											'ce_usuario'		=>	$id_usuario,
											'ce_licenca'		=>	$id_licenca,
											'status_anterior'	=>	$status_atual,
											'status_atual'		=>	$status
										);
				$insertLog			=	$this->logs_model->salvar($dadosInsertLog);
				$retorno			=	$updateLicenca;
				$this->session->set_flashdata(
											'encaminhar',
											'<div class="alert alert-success" role="alert">
												<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
												<i class="fa fa-check"></i>&nbsp;&nbsp;Protocolo <strong>'.$num_protocolo.'</<strong> ENCAMINHADO com sucesso!
											</div>'
										);
			}
			else{
				$this->session->set_flashdata(
											'encaminhar',
											'<div class="alert alert-danger" role="alert">
												<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
												<i class="fa fa-check"></i>&nbsp;&nbsp;ERRO ao encaminhar o protocolo <strong>'.$num_protocolo.'</strong> !
												<p>Erro: '.$updateLicenca['code'].'|'.$updateLicenca['message'].'</p>
											</div>'
										);
			}
		}
	}

	public function protocoloIndeferir(){
		$retorno	=	'1';
		if ($this->input->post()) {
			$id_usuario				=	$this->input->post('id_usuario');
			$id_licenca				=	$this->input->post('id_licenca');
			$num_protocolo			=	$this->input->post('num_protocolo');
			$status_anterior		=	$this->input->post('status');
			$motivos_indeferimento	=	$this->input->post('motivos_indeferimento');

			/* salvando na tabela "motivos_indeferimento_licencas" */
			for ($i=0; $i < count($motivos_indeferimento); $i++) {
				$dados	=	array(
									'ce_motivo_indeferimento'	=>	$motivos_indeferimento[$i],
									'ce_licenca'				=>	$id_licenca
								);
				$this->motivos_indeferimento_model->indeferirLicenca($dados);
			}
			if ($i == count($motivos_indeferimento)) {
				$retorno = '0';
			}
			/* /salvando na tabela "motivos_indeferimento_licencas" */

			/* alterando o status da licenca */
			$dadosUpdateLicenca	=	array(
												'status'			=>	'IN',
												'status_anterior'	=>	$status_anterior
											);
			$updateLicenca	=	$this->licencas_model->update($dadosUpdateLicenca,$id_licenca);
			$update_rows	=	$this->dados['db_conecta']->affected_rows();
			if ($update_rows == 1) {
				$retorno	=	'0';
			}
			/* /alterando o status da licenca */

			/* Incluindo Log de Mudança de Status */
			$dadosInsertLog		=	array(
											'ce_usuario'		=>	$id_usuario,
											'ce_licenca'		=>	$id_licenca,
											'status_anterior'	=>	$status_anterior,
											'status_atual'		=>	'IN'
										);
			$insertLog			=	$this->logs_model->salvar($dadosInsertLog);
			if ($insertLog) {
				$this->session->set_flashdata(
												'indeferir',
												'<div class="alert alert-success" role="alert">
													<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
													<i class="fa fa-check"></i>&nbsp;&nbsp;Protocolo Nº '.$num_protocolo.' INDEFERIDO!
												</div>'
											);
			}
			/* /Incluindo Log de Mudança de Status */

		}
		echo $retorno;
	}

	public function enviarDocumentos(){
		if ($this->input->post()) {
			$ce_requerente		=	$this->input->post('ce_requerente');
			$tipo_pessoa		=	$this->input->post('tipo_pessoa');
			$ce_tipo_licenca	=	$this->input->post('ce_tipo_licenca');
			$ce_tipo_documento	=	$this->input->post('ce_tipo_documento');
			$ordem_documento	=	$this->input->post('ordem_documento');
			$ce_licenca			=	$this->input->post('ce_licenca');
			$descricao			=	$this->input->post('desc_documento');
			$dt_validade		=	$this->input->post('dt_validade');
			$tipo_insercao		=	$this->input->post('tipo_insercao');

			$config['upload_path']		=	$this->dados['licencas_docs'];
			$config['allowed_types']	=	'pdf';
			$config["overwrite"]		=	TRUE;
			$config["file_name"]		=	$ce_licenca."_".$ce_tipo_documento.".pdf";

			$uploaded	=	"N";
			// if (base_url() == 'http://www.semapacabedelo.com.br') {
				$this->upload->initialize($config);
			// }
			$this->load->library('upload', $config);

			//em caso de sucesso no upload
			if ($this->upload->do_upload('file')) {
				$uploaded	=	"S";

				// Salvando dados dos documentos inseridos
				$dados	=	array(
								'ce_licenca'	=>	$ce_licenca,
								'sequencial'	=>	$ce_tipo_documento,
								'descricao'		=>	$descricao,
								'doc_path'		=>	$config['upload_path'].$config['file_name'],
								'tipo_insercao'	=>	$tipo_insercao,
								'dt_validade'	=>	$dt_validade
							);
				$documento	=	$this->documentos_licenca_model->consultarPorLicencaDocPath($ce_licenca,$config['upload_path'].$config['file_name']);
				$this->session->set_flashdata('doc_last_query',$this->db->last_query());
				if (count($documento) > 0) {
					$id_documento	=	$documento->id;
					$update			=	$this->documentos_licenca_model->update($dados,$id_documento);

					$flashdata		=	array(
												'doc_upload'	=> '<div class="alert alert-success" role="alert">
																		<button type="button" class="close" data-dismiss="alert" aria-label="Close">
																			<span aria-hidden="true">&times;</span>
																		</button><i class="fas fa-check"></i>&nbsp;&nbsp;Documento ATUALIZADO com sucesso.
																	</div>',
												'id_licenca'	=>	$ce_licenca,
												'id_requerente'	=>	$ce_requerente,
												'id_licenca'	=>	$ce_licenca,
												'tipo_pessoa'	=>	$tipo_pessoa,
												'ce_tipo_licenca'=>	$ce_tipo_licenca,
											);
					$this->session->set_flashdata($flashdata);
				}
				else{
					$salvar			=	$this->documentos_licenca_model->salvar($dados);
					$flashdata		=	array(
												'doc_upload'	=>	'<div class="alert alert-success" role="alert">
																		<button type="button" class="close" data-dismiss="alert" aria-label="Close">
																			<span aria-hidden="true">&times;</span>
																		</button><i class="fas fa-check"></i>&nbsp;&nbsp;Documento ENVIADO com sucesso.
																	</div>',
												'id_licenca'	=>	$ce_licenca,
												'id_requerente'	=>	$ce_requerente,
												'id_licenca'	=>	$ce_licenca,
												'tipo_pessoa'	=>	$tipo_pessoa,
												'ce_tipo_licenca'=>	$ce_tipo_licenca,
											);
					$this->session->set_flashdata($flashdata);
				}
			}
			else{
				$uploaded = $this->upload->display_errors()."\n".
							$config['upload_path']."\n".
							$config['file_name']."\n".
							$config['full_path'];
			}
			echo $uploaded;
		}
		else{
			redirect(base_url());
		}
	}
	/* /chamada via javascript */

	public function protocoloDocumentos($id_licenca, $link){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['licenca']			=	$this->licencas_model->consultarPorId($id_licenca);
		$this->dados['tipos_licenca']	=	$this->tipos_licencas_model->selecionar();
		$this->dados['protocolo']		=	$this->licencas_model->consultarPorId($id_licenca);
		$this->dados['requerente']		=	$this->requerentes_model->consultarPorId($this->dados['protocolo']->rid);
		$this->dados['documentos']		=	$this->documentos_licenca_model->consultarPorIdLicenca($id_licenca);
		$this->dados['tipos_documentos']=	$this->documentos_tipos_licencas_model->consultarPorTipoLicenca($this->dados['protocolo']->ce_tipo_licenca);
		$this->dados['tipo_pessoa']		=	$this->dados['protocolo']->rtipo_pessoa;
		$this->dados['docs_enviar']		=	$this->dados['link_empresa'].'documentos/receberDocumentos';
		$this->dados['voltar']			=	"licencas/$link";
		$this->dados['conteudo']		=	'layouts/protocolos_documentos_view';
		$this->load->view('layouts/layout_master',$this->dados);
	}

	public function protocoloDocumentoVisualizar($id_documento){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['documento']	=	$this->documentos_licenca_model->consultarPorId($id_documento);
		var_dump($this->dados['documento']);
	}

	public function addCondicionante($id_licenca){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->form_validation->set_rules("descricao","Descrição","trim|required");

		if ($this->form_validation->run() == TRUE) {
			$dados = elements(array(
									'ce_licenca',
									'sequencial',
									'descricao',
									'dias_prazo',
									'sn_pendente'
									),
									$this->input->post());
			$dados['ce_licenca']	=	$id_licenca;
			$condicionante_licenca	=	$this->condicionantes_licenca_model->salvar($dados);

			if ($condicionante_licenca['code'] == 0) {
				$this->session->set_flashdata(
												'salvar',
												'<div class="alert alert-success" role="alert">
													<button type="button" class="close" data-dismiss="alert" aria-label="Close">
														<span aria-hidden="true">&times;</span>
													</button>
													<i class="fa fa-check"></i>&nbsp;Registro SALVO com sucesso.
												</div>'
											);
			}
			else{
				$this->session->set_flashdata(
												'salvar',
												'<div class="alert alert-danger" role="alert">
													<button type="button" class="close" data-dismiss="alert" aria-label="Close">
														<span aria-hidden="true">&times;</span>
													</button>
													<i class="fa fa-times"></i>&nbsp;Erro ao salvar registro!<br>Erro: '.$condicionante_licenca['code'].'|'.$condicionante_licenca['message'].'
												</div>'
											);
			}
			redirect("licencas/addCondicionante/$id_licenca");
		}
		
		$this->dados['licenca']					=	$this->licencas_model->consultarPorId($id_licenca);
		$this->dados['condicionantes_licenca']	=	$this->condicionantes_licenca_model->selecionarPorLicenca($id_licenca);
		$this->dados['ce_licenca']				=	$id_licenca;
		$this->dados['salvar']					=	"licencas/addCondicionante/$id_licenca";
		$this->dados['voltar']					=	base_url('licencas/analises');
		$this->dados['conteudo']				=	'layouts/licencas_condicionantes_adicionar_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function edtCondicionante($id_licenca, $id_condicionante){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->form_validation->set_rules("descricao","Descrição","trim|required");

		if ($this->form_validation->run() == TRUE) {
			$dados = elements(array(
									'sequencial',
									'descricao',
									'dias_prazo',
									'sn_pendente'
									),
									$this->input->post());
			$condicionante_licenca = $this->condicionantes_licenca_model->update($dados, $id_condicionante);

			if ($condicionante_licenca['code'] == 0) {
				$this->session->set_flashdata(
												'salvar',
												'<div class="alert alert-success" role="alert">
													<button type="button" class="close" data-dismiss="alert" aria-label="Close">
														<span aria-hidden="true">&times;</span>
													</button>
													<i class="fa fa-check"></i>&nbsp;Registro SALVO com sucesso.
												</div>'
											);
			}
			else{
				$this->session->set_flashdata(
												'salvar',
												'<div class="alert alert-danger" role="alert">
													<button type="button" class="close" data-dismiss="alert" aria-label="Close">
														<span aria-hidden="true">&times;</span>
													</button>
													<i class="fa fa-times"></i>&nbsp;Erro ao salvar registro!<br>Erro: '.$condicionante_licenca['code'].'|'.$condicionante_licenca['message'].'
												</div>'
											);
			}
			redirect("licencas/edtCondicionante/$id_licenca/$id_condicionante");
		}
		
		$this->dados['licenca']					=	$this->licencas_model->consultarPorId($id_licenca);
		$this->dados['ce_licenca']				=	$id_licenca;
		$this->dados['condicionante_licenca']	=	$this->condicionantes_licenca_model->consultarPorId($id_condicionante);
		$this->dados['salvar']					=	"licencas/edtCondicionante/$id_licenca/$id_condicionante";
		$this->dados['voltar']					=	base_url('licencas/addCondicionante/'.$id_licenca);
		$this->dados['conteudo']				=	'layouts/licencas_condicionantes_editar_view';
		$this->load->view('layouts/layout_sistema',$this->dados);
	}

	public function protocoloParecer($id_licenca,$link){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['protocolo']	=	$this->licencas_model->consultarPorId($id_licenca);
		if ($this->input->post()) {
			$id_usuario			=	$this->session->userdata('id_usuario');
			
			$latitude			=	$this->input->post('latitude');
			$longitude			=	$this->input->post('longitude');
			$num_parecer		=	$this->input->post('num_parecer');
			$contextualizacao	=	$this->input->post('contextualizacao');
			$analise			=	$this->input->post('analise');
			$referencias		=	$this->input->post('referencias');
			$parecer			=	$this->input->post('parecer');

			if ($num_parecer == '') {
				$licenca			=	$this->licencas_model->selecionarParaNumParecer($id_usuario,date("Y"));
				if (count($licenca) == 1) {
					$partes			=	explode(".", $licenca->num_parecer);
					$numparecer		=	$partes[1]+1;
					$num_parecer	=	$id_usuario.".".str_repeat("0", 6-strlen($numparecer)).$numparecer.".".date("Y");
				}
				else{
					$num_parecer	=	$id_usuario.".".str_repeat("0", 5).'1'.".".date("Y");
				}
			}

			$dadosParecer		=	array(
										'ce_usuario_parecer'=>	$id_usuario,
										'num_parecer'		=>	$num_parecer,
										'latitude'			=>	$latitude,
										'longitude'			=>	$longitude,
										'num_parecer'		=>	$num_parecer,
										'contextualizacao'	=>	$contextualizacao,
										'analise'			=>	$analise,
										'referencias'		=>	$referencias,
										'parecer'			=>	$parecer
									);

			/* Salvando os dados do Parecer */
			$salvarParecer		=	$this->licencas_model->update($dadosParecer,$id_licenca);

			if ($salvarParecer['code'] == 0) {
				$this->session->set_flashdata(
												'salvar',
												'<div class="alert alert-success" role="alert">
													<button type="button" class="close" data-dismiss="alert" aria-label="Close">
														<span aria-hidden="true">&times;</span>
													</button>
													<i class="fa fa-check"></i>&nbsp;&nbsp;Registro SALVO com sucesso.
												</div>'
											);
			}
			else{
				$this->session->set_flashdata(
												'salvar',
												'<div class="alert alert-danger" role="alert">
													<button type="button" class="close" data-dismiss="alert" aria-label="Close">
														<span aria-hidden="true">&times;</span>
													</button>
													<p><i class="fas fa-times"></i>&nbsp;&nbsp;Erro ao atualizar registro!<br>Erro: '.$salvarParecer['code'].'|'.$salvarParecer['message'].'</p>
													<p>Contate o administrador.</p>
												</div>'
											);
			}
		}

		$this->dados['condicionantes_licenca']	=	$this->condicionantes_licenca_model->selecionarPorLicenca($id_licenca);
		$this->dados['protocolo']				=	$this->licencas_model->consultarPorId($id_licenca);
		$this->dados['voltar']					=	"licencas/$link";
		$this->dados['salvar']					=	"licencas/protocoloParecer/$id_licenca/$link";
		$this->dados['conteudo']				=	'layouts/protocolos_parecer_view';
		$this->load->view('layouts/layout_master',$this->dados);
	}

	public function parecerImprimir($id_licenca, $ce_empresa='') {
		$logado = $this->Seguranca(false);	//Se o Usuario nao estiver Logado sai do Sistema

		if(!$logado && !$ce_empresa)
			redirect(base_url());

		if ($ce_empresa) {
			$this->carregarDBEmpresa($ce_empresa);
		}
		
		$this->dados['licenca']		=	$this->licencas_model->consultarPorId($id_licenca);
		$llogradouro				=	($this->dados['licenca']->logradouro) ? $this->dados['licenca']->logradouro : '';
		$lnumero					=	($this->dados['licenca']->numero) ? ', '.$this->dados['licenca']->numero : '';
		$lcomplemento				=	($this->dados['licenca']->complemento) ? ', '.$this->dados['licenca']->complemento : '';
		$lbairro					=	($this->dados['licenca']->bairro) ? ', '.$this->dados['licenca']->bairro: '';
		$lcidade					=	($this->dados['licenca']->cidade) ? ', '.$this->dados['licenca']->cidade : '';
		$luf						=	($this->dados['licenca']->uf) ? '-'.$this->dados['licenca']->uf : '';
		$lcep						=	($this->dados['licenca']->cep) ? ' CEP: '.$this->dados['licenca']->cep : '';
		$lvalor_ufmc				=	($this->dados['licenca']->valor_ufmc) ? 'valor_ufmc: '.$this->dados['licenca']->valor_ufmc : '';
		$lcep						=	($this->dados['licenca']->cep) ? ' CEP: '.$this->dados['licenca']->cep : '';
		$this->dados['licenca']->lendereco	=	$llogradouro.
												$lnumero.
												$lcomplemento.
												$lbairro.
												$lcidade.
												$luf.
												$lcep;

		$rlogradouro				=	($this->dados['licenca']->rlogradouro) ? $this->dados['licenca']->rlogradouro : '';
		$rnumero					=	($this->dados['licenca']->rnumero) ? ', '.$this->dados['licenca']->rnumero : '';
		$rcomplemento				=	($this->dados['licenca']->rcomplemento) ? ', '.$this->dados['licenca']->rcomplemento : '';
		$rbairro					=	($this->dados['licenca']->rbairro) ? ', '.$this->dados['licenca']->rbairro: '';
		$rcidade					=	($this->dados['licenca']->rcidade) ? ', '.$this->dados['licenca']->rcidade : '';
		$ruf						=	($this->dados['licenca']->ruf) ? '-'.$this->dados['licenca']->ruf : '';
		$rcep						=	($this->dados['licenca']->rcep) ? ' CEP: '.$this->dados['licenca']->rcep : '';
		$this->dados['licenca']->rendereco	=	$rlogradouro.
												$rnumero.
												$rcomplemento.
												$rbairro.
												$rcidade.
												$ruf.
												$rcep;

		$this->dados['documentos']	=	$this->documentos_licenca_model->consultarPorIdLicenca($id_licenca);
		$this->dados['condicionantes']=	$this->condicionantes_licenca_model->consultarPorLicenca($id_licenca);
		$this->dados['conteudo']	=	'layouts/parecer_imprimir_view';
		$this->load->view('layouts/layout_master',$this->dados);	
	}

	public function inserirFotosParecer($id_licenca){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['fotos_parecer']=	$this->fotos_parecer_model->consultarPorIdLicenca($id_licenca);
		$this->dados['licenca']		=	$this->licencas_model->consultarPorId($id_licenca);
		$this->dados['requerente']	=	$this->requerentes_model->consultarPorId($this->dados['licenca']->rid);
		$this->dados['voltar']		=	"licencas/$link";
		$this->dados['salvar']		=	"licencas/protocoloParecer/$id_licenca/$link";
		$this->dados['conteudo']	=	'layouts/protocolos_inserirFotos_view';
		$this->load->view('layouts/layout_master',$this->dados);
	}

	public function requerimentoInscricaoImprimir($id_licenca){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['licenca']		=	$this->licencas_model->consultarPorId($id_licenca);
		$llogradouro				=	($this->dados['licenca']->logradouro) ? $this->dados['licenca']->logradouro : '';
		$lnumero					=	($this->dados['licenca']->numero) ? ', '.$this->dados['licenca']->numero : '';
		$lcomplemento				=	($this->dados['licenca']->complemento) ? ', '.$this->dados['licenca']->complemento : '';
		$lbairro					=	($this->dados['licenca']->bairro) ? ', '.$this->dados['licenca']->bairro: '';
		$lcidade					=	($this->dados['licenca']->cidade) ? ', '.$this->dados['licenca']->cidade : '';
		$luf						=	($this->dados['licenca']->uf) ? '-'.$this->dados['licenca']->uf : '';
		$lcep						=	($this->dados['licenca']->cep) ? ' CEP: '.$this->dados['licenca']->cep : '';
		$llp						=	($this->dados['licenca']->lp) ? ' lp: '.$this->dados['licenca']->lp : '';
		$llo						=	($this->dados['licenca']->lo) ? ' lo: '.$this->dados['licenca']->lo : '';
		$lli						=	($this->dados['licenca']->lo) ? ' li: '.$this->dados['licenca']->lo : '';
		$lls						=	($this->dados['licenca']->ls) ? ' ls: '.$this->dados['licenca']->ls : '';
		$ltotal_ufmc					=	($this->dados['licenca']->total_ufmc) ? ' total_ufmc: '.$this->dados['licenca']->total_ufmc : '';
		
		$porte_atividade						=	($this->dados['licenca']->porte_atividade) ? ' ls: '.$this->dados['licenca']->porte_atividade : '';
		$potencial_poluidor							=	($this->dados['licenca']->potencial_poluidor	) ? ' ls: '.$this->dados['licenca']->potencial_poluidor	 : '';
		

		$this->dados['licenca']->lendereco	=	$llogradouro.
												$lnumero.
												$lcomplemento.
												$lbairro.
												$lcidade.
												$luf.
												$lcep;
		$rlogradouro				=	($this->dados['licenca']->rlogradouro) ? $this->dados['licenca']->rlogradouro : '';
		$rnumero					=	($this->dados['licenca']->rnumero) ? ', '.$this->dados['licenca']->rnumero : '';
		$rcomplemento				=	($this->dados['licenca']->rcomplemento) ? ', '.$this->dados['licenca']->rcomplemento : '';
		$rbairro					=	($this->dados['licenca']->rbairro) ? ', '.$this->dados['licenca']->rbairro: '';
		$rcidade					=	($this->dados['licenca']->rcidade) ? ', '.$this->dados['licenca']->rcidade : '';
		$ruf						=	($this->dados['licenca']->ruf) ? '-'.$this->dados['licenca']->ruf : '';
		$rcep						=	($this->dados['licenca']->rcep) ? ' CEP: '.$this->dados['licenca']->rcep : '';
		$this->dados['licenca']->rendereco	=	$rlogradouro.
												$rnumero.
												$rcomplemento.
												$rbairro.
												$rcidade.
												$ruf.
												$rcep;

		$this->dados['conteudo']	=	'layouts/req_inscricao_imprimir_view';
		$this->load->view('layouts/layout_master',$this->dados);
	}

	public function inscricaoImprimir($id_licenca){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		$this->dados['licenca']		=	$this->licencas_model->consultarPorId($id_licenca);

		$this->dados['conteudo']	=	'layouts/inscricao_imprimir_view';
		$this->load->view('layouts/layout_master',$this->dados);
	}

	public function gerarPDF(){
		// Instancia a classe mPDF
		$mpdf	=	new mPDF();
		$logo_empresa	=	$this->dados['logo_empresa'];
		$pdf_cabecalho1	=	$this->dados['pdf_cabecalho1'];
		$pdf_cabecalho2	=	$this->dados['pdf_cabecalho2'];
		$pdf_cabecalho3	=	$this->dados['pdf_cabecalho3'];
		$htmlCabecalho	=	"<div>
								<div style='float: left; width: 30%;'>
									<img src=$logo_empresa style='height: 50px; width: auto;'>
								</div>
								<div style='float: left; width: 70%;'>
									<strong>$pdf_cabecalho1</strong><br>
									<strong>$pdf_cabecalho2</strong><br>
									<strong>$pdf_cabecalho3</strong>
								</div>
								<div style='clear: both; margin: 0pt; padding: 0pt;'></div>
							</div>";
		// $htmlCabecalho	=	"<div style='display: inline-block;'><div><img src=$logo_empresa style='height: 50px; width: auto;'></div><div>$pdf_cabecalho1</div></div>";
		$htmlDate		=	"<p>".date("d/m/Y")."</p>";
		$htmlRequerente	=	"<p>Requerente: <strong>Logon Informática</strong> CPF/CNPJ: <strong>000.000.000-00</strong></p>";
		$htmlProtocolo	=	"<p>Protocolo: <strong>".date("d/m/Y")."</<strong></p>";
		$htmlHR			=	"<hr>";
		$htmlDespacho	=	"CORPO DO DESPACHO TÉCNICO.";
		// Define um Cabeçalho para o arquivo PDF
		$mpdf->SetHeader($htmlCabecalho.'DESPACHO TÉCNICO - Pág. {PAGENO}');
		// Define um rodapé para o arquivo PDF, nesse caso inserindo o número da
		// página através da pseudo-variável PAGENO
		$mpdf->SetFooter('{PAGENO}');
		// Insere o conteúdo da variável $html no arquivo PDF
		// $mpdf->writeHTML($html);
		// Cria uma nova página no arquivo
		// $mpdf->AddPage();
		// Insere o conteúdo na nova página do arquivo PDF
		// $mpdf->WriteHTML($htmlCabecalho);
		$mpdf->WriteHTML($htmlDate);
		$mpdf->WriteHTML($htmlRequerente);
		$mpdf->WriteHTML($htmlProtocolo);
		$mpdf->WriteHTML($htmlHR);
		$mpdf->WriteHTML($htmlDespacho);
		// Gera o arquivo PDF
		// I – Envia o arquivo para ser exibido no navegador se o mesmo possuir o plugin Adobe instalado e salva com o nome passado como parâmetro se o usuário clicar em “Save as”.
		// D – Força um download com o nome do arquivo passado como parâmetro.
		// F – Salva em um diretório local com o nome passado como parâmetros (incluir o caminho do diretório).
		// S – Devolve o documento em forma de string.
		// $mpdf->Output(base_url("assets/uploads/docs_despachos/$doc_despacho"),"F");
		$doclink_empresa	=	str_replace("/", "\\", $link_empresa);
		$docdoc_path		=	str_replace("/", "\\", $doc_path);
		$arquivo_gerado1	=	"$link_empresa$doc_path/$doc_despacho";
		$arquivo_gerado		=	"./assets/uploads/docs_despachos/arquivo_teste.pdf";
		// $arquivo_gerado	=	"D:\\wamp\\www\\Semapa\\assets\\uploads\\licencas_docs\\$doc_despacho";
		$mpdf->Output($arquivo_gerado,"F");
		// echo $arquivo_gerado;
		echo $doclink_empresa."<br>".$docdoc_path."<br>";
	}

	public function protocoloAprovar($id_licenca,$link){
		$this->Seguranca();	//Se o Usuario nao estiver Logado sai do Sistema

		if($this->dados['perfil_usuario'] != 'A') {
			echo '0';
			return;
		}

		$id_usuario	= $this->dados['id_usuario'];

		$dadosAprovacao = array(
			'ce_usuario_aprovacao'	=>	$id_usuario,
			'dt_autorizacao'		=>	date('Y-m-d H:i:s')
		);

		$update = $this->licencas_model->update($dadosAprovacao,$id_licenca);

		if (!$update) {
			echo '0';
		}
	}

	public function operacaoImprimir($id_licenca, $ce_empresa) {
		$logado = $this->Seguranca(false);	//Se o Usuario nao estiver Logado sai do Sistema

		if(!$logado && !$ce_empresa)
			redirect(base_url());

		if ($ce_empresa) {
			$this->carregarDBEmpresa($ce_empresa);
		}
		
		$this->dados['licenca']				=	$this->licencas_model->consultarPorId($id_licenca);
		//$this->dados['usuario_aprovacao']	=	$this->usuarios_model->consultarPorId($this->dados['licenca']->ce_usuario_aprocavao);
		$this->dados['condicionantes']		=	$this->condicionantes_licenca_model->selecionarPorLicenca($id_licenca);

		$this->dados['qrcode']		=	QRcode::png(base_url('operacaoImprimir/'.$id_licenca),  APPPATH.'/../assets/images/qr/lic-'. $this->dados['licenca']->id .'.png', QR_ECLEVEL_H, 4, 2); 

		$this->dados['conteudo']	=	'layouts/operacao_imprimir_view';
		$this->load->view('layouts/layout_master', $this->dados);
	}
}