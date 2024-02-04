<?php
	include "indexkmaket.php";

	$Action = $_GET['Action'];
	$ActionP = $_POST['Action']; 


	//********************************************************************
	// m.2.0 РОЗКЛАД НА ТИЖДЕНЬ - елемент
	// j.2.0.1 Розклад уроків
	function shedule_json($fn_date)	{
		$shedule_data_str = file_get_contents("../data/json/24321/3/6a/shedule.json");
		$shedule_data_json = json_decode($shedule_data_str);
		foreach($shedule_data_json as $shedule_date=>$chshedule_date)
			foreach($chshedule_date as $shedule=>$archshedule)
				$shedule_json[$shedule_date][$shedule]=$archshedule;
		return $shedule_json[$fn_date];
	}

	// j.2.0.2 Предмет, викладач, лінки (комунікатори/книжки)
	function lesson_json()	{
		$lesson_data_str = file_get_contents("../data/json/24321/3/6a/lesson.json");
		$lesson_data_json = json_decode($lesson_data_str);
		foreach($lesson_data_json as $subject=>$chsubject) 	
			foreach($chsubject as $key=>$value) 				
				$lesson_json[$subject][$key]=$value; 		
		return $lesson_json;
	}

	// j.2.0.3 Дні тижня
	function weekday($fn_language)	{
		$weekday_data_str = file_get_contents("../data/json/weekday.json");
		$weekday_data_json = json_decode($weekday_data_str);
		foreach($weekday_data_json as $language=>$chlanguage) 	
			foreach($chlanguage as $key=>$arrweekday) 				
				$weekday_json[$language][$key]=$arrweekday; 		
		
		$weekday=$weekday_json[$fn_language];
		return $weekday;
	}



	// -4 ТИЖДЕНЬ - коробка	
	// -4.2 ПРЕДМЕТ-контейнер
	// -4.4 - Завдання
	function task_json_____()	{
		$chsubject=array('uklen'=>'||1. ', 'uklit'=>'||1. ','zarlit'=>'||1. ','eng'=>'||1. ', 'mat'=>'||1. ','mus'=>'||1. ','hist'=>'||1. ','etika'=>'||1. ','fiz'=>'||1. ','pain'=>'||1. ','prog'=>'||1. ','dram'=>'||1. ','oz'=>'||1. ','tec'=>'||1. ','nat'=>'||1. ','geog'=>'||1. ');	

		$task_data_str = file_get_contents("../data/json/24321/3/6a/task.json");
		$task_data_json = json_decode($task_data_str);
		
		foreach($task_data_json as $stdate=>$chdate) {
			foreach($chdate as $subject=>$task) 		{
				$task_data_ch[$stdate][$subject]=$chsubject[$subject]."||Done||";
				$chsubject[$subject]=$task;
		}	}
		$task_data_str= json_encode($task_data_ch, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
		$task_data_str=str_replace("\/","/",$task_data_str);

		$flJSON=fopen("../data/json/24321/3/6a/task_new.json",'w');	
		fputs($flJSON, $task_data_str);	fclose($flJSON);
		chmod("../data/json/24321/3/6a/task_new.json", 0777);

		return $task_data_str;
	}	

?>