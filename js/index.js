var chLesson = {
	'uklen': {
		'lesson': 'Українська мова',
		'teacher': 'Волк Світлана Віталіївна',
		'classroom': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy',
		'meet': 'https://meet.google.com/qte-iqxy-dcs'
	},
	'uklit': {
		'lesson': 'Українська література',
		'teacher': 'Волк Світлана Віталіївна',
		'classroom': 'https://classroom.google.com/c/NTQ1MjMzNDAzMDE0',
		'meet': 'https://meet.google.com/zrm-ipgh-oxb'
	},
	'zarlit': {
		'lesson': 'Зарубіжна література',
		'teacher': 'Солодка Ірина Петрівна',
		'classroom': 'https://classroom.google.com/c/NTQ0NzUwODYxNzA1',
		'meet': 'https://meet.google.com/try-xbxe-eax'
	},
	'eng': {
		'lesson': 'Англійська мова',
		'teacher': 'Задоянчук Оксана Василівна',
		'classroom': 'https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5',
		'meet': 'https://meet.google.com/zvd-crbk-vgb'
	},
	'mat': {
		'lesson': 'Математика',
		'teacher': 'Карабаджак Ірина Анатоліївна',
		'classroom': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz',
		//'meet': 'https://meet.google.com/wwy-pvek-fpm' //2022-09-07
		'meet': 'https://meet.google.com/kcp-tbxz-khb'   //2022-09-08
	},
	'mus': {
		'lesson': 'Музичне мистецтво',
		'teacher': 'Кериченко Наталія Миколаївна',
		'classroom': 'https://classroom.google.com/c/NTI2OTIxMzY1NjM3',
		'meet': 'https://meet.google.com/nfa-usas-xei'
	},
	'hist': {
		'lesson': 'Історія',
		'teacher': 'Дідур Оксана Володимирівна',
		'classroom': 'https://classroom.google.com/c/NTQ0NzkyOTQ2MTgw',
		'meet': 'https://meet.google.com/gkd-tmfp-gfs'
	},
	'fiz': {
		'lesson': 'Фізична культура',
		'teacher': 'Стеблюк Олександра Петрівна',
		'classroom': 'https://classroom.google.com/c/NTI3MjA4NzU0NjU1',
		'meet': 'https://meet.google.com/zhz-eesi-pif'
	},
	'pain': {
		'lesson': 'Образотворче мистецтво',
		'teacher': 'Шклярук Світлана Олександрівна',
		'classroom': 'https://classroom.google.com/c/NTI3MTc4MTYzNjQ5',
		'meet': 'https://meet.google.com/cny-cwqt-dxb'
	},
	'prog': {
		'lesson': 'Інформатика',
		'teacher': 'Шевчук Андрій Григорович',
		'classroom': 'https://classroom.google.com/c/NTQ1MTU5NzIwMDMx',
		'meet': 'https://meet.google.com/tvf-poiw-qym'
	},
	'dram': {
		'lesson': 'Драматургія і театр',
		'teacher': 'Рахнянська Наталія Федорівна',
		'classroom': 'https://classroom.google.com/c/NTI3MTI3NTg1MjMx',
		'meet': 'https://meet.google.com/knk-wynn-myc'
	},
	'oz': {
		'lesson': 'Основи здоров\'я',
		'teacher': 'Щепанська Алла Борисівна',
		'classroom': 'https://classroom.google.com/c/NTQ1MDE1NTYzNDM2',
		'meet': 'https://meet.google.com/pkt-dgom-uzx'
	},
	'tec': {
		'lesson': 'Технологія',
		'teacher': 'Іванова Алла Опанасівна',
		'classroom': 'https://classroom.google.com/c/NTQ1NTc3MDc3MTYz',
		'meet': '#'
	},
	'nat': {
		'lesson': 'Пізнаємо природу',
		'teacher': 'Касяненко Світлана Володимирівна',
		'classroom': 'https://classroom.google.com/c/NTQ1MDc1MDgxMzg1',
		'meet': 'https://meet.google.com/hfo-mkni-seh'
	}
};

var arSсhedule = [
	['uklen', 'uklen', 'zarlit', 'eng', 'mat', 'mus'],
	['eng', 'hist', 'mat', 'nat', 'uklit', 'fiz'],
	['fiz', 'pain', 'prog', 'uklen', 'dram', 'mat'],
	['fiz', 'nat', 'mat', 'uklen', 'zarlit', 'eng', 'oz'],
	['mat', 'tec', 'tec', 'hist', 'uklit', 'eng']
];
var arTime = ['08:30', '09:25', '10:25', '11:25', '12:25', '13:25', '14:20'];

var arWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четверг', 'П\'ятниця'];

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

Shedule();