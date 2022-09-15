//Перелік уроків
let chLesson = {
	'uklen': {
		'lesson': 'Українська мова',
		'teacher': 'Волк Світлана Віталіївна',
		'classroom': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy',
		'homework': 'https://classroom.google.com/w/NTQ1MjMyODExMjEy/t/all',
		'meet': 'https://meet.google.com/qte-iqxy-dcs',
		'booklink': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy',
		'book': '5_ukrainian_language.pdf'
	},
	'uklit': {
		'lesson': 'Українська література',
		'teacher': 'Волк Світлана Віталіївна',
		'classroom': 'https://classroom.google.com/c/NTQ1MjMzNDAzMDE0',
		'homework': 'https://classroom.google.com/w/NTQ1MjMzNDAzMDE0/t/all',
		'meet': 'https://meet.google.com/zrm-ipgh-oxb',
		'booklink': 'https://classroom.google.com/c/NTQ1MjMzNDAzMDE0',
		'book': '5_ukrainian literature.pdf'
	},
	'zarlit': {
		'lesson': 'Зарубіжна література',
		'teacher': 'Солодка Ірина Петрівна',
		'classroom': 'https://classroom.google.com/c/NTQ0NzUwODYxNzA1',
		'homework': 'https://classroom.google.com/w/NTQ0NzUwODYxNzA1/t/all',
		'meet': 'https://meet.google.com/try-xbxe-eax',
		'booklink': 'https://classroom.google.com/c/NTQ0NzUwODYxNzA1',
		'book': '5_world_literature.pdf'
	},
	'eng': {
		'lesson': 'Англійська мова',
		'teacher': 'Задоянчук Оксана Василівна',
		'classroom': 'https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5',
		'homework': 'https://classroom.google.com/w/NTQ1NTY3Mjk4ODQ5/t/all',
		'meet': 'https://meet.google.com/zvd-crbk-vgb',
		'booklink': 'https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5',
		'book': '5_english.pdf'
	},
	'mat': {
		'lesson': 'Математика',
		'teacher': 'Карабаджак Ірина Анатоліївна',
		'classroom': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz',
		'homework': 'https://classroom.google.com/w/NTI2OTIzMTIyMzUz/t/all',
		//'meet': 'https://meet.google.com/wwy-pvek-fpm' //2022-09-07
		//'meet': 'https://meet.google.com/kcp-tbxz-khb' //2022-09-08
		//'meet': 'https://meet.google.com/kzz-cugu-smk' //2022-09-09
		'meet': 'https://meet.google.com/kcp-tbxz-khb', //2022-09-12
		'booklink': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz/a/NTQ1NTY1NDEzNzky/details',
		'book': '5_mathematics.pdf'
	},
	'mus': {
		'lesson': 'Музичне мистецтво',
		'teacher': 'Кериченко Наталія Миколаївна',
		'classroom': 'https://classroom.google.com/c/NTI2OTIxMzY1NjM3',
		'homework': 'https://classroom.google.com/w/NTI2OTIxMzY1NjM3/t/all',
		'meet': 'https://meet.google.com/nfa-usas-xei',
		'booklink': 'https://files.pidruchnyk.com.ua/uploads/booklink/5_mystetstvo_kondratova_2022.pdf',
		'book': '5_music.pdf'
	},
	'hist': {
		'lesson': 'Історія',
		'teacher': 'Дідур Оксана Володимирівна',
		'classroom': 'https://classroom.google.com/c/NTQ0NzkyOTQ2MTgw',
		'homework': 'https://classroom.google.com/w/NTQ0NzkyOTQ2MTgw/t/all',
		'meet': 'https://meet.google.com/gkd-tmfp-gfs',
		'booklink': 'https://classroom.google.com/c/NTQ0NzkyOTQ2MTgw',
		'book': '5_history.pdf'
	},
	'fiz': {
		'lesson': 'Фізична культура',
		'teacher': 'Стеблюк Олександра Петрівна',
		'classroom': 'https://classroom.google.com/c/NTI3MjA4NzU0NjU1',
		'homework': 'https://classroom.google.com/w/NTI3MjA4NzU0NjU1/t/all',
		'meet': 'https://meet.google.com/zhz-eesi-pif',
		'booklink': '-',
		'book': '-'
	},
	'pain': {
		'lesson': 'Образотворче мистецтво',
		'teacher': 'Шклярук Світлана Олександрівна',
		'classroom': 'https://classroom.google.com/c/NTI3MTc4MTYzNjQ5',
		'homework': 'https://classroom.google.com/w/NTI3MTc4MTYzNjQ5/t/all',
		//'meet': 'https://meet.google.com/cny-cwqt-dxb',
		'meet': 'https://meet.google.com/iyg-eygc-tdm', //2022-09-14
		'booklink': '-',
		'book': '-'
	},
	'prog': {
		'lesson': 'Інформатика',
		'teacher': 'Шевчук Андрій Григорович',
		'classroom': 'https://classroom.google.com/c/NTQ1MTU5NzIwMDMx',
		'homework': 'https://classroom.google.com/w/NTQ1MTU5NzIwMDMx/t/all',
		'meet': 'https://meet.google.com/tvf-poiw-qym',
		'booklink': 'https://classroom.google.com/c/NTQ1MTU5NzIwMDMx',
		'book': '5_informatics.pdf'
	},
	'dram': {
		'lesson': 'Драматургія і театр',
		'teacher': 'Рахнянська Наталія Федорівна',
		'classroom': 'https://classroom.google.com/c/NTI3MTI3NTg1MjMx',
		'homework': 'https://classroom.google.com/w/NTI3MTI3NTg1MjMx/t/all',
		'meet': 'https://meet.google.com/knk-wynn-myc',
		'booklink': '-',
		'book': '-'
	},
	'oz': {
		'lesson': 'Основи здоров\'я',
		'teacher': 'Щепанська Алла Борисівна',
		'classroom': 'https://classroom.google.com/c/NTQ1MDE1NTYzNDM2',
		'homework': 'https://classroom.google.com/w/NTQ1MDE1NTYzNDM2/t/all',
		//'meet': 'https://meet.google.com/pkt-dgom-uzx',
		'meet': 'https://meet.google.com/feh-sygz-vig', //2022-09-15
		'booklink': '-',
		'book': '-'
	},
	'tec': {
		'lesson': 'Технологія',
		'teacher': 'Іванова Алла Опанасівна',
		'classroom': 'https://classroom.google.com/c/NTQ1NTc3MDc3MTYz',
		'homework': 'https://classroom.google.com/w/NTQ1NTc3MDc3MTYz/t/all',
		'meet': 'https://meet.google.com/uwr-mgkm-nnc',
		'booklink': '-',
		'book': '-'
	},
	'nat': {
		'lesson': 'Пізнаємо природу',
		'teacher': 'Касяненко Світлана Володимирівна',
		'classroom': 'https://classroom.google.com/c/NTQ1MDc1MDgxMzg1',
		'homework': 'https://classroom.google.com/w/NTQ1MDc1MDgxMzg1/t/all',
		'meet': 'https://meet.google.com/hfo-mkni-seh',
		'booklink': 'https://classroom.google.com/c/NTQ1MDc1MDgxMzg1',
		'book': '5_nature.pdf'
	}
};

//Розклад уроків - на тиждень
var arSсhedule = [
	['uklen', 'uklen', 'zarlit', 'eng', 'mat', 'mus'],
	['eng', 'hist', 'mat', 'nat', 'uklit', 'fiz'],
	['prog', 'pain', 'fiz', 'uklen', 'dram', 'mat'],
	['fiz', 'nat', 'mat', 'uklen', 'zarlit', 'eng', 'oz'],
	['mat', 'tec', 'tec', 'hist', 'uklit', 'eng']
];

//Розклад дзвінків
var arTime = ['08:30', '09:25', '10:25', '11:25', '12:25', '13:25', '14:20'];

//Дні тижня
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

//Отримуємо домашні завданя
GetHomework();

//Виводимо розклад уроків
Shedule();