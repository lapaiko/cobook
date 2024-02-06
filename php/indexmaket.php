<?php
	include "indexjson.php";
	include "indexconfig.php";

	$Action = $_GET['Action'];
	$ActionP = $_POST['Action']; 

	
	//********************************************************************
	// m.2.0 РОЗКЛАД НА ТИЖДЕНЬ - елемент

	if($Action=="week__row"){
		$language = $_GET['language'];
		$week_date = $_GET['week_date'];		
		$htmlweek="";
		
		$chweekday=weekday("php",$language); 			// j.2.0.3 Дні тижня - для php
		
		$arrweekday=$chweekday['weekday'];
		$chlesson=lesson_json();							// j.2.0.2 Предмет, викладач, лінки (комунікатори/книжки)
		
		$shedule_data_json=shedule_json($week_date); // j.2.0.1 Розклад уроків
		$arrshedule=$shedule_data_json['shedule'];
		$arrtime=$shedule_data_json['time'];

		for($d=0; $d<count($arrshedule); $d++)			{	
			$htmlsubject="";
			for($i=0; $i<count($arrshedule[$d]); $i++){

				$subject=$arrshedule[$d][$i];
				$chsubject=$chlesson[$subject];
				$chsubject['num'] = $i+1;
				$chsubject['time'] = $arrtime[$d][$i];	

				// c.2.0.2 Макет - предмет, контакти, завдання
				$htmlsubject.= subject__conteiner_maket($chsubject); 
			}
			// c.2.0.1 Макет - день тижня
			$htmlweek.= weekday_maket($arrweekday[$d], $htmlsubject); 
		}
		echo $htmlweek;
	}


?>