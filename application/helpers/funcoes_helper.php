<?php
/**
*
* @author     Everlon Passos <dev@everlon.com.br>
* @link       http://www.everlon.com.br Página pessoal do Autor
* @version    1.0-dev
* @copyright  2012-2013 Everlon Passos bruna :)
*
*/

function nomemes($mes){
	$meses				=	array (
								1 => "Janeiro",
								2 => "Fevereiro",
								3 => "Março",
								4 => "Abril",
								5 => "Maio",
								6 => "Junho",
								7 => "Julho",
								8 => "Agosto",
								9 => "Setembro",
								10 => "Outubro",
								11 => "Novembro",
								12 => "Dezembro");

	return $meses[$mes];
}
/* Dias e Meses em extenso */

$diasdasemana		=	array (
								0 => "Domingo",
								1 => "Segunda-Feira",
								2 => "Terça-Feira",
								3 => "Quarta-Feira",
								4 => "Quinta-Feira",
								5 => "Sexta-Feira",
								6 => "Sábado"
							);

// $hoje				=	getdate();
// $dia				=	$hoje["mday"];
// $mes				=	$hoje["mon"];
// //$nomemes			=	$meses[$mes];
// $ano				=	$hoje["year"];
// $diadasemana		=	$hoje["wday"];
// $nomediadaseman		=	$diasdasemana[$diadasemana];
//Ex: echo "$nomediadasemana, $dia de $nomemes de $ano";
/* /Dias e Meses em extenso */

function data_to_db($data) {
	return implode('', array_reverse(explode('-', $data)));
}

function data_br($data){
	if(strpos($data, '-')){ 
			return implode('/', array_reverse(explode('-', $data)));
	}
	else{
		return $data;
	}
}

function formata_CNPJ($numero){
	$numero = preg_replace("[' '-./ t]", '', $numero);
	$valor  = str_pad(preg_replace('[^0-9]', '', $numero), 14, '0', STR_PAD_LEFT);
	return preg_replace('/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/', '$1.$2.$3/$4-$5', $valor);
}

function formata_CEP($numero){
	$numero = preg_replace("[' '-./ t]", '', $numero);
	$valor  = str_pad(preg_replace('[^0-9]', '', $numero), 7, '0', STR_PAD_LEFT);
	return preg_replace('/^(\d{2})(\d{3})(\d{3})$/', '$1.$2-$3', $valor);
}

function valida_Email($email){
	$string = strtolower($email);
	if (preg_match( '/^[^0-9][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[@][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}$/', $string)){ 
		return $string;
	}
}

function formata_TEL($numero){
	$numero = preg_replace("[' '-./ t]", '', $numero);
	$valor  = str_pad(preg_replace('[^0-9]', '', $numero), 10, '0', STR_PAD_LEFT);
	return preg_replace('/^(\d{2})(\d{4})(\d{4})$/', '($1) $2-$3', $valor);
}

function formatarCPF_CNPJ($campo, $formatado=TRUE){
	# retira formato
	$codigoLimpo = preg_replace("[' '-./ t]", '', $campo);
	
	# pega o tamanho da string menos os digitos verificadores
	$tamanho = (strlen($codigoLimpo) -2);
	
	# verifica se o tamanho do código informado é válido
	if ($tamanho != 9 && $tamanho != 12){
		return FALSE;
	}

	if ($formatado)	{
		# seleciona a máscara para cpf ou cnpj
		$mascara = ($tamanho == 9) ? '###.###.###-##' : '##.###.###/####-##';

		$indice = -1;
		for ($i=0; $i < strlen($mascara); $i++)	{
			if ($mascara[$i]=='#') $mascara[$i] = $codigoLimpo[++$indice];
		}
		
		#retorna o campo formatado
		$retorno = $mascara;
	}
	else{
		//se não quer formatado, retorna o campo limpo
		$retorno = $codigoLimpo;
	}
	return $retorno;

} # formatarCPF_CNPJ

function moeda_br($campo=NULL, $mask=NULL){
	if(isset($campo)){ 
		$campo_n = 'R$ ' . number_format((int)$campo, 2, ',', '.'); # retorna no formato R$ 100.000,50
		$mask = 'decimal';
		return array($campo_n, $mask);
	}
	
	else{
		return FALSE;
	}
}

