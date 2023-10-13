//Перелік уроків
var chLesson = {

	'uklen': {
		'lesson': 'Українська мова',
		'teacher': 'Волк Світлана Віталіївна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'uklit': {
		'lesson': 'Українська література',
		'teacher': 'Волк Світлана Віталіївна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'zarlit': {
		'lesson': 'Зарубіжна література',
		'teacher': 'Солодка Ірина Петрівна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'eng': {
		'lesson': 'Англійська мова',
		'teacher': 'Задоянчук Оксана Василівна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'mat': {
		'lesson': 'Математика',
		'teacher': 'Карабаджак Ірина Анатоліївна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'mus': {
		'lesson': 'Музичне мистецтво',
		'teacher': 'Кериченко Наталія Миколаївна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'hist': {
		'lesson': 'Історія',
		'teacher': 'Дідур Оксана Володимирівна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'etika': {
		'lesson': 'Етика',
		'teacher': 'Дідур Оксана Володимирівна',
		'classroom': 'https://classroom.google.com/c/NTg1MzQ5ODM1ODQ4',
		'homework': '',
		'meet': 'https://meet.google.com/uob-rwtu-xgf ',
		'booklink': '',
		'book': ''
	},
	'fiz': {
		'lesson': 'Фізична культура',
		'teacher': 'Стеблюк Олександра Вікторівна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'pain': {
		'lesson': 'Образотворче мистецтво',
		'teacher': 'Шклярук Світлана Олександрівна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'prog': {
		'lesson': 'Інформатика',
		'teacher': 'Гутова Валентина Миколаївна',//'Шевчук Андрій Григорович',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'dram': {
		'lesson': 'Драматургія і театр',
		'teacher': 'Рахнянська Наталія Федорівна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'oz': {
		'lesson': 'Основи здоров\'я',
		'teacher': 'Щепанська Алла Борисівна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'tec': {
		'lesson': 'Технологія',
		'teacher': 'Іванова Алла Опанасівна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'nat': {
		'lesson': 'Пізнаємо природу',
		'teacher': 'Касяненко Світлана Володимирівна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	},
	'geog': {
		'lesson': 'Географія',
		'teacher': 'Тетяна Василівна',
		'classroom': '',
		'homework': '',
		'meet': '',
		'booklink': '',
		'book': ''
	}
};

//Розклад уроків - на тиждень

//2023
var arSсhedule = [
	['etika', 'zarlit', 'uklen', 'nat', 'dram', 'fiz'],
	['pain', 'geog', 'uklen', 'hist', 'mat', 'eng', 'fiz'],
	['mus', 'mat', 'hist', 'eng', 'fiz', 'uklit', 'uklit'],
	['oz', 'zarlit', 'prog', 'mat', 'uklen', 'geog'],
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

//Домашні завдання - по дням їх видачі
var chHomework = {

	'2023-09-04': {
		'etika': '||1. Заповнити таблицю за виданими листочками',
		'zarlit': '||1. Стор.9 Завдання № 11 (намалювати або описати)',
		'uklen': '||1. Впр. 9 (доробити)|2. Виписати 2 прислівя про мову або слово',
		'nat': '||1. Стор. 12, параг. 1,2, запитання, завдання, дослідження',
		'dram': '||1. Сцена з будьякого епізоду з вистави - намалювати або описати письмово!!!???',
		'fiz': '||1. Форма'
	},
	'2023-09-05': {
		'pain': '||1. Альбом, фарби, пензлі|2. Нитки 50 см трьох кольорів',
		'geog': '||1. Виписати позначки хмарності і малохмарності',
		'uklen': '||1. Впр. 25 (доробити)',
		'hist': '||1. Записати дві задачі з історії',
		'mat': '||1. №9 (3, 4)',
		'eng': '||1. P. 8, ex 1,2,3 ',
		'fiz': '||1. Форма'
	},
	'2023-09-06': {
		'mus': '||1.!!!',
		'mat': '||1. №23 (1,4)',
		'hist': '||1. Написати 2-і задачі: 1 в одній ері, 2 між двома ерами',
		'eng': '||1. Написати дні народження членів сімї',
		'fiz': '||1. Форма',
		'uklit': '||1. Читати "Сокіл-Род"|2. Скласти 6 тестових питань'
	},
	'2023-09-07': {
		'oz': '||1. !!!',
		'zarlit': '||1. Стор. 11 Записати групи міфів|2. Стор. 11-13 читати ',
		'prog': '||1.!!!',
		'mat': '||1. №28',
		'uklen': '||1. Впр. 29',
		'geog': '||1. Параг 2, стор.14 намалювати позначки хмарності та опадів'
	},
	'2023-09-08': {
		'uklen': '||1.!!!',
		'mat': '||1. №26, №41(4) ',
		'mat': '||',
		'eng': '||1. Стор.10 впр.4',
		'nat': '||1. Написати 2 прислівя про причинно наслідковий звязок',
		'tec': '||1.!!!',
		'tec': '||'
	},

	'2023-09-11': {
		'etika': '||1.!!!',
		'zarlit': '||1. Стор.21-22 прочитати.|2. Стор. 22 від 7 до 10 питання усно',
		'uklen': '||1. Впр. 37',
		'nat': '||1. Стор. 19-22 читати, завд. №1 (письмово)',
		'dram': '||1.!!!',
		'fiz': '||1. Форма'
	},
	'2023-09-12': {
		'pain': '||1. !!!',
		'geog': '||1. Написати твір-есе на одну з поданих тем "Як знання про Землю вплинулина (обрання місця та форми відпочинку влітку/ підготовку одягу та взуття напередодні навчання в школі/планування поїздки/ін)"',
		'uklen': '||1. Впр.39, 42(закінчити)',
		'hist': '||1. Параг. 6',
		'mat': '||1. №59(2,4), №67(3)',
		'eng': '||1. P. 11 ex.5',
		'fiz': '||1. Форма'
	},
	'2023-09-13': {
		'mus': '||1.!!!',
		'mat': '||1. №86(1,2), №73(3,5)',
		'hist': '||1. Параг. 7,8',
		'eng': '||1. P.12, ex.2,3',
		'fiz': '||1. Форма',
		'uklit': '||1.!!!'
	},
	'2023-09-14': {
		'oz': '||1. !!!',
		'zarlit': '||1. Порівняти характеристики Зевса і Прометея',
		'prog': '||1. !!!',
		'mat': '||1. Стор, 13,14, № 1-4, 6, 7, 12',
		'uklen': '||1. Впр.44 (зробити схеми ті що скраю)',
		'geog': '||1. !!!'
	},
	'2023-09-15': {
		'uklen': '||',
		'mat': '||1. №93(1,2,4) №97(уточнити)',
		'mat': '||',
		'eng': '||1. P.13, ex.3',
		'nat': '||1. Параг. 4 стор.22 завд.2,4',
		'tec': '||',
		'tec': '||'
	},

	'2023-09-18': {
		'etika': '||1.!!!',
		'zarlit': '||1. Стор 25-27 (читати)',
		'uklen': '||1. Впр. 56',
		'nat': '||1. Стор. 30 завд. 3',
		'dram': '||1. !!!',
		'fiz': '||1. Форма'
	},
	'2023-09-19': {
		'pain': '||1. Пластилін',
		'geog': '||1. !!! (вчительку замінили)',
		'uklen': '||1. Впр. 60',
		'hist': '||1. Повторити словник',
		'mat': '||1. №113, №122',
		'eng': '||1. P.15, ex 2,3',
		'fiz': '||1. Форма'
	},
	'2023-09-20': {
		'mus': '||1. Вивчити пісню (за виданим листочком)',
		'mat': '||1. №146',
		'hist': '||1. Параг. 13-14, стор.62 завд.3',
		'eng': '||1. P.16 ex. 1,2',
		'fiz': '||1. Форма',
		'uklit': '||1. Стор. 25-26, вивчити колядку|2. Стор. 27-28, вивчити щедрівку',
		'uklit': '||'
	},
	'2023-09-21': {
		'oz': '||1. Створити план евакуації квартири і позначити бепечні точки',
		'zarlit': '||1. Стор. 34 QR-код',
		'prog': '||1. !!!',
		'mat': '||1. №159',
		'uklen': '||1. Впр.69',
		'geog': '||1. Пермалювати з атласу стор.30,31 у контурну карту стор.12,13|2. Завдання за посиланням'
	},
	'2023-09-22': {
		'uklen': '||1. ',
		'mat': '||1. 176, 180',
		'mat': '||',
		'eng': '||1. Написати твір про свій день',
		'nat': '||1. Параг.6',
		'tec': '||1. Доробити к/р',
		'tec': '||'
	},

	'2023-09-25': {
		'etika': '||1. Закінчити байку "Три бика та лев"(письмово)',
		'zarlit': '||1. Стор. 32, завд.6(письмово)|2.Стор. 33 завд.13-15 (усно)',
		'uklen': '||1. Впр. 82',
		'nat': '||1. Параг.6 завд.4 (письмово)',
		'dram': '||1.!!!',
		'fiz': '||1. Форма'
	},
	'2023-09-26': {
		'pain': '||1. Все малювання фарбами',
		'geog': '||1. Парагр.8 законспектувати|2. Доробити табличку в зошиті для контрольних',
		'uklen': '||1. Впр.88',
		'hist': '||1. Параг.11, 12',
		'mat': '||1. №187(1-3), №185(1,2)',
		'eng': '||1. Повторити словник',
		'fiz': '||1. Форма'
	},
	'2023-09-27': {
		'mus': '||1. !!!',
		'mat': '||1. №194, №192',
		'hist': '||1. !!!Практична',
		'eng': '||1. Написати повідомлення про українського паролімпійця',
		'fiz': '||1. Форма',
		'uklit': '||1. Написати тест з 6 запитань',
		'uklit': '||'
	},
	'2023-09-28': {
		'oz': '||1. !!!',
		'zarlit': '||1. Запитати 6 тестових запитанб на тему "Давньогрецькі міфи"',
		'prog': '||1. !!!',
		'mat': '||1. № 220(5-7)',
		'uklen': '||1. Впр. 93 (доробити)|2. Повторити правила на стор. 48-49',
		'geog': '||1. Параг.8 стор 141 завд.7'
	},
	'2023-09-29': {
		'uklen': '||1. !!!',
		'mat': '||1. !!!',
		'mat': '||',
		'eng': '||1. P.18, ex.6, CD-23, ',
		'nat': '||1. Параг.7, стор. 34, завд. 2',
		'tec': '||1. !!!',
		'tec': '||'
	},

	'2023-10-02': {
		'etika': '||1. Дати відповідь на 9 запитань з презентації',
		'zarlit': '||1. Сор. 35-36',
		'uklen': '||1. Впр. 101',
		'nat': '||1. Параг.7',
		'dram': '||1. !!!',
		'fiz': '||1. Форма'
	},
	'2023-10-03': {
		'pain': '||1. Фарби',
		'geog': '||1. Параг. 10,11, стор.50 ',
		'uklen': '||1. Впр.106',
		'hist': '||1. !!!Практична',
		'mat': '||1. №247 (1-4), №251(1-4)',
		'eng': '||1. P.20,21 ex.6,7',
		'fiz': '||1. Форма'
	},
	'2023-10-04': {
		'mus': '||1. Вивчити пісню',
		'mat': '||1. №260',
		'hist': '||1. !!!К/р',
		'eng': '||1. P.10, ex.2,3 (WB)',
		'fiz': '||1. Форма',
		'uklit': '||1. 1 варіант - написати характеристику "Бджолі"',
		'uklit': '||1. 2 варіант - написати характеристику "Шершня"'
	},
	'2023-10-05': {
		'oz': '||1.!!!',
		'zarlit': '||1. Стор.41-49',
		'prog': '||1.!!!',
		'mat': '||1. №278',
		'uklen': '||1. Впр.115',
		'geog': '||1. Параг.10, задача'
	},
	'2023-10-06': {
		'uklen': '||1. !!!',
		'mat': '||1. №289(4,5), №292(1) або №300(4,5), №302(1)',
		'mat': '||',
		'eng': '||1. P.142. ex.180 (підручник вчителя)',
		'nat': '||1. Параг.8, стор. 37 відповісти на питання, №3 письмово, №2 (по бажанню)',
		'tec': '||1. !!!',
		'tec': '||'
	},

	'2023-10-09': {
		'etika': 'https://classroom.google.com/w/NTg1MzQ5ODM1ODQ4/t/all||1. Виконати тест у зошиті',
		'zarlit': '||1. Стор 52-56 читати',
		'uklen': '||1. Стор. 57 QR-код підгот. до к/р ',
		'nat': '||1. Параг.9, завд. 3, 4',
		'dram': '||1. !!!',
		'fiz': '||1. Форма'
	},
	'2023-10-10': {
		'pain': '||1. !!!',
		'geog': '||1. Параг. 12 намалювати план кімнати',
		'uklen': '||1. !!!К/р',
		'hist': '||1. Параг. 16',
		'mat': '||1. №317',
		'eng': '||1. P.17 ex. 2,3 (WB)',
		'fiz': '||1. Форма'
	},
	'2023-10-11': {
		'mus': '||1. !!!',
		'mat': '||1. №323(2,3)',
		'hist': '||1. Парагр.16 (конспект у зошиті)',
		'eng': '||1. P.22 ex.2 (read)',
		'fiz': '||1. Форма',
		'uklit': '||1. Байка "Лелека і голуб" (вивчити на пам\'ять)',
		'uklit': '||'
	},
	'2023-10-12': {
		'oz': '||1. !!!',
		'zarlit': '||1. Стор. 61-65, написати 4 питання по змісту',
		'prog': '||1. ',
		'mat': '||1. №12',
		'uklen': '||1. !!!Ярмарок',
		'geog': '||1. Параг.9(старий підручник)|2. стор.58 №3,4 (новий підручник)'
	},
	'2023-10-13': {
		'uklen': '||1. Впр. 129',
		'mat': '||1. !!!К/р',
		'mat': '||',
		'eng': '||1. P.23, ex.3',
		'nat': '||1. Стор.40-41 п.4 від парграфа',
		'tec': '||1. !!!',
		'tec': '||'
	},

	'2023-10-16': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-10-17': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-10-18': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-10-19': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-10-20': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-10-23': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-10-24': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-10-25': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-10-26': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-10-27': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-10-30': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-10-31': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-11-01': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-11-02': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-11-03': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-11-06': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-11-07': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-11-08': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-11-09': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-11-10': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-11-13': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-11-14': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-11-15': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-11-16': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-11-17': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-11-20': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-11-21': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-11-22': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-11-23': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-11-24': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-11-27': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-11-28': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-11-29': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-11-30': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-12-01': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-12-04': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-12-05': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-12-06': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-12-07': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-12-08': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-12-11': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-12-12': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-12-13': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-12-14': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-12-15': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-12-18': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-12-19': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-12-20': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-12-21': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-12-22': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' },

	'2023-12-25': { 'etika': '||', 'zarlit': '||', 'uklen': '||', 'nat': '||', 'dram': '||', 'fiz': '||' },
	'2023-12-26': { 'pain': '||', 'geog': '||', 'uklen': '||', 'hist': '||', 'mat': '||', 'eng': '||', 'fiz': '||' },
	'2023-12-27': { 'mus': '||', 'mat': '||', 'hist': '||', 'eng': '||', 'fiz': '||', 'uklit': '||', 'uklit': '||' },
	'2023-12-28': { 'oz': '||', 'zarlit': '||', 'prog': '||', 'mat': '||', 'uklen': '||', 'geog': '||' },
	'2023-12-29': { 'uklen': '||', 'mat': '||', 'mat': '||', 'eng': '||', 'nat': '||', 'tec': '||', 'tec': '||' }

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

