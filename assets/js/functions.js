/* digitação de número decimal */
function moeda(z){
	v   =   z.value; 
	v   =   v.replace(/\D/g,"")                     //permite digitar apenas números 
	v   =   v.replace(/[0-9]{12}/,"inválido")       //limita pra máximo 999.999.999,99 
	v   =   v.replace(/(\d{1})(\d{8})$/,"$1.$2")    //coloca ponto antes dos últimos 8 digitos 
	v   =   v.replace(/(\d{1})(\d{5})$/,"$1.$2")    //coloca ponto antes dos últimos 5 digitos 
	v   =   v.replace(/(\d{1})(\d{1,2})$/,"$1,$2")  //coloca virgula antes dos últimos 2 digitos 
	z.value = v;
}
/* digitação de número decimal */

/* digitação de numero com dígito */
function numDigito(num){
	v	=	$(num).val();							//Pegando o valor do parâmetro
	v	=	v.replace(/\D/g,"");					//permite digitar apenas números 
	v	=	v.replace(/[0-9]{12}/,"inválido");		//limita pra máximo 99999999-9 
	v	=	v.replace(/(\d{1})(\d{1})$/,"$1-$2");	//coloca hífen (-) antes do último digito
	return v;
}
/* digitação de numero com dígito */

/* digitação de Agência/Conta Corrente com dígito alfanumérico */
function AgenciaConta(num){
	v	=	$(num).val();							//Pegando o valor do parâmetro
	v	=	v.replace(/\W/g,"");					//permite digitar apenas números 
	v	=	v.replace(/[0-9]{12}/,"inválido");		//limita pra máximo 99999999-9 
	v	=	v.replace(/(\S{1})(\S{1})$/,"$1-$2");	//coloca hífen (-) antes do último digito
	return v;
}
/* digitação de Agência/Conta Corrente com dígito alfanumérico */

//FUNÇÃO PARA MÁSCARA DE TEXTO CPF/RG/DATA..
//Como utilizar:
//Data:<input type="text" size="20" onkeypress="return txtBoxFormat(this, '99/99/9999', event);">
//RG:<input type="text" size="20" onkeypress="return txtBoxFormat(this, '99.999.999-9', event);">
//Telefone:<input type="text" size="20" onkeypress="return txtBoxFormat(this, '(99)9999-9999', event);">
//Código:<input type="text" size="20" onkeypress="return txtBoxFormat(this, '99-999', event);"> 

function txtBoxFormat(objeto, sMask, evtKeyPress) {
	var i, nCount, sValue, fldLen, mskLen, bolMask, sCod, nTecla;

	if(document.all) { // Internet Explorer
		nTecla = evtKeyPress.keyCode;
	}
	else if(document.layers) { // Nestcape
		nTecla = evtKeyPress.which;
	}
	else {
		nTecla = evtKeyPress.which;
		if (nTecla == 8) {
			return true;
		}
	}

	sValue = objeto.value;

	// Limpa todos os caracteres de formatação que
	// já estiverem no campo.
	sValue = sValue.toString().replace( "-", "" );
	sValue = sValue.toString().replace( "-", "" );
	sValue = sValue.toString().replace( "-", "" );
	sValue = sValue.toString().replace( ".", "" );
	sValue = sValue.toString().replace( ".", "" );
	sValue = sValue.toString().replace( ".", "" );
	sValue = sValue.toString().replace( "/", "" );
	sValue = sValue.toString().replace( "/", "" );
	sValue = sValue.toString().replace( "/", "" );
	sValue = sValue.toString().replace( ":", "" );
	sValue = sValue.toString().replace( ":", "" );
	sValue = sValue.toString().replace( ":", "" );
	sValue = sValue.toString().replace( "(", "" );
	sValue = sValue.toString().replace( "(", "" );
	sValue = sValue.toString().replace( ")", "" );
	sValue = sValue.toString().replace( ")", "" );
	sValue = sValue.toString().replace( "°", "" );
	sValue = sValue.toString().replace( "ʹ", "" );
	sValue = sValue.toString().replace( "ʺ", "" );
	sValue = sValue.toString().replace( ",", "" );
	sValue = sValue.toString().replace( " ", "" );
	fldLen = sValue.length;
	mskLen = sMask.length;

	i = 0;
	nCount = 0;
	sCod = "";
	mskLen = fldLen;

	while (i <= mskLen) {
		bolMask = ((sMask.charAt(i) == "-") || (sMask.charAt(i) == ".") || (sMask.charAt(i) == "/") || (sMask.charAt(i) == ":") || (sMask.charAt(i) == ",") || (sMask.charAt(i) == "°") || (sMask.charAt(i) == "ʹ") || (sMask.charAt(i) == "ʺ"))
		bolMask = bolMask || ((sMask.charAt(i) == "(") || (sMask.charAt(i) == ")") || (sMask.charAt(i) == " "))

		if (bolMask) {
			sCod += sMask.charAt(i);
			mskLen++; }
		else {
			sCod += sValue.charAt(nCount);
			nCount++;
		}

		i++;
	}

	objeto.value = sCod;

	if (nTecla != 8) { // backspace
		if (sMask.charAt(i-1) == "9") { // apenas números...
			return ((nTecla > 47) && (nTecla < 58)); } 
		else { // qualquer caracter...
			return true;
		} 
	}
	else {
		return true;
	}
}
/* ************************** */