function cria_senha(){
	$pwd = sha1(uniqid(time(), true));
	$pwd = substr($pwd, 0, 8);
	return $pwd;
}

function objeto2Array($objeto){
	$arr = array();
	for($i = 0; $i < count($objeto); $i++){
		$arr[] = get_object_vars( $objeto[$i] );
	}
	return $arr;
}

function zeroAleft($campo=NULL, $zeros=1){
	# Define a quantidade de números preenchendo a esquerda com zeros
	if ( isset($campo) ) {
		return str_pad( $campo, (int)$zeros, "0", STR_PAD_LEFT );
	}
	else {
		return FALSE;
	}
}

function Debug($value){
	/*
	* Formas de uso
	* @ Debug($_POST);
	* @ Debug($_GET);
	* @ Debug($_REQUEST);
	*/
	echo "<pre>";
	print_r($value);
	echo "<pre>";

	exit(); # You shall not pass!
}



# Acrescentando a função para servidores anteriores ao PHP 5.3 (precisei dessa função e meu server era 5.2)

# (PHP 5 >= 5.3.0)
# array_replace — Replaces elements from passed arrays into the first array

if (!function_exists('array_replace')){
	function array_replace( array &$array, array &$array1 )	{
		$args = func_get_args();
		$count = func_num_args();

		for ($i = 0; $i < $count; ++$i) {
			if (is_array($args[$i])) {
				foreach ($args[$i] as $key => $val) {
					$array[$key] = $val;
				}
			}
			else {
				trigger_error(
					__FUNCTION__ . '(): Argumento #' . ($i+1) . ' não é um array',
					E_USER_WARNING
				);
				return NULL;
			}
		}

		return $array;
	}
}

# Função VOLTAR em JS
# Define a quantidade de páginas no histórico se quer voltar
function voltar($i=1) {
	echo '<script type="text/javascript">history.go(-'.$i.')</script>';
}


