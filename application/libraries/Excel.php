<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/* 
 *  ======================================= 
 *  Author     : Muhammad Surya Ikhsanudin 
 *  License    : Protected 
 *  Email      : mutofiyah@gmail.com 
 *   
 *  Dilarang merubah, mengganti dan mendistribusikan 
 *  ulang tanpa sepengetahuan Author 
 *  ======================================= 
 */
require_once APPPATH."/third_party/PHPExcel/PHPExcel.php";

class Excel extends PHPExcel {
	public function __construct() {
		parent::__construct();
	}
}
// - See more at: https://arjunphp.com/how-to-use-phpexcel-with-codeigniter/#sthash.IbbqaeX4.dpuf
?>