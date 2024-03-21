<?php
	include "indexjson.php";
	include "indexconfig.php";

	$Action = $_GET['Action'];
	$ActionP = $_POST['Action']; 

	
	//********************************************************************
	// m.2.1 РОЗКЛАД НА ТИЖДЕНЬ - елемент

	if($Action=="week__row"){
		$language = $_GET['language'];	$date_str = $_GET['date_str'];	
		$date_json = json_decode($date_str,true);	$date_week=$date_json['date_week_begin'];
		$htmlweek="" ;
		
		$chweekday=weekday("php",$language);	// j.2.0.3 Дні тижня - для php
		$arrweekday=$chweekday['weekday'];

		$chlesson=lesson_json();					// j.2.0.2 Предмет, викладач, лінки (комунікатори/книжки)
		
		// j.2.0.1 Розклад уроків
		$shedule_data_json=shedule_json($date_json['date_shedule']);
		$arrshedule=$shedule_data_json['shedule'];
		$arrtime=$shedule_data_json['time'];

		$task_json=task_json();			// j.2.0.4 Завдання: усі 
	
		for($w=0; $w<2; $w++)									{	
			for($d=0; $d<count($arrshedule); $d++)			{	
				$htmlsubject=""; $chsubject['task'] = "";
				for($i=0; $i<count($arrshedule[$d]); $i++){

					$subject=$arrshedule[$d][$i];		$idtask="week__".$subject."_".$date_week;
					$chsubject=$chlesson[$subject];
					$chsubject['num'] = $i+1;
					$chsubject['time'] = $arrtime[$d][$i];	
					$chsubject['idtask'] = $idtask;

					$status=$task_json[$date_week][$subject]['status'];
					$artask=$task_json[$date_week][$subject]['task'];
					$archeck=$task_json[$date_week][$subject]['check'];

					$chtask=array();
					if($status!=="none"){
						for($t=0; $t<count($artask);$t++){
							$chtask['check']=$archeck[$t];
							$chtask['task']=$artask[$t];
							$chtask['iditem']="week__".$subject."_".$date_week."_".$t."__";
							$chsubject['task'].= task__item($chtask);	// c.2.0.3 Макет - завдання
						}
					}
					// c.2.0.2 Макет - предмет, контакти, завдання
					$htmlsubject.= subject__conteiner_maket($chsubject); 
				}
				// c.2.0.1 Макет - день тижня
				$chweekday_maket['weekday']=$arrweekday[$d]; $chweekday_maket['date']=$date_week;
				$htmlweek.= weekday_maket($chweekday_maket, $htmlsubject); 
				$date_week = date("Y-m-d",strtotime($date_week.' +1 day'));
			}
			$date_week = date("Y-m-d",strtotime($date_week.' +2 day'));
		}
		echo $htmlweek;
	}

	//********************************************************************
	// m.2.2 ЗАВДАННЯ СПРИНТА- елемент
	if($Action=="scrum__row"){
		$language = $_GET['language'];	$date_str = $_GET['date_str'];	$htmlscrum="" ;
		$task_json=task_json();			// j.2.0.4 Завдання: усі 
		$lesson_json=lesson_json();		// j.2.0.2 Предмет, викладач, лінки (комунікатори/книжки)
		
		foreach($task_json as $date=>$chlesson){
			foreach($chlesson as $lesson=>$chtask){
				if($chtask['status']=="Set"){
					$chscrum=array();
					$chscrum=$lesson_json[$lesson];
					$chscrum['done']=0;
					$chscrum['date']=$date;
					$chscrum['set']=count($chtask['task']);
					$chscrum['idtask']="scrum__".$lesson."_".$date;
					for($t=0; $t<$chscrum['set']; $t++){
						$chscrum['check'][$t]=$chtask['check'][$t];
						$chscrum['task'][$t]=$chtask['task'][$t];
						$chscrum['iditem'][$t]=$chscrum['idtask']."_".$t."__";
						if($chscrum['check'][$t]=="ok") $chscrum['done']++;
					}
					$htmlscrum.=scrum_maket($chscrum);	// c.2.2.1 Макет - предмет, завдання
				}
			}	
		}
		echo $htmlscrum;
	}

	// m.10.0 ЗАВДАННЯ - додати - кнопка
	if($Action=="task__add"){
		$iditem = $_GET['iditem'];
		$chtask['check']="no";
		$chtask['task']="-";
		$chtask['iditem']=$iditem;
		$send = task__item($chtask); // c.2.1.3 Макет - завдання

		echo $send;
	}	

?>