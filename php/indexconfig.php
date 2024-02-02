<?php

	// -4 ТИЖДЕНЬ - коробка	
	// -4.1 ДЕНЬ ТИЖНЯ - коробка (рамка)
	function weekday_maket($day, $subject__conteiner) 
	{
		$weekday = '<div class="weekday">';
		$weekday.= '<div class="weekday__conteiner">';
		$weekday.= '<div class="weekday__date">' + $day + '</div>';
		$weekday.= '<div class="weekday__subject">';
		$weekday.= $subject__conteiner;
		$weekday.= '</div>';
		$weekday.= '</div>';
		$weekday.= '</div>';
		return $weekday;
	}
	// -4 ТИЖДЕНЬ - коробка	
	// -4.2 ПРЕДМЕТ-контейнер
	function subject__conteiner_maket($chhedule, $chlesson)
	{
		$subject__conteiner='<div class="subject__conteiner">';
		$subject__conteiner.='<div class="subject__border">';
		$subject__conteiner.='<div class="description">';
		$subject__conteiner.='<div class="description__row">';
		$subject__conteiner.='<div class="description__number">' + $chhedule.num + '</div>';
		$subject__conteiner.='<div class="description__text">' + $chlesson.lesson + '</div>';
		$subject__conteiner.='<div class="description__communicator">';
		$subject__conteiner.='<div class="description__list">';
		$subject__conteiner.='<div class="description__button"></div>';
		$subject__conteiner.='<div class="description__links">';
		$subject__conteiner.='<div class="description__link">';
		$subject__conteiner.='<a href="' + $chlesson.book + '" target="_blank">';
		$subject__conteiner.='<img src="img/icon_1/book.png" alt=""></a>';
		$subject__conteiner.='</div>';
		$subject__conteiner.='<div class="description__link">';
		$subject__conteiner.='<a href="' + $chlesson.meet + '" target="_blank">';
		$subject__conteiner.='<img src="img/icon_1/meet.png" alt=""></a>';
		$subject__conteiner.='</div>';
		$subject__conteiner.='<div class="description__link">';
		$subject__conteiner.='<a href="' + $chlesson.classroom + '" target="_blank">';
		$subject__conteiner.='<img src="img/icon_1/classroom.png" alt=""></a>';
		$subject__conteiner.='</div>';
		$subject__conteiner.='</div>';
		$subject__conteiner.='</div>';
		$subject__conteiner.='</div>';
		$subject__conteiner.='</div>';
		$subject__conteiner.='</div>';
		$subject__conteiner.='<div class="contact">';
		$subject__conteiner.='<div class="contact__row">';
		$subject__conteiner.='<div class="contact__time">' + $chhedule.time + '</div>';
		$subject__conteiner.='<div class="contact__tiecher">' + $chlesson.teacher + '</div>';
		$subject__conteiner.='<div class="contact__office">к.45</div>';
		$subject__conteiner.='</div>';
		$subject__conteiner.='</div>';
		$subject__conteiner.='<div class="task">';
		$subject__conteiner.='<div class="task__title">';
		$subject__conteiner.='<div class="task__add _active"></div>';
		$subject__conteiner.='<div class="task__do"> ';
		$subject__conteiner.='<div class="task__do_progres">0 / 0<span></span></div>';
		$subject__conteiner.='</div>';
		$subject__conteiner.='</div>';
		$subject__conteiner.='<div class="task__list _active">';
		$subject__conteiner.='</div>';
		$subject__conteiner.='</div>';
		$subject__conteiner.='</div>';
		$subject__conteiner.='</div>';

		return $subject__conteiner;
	}

?>