function float2moeda(num) {
	x	=	0;
	if(num<0){
		num	=	Math.abs(num);
		x	=	1;
	}
	if(isNaN(num)){
		num	=	"0.00";
	}
	cents = Math.floor((num*100+0.5)%100);
	num = Math.floor((num*100+0.5)/100).toString();
	if(cents < 10){
		cents	=	"0" + cents;
	}
	for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++){
		num	=	num.substring(0,num.length-(4*i+3))+'.'+num.substring(num.length-(4*i+3));
	}
	ret = num + ',' + cents;
	if (x == 1){
		ret	=	' - ' + ret;
	}
	return ret;
}

function moeda2float(moeda){
	// moeda = moeda.replace(".","");
	moeda = moeda.replace(/\./g,"");
	moeda = moeda.replace(",",".");
	return parseFloat(moeda);
}

function loaderShow(source){
	$("#"+source+" #div-loader").fadeIn('slow');
}

function loaderHide(source){
	$("#"+source+" #div-loader").fadeOut('slow');
}

function getNum(val) {
	if (isNaN(val)) {
		return 0;
	}
	return val;
}

function desmarcar (checkbox) {
	$("#"+checkbox).prop('checked',false);
}

function CheckUncheckAll(chkbx){
	$checked	=	$(chkbx).prop('checked');
	$chkbx		=	$(chkbx).attr('data-checkbox');
	$($chkbx).prop('checked',$checked);
}

/* Função para Marcar/Desmarcar checkbox
------------------------------------------------------------
-	1º parâmetro (check): checkbox a ser marcado
-	2º parâmetro (uncheck): checkbox a ser desmarcado
-	Os parâmetros a serem passados podem ser uma "class"
	ou "id"dos elementos checkbox
-	Ex1: onclick="CheckUncheck('.presente','.ausente')"; - Classe
-	Ex2: onclick="CheckUncheck('#presente','#ausente')"; - Id
------------------------------------------------------------
*/
function CheckUncheck(check,uncheck){
	$(check).each(function(){
		$(this).prop('checked',true);
	});
	$(uncheck).each(function(){
		$(this).prop('checked',false);
	});
}

/* Função para atualizar table 'paging' usando um <select>
------------------------------------------------------------
-	O select deve ter uma tag 'data-table' que conterá o id
	da table e o "value" deverá conter o número de registros
	a serem exibidos.
-	No envento onchange o select deverá chamar a função
	atualizaTablePaging(this).
------------------------------------------------------------
*/
function atualizaTablePaging(select){
	$data_table	=	$(select).attr('data-table');
	if ($(select).val() == -1) {
		$num_rows	=	$("#"+$data_table+' tbody tr').length;
		$paginas	=	$num_rows;
	}
	else{
		$paginas	=	$(select).val();
	}

	var pager = new Pager($data_table, $paginas); 
	pager.init(); 
	pager.showPageNav('pager', 'pageNav'); 
	pager.showPage(1);
}
/* /Função para atualizar table 'paging' */

/* Detectando o browser */
// -- Opera 8.0+ --
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// -- Firefox 1.0+ --
var isFirefox = typeof InstallTrigger !== 'undefined';

