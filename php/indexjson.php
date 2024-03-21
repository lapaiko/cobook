<?php
	//include "indexkmaket.php";

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

	// j.2.0.5 Завдання: записати
	function task_json_save($chlessons_given){
		$task_data_str = file_get_contents("../data/json/24321/3/6a/task.json");
		$task_data_json = json_decode($task_data_str, true);
	
			foreach($chlessons_given as $date=>$chlesson)		{
				foreach($chlesson as $lesson=>$chtask){
					if ($chtask['status'])	{
						if($task_data_json[$date][$lesson]['status']=="none")
							$task_data_json[$date][$lesson]['status'] = $chtask['status'];
					}
					if ($chtask['task']) 	{ 
						foreach($chtask['task'] as $id=>$task) 	{
							if (!$task_data_json[$date][$lesson]['task'][$id])
								$task_data_json[$date][$lesson]['task'][$id] = $task; }
					}
					if ($chtask['check']) 	{	
						foreach($chtask['check'] as $id=>$check) 	{
							if(!$task_data_json[$date][$lesson]['check'][$id])
								$task_data_json[$date][$lesson]['check'][$id] = $check; }
					}
			}	}
	
		$task_data_str= json_encode($task_data_json, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
		$task_data_str=str_replace("\/","/",$task_data_str);
	
		$flJSON=fopen("../data/json/24321/3/6a/task.json",'w');	
		fputs($flJSON, $task_data_str);	fclose($flJSON);
		chmod("../data/json/24321/3/6a/task.json", 0777);
	}

	//---* 1.0 СТОРІНКА - завантаження початкових даних
	//* дні тижня для js
	if($Action=="week_day_name"){	
		$language = $_GET['language'];	
		$chweekday=weekday("js",$language); // j.2.0.3 Дні тижня - для js
		$strweekday = json_encode($chweekday, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
		echo $strweekday;
	}

	//---* 1.0 СТОРІНКА - завантаження початкових даних
	//* завдання задані сьогодні
	if($Action=="settask_today") {
		$jsondate = $_GET['jsondate'];	$chdate = json_decode($jsondate,true);	
		$date_now=$chdate['date_now'];	$weekday=$chdate['weekday']-1;

		$arrshedule=shedule_json($chdate['date_shedule'])['shedule'];

		for($d=0; $d<count($arrshedule); $d++)				{	
			for($l=0; $l<count($arrshedule[$d]); $l++)	{	$lesson=$arrshedule[$d][$l];
				if($d==$weekday)			$chlesson_today[$lesson]=$d;
				if(!$chlesson[$lesson])	$chlesson[$lesson]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				$chlesson[$lesson][$d]=1; $chlesson[$lesson][$d+7]=1;
			}
		}
		foreach($chlesson_today as $lesson=>$day){	$d=$day;
			do {													$d++;
				if($chlesson[$lesson][$d]==1) {			$difday=$d-$day;
					$date_next = date("Y-m-d",strtotime($date_now.' +'.$difday.' day'));
					$chlesson_next[$date_next][$lesson]['status'] = "Set";
					$chlesson_next[$date_next][$lesson]['task'][0] = "$date_now - відбувся урок";
					$chlesson_next[$date_next][$lesson]['check'][0] = "no";
					//$chlesson_next[$lesson]=$date_next;
					//$jsonlesson_next.= "$lesson $date_next $difday |||| ";
				}
			} while (($chlesson[$lesson][$d]==0));
		}
		// j.2.0.5 Завдання: записати
		task_json_save($chlesson_next);
		$jsonlesson_next= json_encode($chlesson_next, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
		echo $jsonlesson_next;
	}
	
	// m.6.0.0 ЗАВДАННЯ - чекбокс - запис у json
	// m.6.0.0.0 ЗАВДАННЯ - чекбокс - запис у json - визначення status
	function get_status_task($chstatus){
		$arstatus=explode("|",$chstatus); 
		$done=intval($arstatus[0]); $all=intval($arstatus[1]);
		if($all>0) {	$status="Set";	if($all==$done) $status="Done";	}
		else {			$status="None"; }
		return $status;
	}

	// m.6.0.0 ЗАВДАННЯ - чекбокс - запис у json
	if($Action=="task__caption_check_json"){	
		$iditem = $_GET['iditem']; $ariditem=explode("_",$iditem); $lesson=$ariditem[0]; $date=$ariditem[1]; $id=$ariditem[2];
		$value = $_GET['value']; 
		$chstatus=$_GET['chstatus']; $status=get_status_task($chstatus);
		$task_data_str = file_get_contents("../data/json/24321/3/6a/task.json");
		$task_data_json = json_decode($task_data_str, true);
	
			$task_data_json[$date][$lesson]['status'] = $status;
			$task_data_json[$date][$lesson]['check'][$id] = $value;
	
		$task_data_str= json_encode($task_data_json, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
		$task_data_str=str_replace("\/","/",$task_data_str);
	
		$flJSON=fopen("../data/json/24321/3/6a/task.json",'w');	
		fputs($flJSON, $task_data_str);	fclose($flJSON);
		chmod("../data/json/24321/3/6a/task.json", 0777);

		$send="[$date][$lesson]['check'][$id] = ".$task_data_json[$date][$lesson]['check'][$id];
		$send.="[$date][$lesson]['status'] = ".$task_data_json[$date][$lesson]['status'];
		echo $send;
	}

	// m.8.0.0 ЗАВДАННЯ - зберегти - дані у json
	if($Action=="task__input_save_json"){	
		$index = $_GET['index']; $ar=explode("_",$index); $lesson=$ar[0]; $date=$ar[1]; $id=$ar[2];
		$value = $_GET['value'];
		$task_data_str = file_get_contents("../data/json/24321/3/6a/task.json");
		$task_data_json = json_decode($task_data_str, true);

			$task_data_json[$date][$lesson]['task'][$id] = $value;

		$task_data_str= json_encode($task_data_json, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
		$task_data_str=str_replace("\/","/",$task_data_str);

		$flJSON=fopen("../data/json/24321/3/6a/task.json",'w');	
		fputs($flJSON, $task_data_str);	fclose($flJSON);
		chmod("../data/json/24321/3/6a/task.json", 0777);

		echo "[$date][$lesson]['task'][$id] = ".$task_data_json[$date][$lesson]['task'][$id];
	}

	// m.10.0.0 ЗАВДАННЯ - додати - дані у json
	if($Action=="task__add_save_json"){	
		$index = $_GET['index']; $ar=explode("_",$index); $lesson=$ar[0]; $date=$ar[1]; $id=$ar[2];
		$value = $_GET['value'];
		$chstatus=$_GET['chstatus']; $status=get_status_task($chstatus);
		$task_data_str = file_get_contents("../data/json/24321/3/6a/task.json");
		$task_data_json = json_decode($task_data_str, true);

			$task_data_json[$date][$lesson]['status'] = $status;
			$task_data_json[$date][$lesson]['task'][$id] = $value;
			$task_data_json[$date][$lesson]['check'][$id] = "no";

		$task_data_str= json_encode($task_data_json, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
		$task_data_str=str_replace("\/","/",$task_data_str);

		$flJSON=fopen("../data/json/24321/3/6a/task.json",'w');	
		fputs($flJSON, $task_data_str);	fclose($flJSON);
		chmod("../data/json/24321/3/6a/task.json", 0777);

		echo "[$date][$lesson]['task'][$id] = ".$task_data_json[$date][$lesson]['task'][$id];
	}
		
	// m.9.0 ЗАВДАННЯ - видалити - дані у json
	if($Action=="task__delete_save_json"){	
		$dtitem = $_GET['dtitem']; $ar=explode("_",$dtitem); $lesson=$ar[0]; $date=$ar[1]; $id=intval($ar[2]);
		$chstatus=$_GET['chstatus']; $status=get_status_task($chstatus);
		$task_data_str = file_get_contents("../data/json/24321/3/6a/task.json");
		$task_data_json = json_decode($task_data_str, true);

			$task_data_json[$date][$lesson]['status'] = $status;
			array_splice($task_data_json[$date][$lesson]['task'],$id,1);
			array_splice( $task_data_json[$date][$lesson]['check'],$id,1);

		$task_data_str= json_encode($task_data_json, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
		$task_data_str=str_replace("\/","/",$task_data_str);

		$flJSON=fopen("../data/json/24321/3/6a/task.json",'w');	
		fputs($flJSON, $task_data_str);	fclose($flJSON);
		chmod("../data/json/24321/3/6a/task.json", 0777);

		echo "[$date][$lesson]['task'][$id] = ".$task_data_json[$date][$lesson]['task'][$id];
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