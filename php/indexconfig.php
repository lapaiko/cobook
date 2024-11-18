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
	{	$idtask=$chlesson['idtask'];
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
		$subject__conteiner.= "<div class='task' id='".$idtask."__task'>";
		$subject__conteiner.= "<div class='task__title'>";
		$subject__conteiner.= "<div class='task__add ' id='".$idtask."__add'></div>"; //_active
		$subject__conteiner.= "<div class='task__do'> ";
		$subject__conteiner.= "<div class='task__do_progres' id='".$idtask."__progres'>0 / 0<span></span></div>";
		$subject__conteiner.= "</div></div>";
		$subject__conteiner.= "<div class='task__list ' id='".$idtask."__list'>".$chlesson['task']."</div>";
		$subject__conteiner.= "</div></div></div>";

		return $subject__conteiner;
	}

	// c.2.1.3 Макет - завдання
	function task__item($chtask)
	{
		$iditem=$chtask['iditem'];
		$check="_active"; if ($chtask['check']=="no") $check="";
		$task__item="<div class='task__item' id='".$iditem."item'>";
		$task__item.="<div class='task__caption'>";
		$task__item.="<div class='task__caption_check $check' id='".$iditem."check'></div>";
		$task__item.="<div class='task__caption_text $check' id='".$iditem."caption'>".$chtask['task']."</div>";
		$task__item.="<div class='task__caption_edit' id='".$iditem."edit'><span></span></div>";
		$task__item.="</div>";
		$task__item.="<div class='task__input'>";
		$task__item.="<div class='task__input_delete' id='".$iditem."delete'><span></span></div>";
		$task__item.="<div class='task__input_text'><textarea id='".$iditem."text'></textarea></div>";
		$task__item.="<div class='task__input_control'>";
		$task__item.="<div class='task__input_close' id='".$iditem."close'><span></span></div>";
		$task__item.="<div class='task__input_save' id='".$iditem."save'><span></span></div>";
		$task__item.="</div></div></div>";

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

		$scrum.= "<div class='description__communicator'>";
		$scrum.= "<div class='description__list'>";
		$scrum.= "<div class='description__button _active'></div>";
		$scrum.= "<div class='description__links _active'>";

		if($chscrum['book']!="" && $chscrum['book']!="-"){
		$scrum.= "<div class='description__link'>";
		$scrum.= "<a href='".$chscrum['book']."' target='_blank'>";
		$scrum.= "<img src='img/icon_1/book.png' alt=''></a></div>";
		}
		if($chscrum['classroom']!="" && $chscrum['classroom']!="-"){	
		$scrum.= "<div class='description__link'>";
		$scrum.= "<a href='".$chscrum['classroom']."' target='_blank'>";
		$scrum.= "<img src='img/icon_1/classroom.png' alt=''></a></div>";
		}	
		$scrum.= "</div></div></div>";

		$scrum.="</div></div>";
		$scrum.= "</div></div>";
		$scrum.="<div class='task' id='".$chscrum['idtask']."__add'>";
		$scrum.="<div class='task__title'>";
		$scrum.="<div class='task__add _active' id='".$chscrum['idtask']."__add'></div>";
		$scrum.="<div class='task__do _active'>";
		$scrum.="<div class='task__do_progres' id='".$chscrum['idtask']."__progres'>".$chscrum['done']." / ".$chscrum['set']."<span></span></div>";
		$scrum.="</div></div>";
		$scrum.="<div class='task__list _active' id='".$chscrum['idtask']."__list'>";
		for ($t=0; $t<count($chscrum['task']); $t++){		
			$chtask['check']=$chscrum['check'][$t];
			$chtask['iditem']=$chscrum['iditem'][$t];
			$chtask['task']=$chscrum['task'][$t];
			// c.2.1.3 Макет - завдання
			$scrum.=task__item($chtask);
		}
		$scrum.="</div></div></div></div></div></div></div>";

		return $scrum;
	}


?>