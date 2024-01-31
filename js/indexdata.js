//Перелік уроків
var chLesson = {

	'uklen': {
		'lesson': 'Українська мова',
		'teacher': 'Волк Світлана Віталіївна',
		'classroom': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy',
		'homework': '',
		'meet': 'https://meet.google.com/qte-iqxy-dcs',
		'booklink': '',
		'book': ''
	},
	'uklit': {
		'lesson': 'Українська література',
		'teacher': 'Волк Світлана Віталіївна',
		'classroom': 'https://classroom.google.com/c/NTQ1MjMzNDAzMDE0',
		'homework': '',
		'meet': 'https://meet.google.com/zrm-ipgh-oxb',
		'booklink': '',
		'book': ''
	},
	'zarlit': {
		'lesson': 'Зарубіжна література',
		'teacher': 'Солодка Ірина Петрівна',
		'classroom': 'https://classroom.google.com/c/NTQ0NzUwODYxNzA1',
		'homework': '',
		'meet': 'https://meet.google.com/try-xbxe-eax',
		'booklink': '',
		'book': ''
	},
	'eng': {
		'lesson': 'Англійська мова',
		'teacher': 'Задоянчук Оксана Василівна',
		'classroom': 'https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5',
		'homework': '',
		'meet': 'https://meet.google.com/zvd-crbk-vgb',
		'booklink': '',
		'book': ''
	},
	'mat': {
		'lesson': 'Математика',
		'teacher': 'Карабаджак Ірина Анатоліївна',
		'classroom': 'https://classroom.google.com/c/NTg5NDAyNzYyNDM5',
		'homework': '',
		'meet': 'https://meet.google.com/hek-ofcw-uou',
		'booklink': '',
		'book': ''
	},
	'mus': {
		'lesson': 'Музичне мистецтво',
		'teacher': 'Кериченко Наталія Миколаївна',
		'classroom': 'https://classroom.google.com/c/NTI2OTIxMzY1NjM3',
		'homework': '',
		'meet': 'https://meet.google.com/nfa-usas-xei',
		'booklink': '',
		'book': ''
	},
	'hist': {
		'lesson': 'Історія',
		'teacher': 'Дідур Оксана Володимирівна',
		'classroom': 'https://classroom.google.com/c/NTQ0NzkyOTQ2MTgw',
		'homework': '',
		'meet': 'https://meet.google.com/iqw-yvqg-fbh',
		'booklink': '',
		'book': ''
	},
	'etika': {
		'lesson': 'Етика',
		'teacher': 'Дідур Оксана Володимирівна',
		'classroom': 'https://classroom.google.com/c/NTg1MzQ5ODM1ODQ4',
		'homework': '',
		'meet': 'https://meet.google.com/uob-rwtu-xgf',
		'booklink': '',
		'book': ''
	},
	'fiz': {
		'lesson': 'Фізична культура',
		'teacher': 'Стеблюк Олександра Вікторівна',
		'classroom': 'https://classroom.google.com/c/NTI3MjA4NzU0NjU1',
		'homework': '',
		'meet': 'https://meet.google.com/jbg-aaqq-nbo',
		'booklink': '',
		'book': ''
	},
	'pain': {
		'lesson': 'Образотворче мистецтво',
		'teacher': 'Шклярук Світлана Олександрівна',
		'classroom': 'https://classroom.google.com/c/NjI0NTgxNzQ1ODc0',
		'homework': '',
		'meet': 'https://meet.google.com/ftc-frif-bph',
		'booklink': '',
		'book': ''
	},
	'prog': {
		'lesson': 'Інформатика',
		'teacher': 'Литвинюк Тетяна Ігорівна',//'Шевчук Андрій Григорович',
		'classroom': 'https://classroom.google.com/c/NjUxMjkyMjA1ODgy',
		'homework': '',
		'meet': 'https://meet.google.com/utt-pwfc-wzk',
		'booklink': 'https://pidruchnyk.com.ua/2685-informatyka-6-klas-morze-2023.html',
		'book': ''
	},
	'dram': {
		'lesson': 'Драматургія і театр',
		'teacher': 'Рахнянська Наталія Федорівна',
		'classroom': 'https://classroom.google.com/c/NTI3MTI3NTg1MjMx',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'oz': {
		'lesson': 'Основи здоров\'я',
		'teacher': 'Щепанська Алла Борисівна',
		'classroom': 'https://classroom.google.com/c/NTQ1MDE1NTYzNDM2',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'tec': {
		'lesson': 'Технологія',
		'teacher': 'Іванова Алла Опанасівна',
		'classroom': 'https://classroom.google.com/c/NTQ1NTc3MDc3MTYz',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'nat': {
		'lesson': 'Пізнаємо природу',
		'teacher': 'Касяненко Світлана Володимирівна',
		'classroom': 'https://classroom.google.com/c/NTQ1MDc1MDgxMzg1',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'geog': {
		'lesson': 'Географія',
		'teacher': 'Шитова Тетяна Василівна',
		'classroom': 'https://classroom.google.com/c/NjU4MjUzNzIwOTY2',
		'homework': '',
		'meet': 'https://meet.google.com/pek-tivp-svp',
		'booklink': 'https://shkola.in.ua/2833-heohrafiia-6-klas-kobernik-2023.html',
		'book': ''
	}
};


//Розклад уроків - на тиждень

//2023
//var arSсhedule = [
//	['etika', 'zarlit', 'uklen', 'nat', 'dram', 'fiz'],
//	['pain', 'geog', 'uklen', 'hist', 'mat', 'eng', 'fiz'],
//	['mus', 'mat', 'hist', 'eng', 'fiz', 'uklit', 'uklit'],
//	['oz', 'zarlit', 'prog', 'mat', 'uklen', 'geog'],
//	['uklen', 'mat', 'mat', 'eng', 'nat', 'tec', 'tec']
//
//];

//2024
var arSсhedule = [
	['fiz', 'prog', 'eng', 'nat', 'uklen', 'uklen'],
	['pain', 'geog', 'uklen', 'hist', 'mat', 'eng', 'fiz'],
	['mus', 'mat', 'hist', 'eng', 'fiz', 'uklit', 'uklit'],
	['oz', 'zarlit', 'prog', 'mat', 'dram', 'geog'],
	['uklen', 'mat', 'mat', 'eng', 'nat', 'tec', 'tec']
];


//Розклад дзвінків

//2023
var arTime = ['08:30', '09:25', '10:20', '11:15', '12:20', '13:20', '14:15', '15:15'];

//Дні тижня
var arWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четверг', 'П\'ятниця'];

// Дати попередніх уроків
var chLessonDate = {
	'uklen': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'uklit': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'zarlit': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'eng': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'mat': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'mus': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'hist': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'etika': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'fiz': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'pain': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'prog': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'dram': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'oz': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'tec': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'nat': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'geog': { 'chDate': { 'count': 0 }, 'arI': [0] }
};




function GetHomework() {
	let previosDate = '-';
	for (let keyDate in chHomework) { // отримуємо дату видачі завдання
		for (let keyLesson in chHomework[keyDate]) { // отримуємо назву уроку

			// Отримуємо номер дати попереднього уроку
			let previosI = chLessonDate[keyLesson].chDate.count;
			// Інкремент номеру дати уроку
			chLessonDate[keyLesson].chDate.count++;
			// Отримуємо номер дати цього уроку 
			let nowI = chLessonDate[keyLesson].chDate.count;

			// Присвоюємо номер - даті цього уроку 
			chLessonDate[keyLesson].arI[nowI] = keyDate;

			// Отримуємо дату поперднього уроку  
			previosDate = '-';
			if (previosI > 0) {
				previosDate = chLessonDate[keyLesson].arI[previosI];
			}
			// Присвоюємо даті уроку - попередню дату цього уроку
			chLessonDate[keyLesson].chDate[keyDate] = previosDate;
		}
	}
}

