<?php
	include "indexjson.php";
	include "indexconfig.php";

	$Action = $_GET['Action'];
	$ActionP = $_POST['Action']; 
	

	// -4 ТИЖДЕНЬ - коробка
	if($Action=="week__row"){
		$language = $_GET['language'];
		$week_date = $_GET['week_date'];		
		$week_row="";
		
		$chweekday=weekday($language); 		// -4.3 - Дні тижня
		$arrweekday=$chweekday['weekday'];
		$chlesson=lesson_json();	// -4.1 Предмет, викладач, лінки (комунікатори/книжки)
		
		$shedule_data_json=shedule_json($week_date); //-4.2 Розклад уроків
		$arrshedule=$shedule_data_json['shedule'];
		$arrtime=$shedule_data_json['time'];
		
		for($d=0; $d<$arrshedule.length; $d++)			{	
			$subject__conteiner="";
			for($i=0; $i<$arrshedule[$d].length; $i++){
				$chhedule['num'] = $i+1;
				$chhedule['time'] = $arrtime[$d][$i];	
				$subject__conteiner.= subject__conteiner_maket($chhedule, $chlesson);
			}
			$week_row.= weekday_maket($arrweekday[$d], $subject__conteiner); 
		}

		echo $week_row;
	}


	//*****************************************************************************************************************************
	//** -1 Контент: завантаження головного вікна                                                                                   **
	if($Action=="init"){

		$init=init();
		$send="OK - init - maket > $init";

		echo $send;
	}
?>