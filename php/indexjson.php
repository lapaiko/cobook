<?php
	include "indexkmaket.php";

	$Action = $_GET['Action'];
	$ActionP = $_POST['Action']; 


	//*****************************************************************************************************************************
	//** -1 Контент: завантаження головного вікна                                                                                   **
	function init(){
		$init="OK - init - json";

		return $init;
	}
?>