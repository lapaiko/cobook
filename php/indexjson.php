<?php
	include "indexkmaket.php";

	$Action = $_GET['Action'];
	$ActionP = $_POST['Action']; 

	// -4 ТИЖДЕНЬ - коробка	
	// -4.1 ДЕНЬ ТИЖНЯ - коробка (рамка)
	// -4.1 - Розклад уроків
	function shedule_json($fn_date)	{
		$shedule_data_str = file_get_contents("../data/json/24321/3/6a/shedule.json");
		$shedule_data_json = json_decode($shedule_data_str);
		foreach($shedule_data_json as $shedule_date=>$chshedule_date)
			foreach($chshedule_date as $shedule=>$archshedule)
				$shedule_json[$shedule_date][$shedule]=$archshedule;
		return $shedule_json[$fn_date];
	}

	// -4 ТИЖДЕНЬ - коробка	
	// -4.2 ПРЕДМЕТ-контейнер
	// -4.2 - Предмет, викладач, лінки (комунікатори/книжки)
	function lesson_json()	{
		$lesson_data_str = file_get_contents("../data/json/24321/3/6a/lesson.json");
		$lesson_data_json = json_decode($lesson_data_str);
		foreach($lesson_data_json as $subject=>$chsubject) 	
			foreach($chsubject as $key=>$value) 				
				$lesson_json[$subject][$key]=$value; 		
		return $lesson_json;
	}

	// -4 ТИЖДЕНЬ - коробка	
	// -4.1 ДЕНЬ ТИЖНЯ - коробка (рамка)
	// -4.3 - Дні тижня
	function weekday($fn_language)	{
		$weekday_data_str = file_get_contents("../data/json/weekday.json");
		$weekday_data_json = json_decode($weekday_data_str);
		foreach($weekday_data_json as $language=>$chlanguage) 	
			foreach($chlanguage as $key=>$arrweekday) 				
				$weekday_json[$language][$key]=$arrweekday; 		
		
		$weekday=$weekday_json[$fn_language];
		return $weekday;
	}

	//*****************************************************************************************************************************
	//** -1 Контент: завантаження головного вікна                                                                                   **
	//function init(){
	//	$init="OK - init - json";
//
	//	return $init;
	//}
?>