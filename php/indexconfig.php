<?php


	//********************************************************************
	// m.2.1 РОЗКЛАД НА ТИЖДЕНЬ - елемент
	// c.2.1.1 Макет - день тижня
	function weekday_maket($chweekday_maket, $subject__conteiner) 
	{
		$day=$chweekday_maket['weekday']; $date=$chweekday_maket['date'];
		$weekday = "<div class='weekday'>";
		$weekday.= "<div class='weekday__conteiner'>";
		$weekday.= "<div class='weekday__date'>$day $date</div>";
		$weekday.= "<div class='weekday__subject'>";
		$weekday.= $subject__conteiner;
		$weekday.= "</div></div></div>";
		return $weekday;
	}

	// c.2.1.2 Макет - предмет, контакти, завдання
	function subject__conteiner_maket($chlesson)
	{
		$subject__conteiner= "<div class='subject__conteiner'>";
		$subject__conteiner.= "<div class='subject__border'>";
		$subject__conteiner.= "<div class='description'>";
		$subject__conteiner.= "<div class='description__row'>";
		$subject__conteiner.= "<div class='description__number'>".$chlesson['num']."</div>";
		$subject__conteiner.= "<div class='description__text'>".$chlesson['lesson']."</div>";
		$subject__conteiner.= "<div class='description__communicator'>";
		$subject__conteiner.= "<div class='description__list'>";
		$subject__conteiner.= "<div class='description__button _active'></div>";
		$subject__conteiner.= "<div class='description__links _active'>";

		if($chlesson['book']!="" && $chlesson['book']!="-"){
		$subject__conteiner.= "<div class='description__link'>";
		$subject__conteiner.= "<a href='".$chlesson['book']."' target='_blank'>";
		$subject__conteiner.= "<img src='img/icon_1/book.png' alt=''></a>";
		$subject__conteiner.= "</div>";
		}
		if($chlesson['meet']!="" && $chlesson['meet']!="-"){
		$subject__conteiner.= "<div class='description__link'>";
		$subject__conteiner.= "<a href='".$chlesson['meet']."' target='_blank'>";
		$subject__conteiner.= "<img src='img/icon_1/meet.png' alt=''></a>";
		$subject__conteiner.= "</div>";
		}
		if($chlesson['classroom']!="" && $chlesson['classroom']!="-"){	
		$subject__conteiner.= "<div class='description__link'>";
		$subject__conteiner.= "<a href='".$chlesson['classroom']."' target='_blank'>";
		$subject__conteiner.= "<img src='img/icon_1/classroom.png' alt=''></a>";
		$subject__conteiner.= "</div>";
		}	
		$subject__conteiner.= "</div></div></div></div></div>";
		$subject__conteiner.= "<div class='contact'>";
		$subject__conteiner.= "<div class='contact__row'>";
		$subject__conteiner.= "<div class='contact__time'>".$chlesson['time']."</div>";
		$subject__conteiner.= "<div class='contact__tiecher'>".$chlesson['teacher']."</div>";
		$subject__conteiner.= "<div class='contact__office'>к.45</div>";
		$subject__conteiner.= "</div></div>";
		$subject__conteiner.= "<div class='task'>";
		$subject__conteiner.= "<div class='task__title'>";
		$subject__conteiner.= "<div class='task__add '></div>"; //_active
		$subject__conteiner.= "<div class='task__do'> ";
		$subject__conteiner.= "<div class='task__do_progres'>0 / 0<span></span></div>";
		$subject__conteiner.= "</div></div>";
		$subject__conteiner.= "<div class='task__list '>".$chlesson['task']."</div>";
		$subject__conteiner.= "</div></div></div>";

		return $subject__conteiner;
	}

	// c.2.1.3 Макет - завдання
	function task__item($chtask)
	{
		$check="_active"; if ($chtask['check']=="no") $check="";
		$task__item="<div class='task__item'>";
		$task__item.="<div class='task__caption'>";
		$task__item.="<div class='task__caption_check $check'></div>";
		$task__item.="<div class='task__caption_text $check'>".$chtask['task']."</div>";
		$task__item.="<div class='task__caption_edit'><span></span></div>";
		$task__item.="</div>";
		$task__item.="<div class='task__input'>";
		$task__item.="<div class='task__input_delete'><span></span></div>";
		$task__item.="<div class='task__input_text'><textarea></textarea></div>";
		$task__item.="<div class='task__input_save'><span></span></div>";
		$task__item.="</div>";
		$task__item.="</div>";

		return $task__item;
	}


	//********************************************************************
	// m.2.2 ЗАВДАННЯ СПРИНТА- елемент
	// c.2.2.1 Макет - предмет, завдання
	function scrum_maket($chscrum)
	{
		$ardt=explode("-",$chscrum['date']); $date=$ardt[2];//."<br><div style='font-size:12px; text-align:center'>лют</div>";
		$scrum="";
		$scrum.="<div class='weekday'>";
		$scrum.="<div class='weekday__conteiner'>";
		$scrum.="<div class='weekday__subject'>";
		$scrum.="<div class='subject__conteiner'>";
		$scrum.="<div class='subject__border _border-without'>";
		$scrum.="<div class='description'>";
		$scrum.="<div class='description__row'>";
		$scrum.= "<div class='description__number'>".$date."<span>лют</span></div>";
		$scrum.="<div class='description__text'>".$chscrum['lesson']."</div>";
		$scrum.="</div></div>";
		//$scrum.= "<div class='contact'>";
		//$scrum.= "<div class='contact__row'>";
		//$scrum.= "<div class='contact__time'>лют</div>";
		//$scrum.= "<div class='contact__tiecher'></div>";
		//$scrum.= "<div class='contact__office'></div>";
		$scrum.= "</div></div>";
		$scrum.="<div class='task'>";
		$scrum.="<div class='task__title'>";
		$scrum.="<div class='task__add _active'></div>";
		$scrum.="<div class='task__do'>";
		$scrum.="<div class='task__do_progres'>".$chscrum['done']." / ".$chscrum['set']."<span></span></div>";
		$scrum.="</div></div>";
		$scrum.="<div class='task__list _active'>";
		for ($t=0; $t<count($chscrum['task']); $t++){							
			$active="_active"; if($chscrum['check'][$t]=="no") $active="";
			$scrum.="<div class='task__item '>";
			$scrum.="<div class='task__caption'>";
			$scrum.="<div class='task__caption_check $active'></div>";
			$scrum.="<div class='task__caption_text $active'>".$chscrum['task'][$t]."</div>";
			$scrum.="<div class='task__caption_edit'><span></span></div>";
			$scrum.="</div>";
			$scrum.="<div class='task__input'>";
			$scrum.="<div class='task__input_delete'><span></span></div>";
			$scrum.="<div class='task__input_text'>";
			$scrum.="<textarea></textarea>";
			$scrum.="</div>";
			$scrum.="<div class='task__input_save'><span></span></div>";
			$scrum.="</div></div>";
		}
		$scrum.="</div></div></div></div></div></div></div>";

		return $scrum;
	}


?>