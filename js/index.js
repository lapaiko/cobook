function CardDay(day, cardslesson) {
	let cardday = '';
	cardday = cardday + '<div class="shedule__days">';
	cardday = cardday + '<div class="shedule__title title">';
	cardday = cardday + '<h2>' + day + '</h2>';
	cardday = cardday + '</div>';
	cardday = cardday + '<div class="shedule__card">';

	cardday = cardday + cardslesson;

	cardday = cardday + '</div>';
	cardday = cardday + '</div>';
	return cardday;
}

function CardLesson(num, lesson, teacher, time, classroom, meet) {
	var cardslesson = '';

	cardslesson = cardslesson + '<div class="lesson">';

	cardslesson = cardslesson + '<div class="lesson__number">';
	cardslesson = cardslesson + '<div class="lesson__number_val">' + num + '.</div>';
	cardslesson = cardslesson + '<div class="lesson__number_time">' + time + '</div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '<div class="lesson__caption">';
	cardslesson = cardslesson + '<div class="lesson__caption_name">' + lesson + '</div>';
	cardslesson = cardslesson + '<div class="lesson__caption_teacher">' + teacher + '</div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '<div class="lesson__link">';
	cardslesson = cardslesson + '<div class="lesson__link_classroom"><a href="' + classroom + '"';
	cardslesson = cardslesson + 'target="_blank"><img src="img/classroom.png" alt=""></a></div>';
	cardslesson = cardslesson + '<div class="lesson__link_meet"><a href="' + meet + '"';
	cardslesson = cardslesson + 'target="_blank"><img src="img/meet.png" alt=""></a></div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '</div>';
	return cardslesson;
}

function Shedule() {
	//	for (let idU in chPanda.chName)
	let shedule = '', lessons = '';
	// Формуємо карточки за весь тиждень
	for (let d = 0; d < arSсhedule.length; d++) {
		lessons = '';
		// Формуємо карточку уроків одного дня
		for (let l = 0; l < arSсhedule[d].length; l++) {
			let num = l + 1, idLesson = arSсhedule[d][l], Lesson = chLesson[idLesson];
			let lesson = Lesson.lesson, teacher = Lesson.teacher, classroom = Lesson.classroom, meet = Lesson.meet;
			let time = arTime[l];
			lessons = lessons + CardLesson(num, lesson, teacher, time, classroom, meet);
		}
		// Формуємо карточку одного дня
		let nmWeek = arWeek[d];
		shedule = shedule + CardDay(nmWeek, lessons);
	}
	document.getElementById('shedule').innerHTML = shedule;
}

//Отримуємо домашні завданя
GetHomework();

//Виводимо розклад уроків
Shedule();