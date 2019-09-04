$(document).ready(function(){

	var _docwidth	=	document.body.clientWidth;
	var _docheight	=	document.body.clientHeight;
	toastr.options = {
						"debug"				:	false,
						"positionClass"		:	"toast-top-center",
						"onclick"			:	null,
						"fadeIn"			:	300,
						"fadeOut"			:	1000,
						"timeOut"			:	5000,
						"extendedTimeOut"	:	1000,
						"progressBar"		:	true
					}

	if (isIE || isFirefox) {
		webshims.setOptions('waitReady', true);
		webshims.setOptions('forms-ext', {types: 'date'});
		webshims.polyfill('forms forms-ext');
	}

	$('a[data-toggle="tooltip"]').on('click',function(){
		$(this).tooltip('hide').tooltip();
	});

	/* Tooltip */
	$('[data-toggle="tooltip"]').tooltip();
	/* /Tooltip */

	/* Popover */
	$('[data-toggle="popover"]').popover(
											{delay:		{ "show": 100, "hide": 10 },
											html:		true,
											trigger:	'click',
											template:	'<div class="popover" role="tooltip">'+
															'<div class="arrow"></div>'+
															'<h3 class="popover-header"></h3>'+
															'<div class="popover-body text-justify"></div>'+
														'</div>'
											}
										);
	$('[data-toggle="popover"]').on('inserted.bs.popover',function(){
		_css		=	$(this).attr('data-css');
		_popover	=	$(this).attr('aria-describedby');
		$("#"+_popover).addClass(_css);
	});
	/* /Popover */

	/* DataTable */
	if ($('.dataTable').length) {
		$.fn.dataTable.moment( 'MM/DD/YYYY' );
		$('.dataTable').DataTable({
								destroy: true,
								"lengthMenu": [[25, 50, 100, -1], [25, 50, 100, "Todos"]],
								"bJQueryUI": true, 
								"oLanguage": { 
								"sProcessing": "Processando...", 
								"sLengthMenu": "Mostrar _MENU_ registros", 
								"sZeroRecords": "Não foram encontrados resultados", 
								"sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros", 
								"sInfoEmpty": "Mostrando de 0 até 0 de 0 registros", 
								"sInfoFiltered": "", 
								"sInfoPostFix": "", 
								"sSearch": "Buscar:", 
								"sUrl": "", 
								"oPaginate": { 
								"sFirst": "Primeiro", 
								"sPrevious": "Anterior", 
								"sNext": "Próximo", 
								"sLast": "Último"}}
							});
	}
	/* /DataTable */

	/* Data-Table - exibe todos na inicialização */
	if ($('.data-Table').length) {
		$.fn.dataTable.moment( 'MM/DD/YYYY' );
		$('.data-Table').DataTable({
								destroy: true,
								"lengthMenu": [[-1, 25, 50, 100], ["Todos", 25, 50, 100]],
								"bJQueryUI": true, 
								"oLanguage": { 
								"sProcessing": "Processando...", 
								"sLengthMenu": "Mostrar _MENU_ registros", 
								"sZeroRecords": "Não foram encontrados resultados", 
								"sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros", 
								"sInfoEmpty": "Mostrando de 0 até 0 de 0 registros", 
								"sInfoFiltered": "", 
								"sInfoPostFix": "", 
								"sSearch": "Buscar:", 
								"sUrl": "", 
								"oPaginate": { 
								"sFirst": "Primeiro", 
								"sPrevious": "Anterior", 
								"sNext": "Próximo", 
								"sLast": "Último"}}
							});
	}
	/* /Data-Table */

	if ($('.dataTables_wrapper').length) {
		$('select[name="table-list_length"]').addClass('form-control');
		$('input[type="search"]').addClass('form-control');
	}

	/* ckeditor5 */
	if ($(".text-ckeditor5").length) {
		ClassicEditor
		.create( document.querySelector( '.text-ckeditor5' ), {
			removePlugins: [ 'Link' ],
			toolbar: [ 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote' ],
			language: 'pt-br',
			height: 200
		} )
		.then( editor => {
			console.log( editor + '\n' + ClassicEditor.build.plugins.map( plugin => plugin.pluginName ));
		} )
		.catch( error => {
			console.error( error );
		} );
	}
	/* /ckeditor5 */

	/* .text-tinymce */
	if ($('.text-tinymce').length) {
		tinymce.init(
					{
						selector:	'.text-tinymce',
						// auto_focus: 'element1',
						plugins :	[
									'advlist autolink autoresize charmap code codesample colorpicker emoticons textcolor contextmenu directionality hr',
									'insertdatetime  lists media preview',
									'textpattern toc visualblocks'
									],
						contextmenu: "inserttable | cell row column deletetable",
						toolbar1:	'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | codesample',
						menubar: false,
						toolbar_items_size: 'small',
						image_advtab: true ,
						image_dimensions: true,
						image_description: false,
						default_link_target: "_blank",
						language: 'pt_BR',
						relative_urls:false,
					}
		);
	}
	/* /.text-tinymce */

	/* Bootstrap Chosen Select*/
	if ($('.chosen-select-deselect').length) {
		$('.chosen-select-deselect').chosen({ allow_single_deselect: false }).trigger("chosen:updated");
	}
	/* /Bootstrap Chosen Select*/

	$(".cep").blur(function(){
		var campo_cep	=	$(this);
		var cep_code	=	$(this).val();
		var endereco	=	$(this).attr('data-endereco');
		var bairro		=	$(this).attr('data-bairro');
		var cidade		=	$(this).attr('data-cidade');
		var uf			=	$(this).attr('data-uf');
		var erro		=	$(this).attr('data-erro');
		if ($(this).val().length == 9) {
			$(erro).html('<i class="fa fa-spinner fa-pulse fa-fw"></i><span class="sr-only">Pesquisando...</span>');
			if( cep_code.length <= 0 ) return;
			$.get("http://apps.widenet.com.br/busca-cep/api/cep.json", { code: cep_code },
				function(result){
					if( result.status == 0){
						$(endereco).val('');
						$(bairro).val('');
						$(cidade).val('');
						$(cidade).removeAttr('readonly');
						$(uf).val('');
						// $(uf).removeAttr('readonly');
						$(erro).html('<font style="color: red;">'+result.message+'</font>');
						$(uf).val('PB');
						return;
					}
					else{
						$(this).val(result.code);
						$(endereco).val(result.address);
						$(bairro).val(result.district);
						$(cidade).val(result.city);
						$(cidade).attr('readonly','readonly');
						$(cidade).prop('disabled',true);
						$(cidade).change();
						$(uf).val(result.state);
						$(uf).attr('readonly','readonly');
						if ($(uf).val() != 'PB') { //Se não for da Paraíba
							$(endereco).val('');
							$(bairro).val('');
							$(cidade).val('');
							$(uf).val('');
							$(erro).html('');
							$(campo_cep).focus().select();
							$(erro).html('<font style="color: red;">O CEP informado não é da Paraíba!</font>');
						}
						else{
							$(erro).html('');
						}
					}
				}
			);
		}
		else{
			$(this).val('');
			$(endereco).val('');
			$(bairro).val('');
			$(cidade).val('');
			$(uf).val('');
			$(erro).html('');
		}
	});

	/* Logout */
	$("#logoutModal").on('show.bs.modal',function(){
		$('#nav-btn-user').popover('hide');
	});
	/* /Logout */

	/* navbar */
	if ($('.navbar').length) {
		$("#nav-btn-user").popover(
								{delay:		{ "show": 100, "hide": 10 },
								html:		true,
								placement:	'bottom',
								trigger:	'click',
								css:		'popover-primary',
								content:	$("#user-content").html(),
								template:	'<div class="popover" role="tooltip">'+
												'<div class="arrow"></div>'+
												'<h3 class="popover-header fs-small90"></h3>'+
												'<div class="popover-body text-justify">'+
												'</div>'+
											'</div>'
								}
							);
		$('#nav-btn-user').on('inserted.bs.popover',function(){
			_css		=	$(this).attr('data-css');
			_popover	=	$(this).attr('aria-describedby');
			$("#"+_popover).addClass(_css);
		});
		$('#nav-btn-user').on('click',function(){
			$("#nav-btn-user").popover('show');
		});
	}
	/* /navbar */

	/* Timer da Session */
	if ($("#is_logged_in").val()) {
		var hor = $("#hour").val();
		var min = $("#min").val();
		var sec = $("#sec").val();
		var outSession = setInterval(function(){
			if(sec == 0){
				if (min == 0) {
					if (hor == 0) {
						clearInterval(outSession);
						window.location.href = _systempath+'usuarios/logout';
					}
					else{
						hor--
					}
				}
				else{
					min--;
				}
				sec = 60;
			}
			sec--;
			$("#timer").html(hor + "h:" + min +":m" + sec + "s");
		},1000);
	}
	/* /Timer da Session */

	/* File Input */
	$('.file-input').on('change',function(){
		inputtext			=	$(this).attr('data-text');
		dt_validade			=	$(this).attr('data-validade');
		inputdt_validade	=	$(this).attr('data-dt-validade');
		btn_enviar			=	$(this).attr('data-btn-enviar');
		progress			=	$(this).attr('data-progress');
		if ($(this).val() != '') {
			filename			=	$(this)[0].files[0].name;
			filetype			=	$(this)[0].files[0].type;
			filesize			=	$(this)[0].files[0].size;
			if (filetype == 'application/pdf') {
				$(inputtext).val(filename);
				$(btn_enviar).removeClass('d-none');
				$(progress).removeClass('d-none');
				$(progress+' .progress-bar').attr('aria-valuenow','0').css('width','0%').html('0%');
				if (dt_validade == 's') {
					$(inputdt_validade).prop('required',true);
				}
			}
			else{
				toastr.error("Tipo de arquivo inválido!\nSó arquivos .pdf são permitidos!");
				$(btn_enviar).addClass('d-none');
				$(progress).addClass('d-none');
				$(this).val(null);
			}
		}
		$('[data-toggle="tooltip"]').tooltip('hide');
	});
	$('.btn-removeFile').on('click',function(){
		inputfile	=	$(this).attr('data-file');
		inputtext	=	$(this).attr('data-text');
		btn_enviar	=	$(inputfile).attr('data-btn-enviar');
		progress	=	$(inputfile).attr('data-progress');
		$(inputfile).val(null);
		$(inputtext).val(null);
		$(btn_enviar).addClass('d-none');
		$(progress).addClass('d-none');
		$('[data-toggle="tooltip"]').tooltip('hide');
	});
	/* /File Input */

	/* Análise */
	if ($('.analises')) {

	}
	/* /Análise */

	/* Aprovações */
	if ($('.aprovacoes')) {

	}
	/* /Aprovações */

	/* Auditorias */
	if ($('.auditorias')) {

	}
	/* /Auditorias */

	/* Finalizados */
	if ($('.finalizados')) {

	}
	/* /Finalizados */

	/* Indeferidos */
	if ($('.indeferidos')) {

	}
	/* /Indeferidos */

	/* Parecer Técnico */
	if ($('.parecer-tecnico').length) {
		$("#form_parecer").on('submit',function(e){
			tinyMCE.triggerSave(true,true);
			_required	=	0;
			_label		=	'';
			$("#form_parecer .form-control").each(function(){
				if ($(this).prop('required')) {
					$label	=	$(this).attr('name');
					if (($(this).val() == '') || ($(this).val() == null)) {
						$('label[for="'+$label+'"]').css('color','red');
						_label	=	_label + ' ' + $('label[for="'+$label+'"]').html();
						_required++;
					}
					else{
						$('label[for="'+$label+'"]').removeAttr('style');
					}
				}
			});
			if (_required > 0) {
				toastr.warning("ATENÇÃO! Campos obrigatórios não foram preenchidos.<br><strong>"+_label+"</strong>");
				return false;
			}
		});
	}
	/* /Parecer Técnico */

	/* .enviar-documentos */
	if ($('.enviar-documentos').length) {
		$('.form-upload-docs').on('submit',function(e){
			e.preventDefault();
			_return			=	true;
			if ($(this).find('.dt_validade').prop('required')) {
				if ($(this).find('.dt_validade').val() == '') {
					inputdt_validade	=	"#"+$(this).find('.dt_validade').attr('id');
					toastr.error("Informe a data de validade do documento!");
					$(inputdt_validade).focus();
					_return	=	false;
				}
			}
			if (_return) {
				var filename		=	"";
				var filetype		=	"";
				var filesize		=	"";
				var percent			=	0;
				var progress		=	"#"+$(this).find('.progress').attr('id');
				var btn_enviar		=	"#"+$(this).find('.btn-enviar').attr('id');
				var btn_removeFile	=	"#"+$(this).find('.btn-removeFile').attr('id');
				$(this).ajaxSubmit(
					{
						beforeSend:function(){
							$(btn_enviar).addClass('d-none');
							$(progress+' .progress-bar').attr('aria-valuenow','0').css('width','0%').html('0%');
						},
						uploadProgress:function(event,position,total,percentComplete){
							$(progress+' .progress-bar').attr('aria-valuenow',percentComplete).css('width',percentComplete+'%').html(percentComplete+'%');
						},
						success:function(data){
							if (data == "S") {
								toastr.options.onHidden = function() { 
																		location.reload();
																	}
								toastr.success("Arquivo ENVIADO com sucesso!","ENVIO DE ARQUIVO!");
								console.log(data);
							}
							else{
								toastr.error("ERRO! "+data,{timeOut: 5000});
								$(btn_removeFile).click();
							}
						}
					}
				);

			}
		});
	}
	/* /.enviar-documentos */

	/* .print */
	if ($('.print').length) {
		$('nav').addClass('d-none');
		$('footer').addClass('d-none');
		$('body').css('margin-bottom','auto');
	}
	/* /.print */

	/* .conatainer-usuarios */
	if ($('.container-usuarios').length) {
		/*$('.btn-assinatura').on('click',function(){
			_id_usuario	=	$(this).attr('data-usuario-id');
			_nome_usuario	=	$(this).attr('data-usuario-nome');
			_assinatura_usuario	=	$(this).attr('data-usuario-assinatura');
			if (_assinatura_usuario != '') {
				$("#assinaturaModal div#div-fileinput").removeClass('fileinput-new').addClass('fileinput-exists');
				$("#assinaturaModal div#fileinput-preview").html('<img src="'+_empresapath+_assinatura_usuario+'">');
			}
			else{
				$("#assinaturaModal #btn-removerImg").click();
			}
			$("#assinaturaModal div.div-nome-usuario").html('<strong>'+_nome_usuario+'</strong>');
			$("#assinaturaModal input.id_usuario").val(_id_usuario);
			$("#assinaturaModal").modal('show');
		})*/
	}
	/* /.conatainer-usuarios */

	/* modalEncaminhar */
	if ($("#modalEncaminhar").length) {
		$("#modalEncaminhar button.btn-confirma").on('click',function(){
			_id_usuario		=	$("#modalEncaminhar form input.id_usuario").val();
			_id_licenca		=	$("#modalEncaminhar form input.id_licenca").val();
			_ce_requerente	=	$("#modalEncaminhar form input.id_requerente").val();
			_requerente		=	$("#modalEncaminhar form input.requerente").val();
			_tipo_pessoa	=	$("#modalEncaminhar form input.tipo_pessoa").val();
			_ce_tipo_licenca=	$("#modalEncaminhar form input.ce_tipo_licenca").val();
			_ce_tipo_documento=	$("#modalEncaminhar form input.ce_tipo_documento").val();
			_ce_licenca		=	$("#modalEncaminhar form input.id_licenca").val();
			_tipo_pessoa	=	$("#modalEncaminhar form input.tipo_pessoa").val();
			_cpf_cnpj		=	$("#modalEncaminhar form input.cpf_cnpj").val();
			_num_protocolo	=	$("#modalEncaminhar form input.num_protocolo").val();
			_status			=	$("#modalEncaminhar form input.status").val();
			_status_anterior=	$("#modalEncaminhar form input.status_anterior").val();
			_acao			=	$("#modalEncaminhar form input.acao").val();
			if (_status == 'PR') {
				$("#modalLoading").modal(
										{
											keyboard: false,
											backdrop: 'static'
										}
										);
				$.post(
					_systempath+'licencas/protocoloEncaminhar',
					{
						id_usuario		:	_id_usuario,
						id_licenca		:	_id_licenca,
						status			:	_status,
						status_anterior	:	_status_anterior,
						acao			:	_acao
					},
					function(retorno){
						toastr.options.onHidden = function() { 
																location.reload();
															}
						if (retorno != '0') {
							toastr.success("Licença encaminhada com SUCESSO!","LICENÇA ENCAMINHADA");
						}
						else{
							toastr.error("Não foi possível encaminhar a licença!\nERRO: "+retorno,"ERRO!");
						}
					}
				);
			}
			else if (_status == 'AU') {
				$("#modalAnexarArquivoCOMMEA span.requerente").html(_requerente);
				$("#modalAnexarArquivoCOMMEA span.cpf-cnpj").html(_cpf_cnpj);
				$("#modalAnexarArquivoCOMMEA span.num-protocolo").html(_num_protocolo);

				$("#modalAnexarArquivoCOMMEA input.id_usuario").val(_id_usuario);
				$("#modalAnexarArquivoCOMMEA input.id_licenca").val(_id_licenca);
				$("#modalAnexarArquivoCOMMEA input.ce_requerente").val(_ce_requerente);
				$("#modalAnexarArquivoCOMMEA input.requerente").val(_requerente);
				$("#modalAnexarArquivoCOMMEA input.tipo_pessoa").val(_tipo_pessoa);
				$("#modalAnexarArquivoCOMMEA input.ce_tipo_licenca").val(_ce_tipo_licenca);
				$("#modalAnexarArquivoCOMMEA input.ce_tipo_documento").val(_ce_tipo_documento);
				$("#modalAnexarArquivoCOMMEA input.ce_licenca").val(_ce_licenca);
				$("#modalAnexarArquivoCOMMEA input.cpf_cnpj").val(_cpf_cnpj);
				$("#modalAnexarArquivoCOMMEA input.num_protocolo").val(_num_protocolo);
				$("#modalAnexarArquivoCOMMEA input.status").val(_status);
				$("#modalAnexarArquivoCOMMEA input.status_anterior").val(_status_anterior);
				$("#modalAnexarArquivoCOMMEA input.acao").val(_acao);
				$("#modalAnexarArquivoCOMMEA").modal('show');
			}
			else{
				$("#modalProtocoloEncaminhar span.requerente").html(_requerente);
				$("#modalProtocoloEncaminhar span.cpf-cnpj").html(_cpf_cnpj);
				$("#modalProtocoloEncaminhar span.num-protocolo").html(_num_protocolo);

				$("#modalProtocoloEncaminhar input.id_usuario").val(_id_usuario);
				$("#modalProtocoloEncaminhar input.id_licenca").val(_id_licenca);
				$("#modalProtocoloEncaminhar input.requerente").val(_requerente);
				$("#modalProtocoloEncaminhar input.cpf_cnpj").val(_cpf_cnpj);
				$("#modalProtocoloEncaminhar input.num_protocolo").val(_num_protocolo);
				$("#modalProtocoloEncaminhar input.status").val(_status);
				$("#modalProtocoloEncaminhar input.status_anterior").val(_status_anterior);
				$("#modalProtocoloEncaminhar input.acao").val(_acao);
				$("#modalProtocoloEncaminhar").modal('show');
			}
		});
	}
	/* /modalEncaminhar */

	/* modalAnexarArquivo */
	if ($("#modalAnexarArquivo").length) {
		$("#modalAnexarArquivo").on('show.bs.modal',function(){
			$("#modalAnexarArquivo .btn-removeFile").click();
			// $("#modalAnexarArquivo #desc_documento").val('');
		});
	}

	if ($("#modalAnexarArquivoCOMMEA").length) {
		$("#modalAnexarArquivoCOMMEA").on('show.bs.modal',function(){
			$("#modalAnexarArquivoCOMMEA .btn-removeFile").click();
			// $("#modalAnexarArquivo #desc_documento").val('');
		});
		$('.form-upload-docsCOMMEA').on('submit',function(e){
			e.preventDefault();
			_id_usuario		=	$('.form-upload-docsCOMMEA input.id_usuario').val();
			_id_licenca		=	$('.form-upload-docsCOMMEA input.ce_licenca').val();
			_status			=	$('.form-upload-docsCOMMEA input.status').val();
			_status_anterior=	$('.form-upload-docsCOMMEA input.status_anterior').val();
			_acao			=	$('.form-upload-docsCOMMEA input.acao').val();
			_return			=	true;
			if ($(this).find('.dt_validade').prop('required')) {
				if ($(this).find('.dt_validade').val() == '') {
					inputdt_validade	=	"#"+$(this).find('.dt_validade').attr('id');
					toastr.error("Informe a data de validade do documento!");
					$(inputdt_validade).focus();
					_return	=	false;
				}
			}
			if (_return) {
				var filename		=	"";
				var filetype		=	"";
				var filesize		=	"";
				var percent			=	0;
				var progress		=	"#"+$(this).find('.progress').attr('id');
				var btn_enviar		=	"#"+$(this).find('.btn-enviar').attr('id');
				var btn_removeFile	=	"#"+$(this).find('.btn-removeFile').attr('id');
				_fileupload			=	false;
				$(this).ajaxSubmit(
					{
						beforeSend:function(){
							$(btn_enviar).addClass('d-none');
							$(progress+' .progress-bar').attr('aria-valuenow','0').css('width','0%').html('0%');
						},
						uploadProgress:function(event,position,total,percentComplete){
							$(progress+' .progress-bar').attr('aria-valuenow',percentComplete).css('width',percentComplete+'%').html(percentComplete+'%');
						},
						success:function(response){
							if (response == "S") {
								toastr.success("Arquivo ENVIADO com sucesso!","ENVIO DE ARQUIVO!");
								$.post(
									_empresapath+'licencas/protocoloEncaminhar',
									{
										id_usuario		:	_id_usuario,
										id_licenca		:	_id_licenca,
										status			:	_status,
										status_anterior	:	_status_anterior,
										acao			:	_acao
									},
									function(retorno){
										toastr.options.onHidden = function() { 
																				location.reload();
																			}
																			console.log('retorno: '+retorno);
										if (retorno != '0') {
											toastr.success("Licença encaminhada com SUCESSO!","LICENÇA ENCAMINHADA");
										}
										else{
											toastr.error("Não foi possível encaminhar a licença!\nERRO: "+retorno,"ERRO!");
										}
									}
								);
							}
							else{
								toastr.error("ERRO! "+response,{timeOut: 5000});
								$(btn_removeFile).click();
								console.log(response);
							}
						}
					}
				);
			}
		});

		$("#modalAnexarArquivoCOMMEA button.btn-encaminhar").on('click',function(){
			_id_usuario		=	$('.form-upload-docsCOMMEA input.id_usuario').val();
			_id_licenca		=	$('.form-upload-docsCOMMEA input.ce_licenca').val();
			_status			=	$('.form-upload-docsCOMMEA input.status').val();
			_status_anterior=	$('.form-upload-docsCOMMEA input.status_anterior').val();
			_acao			=	$('.form-upload-docsCOMMEA input.acao').val();
			$.post(
				_empresapath+'licencas/protocoloEncaminhar',
				{
					id_usuario		:	_id_usuario,
					id_licenca		:	_id_licenca,
					status			:	_status,
					status_anterior	:	_status_anterior,
					acao			:	_acao
				},
				function(retorno){
					toastr.options.onHidden = function() { 
															location.reload();
														}
					if (retorno != '0') {
						toastr.success("Licença encaminhada com SUCESSO!","LICENÇA ENCAMINHADA");
					}
					else{
						toastr.error("Não foi possível encaminhar a licença!\nERRO: "+retorno,"ERRO!");
					}
				}
			);
			console.log(_id_usuario+'\n'+_id_licenca+'\n'+_status+'\n'+_status_anterior+'\n'+_acao);
		});
	}
	/* /modalAnexarArquivo */

	/* modalDevolver */
	if ($("#modalDevolver").length) {
		$("#modalDevolver button.btn-confirma").on('click',function(){
			$("#modalProtocoloEncaminhar").modal('show');
		});
	}
	/* /modalDevolver */

	/* modalProtocoloEncaminhar */
	if ($("#modalProtocoloEncaminhar").length) {
		$("#modalProtocoloEncaminhar").on('show.bs.modal',function(){
			tinymce.init(
						{
							selector:	'.despacho-text-tinymce',
							plugins :	[
										'advlist autolink autoresize charmap code codesample colorpicker emoticons textcolor contextmenu directionality hr',
										'insertdatetime  lists media preview',
										'textpattern toc visualblocks autoresize'
										],
							contextmenu: "inserttable | cell row column deletetable",
							toolbar1:	'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | codesample',
							menubar: false,
							toolbar_items_size: 'small',
							image_advtab: true ,
							image_dimensions: true,
							image_description: false,
							default_link_target: "_blank",
							language: 'pt_BR',
							relative_urls:false,
							autoresize_max_height: 300,
							resize: false,
							// height: 300,
							max_height: 300
						}
			);
			tinymce.ui.Scrollable;
			tinyMCE.activeEditor.setContent('');
		});

		$("#modalProtocoloEncaminhar").on('hide.bs.modal',function(){
			tinyMCE.activeEditor.setContent('');
			tinymce.remove('.despacho-text-tinymce');
			$("#modalProtocoloEncaminhar .loading").addClass('d-none');
		});

		$("#modalProtocoloEncaminhar form").on('submit',function(e){
			tinyMCE.triggerSave(true,true);
			e.preventDefault();
			if (($("#modalProtocoloEncaminhar form textarea").val() == '') || ($("#modalProtocoloEncaminhar form textarea").val() == null)) {
				toastr.warning("ATENÇÃO! O texto do Despacho Técnico não foi preenchido.");
				$("#modalProtocoloEncaminhar .loading").addClass('d-none');
				return false;
			}
			else{
				$("#modalProtocoloEncaminhar .loading").removeClass('d-none');
				$dados	=	$("#modalProtocoloEncaminhar form").serialize();
				// console.log($dados);
				$.post(
					_empresapath+'licencas/protocoloEncaminhar',
					$dados,
					function(retorno){
						if (retorno != '0') {
							$.post(
								_empresapath+'documentos/gerarPDF',
								$dados,
								function(_retorno){
									if (_retorno != '') {
										/* retorno da geração de PDF */
										_dados			=	_retorno.split("|");
										_id_licenca		=	_dados[0];
										_sequencial		=	_dados[1];
										_descricao		=	_dados[2];
										_nome			=	_dados[3];
										_doc_path		=	_dados[4];
										_tipo_insercao	=	_dados[5];
										_valido			=	_dados[6];
										_arquivo_gerado	=	_dados[7];
										$.post(
											_empresapath+'licencas/insereDocsLicenca',
											{
												id_licenca		:	_id_licenca,
												sequencial		:	_sequencial,
												descricao		:	_descricao,
												nome			:	_nome,
												doc_path		:	_doc_path,
												tipo_insercao	:	_tipo_insercao,
												valido			:	_valido
											},
											function($retorno){
												toastr.options.onHidden = function() { 
																		window.open(_empresapath+_arquivo_gerado,'_blank');
																		location.reload();
																	}
												if ($retorno != '0') {
													toastr.success("Licença encaminhada com SUCESSO!","LICENÇA ENCAMINHADA!");
												}
												else{
													toastr.error("Erro ao encaminhar licença!\n"+$retorno,"ERRO!");
												}
												// console.log($retorno);
											}
										);
									}
								}
							);
						}
					}
				);
			}
		});
	}
	/* /modalProtocoloEncaminhar */

	/* modalIndeferir */
	if ($("#modalIndeferir").length) {
		$('#modalIndeferir').on('show.bs.modal',function(){
			$('#modalIndeferir input.form-check-input').prop('checked',false);
			$("#modalIndeferir .loading").addClass('d-none');
		});

		$('#modalIndeferir button.btn-confirma').on('click',function(){
			$checked	=	$('#modalIndeferir .motivo-indeferimento:checked').length;
			if ($checked > 0) {
				$("#modalIndeferir .loading").removeClass('d-none');
				$dados	=	$("#modalIndeferir form").serialize();
				$.post(
					_empresapath+'licencas/protocoloIndeferir',
					$dados,
					function(retorno){
						if (retorno == '0') {
							toastr.options.onHidden = function() { 
																	location.reload();
																}
							toastr.success("Protocolo INDEFERIDO com sucesso!","PROTOCOLO INEFERIDO!");
						}
						else{
							toastr.warning("ATENÇÃO! Ocorreu erro ao indeferir o protocolo.\nContate o suporte.");
							console.log(retorno);
						}
					}
				);
			}
			else{
				toastr.warning("ATENÇÃO! Marque pelo menos 'um' motivo para o indeferimento.");
			}
		});
	}
	/* /modalIndeferir */

	/* #assinaturaModal */
	if ($("#assinaturaModal").length) {
		$("#assinaturaModal").on('show.bs.modal',function(){
		});
		$("#assinaturaModal input[type='file']").on('change',function(){
			if ($(this).val() != '') {
				$("#assinaturaModal button.btn-confirma").removeClass('d-none');
				$("#assinaturaModal .row-progress").removeClass('d-none');
			}
			else{
				$("#assinaturaModal button.btn-confirma").addClass('d-none');
				$("#assinaturaModal .row-progress").addClass('d-none');
			}
		});

		$("#assinaturaModal form").on('submit',function(e){
			e.preventDefault();
			var filename		=	"";
			var filetype		=	"";
			var filesize		=	"";
			var percent			=	0;
			var progress		=	"#"+$(this).find('.progress').attr('id');
			var btn_enviar		=	"#"+$(this).find('.btn-enviar').attr('id');
			var btn_removeFile	=	"#"+$(this).find('.btn-removeFile').attr('id');
			_fileupload			=	false;
			$(this).ajaxSubmit(
				{
					beforeSend:function(){
						$(btn_enviar).addClass('d-none');
						$(progress+' .progress-bar').attr('aria-valuenow','0').css('width','0%').html('0%');
					},
					uploadProgress:function(event,position,total,percentComplete){
						$(progress+' .progress-bar').attr('aria-valuenow',percentComplete).css('width',percentComplete+'%').html(percentComplete+'%');
					},
					success:function(response){
						_partes	=	response.split('|');
						if (_partes[0] == "S") {
							toastr.options.onHidden = function() { 
															$("#assinaturaModal").modal('hide');
															location.reload();
														}
							toastr.success("Arquivo ENVIADO com sucesso!","ENVIO DE ARQUIVO!");
						}
						else{
							toastr.error("O arquivo não pode ser enviado!\nContate o suporte","ERRO!");
						}
						console.log(response);
					}
				}
			);
		});

		/* jasny-bootstrap */
		if ($('.fileinput').length) {
			$('.fileinput').on('clear.bs.fileinput',function(){
				$('.fileinput .fileinput-preview').html('<img id="img-holder" data-src="holder.js/860x320?text=860px%20X%20320px&bg=98B240">').fileinput();
				var img_holder	=	document.getElementById("img-holder");
				Holder.run({
					images: img_holder
				});
			});

			$('.fileinput input[type="file"]').on('change',function(){
				if ($(this).val() != '') {
					filename	=	$(this)[0].files[0].name;
					filetype	=	$(this)[0].files[0].type;
					filesize	=	$(this)[0].files[0].size;
					imagem 		=	$(this)[0].files;
					if ((filetype != 'image/jpeg') && (filetype != 'image/png')) {
						toastr.options.onShown = function() { $("#btn-removerImg").click(); }
						/*toastr.options.onHidden = function() { 
																$("#btn-removerImg").click();
															}*/
						// toastr.success("Arquivo de imagem OK","OK!");
						// $('.fileinput').fileinput('clear');
						toastr.error("Tipo de arquivo não permitido!","ERRO!");
					}
					// console.log(filetype);
				}
			});

			/*var _URL = window.URL || window.webkitURL;
			if ((file = this.files[0])) {
				img = new Image();
				img.onload = function () {
					width = this.width;
					height = this.height;
					depois();
				};
				img.src = _URL.createObjectURL(file);
			}
			function depois(){
				console.log(width);
			}*/
		}
		/* /jasny-bootstrap */
	}
	/* /#assinaturaModal */

	/* enviar-fotosParecer */
	if ($(".enviar-fotosParecer").length) {
		$(".enviar-fotosParecer input[type='file']").on('change',function(){
			if ($(this).val() != '') {
				$("button.btn-confirma").removeClass('d-none');
				$(".row-progress").removeClass('d-none');
			}
			else{
				$("button.btn-confirma").addClass('d-none');
				$(".row-progress").addClass('d-none');
			}
		});

		$(".enviar-fotosParecer form").on('submit',function(e){
			e.preventDefault();
			var filename		=	"";
			var filetype		=	"";
			var filesize		=	"";
			var percent			=	0;
			var progress		=	"#"+$(this).find('.progress').attr('id');
			var btn_enviar		=	"#"+$(this).find('.btn-enviar').attr('id');
			var btn_removeFile	=	"#"+$(this).find('.btn-removeFile').attr('id');
			var legenda			=	$(this).find('input[name="legenda"]').val();
			_fileupload			=	false;
			if (legenda != '') {
				$(this).ajaxSubmit(
					{
						beforeSend:function(){
							$(btn_enviar).addClass('d-none');
							$(progress+' .progress-bar').attr('aria-valuenow','0').css('width','0%').html('0%');
						},
						uploadProgress:function(event,position,total,percentComplete){
							$(progress+' .progress-bar').attr('aria-valuenow',percentComplete).css('width',percentComplete+'%').html(percentComplete+'%');
						},
						success:function(response){
							_partes	=	response.split('|');
							if (_partes[0] == "S") {
								toastr.options.onHidden = function() { 
																// $("#assinaturaModal").modal('hide');
																location.reload();
															}
								toastr.success("Arquivo ENVIADO com sucesso!","ENVIO DE ARQUIVO!");
							}
							else{
								toastr.error("O arquivo não pode ser enviado!\nContate o suporte","ERRO!");
							}
							console.log(response);
						}
					}
				);
			}
			else{
				toastr.error("Preencha a legenda da imagem!","ERRO!");
				$(this).find('input[name="legenda"]').focus().select();
			}
		});

		/* jasny-bootstrap */
		if ($('.enviar-fotosParecer .fileinput').length) {
			$('.enviar-fotosParecer .fileinput').on('clear.bs.fileinput',function(){
				$('.fileinput .fileinput-preview').html('<img id="imagem-holder" data-src="holder.js/800x600?text=800px%20X%20600px&bg=98B240">').fileinput();
				var img_holder	=	document.getElementById("imagem-holder");
				Holder.run({
					images: img_holder
				});
			});

			$('.enviar-fotosParecer .fileinput input[type="file"]').on('change',function(){
				if ($(this).val() != '') {
					filename	=	$(this)[0].files[0].name;
					filetype	=	$(this)[0].files[0].type;
					filesize	=	$(this)[0].files[0].size;
					imagem 		=	$(this)[0].files;
					if ((filetype != 'image/jpeg') && (filetype != 'image/png')) {
						toastr.options.onShown = function() { $(".enviar-fotosParecer #btn-removerImg").click(); }
						toastr.error("Tipo de arquivo não permitido!","ERRO!");
					}
				}
			});
		}
		/* /jasny-bootstrap */
	}
	/* /enviar-fotosParecer */

	/* #alterarSenhaModal */
	if ($("#alterarSenhaModal").length) {
		$("#alterarSenhaModal").on('show.bs.modal',function(){
			$("#alterarSenhaModal .loading").addClass('d-none');
		});

		$('#alterarSenhaModal form').on('submit',function(e){
			e.preventDefault();
			_link_post	=	$("#alterarSenhaModal form").attr('action');
			$('#alterarSenhaModal span.loading').removeClass('d-none');
			$dados	=	$("#alterarSenhaModal form").serialize();
			$.post(
				_link_post,
				$dados,
				function(retorno){
					if (retorno == '1') {
						toastr.options.onHidden = function() { 
																location.reload();
															}
						toastr.success("Senha ALTERADA com sucesso!","ALTERAÇÃO DE SENHA!");
					}
					else{
						toastr.warning("ATENÇÃO! Ocorreu erro ao ALTERAR A SENHA.\nContate o suporte.","ALTERAÇÃO DE SENHA!");
						console.log(retorno);
					}
				}
			);
		});
	}
	/* /#alterarSenhaModal */
	// Realizar a soma dos campos
	$('.dados_ufmc').on('keyup', function(){
		valor_ufmc				=	moeda2float($('#valor_ufmc').val());
		lp						=	moeda2float($("#lp").val());
		li						=	moeda2float($("#li").val());
		lo						=	moeda2float($("#lo").val());
		ls						=	moeda2float($("#ls").val());
		autorizacao_ambiental	=	moeda2float($("#autorizacao_ambiental").val());
		total_ufmc 				=	((lp + li + lo + ls + autorizacao_ambiental));
		total_ufmc_moeda 		=	(valor_ufmc * total_ufmc);

		$('#total_ufmc').val(float2moeda(total_ufmc));
		$('#total_ufmc_moeda').val(float2moeda(total_ufmc_moeda));
	}) 

	if ($("#modalAprovar").length) {
		$("#modalAprovar button.btn-confirma").on('click',function(){
			_acao = $("#modalAprovar form").attr('action');

			$("#modalLoading").modal({
										keyboard: false,
										backdrop: 'static'
									});
			$.get(
				_acao, {},
				function(retorno){
					toastr.options.onHidden = function() {location.reload();}

					if (retorno != '0') {
						toastr.success("Licença aprovada com SUCESSO!","LICENÇA PROVADA");
					}
					else{
						toastr.error("Não foi possível aprovar a licença!\nERRO: "+retorno,"ERRO!");
					}
				}
			);
		});
	}

});

function logout(){
	$("#logoutModal").modal();
	$("#logoutModal button.btn-confirma").click(function(){
		$("#logoutModal").modal("hide");
		$('#logoutModal').on('hidden.bs.modal', function (e) {
			window.location.href    =   _systempath+'usuarios/logout';
		});
	});
}

function excluirEmpresa(link){
	_id_empresa	=	$(link).attr('data-id-empresa');
}

function fileclick(link){
	_inputfile	=	$(link).attr('data-file');
	$(_inputfile).click();
}

function devolverProtocolo(link){
	_id_protocolo		=	$(link).attr('data-id-licenca');
	_num_protocolo		=	$(link).attr('data-num-protocolo');
	_requerente			=	$(link).attr('data-requerente');
	_cpf_cnpj			=	$(link).attr('data-cpf-cnpj');
	_status				=	$(link).attr('data-status');
	_status_anterior	=	$(link).attr('data-status-anterior');
	_acao				=	$("#modalDevolver input.acao").val();
	$("#modalDevolver span.num_protocolo").html(_num_protocolo);
	$("#modalDevolver input.id_licenca").val(_id_protocolo);
	$("#modalDevolver input.status").val(_status);
	$("#modalDevolver input.status_anterior").val(_status_anterior);

	$("#modalProtocoloEncaminhar span.requerente").html(_requerente);
	$("#modalProtocoloEncaminhar span.cpf-cnpj").html(_cpf_cnpj);
	$("#modalProtocoloEncaminhar span.num-protocolo").html(_num_protocolo);

	$("#modalProtocoloEncaminhar input.id_licenca").val(_id_protocolo);
	$("#modalProtocoloEncaminhar input.requerente").val(_requerente);
	$("#modalProtocoloEncaminhar input.cpf_cnpj").val(_cpf_cnpj);
	$("#modalProtocoloEncaminhar input.num_protocolo").val(_num_protocolo);
	$("#modalProtocoloEncaminhar input.status").val(_status);
	$("#modalProtocoloEncaminhar input.status_anterior").val(_status_anterior);
	$("#modalProtocoloEncaminhar input.acao").val(_acao);
	console.log(_id_protocolo+' '+_status);
}

function encaminharProtocolo(link){
	_id_protocolo		=	$(link).attr('data-id-licenca');
	_id_requerente		=	$(link).attr('data-id-requerente');
	_ce_tipo_licenca	=	$(link).attr('data-ce-tipo-licenca');
	_ce_tipo_documento	=	$(link).attr('data-ce-tipo-documento');
	_num_protocolo		=	$(link).attr('data-num-protocolo');
	_requerente			=	$(link).attr('data-requerente');
	_tipo_pessoa		=	$(link).attr('data-tipo-pessoa');
	_cpf_cnpj			=	$(link).attr('data-cpf-cnpj');
	_status				=	$(link).attr('data-status');
	_status_anterior	=	$(link).attr('data-status-anterior');
	_acao				=	$("#modalEncaminhar input.acao").val();
	$("#modalEncaminhar span.num_protocolo").html(_num_protocolo);
	/* inputs */
	$("#modalEncaminhar input.id_protocolo").val(_id_protocolo);
	$("#modalEncaminhar input.id_requerente").val(_id_requerente);
	$("#modalEncaminhar input.ce_tipo_licenca").val(_ce_tipo_licenca);
	$("#modalEncaminhar input.ce_tipo_documento").val(_ce_tipo_documento);
	$("#modalEncaminhar input.num_protocolo").val(_num_protocolo);
	$("#modalEncaminhar input.id_licenca").val(_id_protocolo);
	$("#modalEncaminhar input.requerente").val(_requerente);
	$("#modalEncaminhar input.tipo_pessoa").val(_tipo_pessoa);
	$("#modalEncaminhar input.cpf_cnpj").val(_cpf_cnpj);
	$("#modalEncaminhar input.status").val(_status);
	$("#modalEncaminhar input.status_anterior").val(_status_anterior);
	$("#modalEncaminhar input.acao").val(_acao);
	/* inputs */
	console.log(_id_protocolo+' '+_status);
}

function indeferirProtocolo(link){
	_id_protocolo	=	$(link).attr('data-id-licenca');
	_num_protocolo	=	$(link).attr('data-num-protocolo');
	_status			=	$(link).attr('data-status');
	$("#modalIndeferir span.num_protocolo").html(_num_protocolo);
	$("#modalIndeferir input.num_protocolo").val(_num_protocolo);
	$("#modalIndeferir input.id_licenca").val(_id_protocolo);
	$("#modalIndeferir input.status").val(_status);
	console.log(_id_protocolo+' '+_status);
}

function aprovarProtocolo(link){
	_num_protocolo		=	$(link).attr('data-num-protocolo');
	url					=	$(link).attr('data-link');
	$("#modalAprovar span.num_protocolo").html(_num_protocolo);
	$("#modalAprovar #form-aprovar").attr('action', url);
}

function alterarSenha(link){
	_id_usuario		=	$(link).attr('data-id-usuario');
	_nome_usuario	=	$(link).attr('data-nome-usuario');
	_link_post		=	$("#alterarSenhaModal form").attr('action');
	$("#alterarSenhaModal input.id_usuario").val(_id_usuario);
	$("#alterarSenhaModal div.div-nome-usuario").html('<strong>'+_nome_usuario+'</strong>');
	$("#alterarSenhaModal").modal('show');
	console.log(_link_post);
}

function alterarAssinatura(link){
	_id_usuario			=	$(link).attr('data-usuario-id');
	_nome_usuario		=	$(link).attr('data-usuario-nome');
	_assinatura_usuario	=	$(link).attr('data-usuario-assinatura');
	if (_assinatura_usuario != '') {
		$("#assinaturaModal div#div-fileinput").removeClass('fileinput-new').addClass('fileinput-exists');
		$("#assinaturaModal div#fileinput-preview").html('<img src="'+_empresapath+_assinatura_usuario+'">');
	}
	else{
		$("#assinaturaModal #btn-removerImg").click();
	}
	$("#assinaturaModal div.div-nome-usuario").html('<strong>'+_nome_usuario+'</strong>');
	$("#assinaturaModal input.id_usuario").val(_id_usuario);
	$("#assinaturaModal").modal('show');
}