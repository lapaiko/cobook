function CardDay(day, cardslesson) {
	let cardday = '';

	cardday = cardday + '<div class="shedule__day">';
	cardday = cardday + '<div class="lesson">';
	cardday = cardday + '<div class="lesson__date">' + day + '</div>';

	cardday = cardday + cardslesson;

	cardday = cardday + '</div>';
	cardday = cardday + '</div>';
	return cardday;
}

function CardLesson(num, lesson, teacher, time, classroom, meet) {
	var cardslesson = '';

	cardslesson = cardslesson + '<div class="lesson__item">';
	cardslesson = cardslesson + '<div class="task">';
	cardslesson = cardslesson + '<div class="task__row">';
	cardslesson = cardslesson + '<div class="task__number">' + num + '.</div>';
	cardslesson = cardslesson + '<div class="task__name">' + lesson + '</div>';
	cardslesson = cardslesson + '<div class="task__link">';
	cardslesson = cardslesson + '<a href="' + classroom + '" target="_blank">';
	cardslesson = cardslesson + '<img src="img/icon_1/classroom.png" alt=""></a>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '<div class="task__link">';
	cardslesson = cardslesson + '<a href="' + meet + '" target="_blank">';
	cardslesson = cardslesson + '<img src="img/icon_1/meet.png" alt=""></a>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '<div class="contact">';
	cardslesson = cardslesson + '<div class="contact__row">';
	cardslesson = cardslesson + '<div class="contact__time">' + time + '</div>';
	cardslesson = cardslesson + '<div class="contact__teacer">' + teacher + '</div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '</div>';

	return cardslesson;
}

function Shedule() {
	let shedule__calendar = document.getElementsByClassName("shedule__calendar")[0];
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
	shedule__calendar.innerHTML = shedule;
	//document.getElementById('shedule').innerHTML = shedule;
}

//Отримуємо домашні завданя
GetHomework();

//Виводимо розклад уроків
Shedule();
