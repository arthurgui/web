<?php if ( ! defined('BASEPATH')) exit('Acesso direto de script não é permitido.');
	// Incluimos a Library FPDF
	require_once APPPATH."/third_party/fpdf/fpdf.php";
	/**
	* @author Flávio Villar
	* @author Update Manuel Alejandro Garcia
	* @copyright 2011 - 2015
	*/
	// a clase My_print Contem as Function necesarias para criar o relatorio em Formato PDF 
	class My_print {
		
		function report_footer ($pdf, $linha_rodape, $fonte_rodape, $tam_fonte_rodape, $pagina){
		
		  /*******definindo o rodapé*************************/
		  //posiciona verticalmente na linha inicio do rodape
		  $pdf->SetY($linha_rodape);

		  $rodape = "Emitido por site desenvolvido pela Logon Informática (www.logon.inf.br)";

		  //imprime uma celula... largura,altura, texto,borda,quebra de linha, alinhamento
		  $pdf->Cell(0,0,'',1,1,'L');

		  //define a fonte a ser usada
		  $pdf->SetFont($fonte_rodape,'',$tam_fonte_rodape);

		  //imprime uma celula... largura,altura, texto,borda,quebra de linha, alinhamento
		  $pdf->Write(5,$rodape,"www.logon.inf.br");

		  $menspagina = "Pagina ".$pagina;

		  //imprime uma celula... largura,altura, texto,borda,quebra de linha, alinhamento
		  $pdf->Cell(0,5,$menspagina,0,0,'R');
		}

		function report_header ($pdf, $logomarca, $titulo, $contador, $posx_campos, $tamanhos_campos, $cabecalhos_campos, $alinhamentos_campos, $linha_atual, $fonte_titulo, $tam_fonte_titulo, $fonte_detalhe, $tam_fonte_detalhe, $filtro){
		   
		   // posicao vertical no caso -1.. e o limite da margem
		   $pdf->SetY("-1");

		   $data     = date("d/m/Y");
		   $conteudo = "Emitido em ".$data;
					 
		   $pdf->Cell(0,5,$conteudo,0,1,'R');

		   //escreve no pdf largura,altura,conteudo,borda,quebra de linha,alinhamento
		   $pdf->Cell(0,0,'',1,1,'L');
		   $pdf->Ln(1);

		   $PosYAtual = $pdf->GetY()+10;

		   $pdf->Image($logomarca,null,null,30,30);

		   $pdf->SetXY(30,$PosYAtual);

		   //define a fonte a ser usada
		   $pdf->SetFont($fonte_titulo, 'B', $tam_fonte_titulo);

		   $pdf->Cell(0,5,$titulo,0,0,'C');
			// $pdf->Cell(largura,altura,string,border,0,alinhamento,preenchimento,link);   
		   $pdf->Ln(10);
		   
		   $pdf->SetFont($fonte_detalhe,'', $tam_fonte_detalhe);

		   if ($filtro != NULL) {
			  $pdf->SetX(50);
			  $pdf->Cell(0,5,$filtro,0,0,'L');    
		   } 
		   
		   $pdf->Ln(12);
		   
		   $pdf->Cell(0,0,'',1,1,'L');
		   $pdf->Ln(2);
					 
		   $pdf->SetFont($fonte_detalhe,'B', $tam_fonte_detalhe);
					 
		   for ($i = 0; $i < $contador; $i++) {
			  $pdf->SetX($posx_campos[$i]);
					   
			  $pdf->Cell($tamanhos_campos[$i], 0, $cabecalhos_campos[$i], 0, 0, $alinhamentos_campos[$i]);                
		   }

		   $pdf->Ln(2);
		   $pdf->Cell(0,0,'',1,1,'L');
		   $pdf->Ln(2);

		}

		function report_group_footer($pdf, $contador, $posx_campos, $tamanhos_campos, $tot_grupos, $alinhamentos_campos, $calculo_campos, $tipos_campos) {
		  
			$pdf->Cell(0,0,'',1,1,'L');
			$pdf->Ln(2);

			$pdf->SetX(30);
			 
			$pdf->Cell(0, 0, 'Totais', 0, 0, 'L') ;

			for ($i = 0; $i < $contador; $i++) {
				$pdf->SetX($posx_campos[$i]);
				
				switch ($calculo_campos[$i]) {
				  case "S":       // Somar
					if ($tipos_campos[$i] == "C")	 {
						$textoaimprimir = 'R$ '.number_format($tot_grupos[$i], 2, ',', '.');
						$pdf->Cell($tamanhos_campos[$i], 0, $textoaimprimir, 0, 0, $alinhamentos_campos[$i]);
					} else {
						$textoaimprimir = number_format($tot_grupos[$i], 0, ',', '.');
						$pdf->Cell($tamanhos_campos[$i], 0, $textoaimprimir, 0, 0, $alinhamentos_campos[$i]);
					}
				 	break;
				  case "C":       // Contar
					 $textoaimprimir = number_format($tot_grupos[$i], 0, ',', '.');
					 $pdf->Cell($tamanhos_campos[$i], 0, $textoaimprimir, 0, 0, $alinhamentos_campos[$i]);
				}    
			}

			$pdf->Ln(2);
			$pdf->Cell(0,0,'',1,1,'L');
			$pdf->Ln(2);
		}

		function report_totals($pdf, $contador, $posx_campos, $tamanhos_campos, $tot_gerais, $alinhamentos_campos, $calculo_campos, $tipos_campos) {
			
		  $pdf->SetX(30);
			 
		  $pdf->Cell(0, 0, 'Totais Gerais', 0, 0, 'L') ;

		  for ($i = 0; $i < $contador; $i++) {
			$pdf->SetX($posx_campos[$i]);
				
			switch ($calculo_campos[$i]) {
			  case "S":       // Somar
				if ($tipos_campos[$i] == "C")	 {
					$textoaimprimir = 'R$ '.number_format($tot_gerais[$i], 2, ',', '.');
					$pdf->Cell($tamanhos_campos[$i], 0, $textoaimprimir, 0, 0, $alinhamentos_campos[$i]);
				} else {
					$textoaimprimir = number_format($tot_gerais[$i], 0, ',', '.');
					$pdf->Cell($tamanhos_campos[$i], 0, $textoaimprimir, 0, 0, $alinhamentos_campos[$i]);
				}
				break;
			  case "C":       // Contar
				 $textoaimprimir = number_format($tot_gerais[$i], 0, ',', '.');
				 $pdf->Cell($tamanhos_campos[$i], 0, $textoaimprimir, 0, 0, $alinhamentos_campos[$i]);                
			}

		  }

		  $pdf->Ln(2);
		  $pdf->Cell(0,0,'',1,1,'L');
		  $pdf->Ln(2);
		}

		function report_group_header($pdf, $valor_agrupamento, $titulo_agrupamento) {
			
		   if ($valor_agrupamento <> '') {
			 $pdf->SetX(30);

			 $pdf->Cell(100, 0, $titulo_agrupamento.utf8_decode($valor_agrupamento), 0, 0, 'L') ;

			 $pdf->Ln(2);
			 $pdf->Cell(0,0,'',1,1,'L');
			 $pdf->Ln(2);
		   }
		}
		function report($cons_relatorio, $consulta, $filtro){ 
			$linha_atual       = -1;
			$pagina            = 1;
			$totalizou         = False;
			$valor_agrupamento = '';
  
			/*var_dump($consulta);
			var_dump($cons_relatorio);
			foreach ($consulta as $key) {
				echo '<br>'.$key['cpf'];
			}
			foreach ($cons_relatorio as $key) {
				echo '<br>'.$key['cabecalho'];
				echo '<br>'.$key['origem'];
			}*/
			if (count($cons_relatorio) > 0) {
				$contador = 0;
				foreach ($cons_relatorio as $linha_relatorio) {
					
						$titulo                 = utf8_decode($linha_relatorio['titulo_relatorio']);
						$orientacao             = $linha_relatorio['orientacao'];
						$tam_papel              = $linha_relatorio['tam_papel'];
						$logomarca              = $linha_relatorio['logomarca'];
						$fonte_rodape           = $linha_relatorio['fonte_rodape'];
						$fonte_detalhe          = $linha_relatorio['fonte_detalhe'];
						$fonte_titulo           = $linha_relatorio['fonte_titulo'];
						$titulo_agrupamento     = utf8_decode($linha_relatorio['titulo_agrupamento']);
						$campo_agrupamento      = $linha_relatorio['campo_agrupamento'];
						$tipo_campo_agrupamento = $linha_relatorio['tipo_campo_agrupamento'];
						$tam_fonte_rodape       = $linha_relatorio['tam_fonte_rodape'];
						$tam_fonte_detalhe      = $linha_relatorio['tam_fonte_detalhe'];
						$tam_fonte_titulo       = $linha_relatorio['tam_fonte_titulo'];
			
						$cabecalhos_campos[$contador]   = utf8_decode($linha_relatorio['cabecalho']);
						$nomes_campos[$contador]        = $linha_relatorio['nome'];
						$tipos_campos[$contador]        = $linha_relatorio['tipo'];
						$calculo_campos[$contador]      = $linha_relatorio['calculo'];
						$origem_campos[$contador]       = $linha_relatorio['origem'];
						$posx_campos[$contador]         = $linha_relatorio['posx'];
						$alinhamentos_campos[$contador] = $linha_relatorio['alinhamento'];
						$tamanhos_campos[$contador]     = $linha_relatorio['tamanho'];
						$pode_repetir[$contador]        = $linha_relatorio['pode_repetir'];
						$vlr_anterior[$contador]        = '';
						$tot_grupos[$contador]          = 0;
						$tot_gerais[$contador]          = 0;

						$contador++;
				}

				if ($orientacao == 'P') {
					$linha_rodape = 270;
				} else {
					$linha_rodape = 180;
				}

				//instancia a classe.. P=Retrato, mm =tipo de medida utilizada no casso milimetros, tipo de folha =A4
				//$pdf = new Pdf($orientacao,"mm",$tam_papel);
				$pdf= new FPDF($orientacao,"mm",$tam_papel);

				//define a fonte a ser usada
				$pdf->SetFont($fonte_detalhe,'',$tam_fonte_detalhe);
	 		
				foreach ($consulta as $linha_detalhe) {
					if (($linha_atual > ($linha_rodape-10)) or ($linha_atual < 0)) {
						$this->report_header($pdf, $logomarca, $titulo, $contador, $posx_campos, $tamanhos_campos, $cabecalhos_campos, $alinhamentos_campos, $linha_atual, $fonte_titulo, $tam_fonte_titulo, $fonte_detalhe, $tam_fonte_detalhe, $filtro);
						// posicao vertical no caso -1.. e o limite da margem
						//define a fonte a ser usada
						$pdf->SetFont($fonte_detalhe,'',$tam_fonte_detalhe);
					}
					if ($campo_agrupamento != '') {
						
						if ($valor_agrupamento != $linha_detalhe[$campo_agrupamento]) {
							if ($totalizou) {
								$this->report_group_footer($pdf, $contador, $posx_campos, $tamanhos_campos, $tot_grupos, $alinhamentos_campos, $calculo_campos, $tipos_campos);
								
								for ($i = 0; $i < $contador; $i++) {
									$tot_grupos[$i] = 0;
								}
							}
							$valor_agrupamento = $linha_detalhe[$campo_agrupamento];
							if ($tipo_campo_agrupamento == "D") {
								$valor_formatado_agrupamento = ' ' . substr($valor_agrupamento, 8, 2).'/'.substr($valor_agrupamento, 5, 2).'/'.substr($valor_agrupamento, 0, 4) . ' ';
							} else {
								$valor_formatado_agrupamento = $valor_agrupamento;
							}
							$this->report_group_header($pdf, $valor_formatado_agrupamento, $titulo_agrupamento);
							
							for ($i = 0; $i < $contador; $i++) {
							   $vlr_anterior[$i] = '';
							}
						}
					}

					for ($i = 0; $i < $contador; $i++) {
						$pdf->SetX($posx_campos[$i]);
			
						switch ($origem_campos[$i]) {
							case "F":
							   $funcao     = substr($nomes_campos[$i],0,strpos($nomes_campos[$i], "("));
							   $parametros = substr($nomes_campos[$i],strpos($nomes_campos[$i], "(")+1);
							   $parametros = substr($parametros, 0, strlen($parametros)-1);

							   $textoaimprimir = $funcao($linha_detalhe[$parametros]);
							   
							   break;
							default :
							   $textoaimprimir = $linha_detalhe[$nomes_campos[$i]];
						}      
						
						switch ($calculo_campos[$i]) {
							case "S":       // Somar
							   $totalizou      = True; 
							   $textoaimprimir = $textoaimprimir*1;
							   $tot_grupos[$i] = $tot_grupos[$i] + $textoaimprimir;
							   $tot_gerais[$i] = $tot_gerais[$i] + $textoaimprimir;
							   break;
							case "C":       // Contar
							   $totalizou      = True;
							   $tot_grupos[$i]++;
							   $tot_gerais[$i]++;
							   break;
						}    
			
						switch ($tipos_campos[$i]) {
							case "C":       // Currency
							   $textoaimprimir = $textoaimprimir*1;
							   
							   $textoaimprimir = number_format($textoaimprimir, 2, ',', '.');
							   break;
							case "D":       // Data
							   $textoaimprimir = substr($textoaimprimir, 8, 2).'/'.substr($textoaimprimir, 5, 2).'/'.substr($textoaimprimir, 0, 4);
							   break;
							case "F":       // Float com 2 posições
							   $textoaimprimir = number_format($textoaimprimir, 2, ',', '.');
							   break;
							default :
							   $textoaimprimir = utf8_decode($textoaimprimir);
						}      

						if ($pode_repetir[$i] == 'N') {
							if ($vlr_anterior[$i] == $textoaimprimir) {
								$textoaimprimir = '';
							} else {
								$vlr_anterior[$i] = $textoaimprimir;
							}
						}
			
						$pdf->Cell($tamanhos_campos[$i], 3, $textoaimprimir, 0, 0, $alinhamentos_campos[$i]);
					}
					
					$pdf->Ln(5);
			
					$linha_atual = $pdf->GetY();
			
					if ($linha_atual >= ($linha_rodape-10)) {
						$this->report_footer ($pdf, $linha_rodape, $fonte_rodape, $tam_fonte_rodape, $pagina);
						$pagina = $pagina + 1;
					}
			
				}
	  
				if ($totalizou) {
					if ($valor_agrupamento <> '') {
						$this->report_group_footer($pdf, $contador, $posx_campos, $tamanhos_campos, $tot_grupos, $alinhamentos_campos, $calculo_campos, $tipos_campos);
						
					} else {
						$pdf->Cell(0,0,'',1,1,'L');
						$pdf->Ln(2);            
					}
					$this->report_totals($pdf, $contador, $posx_campos, $tamanhos_campos, $tot_gerais, $alinhamentos_campos, $calculo_campos, $tipos_campos);
					
				}
	  
				$this->report_footer ($pdf, $linha_rodape, $fonte_rodape, $tam_fonte_rodape, $pagina);
				//imprime a saida do arquivo..
				$pdf->Output(); // Saida Default
				/*
		         * PDF é enviada ao navegador
		         *
		         * $pdf->Output(nombredelarchivo, destino);
		         *
		         * I = Exibe o pdf no navegador
		         * D = Envie o pdf para download
		         *
		         */
				//$pdf->Output("Reporte.pdf", 'I');
			}
		
		}
	}