<?php
	include "indexjson.php";
	include "indexconfig.php";

	$Action = $_GET['Action'];
	$ActionP = $_POST['Action']; 
	

	// -4 ТИЖДЕНЬ - коробка
	if($Action=="week__row"){
		
		// -3 ДЕНЬ ТИЖНЯ - коробка (рамка)
		weekday($day, $subject__conteiner);
		
		// -2 ПРЕДМЕТ-контейнер
		subject__conteiner($chsubject);

	}


	//*****************************************************************************************************************************
	//** -1 Контент: завантаження головного вікна                                                                                   **
	if($Action=="init"){

		$init=init();
		$send="OK - init - maket > $init";

		echo $send;
	}
?>