/* Moeda por extenso */
function extenso( $valor, $moedaSing, $moedaPlur, $centSing, $centPlur ) {

	$centenas 	=	array(0,
					array(0, "cento",        "cem"),
					array(0, "duzentos",     "duzentos"),
					array(0, "trezentos",    "trezentos"),
					array(0, "quatrocentos", "quatrocentos"),
					array(0, "quinhentos",   "quinhentos"),
					array(0, "seiscentos",   "seiscentos"),
					array(0, "setecentos",   "setecentos"),
					array(0, "oitocentos",   "oitocentos"),
					array(0, "novecentos",   "novecentos") ) ;

	$dezenas	=	array(0,
						"dez",
						"vinte",
						"trinta",
						"quarenta",
						"cinqüenta",
						"sessenta",
						"setenta",
						"oitenta",
						"noventa" ) ;

	$unidades	=	array(0,
						"um",
						"dois",
						"três",
						"quatro",
						"cinco",
						"seis",
						"sete",
						"oito",
						"nove" ) ;

	$excecoes	=	array(0,
						"onze",
						"doze",
						"treze",
						"quatorze",
						"quinze",
						"dezeseis",
						"dezesete",
						"dezoito",
						"dezenove" ) ;

	$extensoes	= 	array(0,
					array(0, "",       ""),
					array(0, "mil",    "mil"),
					array(0, "milhão", "milhões"),
					array(0, "bilhão", "bilhões"),
					array(0, "trilhão","trilhões") ) ;

	$valorExt	=	"";

	$valorForm = trim( number_format($valor,2,".",",") ) ;

	$inicio    = 0 ;

	if ( $valor <= 0 ) {
		return ( $valorExt ) ;
	}

	for ( $conta = 0; $conta <= strlen($valorForm)-1; $conta++ ) {
		if ( strstr(",.",substr($valorForm, $conta, 1)) ) {
			 $partes[] = str_pad(substr($valorForm, $inicio, $conta-$inicio),3," ",STR_PAD_LEFT) ;
			 if ( substr($valorForm, $conta, 1 ) == "." ) {
				break ;
			 }

			 $inicio = $conta + 1 ;
		}
	}

	$centavos = substr($valorForm, strlen($valorForm)-2, 2) ;

	if ( !( count($partes) == 1 and intval($partes[0]) == 0 ) ) {
		for ( $conta=0; $conta <= count($partes)-1; $conta++ ) {

			$centena = intval(substr($partes[$conta], 0, 1)) ;
			$dezena  = intval(substr($partes[$conta], 1, 1)) ;
			$unidade = intval(substr($partes[$conta], 2, 1)) ;

			if ( $centena > 0 ) {

				$valorExt .= $centenas[$centena][($dezena+$unidade>0 ? 1 : 2)] . ( $dezena+$unidade>0 ? " e " : "" ) ;
			}

			if ( $dezena > 0 ) {
				if ( $dezena>1 ) {
					 $valorExt .= $dezenas[$dezena] . ( $unidade>0 ? " e " : "" ) ;

				}
				elseif ( $dezena == 1 and $unidade == 0 ) {
					 $valorExt .= $dezenas[$dezena] ;

				}
				else {
					 $valorExt .= $excecoes[$unidade] ;
				}

			}

			if ( $unidade > 0 and $dezena != 1 ) {
				$valorExt .= $unidades[$unidade] ;
			}

			if ( intval($partes[$conta]) > 0 ) {
				$valorExt .= " " . $extensoes[(count($partes)-1)-$conta+1][(intval($partes[$conta])>1 ? 2 : 1)] ;
			}

			if ( (count($partes)-1) > $conta and intval($partes[$conta])>0 ) {
				$conta3 = 0 ;
				for ( $conta2 = $conta+1; $conta2 <= count($partes)-1; $conta2++ ) {
					$conta3 += (intval($partes[$conta2])>0 ? 1 : 0) ;
				}

				if ( $conta3 == 1 and intval($centavos) == 0 ) {
					$valorExt .= " e " ;
				}
				elseif ( $conta3>=1 ) {
					$valorExt .= ", " ;
				}
			}

		}

		if ( count($partes) == 1 and intval($partes[0]) == 1 ) {
			$valorExt .= $moedaSing ;

		}
		elseif ( count($partes)>=3 and ((intval($partes[count($partes)-1]) + intval($partes[count($partes)-2]))==0) ) {
			$valorExt .= " de " + $moedaPlur ;

		}
		else {
			$valorExt = trim($valorExt) . " " . $moedaPlur ;
		}

	 }

	 if ( intval($centavos) > 0 ) {

		$valorExt .= (!empty($valorExt) ? " e " : "") ;

		$dezena  = intval(substr($centavos, 0, 1)) ;
		$unidade = intval(substr($centavos, 1, 1)) ;

		if ( $dezena > 0 ) {
			if ( $dezena>1 ) {
				$valorExt .= $dezenas[$dezena] . ( $unidade>0 ? " e " : "" ) ;

			}
			elseif ( $dezena == 1 and $unidade == 0 ) {
				$valorExt .= $dezenas[$dezena] ;

			}
			else {
				$valorExt .= $excecoes[$unidade] ;
			}

		}

		if ( $unidade > 0 and $dezena != 1 ) {
			$valorExt .= $unidades[$unidade] ;
		}

		$valorExt .= " " . ( intval($centavos)>1 ? $centPlur : $centSing ) ;

	 }

	 return ( $valorExt ) ;

}
/* /Moeda por extenso */

/* Uppercase */
function Maiusculo($string) { 
	$string = strtoupper ($string); 
	$string = str_replace ("â", "Â", $string); 
	$string = str_replace ("á", "Á", $string); 
	$string = str_replace ("ã", "Ã", $string); 
	$string = str_replace ("à", "A", $string); 
	$string = str_replace ("ê", "Ê", $string); 
	$string = str_replace ("é", "É", $string); 
	$string = str_replace ("Î", "I", $string); 
	$string = str_replace ("í", "Í", $string); 
	$string = str_replace ("ó", "Ó", $string); 
	$string = str_replace ("õ", "Õ", $string); 
	$string = str_replace ("ô", "Ô", $string); 
	$string = str_replace ("ú", "Ú", $string); 
	$string = str_replace ("Û", "U", $string); 
	$string = str_replace ("ç", "Ç", $string); 
	return $string;
}

