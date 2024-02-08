<?php
	include "indexkmaket.php";

	$Action = $_GET['Action'];
	$ActionP = $_POST['Action']; 


	//********************************************************************
	// m.2.0 РОЗКЛАД НА ТИЖДЕНЬ - елемент

	// j.2.0.1 Розклад уроків: $fn_date - дата розкладу 'рік-01-01' або 'рік-09-01';
	function shedule_json($fn_date)	{
		$shedule_data_str = file_get_contents("../data/json/24321/3/6a/shedule.json");
		$shedule_data_json = json_decode($shedule_data_str, true);
		return $shedule_data_json[$fn_date];
	}

	// j.2.0.2 Предмет, викладач, лінки (комунікатори/книжки)
	function lesson_json()	{
		$lesson_data_str = file_get_contents("../data/json/24321/3/6a/lesson.json");
		$lesson_data_json = json_decode($lesson_data_str, true);
		return $lesson_data_json;
	}

	// j.2.0.3 Дні тижня: $fn_jsphp = "js" or "php"; $fn_language = "uk" or "en"
	function weekday($fn_jsphp, $fn_language)	{
		$weekday_data_str = file_get_contents("../data/json/weekday.json");
		$weekday_data_json = json_decode($weekday_data_str, true);
		return $weekday_data_json[$fn_jsphp][$fn_language];
	}

	// j.2.0.4 Завдання: усі 
	function task_json()	{
		$task_data_str = file_get_contents("../data/json/24321/3/6a/task.json");
		$task_data_json = json_decode($task_data_str, true);
		return $task_data_json;
	}


//* 1.0 СТОРІНКА - завантаження початкових даних
//* дні тижня для js
	if($Action=="week_day_name"){	
		$language = $_GET['language'];	
		$chweekday=weekday("js",$language); // j.2.0.3 Дні тижня - для js
		$strweekday = json_encode($chweekday, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
		echo $strweekday;
	}


//********************************************************************
// -1 БЛОК ОДНОРАЗОВИХ ФУНКЦІЙ

// -1.1 Пернесення дат завдань з дня отримання на день здачі завдання
// !!! ВИДАЛАИТИ ПІСЛЯ РОБОТИ БЛОКУ ВИВОДУ / РЕДАГУВАННЯ / ВИДАЛЕННЯ ЗАВДАНЬ
	if($Action=="task_transfer_dates"){	

		//$chsubject=array('uklen'=>'||1. ', 'uklit'=>'||1. ','zarlit'=>'||1. ','eng'=>'||1. ', 'mat'=>'||1. ','mus'=>'||1. ','hist'=>'||1. ','etika'=>'||1. ','fiz'=>'||1. ','pain'=>'||1. ','prog'=>'||1. ','dram'=>'||1. ','oz'=>'||1. ','tec'=>'||1. ','nat'=>'||1. ','geog'=>'||1. ');	

		$task_data_str = file_get_contents("../data/json/24321/3/6a/task_new.json");
		$task_data_json = json_decode($task_data_str, true);
		
		foreach($task_data_json as $stdate=>$chdate) {
			foreach($chdate as $subject=>$task) 		{

				//$task_={
				//	"2024-02-08": {
				//		"oz":{ 
				//			"status":"set"
				//			"link":["-","-"],
				//			"task":[
				//				"Стор.92-96, параг. 16",
				//				"Стор. 96 завд. 4, створити соціальну рекламу і на уроці презентувати її"],
				//			"check":["done","done"]
				//		}
				//	}
				//};	
				$chtask=array();
				//reset($artsk);
				$artask=explode("||",$task);
				$link=$artask[0]; if($link==""||$link=" ") $link="-";
				$status=$artask[2]; 
				$check="ok"; if($status=="Set") $check="no";

				$artsk=explode("|",$artask[1]); $ntsk=count($artsk);
				
				if($ntsk>0){
					if($artsk[0]=="1. "){
						$chtask['status']="none";
						$chtask['task'][0]="-";
						//$chtask['link'][0]="-";
						$chtask['check'][0]="no";
						
					}
					else{
						$chtask['status']=$status;
						for($i=0; $i<$ntsk; $i++)	{
							$tsk=str_replace(($i+1).". ","",$artsk[$i]);
							$chtask['task'][$i]=$tsk;
							//$chtask['link'][$i]=$link;
							$chtask['check'][$i]=$check;
						}
					}
				}

				$task_data_ch[$stdate][$subject]=$chtask;
				
				//$task_data_ch[$stdate][$subject]=$chsubject[$subject]."||Done||";
				//$chsubject[$subject]=$task;
		}	}
		$task_data_str= json_encode($task_data_ch, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
		$task_data_str=str_replace("\/","/",$task_data_str);

		$flJSON=fopen("../data/json/24321/3/6a/task.json",'w');	
		fputs($flJSON, $task_data_str);	fclose($flJSON);
		chmod("../data/json/24321/3/6a/task.json", 0777);

		return $task_data_str;
	}	

?>