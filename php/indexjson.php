<?php
	include "indexkmaket.php";

	$Action = $_GET['Action'];
	$ActionP = $_POST['Action']; 

	// -3 ДЕНЬ ТИЖНЯ - коробка (рамка)
	// Предмет, викладач, лінки (комунікатори/книжки)
	function lesson_json()
	{
		$path="../data/json/24321/3/6a/lesson.json";
		$lesson_data_str = file_get_contents($path);
		$lesson_data_json = json_decode($lesson_data_str);
		return $lesson_data_json;
	}

	// Розклад уроків
	function shedule_json($shedule_date)
	{
		$path="../data/json/24321/3/6a/shedule.json";
		$shedule_data_str = file_get_contents($path);
		$shedule_data_json = json_decode($shedule_data_str);//[$shedule_date];
		return $shedule_data_json;
		//return $shedule_data_str;
	}


	//*****************************************************************************************************************************
	//** -1 Контент: завантаження головного вікна                                                                                   **
	function init(){
		$init="OK - init - json";

		return $init;
	}
?>