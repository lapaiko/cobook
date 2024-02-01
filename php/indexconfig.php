<?php

	// -3 ДЕНЬ ТИЖНЯ - коробка (рамка)
	function weekday($day, $subject__conteiner) 
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

	// -2 ПРЕДМЕТ-контейнер
	function subject__conteiner($chsubject)
	{
		$subject__conteiner='<div class="subject__conteiner">';
		$subject__conteiner.='<div class="subject__border">';
		$subject__conteiner.='<div class="description">';
		$subject__conteiner.='<div class="description__row">';
		$subject__conteiner.='<div class="description__number">' + $chsubject.num + '</div>';
		$subject__conteiner.='<div class="description__text">' + $chsubject.lesson + '</div>';
		$subject__conteiner.='<div class="description__communicator">';
		$subject__conteiner.='<div class="description__list">';
		$subject__conteiner.='<div class="description__button"></div>';
		$subject__conteiner.='<div class="description__links">';
		$subject__conteiner.='<div class="description__link">';
		$subject__conteiner.='<a href="' + $chsubject.book + '" target="_blank">';
		$subject__conteiner.='<img src="img/icon_1/book.png" alt=""></a>';
		$subject__conteiner.='</div>';
		$subject__conteiner.='<div class="description__link">';
		$subject__conteiner.='<a href="' + $chsubject.meet + '" target="_blank">';
		$subject__conteiner.='<img src="img/icon_1/meet.png" alt=""></a>';
		$subject__conteiner.='</div>';
		$subject__conteiner.='<div class="description__link">';
		$subject__conteiner.='<a href="' + $chsubject.classroom + '" target="_blank">';
		$subject__conteiner.='<img src="img/icon_1/classroom.png" alt=""></a>';
		$subject__conteiner.='</div>';
		$subject__conteiner.='</div>';
		$subject__conteiner.='</div>';
		$subject__conteiner.='</div>';
		$subject__conteiner.='</div>';
		$subject__conteiner.='</div>';
		$subject__conteiner.='<div class="contact">';
		$subject__conteiner.='<div class="contact__row">';
		$subject__conteiner.='<div class="contact__time">' + $chsubject.time + '</div>';
		$subject__conteiner.='<div class="contact__tiecher">' + $chsubject.teacher + '</div>';
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