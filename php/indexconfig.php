<?php


	//********************************************************************
	// m.2.0 РОЗКЛАД НА ТИЖДЕНЬ - елемент
	// c.2.0.1 Макет - день тижня
	function weekday_maket($day, $subject__conteiner) 
	{
		$weekday = "<div class='weekday'>";
		$weekday.= "<div class='weekday__conteiner'>";
		$weekday.= "<div class='weekday__date'>$day</div>";
		$weekday.= "<div class='weekday__subject'>";
		$weekday.= $subject__conteiner;
		$weekday.= "</div>";
		$weekday.= "</div>";
		$weekday.= "</div>";
		return $weekday;
	}

	// c.2.0.2 Макет - предмет, контакти, завдання
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
		$subject__conteiner.= "</div>";
		$subject__conteiner.= "</div>";
		$subject__conteiner.= "</div>";
		$subject__conteiner.= "</div>";
		$subject__conteiner.= "</div>";
		$subject__conteiner.= "<div class='contact'>";
		$subject__conteiner.= "<div class='contact__row'>";
		$subject__conteiner.= "<div class='contact__time'>".$chlesson['time']."</div>";
		$subject__conteiner.= "<div class='contact__tiecher'>".$chlesson['teacher']."</div>";
		$subject__conteiner.= "<div class='contact__office'>к.45</div>";
		$subject__conteiner.= "</div>";
		$subject__conteiner.= "</div>";
		$subject__conteiner.= "<div class='task'>";
		$subject__conteiner.= "<div class='task__title'>";
		$subject__conteiner.= "<div class='task__add '></div>"; //_active
		$subject__conteiner.= "<div class='task__do'> ";
		$subject__conteiner.= "<div class='task__do_progres'>0 / 0<span></span></div>";
		$subject__conteiner.= "</div>";
		$subject__conteiner.= "</div>";
		$subject__conteiner.= "<div class='task__list '>"; //_active
		$subject__conteiner.= "</div>";
		$subject__conteiner.= "</div>";
		$subject__conteiner.= "</div>";
		$subject__conteiner.= "</div>";

		return $subject__conteiner;
	}

	// c.2.0.2 Макет - предмет, завдання
	function subject__conteiner_maket_short($chlesson)
	{
		$subject__conteiner= "<div class='subject__conteiner'>";
		$subject__conteiner.= "<div class='subject__border'>";
		$subject__conteiner.= "<div class='description'>";
		$subject__conteiner.= "<div class='description__row'>";
		$subject__conteiner.= "<div class='description__number'>".$chlesson['num']."</div>";
		$subject__conteiner.= "<div class='description__text'>".$chlesson['lesson']."</div>";
		$subject__conteiner.= "<div class='description__communicator'>";
		$subject__conteiner.= "<div class='description__list'>";
		$subject__conteiner.= "<div class='description__button'></div>";
		$subject__conteiner.= "<div class='description__links'>";
		$subject__conteiner.= "<div class='description__link'>";
		$subject__conteiner.= "<a href='".$chlesson['book']."' target='_blank'>";
		$subject__conteiner.= "<img src='img/icon_1/book.png' alt=''></a>";
		$subject__conteiner.= "</div>";
		$subject__conteiner.= "<div class='description__link'>";
		$subject__conteiner.= "<a href='".$chlesson['meet']."' target='_blank'>";
		$subject__conteiner.= "<img src='img/icon_1/meet.png' alt=''></a>";
		$subject__conteiner.= "</div>";
		$subject__conteiner.= "<div class='description__link'>";
		$subject__conteiner.= "<a href='".$chlesson['classroom']."' target='_blank'>";
		$subject__conteiner.= "<img src='img/icon_1/classroom.png' alt=''></a>";
		$subject__conteiner.= "</div>";
		$subject__conteiner.= "</div>";
		$subject__conteiner.= "</div>";
		$subject__conteiner.= "</div>";
		$subject__conteiner.= "</div>";
		$subject__conteiner.= "</div>";
		$subject__conteiner.= "<div class='contact'>";
		$subject__conteiner.= "<div class='contact__row'>";
		$subject__conteiner.= "<div class='contact__time'>".$chlesson['time']."</div>";
		$subject__conteiner.= "<div class='contact__tiecher'>".$chlesson['teacher']."</div>";
		$subject__conteiner.= "<div class='contact__office'>к.45</div>";
		$subject__conteiner.= "</div>";
		$subject__conteiner.= "</div>";
		$subject__conteiner.= "</div>";
		$subject__conteiner.= "</div>";
		return $subject__conteiner;
	}

?>