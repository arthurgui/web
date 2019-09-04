<?php if ( ! defined('BASEPATH')) exit('Acesso direto de script não é permitido.');
	// Incluimos a Library FPDF
	require_once APPPATH."/third_party/fpdf/fpdf.php";
	/**
	* @author Flávio Villar
	* @author Update Manuel Alejandro Garcia
	* @copyright 2011 - 2015
	*/
	// a clase My_print Contem as Function necesarias para criar o relatorio em Formato PDF 
	class My_print_label {
		
		function label_header ($pdf, $contador, $nome_etiqueta, $modelo_etiqueta, $fonte, $tam_fonte){
   
		   // posicao vertical no caso -1.. e o limite da margem
		   $pdf->SetY("-1");

		   //define a fonte a ser usada
		   $pdf->SetFont($fonte, 'B', $tam_fonte);

		   $pdf->Cell(0,0,'',0,0,'L');
		//   $pdf->Cell(0,0,$nome_etiqueta,0,0,'L');
		   $pdf->Ln(4);
		   
		//   $pdf->Cell(0,0,'Configurado para '.$modelo_etiqueta,0,0,'L');
		//   $pdf->Ln(2);
		}
		function report($cons_relatorio, $consulta, $filtro){ 
			$linha_atual       = -1;
			$pagina            = 1;
			$totalizou         = False;
			$valor_agrupamento = '';
  
			if (count($cons_relatorio) > 0) {
				$contador = 0;
				foreach ($cons_relatorio as $linha_relatorio) {
					
						$nome_etiqueta          = $linha_relatorio['nome_etiqueta'];
				        $modelo_etiqueta        = $linha_relatorio['modelo_etiqueta'];
				        $tam_papel              = $linha_relatorio['tam_papel'];
				        $orientacao             = $linha_relatorio['orientacao'];
				        $fonte                  = $linha_relatorio['fonte'];
				        $tam_fonte              = $linha_relatorio['tam_fonte'];
				        $qt_colunas             = $linha_relatorio['qt_colunas'];
				        $espaco_entre_colunas   = $linha_relatorio['espaco_entre_colunas'];
				        $espaco_entre_linhas    = $linha_relatorio['espaco_entre_linhas'];
				        
				        $nomes_campos[$contador]        = $linha_relatorio['nome'];
				        $tipos_campos[$contador]        = $linha_relatorio['tipo'];
				        $origem_campos[$contador]       = $linha_relatorio['origem'];
				        $posx_campos[$contador]         = $linha_relatorio['posx'];
				        $linhas_campos[$contador]       = $linha_relatorio['linha'];
				        $alinhamentos_campos[$contador] = $linha_relatorio['alinhamento'];
				        $tamanhos_campos[$contador]     = $linha_relatorio['tamanho'];

						$contador++;
				}

				if ($orientacao == 'P') {
        			$linha_rodape = 270;
      			} else {
        			$linha_rodape = 180;
      			}

      			//instancia a classe.. P=Retrato, mm =tipo de medida utilizada no casso milimetros, tipo de folha =A4
      			$pdf  = new FPDF($orientacao,"mm",$tam_papel);

      			//define a fonte a ser usada
      			$pdf->SetFont($fonte,'',$tam_fonte);
      
      			
      			$count = count($consulta);
      			$control=0;
    			while ( $control < $count) {
    				
					$linha_detalhe[0] = $consulta[$control];
						

         			if (($linha_atual > ($linha_rodape-10)) or ($linha_atual < 0)) {
           				$this->label_header($pdf, $contador, $nome_etiqueta, $modelo_etiqueta, $fonte, $tam_fonte);
           				$linha_atual = $pdf->GetY();
         			}
         
        			for ($j=1; $j < $qt_colunas ; $j++) { 
        					++$control;
        					
        					if ($control < $count) {
    							$linha_detalhe[$j] = $consulta[$control];
        					}else{
        						$linha_detalhe[$j] = array("nome"=> "", "endereco"=>"", "numero"=>"", "rg_uf"=>"","cidade"=>"", "bairro"=>"", "cep"=>"" );
        					}
         			}

         			$linha_campo_atual = $linhas_campos[0];
         			
         			for ($i = 0; $i < $contador; $i++) {
           				for ($j=0; $j < $qt_colunas ; $j++) { 
              				if ($linha_campo_atual != $linhas_campos[$i]) {
                				$pdf->Ln(5);
                					$linha_campo_atual = $linhas_campos[$i];
              				}

              				$pdf->SetX($posx_campos[$i]+$j*$espaco_entre_colunas);
              
             				switch ($origem_campos[$i]) {
                  				case "F":
                     				$funcao     = substr($nomes_campos[$i],0,strpos($nomes_campos[$i], "("));
                     				$parametros = substr($nomes_campos[$i],strpos($nomes_campos[$i], "(")+1);
                     				$parametros = substr($parametros, 0, strlen($parametros)-1);
                     				
                     				$textoaimprimir = $funcao($linha_detalhe[$j][$parametros]);
                     			break;
                  				default :
                  				
                     				$textoaimprimir = $linha_detalhe[$j][$nomes_campos[$i]];
                     			
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
              				$pdf->Cell($tamanhos_campos[$i], 3, $textoaimprimir, 0, 0, $alinhamentos_campos[$i]);
            			}
         			}

         			$pdf->Ln($espaco_entre_linhas);
            
         			$linha_atual = $pdf->GetY();
            
         			if ($linha_atual >= ($linha_rodape-10)) {
            			$this->label_header($pdf, $contador, $nome_etiqueta, $modelo_etiqueta, $fonte, $tam_fonte);
            			$linha_atual = $pdf->GetY();
            			$pagina = $pagina + 1;
         			}
    				$control++;
    			}
      			//imprime a saida do arquivo..
      			$pdf->Output();
  			}
		}
	}