function digitoVerificadornossonumero($numero) {
		$resto2 = modulo11($numero, 9, 1);
			 $digito = 11 - $resto2;
			 if ($digito == 10 || $digito == 11) {
					$dv = 0;
			 } else {
					$dv = $digito;
			 }
		 return $dv;
	}

function modulo11($num, $base=9, $r=0)  {
/**
*   Autor:
*           Pablo Costa <pablo@users.sourceforge.net>
*
*   Função:
*    Calculo do Modulo 11 para geracao do digito verificador
*    de boletos bancarios conforme documentos obtidos
*    da Febraban - www.febraban.org.br
*
*   Entrada:
*     $num: string numérica para a qual se deseja calcularo digito verificador;
*     $base: valor maximo de multiplicacao [2-$base]
*     $r: quando especificado um devolve somente o resto
*
*   Saída:
*     Retorna o Digito verificador.
*
*   Observações:
*     - Script desenvolvido sem nenhum reaproveitamento de código pré existente.
*     - Assume-se que a verificação do formato das variáveis de entrada é feita antes da execução deste script.
*/

		$soma = 0;
		$fator = 2;

		/* Separacao dos numeros */
		for ($i = strlen($num); $i > 0; $i--) {
				// pega cada numero isoladamente
				$numeros[$i] = substr($num,$i-1,1);
				// Efetua multiplicacao do numero pelo falor
				$parcial[$i] = $numeros[$i] * $fator;
				// Soma dos digitos
				$soma += $parcial[$i];
				if ($fator == $base) {
						// restaura fator de multiplicacao para 2
						$fator = 1;
				}
				$fator++;
		}

		/* Calculo do modulo 11 */
		if ($r == 0) {
				$soma *= 10;
				$digito = $soma % 11;
				if ($digito == 10) {
						$digito = 0;
				}
				return $digito;
		} elseif ($r == 1){
				$resto = $soma % 11;
				return $resto;
		}
}

/***
*	Função para converter a primeira letra de nomes próprios ou frases
*	em maiúsculo
***/
function init_cap($string){
	// Converte toda a string para minúscula
	$string		=	strtr(strtolower($string),"ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÜÚÞß","àáâãäåæçèéêëìíîïðñòóôõö÷øùüúþÿ");
	//Usamos a explode() para separar a string por palavras
	$palavra	=	explode(" ",$string);
	// Percorremos por cada palavra
	for ($i=0; $i < count($palavra) ; $i++){
		// Com o if elimine as palavras que NÃO poderão ter a primeira letra em maiúscula
		if ($palavra[$i] != "da" && $palavra[$i] != "de" && $palavra[$i] != "do" && $palavra[$i] != "das" && $palavra[$i] != "dos"){
			$palavra[$i]	=	ucwords($palavra[$i]);// ucwords - Converte para maiúsculas o primeiro caractere de cada palavra exceto as palavras que iniciarem com acento
			$primeira 		=	substr( $palavra[$i], 0, 1);// Captura o primeiro caractere da palavra
			$resto 			=	substr( $palavra[$i], 1, 100);// Captura do segundo caractere da palavra em diante
			//str_replace — Substitui todas as ocorrências da string de procura com a string de substituição
			//strtr — Traduz certos caracteres
			//Em seguida se a primeira letra da palavra tiver acento, será convertida para maiúscula com acento
			$primeira		=	str_replace($primeira,strtr($primeira,"àáâãäåæçèéêëìíîïðñòóôõö÷øùüúþÿ","ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÜÚÞß"),$primeira);
			// Junte a primeira letra convertida com o restante da palavra.
			$palavra[$i]	=	$primeira.$resto;
		}
		// Junte novamente as palavras em uma frase com as primeiras letras convertidas em maiúsculas. E com a acentuação correta.
		$nomeconvertido		=	$nomeconvertido." ".$palavra[$i];
	}
	return $nomeconvertido;
}