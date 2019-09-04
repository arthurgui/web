<?php defined('BASEPATH') OR exit('No direct script access allowed');

class MY_Controller extends CI_Controller {

	public $dados;

	public function __construct(){
		parent::__construct();
		/* carregando configurações*/
		$this->dados['title']					=	$this->config->item('title','myconfig');
		$this->dados['copyright']				=	$this->config->item('copyright','myconfig');
		$this->dados['assets']					=	$this->config->item('assets','myconfig');
		$this->dados['bootstrap4css']			=	$this->config->item('bootstrap4css','myconfig');
		$this->dados['bootstrapcss']			=	$this->config->item('bootstrapcss','myconfig');
		$this->dados['bootstrap4js']			=	$this->config->item('bootstrap4js','myconfig');
		$this->dados['bootstrapjs']				=	$this->config->item('bootstrapjs','myconfig');
		$this->dados['bootstrap_chosencss']		=	$this->config->item('bootstrap_chosencss','myconfig');
		$this->dados['bootstrap_chosenjs']		=	$this->config->item('bootstrap_chosenjs','myconfig');
		$this->dados['ckeditorjs']				=	$this->config->item('ckeditorjs','myconfig');
		$this->dados['ckeditor5js']				=	$this->config->item('ckeditor5js','myconfig');
		$this->dados['ckeditor5ptbrjs']			=	$this->config->item('ckeditor5ptbrjs','myconfig');
		$this->dados['cpf_cnpjjs']				=	$this->config->item('cpf_cnpjjs','myconfig');
		$this->dados['datatablesjs']			=	$this->config->item('datatablesjs','myconfig');
		$this->dados['datatablescss']			=	$this->config->item('datatablescss','myconfig');
		$this->dados['datatablesbootstrapjs']	=	$this->config->item('datatablesbootstrapjs','myconfig');
		$this->dados['datetimemomentjs']		=	$this->config->item('datetimemomentjs','myconfig');
		$this->dados['favicon']					=	$this->config->item('favicon','myconfig');
		$this->dados['fontawesomejs']			=	$this->config->item('fontawesomejs','myconfig');
		$this->dados['fontawesomecss']			=	$this->config->item('fontawesomecss','myconfig');
		$this->dados['functionsjs']				=	$this->config->item('functionsjs','myconfig');
		$this->dados['holderjs']				=	$this->config->item('holderjs','myconfig');
		$this->dados['jqueryformjs']			=	$this->config->item('jqueryformjs','myconfig');
		$this->dados['images']					=	$this->config->item('images','myconfig');
		$this->dados['jqueryjs']				=	$this->config->item('jqueryjs','myconfig');
		$this->dados['jasny_bootstrapjs']		=	$this->config->item('jasny_bootstrapjs','myconfig');
		$this->dados['jasny_bootstrapcss']		=	$this->config->item('jasny_bootstrapcss','myconfig');
		$this->dados['jqueryslimjs']			=	$this->config->item('jqueryslimjs','myconfig');
		$this->dados['momentjs']				=	$this->config->item('momentjs','myconfig');
		$this->dados['moment_localejs']			=	$this->config->item('moment_localejs','myconfig');
		$this->dados['pagingjs']				=	$this->config->item('pagingjs','myconfig');
		$this->dados['popperjs']				=	$this->config->item('popperjs','myconfig');
		$this->dados['scriptjs']				=	$this->config->item('scriptjs','myconfig');
		$this->dados['stylecss']				=	$this->config->item('stylecss','myconfig');
		$this->dados['tinymcejs']				=	$this->config->item('tinymcejs','myconfig');
		$this->dados['toastrcss']				=	$this->config->item('toastrcss','myconfig');
		$this->dados['toastrjs']				=	$this->config->item('toastrjs','myconfig');
		$this->dados['webshim']					=	$this->config->item('webshim','myconfig');

		$this->dados['backupDB']				=	$this->config->item('backupDB','arquivos');
		$this->dados['backupTB']				=	$this->config->item('backupTB','arquivos');
		$this->dados['docs_despachos']			=	$this->config->item('docs_despachos','arquivos');
		$this->dados['licencas_docs']			=	$this->config->item('licencas_docs','arquivos');
		$this->dados['imagens_parecer']			=	$this->config->item('imagens_parecer','arquivos');

		$this->dados['table_tmpl']				=	array(
															'table_open'			=>	'<table id="table-list" class="table table-bordered table-sm table-hover table-striped dataTable"> ',
															'heading_row_start'		=>	'<tr class="heading">',
															'heading_row_end'		=>	'</tr>',
															'heading_cell_start'	=>	'<th class="text-center">',
															'heading_cell_end'		=>	'</th>',
															'row_start'				=>	'<tr>',
															'row_end'				=>	'</tr>',
															'cell_start'			=>	'<td class="text-center">',
															'cell_end'				=>	'</td>',
															'row_alt_start'			=>	'<tr class="alt">',
															'row_alt_end'			=>	'</tr>',
															'cell_alt_start'		=>	'<td class="text-center">',
															'cell_alt_end'			=>	'</td>',
															'table_close'			=>	'</table>'
													);
		$this->dados['table_tmpl_tbno']			=	array(
															'table_open'			=>	'<table id="table-list" class="table table-bordered table-sm table-hover table-striped"> ',
															'heading_row_start'		=>	'<tr class="heading">',
															'heading_row_end'		=>	'</tr>',
															'heading_cell_start'	=>	'<th class="text-center">',
															'heading_cell_end'		=>	'</th>',
															'row_start'				=>	'<tr>',
															'row_end'				=>	'</tr>',
															'cell_start'			=>	'<td class="text-center">',
															'cell_end'				=>	'</td>',
															'row_alt_start'			=>	'<tr class="alt">',
															'row_alt_end'			=>	'</tr>',
															'cell_alt_start'		=>	'<td class="text-center">',
															'cell_alt_end'			=>	'</td>',
															'table_close'			=>	'</table>'
													);
		$this->dados['opt_pf_pj']				=	array(
														'F'	=>	'Física',
														'J'	=>	'Jurídica'
													);
		$this->dados['opt_uf']					=	array(
														''		=>	'***',
														'AC'	=>	'AC',
														'AL'	=>	'AL',
														'AM'	=>	'AM',
														'AP'	=>	'AP',
														'BA'	=>	'BA',
														'CE'	=>	'CE',
														'DF'	=>	'DF',
														'ES'	=>	'ES',
														'GO'	=>	'GO',
														'MA'	=>	'MA',
														'MG'	=>	'MG',
														'MS'	=>	'MS',
														'MT'	=>	'MT',
														'PA'	=>	'PA',
														'PB'	=>	'PB',
														'PE'	=>	'PE',
														'PI'	=>	'PI',
														'PR'	=>	'PR',
														'RJ'	=>	'RJ',
														'RN'	=>	'RN',
														'RO'	=>	'RO',
														'RR'	=>	'RR',
														'RS'	=>	'RS',
														'SC'	=>	'SC',
														'SE'	=>	'SE',
														'SP'	=>	'SP',
														'TO'	=>	'TO'
													);
		$this->dados['label_mb2']				= 	array(
													'class'	=>	"mb-2"
												);
		$this->dados['label_mb1']				= 	array(
													'class'	=>	"mb-1"
												);
		$this->dados['label5']					=	array(
														'class'	=>	"col-sm-5 col-form-label text-right"
													);
		$this->dados['label4']					=	array(
														'class'	=>	"col-sm-4 col-form-label text-right"
													);
		$this->dados['label3']					= 	array(
														'class'	=>	"col-3 col-form-label text-right"
													);
		$this->dados['label2']					= 	array(
														'class'	=>	"col-2 col-form-label text-right"
													);
		$this->dados['label1']					= 	array(
														'class'	=>	"col-1 col-form-label text-right"
													);
		$this->dados['form_attr']				= 	array(
														'id'	=>	'form_insert',
														'name'	=>	'form_insert',
														'class'	=>	"form-horizontal" ,
														'role'	=>	"form"
													);
		$this->dados['form_parecer']				= 	array(
														'id'	=>	'form_parecer',
														'name'	=>	'form_parecer',
														'class'	=>	"form-horizontal" ,
														'role'	=>	"form",
														'novalidate'	=>	''
													);
		$this->dados['form_upload']				= 	array(
														'class'			=>	"form-horizontal form-upload-docs" ,
														'role'			=>	"form",
														'id'			=>	'form_upload',
														'name'			=>	'form_upload',
														'novalidate'	=>	''
													);
		$this->dados['form_physis']				=	array(
														'id'			=>	'form_physis',
														'name'			=>	'form_physis',
														'target'		=>	'_blank'
													);
		$this->dados['form_consulta']			= 	array(
														'id'			=>	'form_consulta',
														'name'			=>	'form_consulta',
														'class'			=>	"form-horizontal",
														'role'			=>	"form",
													);
		$this->dados['form_login']				= 	array(
														'id'			=>	'form_login',
														'name'			=>	'form_login',
														'class'			=>	"form-horizontal" ,
														'role'			=>	"form"
												);
		$this->dados['form_protEncaminhar']		= 	array(
														'id'	=>	'formEncaminhar',
														'name'	=>	'formEncaminhar',
														'class'	=>	"form-horizontal" ,
														'role'	=>	"form",
														'target'=>	'_blank'
												);
		$this->dados['opt_acessos']				=	array(
														'N'	=>	'Sem Acesso',
														'R'	=>	'Leitura',
														'W'	=>	'Leitura/Escrita'
												);
		$this->dados['class']					=	' class="form-control" ';
		$this->dados['required']				=	' required ';

		$this->load->model('seguranca_model');//Model de segurança de Session

		if ($this->session->userdata('is_logged_in')) {
			$this->dados['id_usuario']			=	$this->session->userdata('id_usuario');
			$this->dados['nome_usuario']		=	$this->session->userdata('nome');
			$this->dados['matricula_usuario']	=	$this->session->userdata('matricula');
			$this->dados['login_usuario']		=	$this->session->userdata('login');
			$this->dados['status_usuario']		=	$this->session->userdata('status');
			$this->dados['perfil_usuario']		=	$this->session->userdata('perfil');
			$this->dados['email_usuario']		=	$this->session->userdata('email');
			$this->dados['assinatura_usuario']	=	$this->session->userdata('assinatura');
			$this->dados['funcao_usuario']		=	$this->session->userdata('funcao');
			$this->dados['setor_usuario']		=	$this->session->userdata('setor');
		}

		if ($this->session->userdata('empresa')) {
			$this->dados['db_empresa']	=	array(
													'dsn'			=>	'',
													'hostname'		=>	$this->session->userdata('empresa')->hostname,
													'username'		=>	$this->session->userdata('empresa')->username,
													'password'		=>	$this->session->userdata('empresa')->password,
													'database'		=>	$this->session->userdata('empresa')->database,
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
			// $this->dados['db_conecta']			=	$this->load->database($this->dados['db_empresa'], TRUE);
			$this->dados['nome_empresa']		=	$this->session->userdata('empresa')->descricao;
			$this->dados['logo_empresa']		=	$this->session->userdata('empresa')->img_logo;
			$this->dados['link_empresa']		=	$this->session->userdata('empresa')->link;
			$this->dados['path_images']			=	$this->session->userdata('empresa')->path_images;
			$this->dados['path_uploads']		=	$this->session->userdata('empresa')->path_uploads;
			$this->dados['path_docs_despachos']	=	$this->session->userdata('empresa')->path_docs_despachos;
			$this->dados['pdf_cabecalho1']		=	$this->session->userdata('empresa')->pdf_cabecalho1;
			$this->dados['pdf_cabecalho2']		=	$this->session->userdata('empresa')->pdf_cabecalho2;
			$this->dados['pdf_cabecalho3']		=	$this->session->userdata('empresa')->pdf_cabecalho3;
			$this->dados['pdf_cabecalho4']		=	$this->session->userdata('empresa')->pdf_cabecalho4;
		}
	}

	function Seguranca($redirect=true){//Carregar a URL Para verificar Session
		$url	=	"http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
		return $this->seguranca_model->SessionActivo($url, $redirect);
	}

	function Tipo_Acesso($modulo){
		if ($this->session->userdata('funcao') != 'E') {
			$retorno = $this->session->userdata($modulo);
		}
		else {
			$retorno = 'R';
		}
		return $retorno;
	}

	function MySQLErro($code){
		$erro	=	array(
							"1000"	=>	"",
							"1001"	=>	"",
							"1002"	=>	"",
							"1003"	=>	"",
							"1004"	=>	"Impossível criar o arquivo! (ER_CANT_CREATE_FILE)",					// Can't create file '%s' (errno: %d)
							"1005"	=>	"Impossível criar a tabela! (ER_CANT_CREATE_TABLE)",					// Can't create table '%s' (errno: %d)
							"1006"	=>	"Impossível criar database! (ER_CANT_CREATE_DB)",						// Can't create database '%s' (errno: %d)
							"1007"	=>	"Impossível criar database. Ela já existe! (ER_DB_CREATE_EXISTS)",		// Can't create database '%s'; database exists
							"1008"	=>	"Impossível excluir database. Ela não existe! (ER_DB_DROP_EXISTS)",		// Can't drop database '%s'; database doesn't exist
							"1009"	=>	"Erro excluindo database! (ER_DB_DROP_DELETE)",							// Error dropping database (can't delete '%s', errno: %d)
							"1010"	=>	"Erro excluindo database! (ER_DB_DROP_RMDIR)",							// Error dropping database (can't rmdir '%s', errno: %d)
							"1011"	=>	"Erro na exclusão! (ER_CANT_DELETE_FILE)",								// Error on delete of '%s' (errno: %d)
							"1012"	=>	"Não é possível ler o registro na tabela do sistema (ER_CANT_FIND_SYSTEM_REC)",	// Can't read record in system table
							"1013"	=>	"Não é possível obter o status (ER_CANT_GET_STAT)",						// Can't get status of '%s' (errno: %d)
							"1014"	=>	"",
							"1015"	=>	"",
							"1016"	=>	"",
							"1017"	=>	"",
							"1018"	=>	"",
							"1019"	=>	"",
							"1020"	=>	"",
							"1021"	=>	"",
							"1022"	=>	"",
							"1023"	=>	"",
							"1024"	=>	"",
							"1025"	=>	"",
							"1026"	=>	"",
							"1027"	=>	"",
							"1028"	=>	"",
							"1029"	=>	"",
							"1030"	=>	"",
							"1031"	=>	"",
							"1032"	=>	"",
							"1033"	=>	"",
							"1034"	=>	"",
							"1035"	=>	"",
							"1036"	=>	"",
							"1037"	=>	"",
							"1038"	=>	"",
							"1039"	=>	"",
							"1040"	=>	"",
							"1041"	=>	"",
							"1042"	=>	"",
							"1043"	=>	"",
							"1044"	=>	"",
							"1045"	=>	"",
							"1046"	=>	"",
							"1047"	=>	"",
							"1048"	=>	"",
							"1049"	=>	"",
							"1050"	=>	"",
							"1051"	=>	"",
							"1052"	=>	"",
							"1053"	=>	"",
							"1054"	=>	"",
							"1055"	=>	"",
							"1056"	=>	"",
							"1057"	=>	"",
							"1058"	=>	"",
							"1059"	=>	"",
							"1060"	=>	"",
							"1061"	=>	"",
							"1062"	=>	"Entrada duplicada para a chave primária (ER_DUP_ENTRY)",	// Duplicate entry '%s' for key %d
							"1063"	=>	"",
							"1064"	=>	"",
							"1065"	=>	"",
							"1066"	=>	"",
							"1067"	=>	"",
							"1068"	=>	"",
							"1069"	=>	"",
							"1070"	=>	"",
							"1071"	=>	"",
							"1072"	=>	"",
							"1073"	=>	"",
							"1074"	=>	"",
							"1075"	=>	"",
							"1076"	=>	"",
							"1077"	=>	"",
							"1078"	=>	"",
							"1079"	=>	"",
							"1080"	=>	"",
							"1081"	=>	"",
							"1082"	=>	"",
							"1083"	=>	"",
							"1084"	=>	"",
							"1085"	=>	"",
							"1086"	=>	"",
							"1087"	=>	"",
							"1088"	=>	"",
							"1089"	=>	"",
							"1090"	=>	"",
							"1091"	=>	"",
							"1092"	=>	"",
							"1093"	=>	"",
							"1094"	=>	"",
							"1095"	=>	"",
							"1096"	=>	"",
							"1097"	=>	"",
							"1098"	=>	"",
							"1099"	=>	"",
							"1100"	=>	"",
							"1101"	=>	"",
							"1102"	=>	"",
							"1103"	=>	"",
							"1104"	=>	"",
							"1105"	=>	"",
							"1106"	=>	"",
							"1107"	=>	"",
							"1108"	=>	"",
							"1109"	=>	"",
							"1110"	=>	"",
							"1111"	=>	"",
							"1112"	=>	"",
							"1113"	=>	"",
							"1114"	=>	"",
							"1115"	=>	"",
							"1116"	=>	"",
							"1117"	=>	"",
							"1118"	=>	"",
							"1119"	=>	"",
							"1120"	=>	"",
							"1121"	=>	"",
							"1122"	=>	"",
							"1123"	=>	"",
							"1124"	=>	"",
							"1125"	=>	"",
							"1126"	=>	"",
							"1127"	=>	"",
							"1128"	=>	"",
							"1129"	=>	"",
							"1130"	=>	"",
							"1131"	=>	"",
							"1132"	=>	"",
							"1133"	=>	"",
							"1134"	=>	"",
							"1135"	=>	"",
							"1136"	=>	"",
							"1137"	=>	"",
							"1138"	=>	"",
							"1139"	=>	"",
							"1140"	=>	"",
							"1141"	=>	"",
							"1142"	=>	"",
							"1143"	=>	"",
							"1144"	=>	"",
							"1145"	=>	"",
							"1146"	=>	"",
							"1147"	=>	"",
							"1148"	=>	"",
							"1149"	=>	"",
							"1150"	=>	"",
							"1151"	=>	"",
							"1152"	=>	"",
							"1153"	=>	"",
							"1154"	=>	"",
							"1155"	=>	"",
							"1156"	=>	"",
							"1157"	=>	"",
							"1158"	=>	"",
							"1159"	=>	"",
							"1160"	=>	"",
							"1161"	=>	"",
							"1162"	=>	"",
							"1163"	=>	"",
							"1164"	=>	"",
							"1165"	=>	"",
							"1166"	=>	"",
							"1167"	=>	"",
							"1168"	=>	"",
							"1169"	=>	"",
							"1170"	=>	"",
							"1171"	=>	"",
							"1172"	=>	"",
							"1173"	=>	"",
							"1174"	=>	"",
							"1175"	=>	"",
							"1176"	=>	"",
							"1177"	=>	"",
							"1178"	=>	"",
							"1179"	=>	"",
							"1180"	=>	"",
							"1181"	=>	"",
							"1182"	=>	"",
							"1183"	=>	"",
							"1184"	=>	"",
							"1185"	=>	"",
							"1186"	=>	"",
							"1187"	=>	"",
							"1188"	=>	"",
							"1189"	=>	"",
							"1190"	=>	"",
							"1191"	=>	"",
							"1192"	=>	"",
							"1193"	=>	"",
							"1194"	=>	"",
							"1195"	=>	"",
							"1196"	=>	"",
							"1197"	=>	"",
							"1198"	=>	"",
							"1199"	=>	"",
							"1200"	=>	"",
							"1201"	=>	"",
							"1202"	=>	"",
							"1203"	=>	"",
							"1204"	=>	"",
							"1205"	=>	"",
							"1206"	=>	"",
							"1207"	=>	"",
							"1208"	=>	"",
							"1209"	=>	"",
							"1210"	=>	"",
							"1211"	=>	"",
							"1212"	=>	"",
							"1213"	=>	"",
							"1214"	=>	"",
							"1215"	=>	"",
							"1216"	=>	"",
							"1217"	=>	"",
							"1218"	=>	"",
							"1219"	=>	"",
							"1220"	=>	"",
							"1221"	=>	"",
							"1222"	=>	"",
							"1223"	=>	"",
							"1224"	=>	"",
							"1225"	=>	"",
							"1226"	=>	"",
							"1227"	=>	"",
							"1228"	=>	"",
							"1229"	=>	"",
							"1230"	=>	"",
							"1231"	=>	"",
							"1232"	=>	"",
							"1233"	=>	"",
							"1234"	=>	"",
							"1235"	=>	"",
							"1236"	=>	"",
							"1237"	=>	"",
							"1238"	=>	"",
							"1239"	=>	"",
							"1240"	=>	"",
							"1241"	=>	"",
							"1242"	=>	"",
							"1243"	=>	"",
							"1244"	=>	"",
							"1245"	=>	"",
							"1246"	=>	"",
							"1247"	=>	"",
							"1248"	=>	"",
							"1249"	=>	"",
							"1250"	=>	"",
						);
		if(array_key_exists($code,$erro)){
			$mensagem	=	$erro[$code];
		}
		else{
			$mensagem =	"Código ".$code;
		}
		return $mensagem;
	}

	function Tamanho_arquivo($arquivo) {
		$tamanhoarquivo = filesize($arquivo);
		/* Medidas */
		$medidas = array('KB', 'MB', 'GB', 'TB');
		/* Se for menor que 1KB arredonda para 1KB */
		if($tamanhoarquivo < 999){
			$tamanhoarquivo = 1000;
		}
		for ($i = 0; $tamanhoarquivo > 999; $i++){
			$tamanhoarquivo /= 1024;
		}
		return round($tamanhoarquivo) . $medidas[$i - 1];
	}
}