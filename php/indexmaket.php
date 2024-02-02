<?php
	include "indexjson.php";
	include "indexconfig.php";

	$Action = $_GET['Action'];
	$ActionP = $_POST['Action']; 
	

	// -4 ТИЖДЕНЬ - коробка
	if($Action=="week__row"){
		$week__row_date = $_GET['week__row_date'];

		$weekday_data="";
		$lesson_data_json=lesson_json();
		$lesson_data_json['uklen']: {
			"lesson"
		//foreach ($lesson_data_json as $subject =>$chsubject){
		//	foreach ($chsubject as $item => $data)
		//	{
		//		$weekday_data.= "$item = $data >";
		//	}
		//}

		//$shedule_=""; $dt="2024-01-01";
		//$shedule_data_json=shedule_json("2024-01-01");
		//foreach( $shedule_data_json as $shedule_data=>$chshedule )
		//{
		//	$arr=$chshedule['shedule'];
		//	
		//	$shedule_.="'$type'";
		//}
		//let $arrshedule=$shedule_data_json['shedule'];
		//let $arrtime=$shedule_data_json.time;
		//for($i=0; $i<=$arrshedule.length; $i++) {
		//}


		// -3 ДЕНЬ ТИЖНЯ - коробка (рамка)
		//weekday_maket($day, $subject__conteiner);
		
		// -2 ПРЕДМЕТ-контейнер
		//subject__conteiner($chsubject);


		echo "- $shedule_ -";
	}


	//*****************************************************************************************************************************
	//** -1 Контент: завантаження головного вікна                                                                                   **
	if($Action=="init"){

		$init=init();
		$send="OK - init - maket > $init";

		echo $send;
	}
?>