// -- Safari 3.0+ "[object HTMLElementConstructor]"  --
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

// -- Internet Explorer 6-11 --
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// -- Edge 20+ --
var isEdge = !isIE && !!window.StyleMedia;

// -- Chrome 1+ --
var isChrome = !!window.chrome && !!window.chrome.webstore;

// -- Blink engine detection --
var isBlink = (isChrome || isOpera) && !!window.CSS;
/* /Detectando o browser */

/* Função para calcular dias entre datas
------------------------------------------------------------
	Precisa do plugin 'moment.js'
-	Ex1: calculaDias('2017-07-19','1966-10-29');
		 = -18526 dias
-	Ex2: calculaDias('2017-01-01','2017-07-19');
		 = 199 dias
------------------------------------------------------------		 
*/
function calculaDias(date1, date2){
	//formato do brasil 'pt-br'
	// moment.locale('pt-br');
	//setando data1
	var data1 = moment(date1,'YYYY/MM/DD');
	//setando data2
	var data2 = moment(date2,'YYYY/MM/DD');
	//tirando a diferenca da data2 - data1 em dias
	var diff  = data2.diff(data1, 'days');
	
	return diff;
}
/* /Função para calcular dias entre datas */

function verificaCPF(cpf){
	if($(cpf).val().length == 14){
		if (!isCpf($(cpf).val())) {
			$(cpf).css('border-color','red');
			$(cpf).val('');
			$("#cpf_cnpj_erro").html('CPF INVÁLIDO!');
		}
		else{
			$(cpf).css('border-color','');
			$("#cpf_cnpj_erro").html('');
		}
	}
}

function verificaCNPJ(cnpj){
	if($(cnpj).val().length == 18){
		if (!isCnpj($(cnpj).val())) {
			$(cnpj).css('border-color','red');
			$(cnpj).val('');
			$("#cpf_cnpj_erro").html('CNPJ INVÁLIDO!');
		}
		else{
			$(cnpj).css('border-color','');
			$("#cpf_cnpj_erro").html('');
		}
	}
}

function nextTab(elem) {
	$(elem).next().find('a[data-toggle="tab"]').click();
}

function prevTab(elem) {
	$(elem).prev().find('a[data-toggle="tab"]').click();
}

function verificaChecados(checkbox){
	$class		=	$(checkbox).attr('data-checar');
	$visivel	=	$(checkbox).attr('data-visivel');
	$checados	=	$("input[type='checkbox']."+$class+":checked").length;
	if ($checados > 0) {
		$($visivel).removeAttr('style');
	}
	else{
		$($visivel).css('display','none');
	}
}

/*
function avisoShow(objeto,aviso,tempo)
Essa função exibe um aviso em um objeto (div, span,...)
por um determinado período de tempo.
@objeto: Objeto ([object Object]) onde será exibido o aviso.
Ex: div#aviso / span#aviso / #aviso
Obs: o objeto deverá existir e deverá ter 'display: none;' como atritubo
@aviso: String (string) contendo o aviso.
Ex: 'Atenção!'
@tempo: Tempo (int) em milisegundos que o aviso será exibido.
Ex: 3000 (3.000 milisegundos = 3 segundos)
*/
function avisoShow(objeto,aviso,tempo){
	$(objeto).html(aviso);
	$(objeto).fadeIn(400).delay(tempo).fadeOut(400);
}
/* **** */

function somarValores(classeInputs,idTotal) {
	var inputs = $(classeInputs);
	var valor	=	0;
	var soma	=	0;

	for(var i = 0; i < inputs.length; i++){
		if (!isNaN(moeda2float($(inputs[i]).val()))) {
			soma += moeda2float(($(inputs[i]).val()));
		}
	}

	$(idTotal).val(float2moeda(soma));
}

function somarInteiros(classeInputs,idTotal) {
	var inputs	=	$(classeInputs);
	var valor	=	0;
	var soma	=	0;

	for(var i = 0; i < inputs.length; i++){
		if (!isNaN(parseInt($(inputs[i]).val()))){
			soma += parseInt($(inputs[i]).val());
			// alert(soma);
			// console.log($(inputs[i]).attr('name'));
		}
		else{
			soma += 0;
		}
	}

	$(idTotal).val(soma);
}