//Перелік уроків
var chLesson = {
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
		//'meet': 'https://meet.google.com/kcp-tbxz-khb', //2022-09-12
		'meet': 'https://meet.google.com/kcp-tbxz-khb', //2022-10-18
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
		'teacher': 'Стеблюк Олександра Вікторівна',
		'classroom': 'https://classroom.google.com/c/NTI3MjA4NzU0NjU1',
		'homework': 'https://classroom.google.com/w/NTI3MjA4NzU0NjU1/t/all',
		//'meet': 'https://meet.google.com/zhz-eesi-pif',
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

// Дати попередніх уроків
var chLessonDate = {
	'uklen': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'uklit': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'zarlit': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'eng': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'mat': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'mus': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'hist': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'fiz': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'pain': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'prog': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'dram': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'oz': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'tec': { 'chDate': { 'count': 0 }, 'arI': [0] },
	'nat': { 'chDate': { 'count': 0 }, 'arI': [0] }
};

//Домашні завдання - по дням їх видачі
var chHomework = {
	'2022-09-01': { 'fiz': '-', 'nat': '-', 'mat': '-', 'uklen': '-', 'zarlit': '-', 'eng': '-', 'oz': '-' },
	'2022-09-02': { 'mat': '-', 'tec': '-', 'hist': '-', 'uklit': '-', 'eng': '-' },

	'2022-09-05': { 'uklen': '-', 'zarlit': '-', 'eng': '-', 'mat': '-', 'mus': '-' },
	'2022-09-06': { 'eng': '-', 'hist': '-', 'mat': '-', 'nat': '-', 'uklit': '-', 'fiz': '-' },
	'2022-09-07': { 'fiz': '-', 'pain': '-', 'prog': '-', 'uklen': '-', 'dram': '-', 'mat': '-' },
	'2022-09-08': { 'fiz': '-', 'nat': '-', 'mat': '-', 'uklen': '-', 'zarlit': '-', 'eng': '-', 'oz': '-' },
	'2022-09-09': { 'mat': '-', 'tec': '-', 'hist': '-', 'uklit': '-', 'eng': '-' },

	'2022-09-12': {
		'uklen': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy/a/NTQ3MDU0MDY4NTA0/details||1. Знайди відповідне слово, утвори речення, запиши (останній слайд у презентації):|- димовий, димний, димучий, димчастий (порох, труба, камінь, вулкан).|- діловий, діловитий (людина, розмова).',
		'zarlit': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy/a/NTQ3MDU0MDY4NTA0/details||1. Дочитати казку до кінця|2. Детально переказати|3. Відповісти на питання 1-4 з сторінки 27',
		'eng': '1. Пригадати слова (a pen, a pencil, a ruler, a pencilcase, a rubber, a book, ...)|2. Скласти 12 словосполучень зі словами :this, that these, those  та зі словами ( a pen, a pencil...)|Example:|This copy-book|these bags|that ruler,|those vocabularies',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz/a/NTQ3MDgyMTgzOTIz/details||1. №56(1,3,5) - з нового підручника|2. №64(1,3,5) - з нового підручника',
		'mus': 'https://classroom.google.com/c/NTI2OTIxMzY1NjM3/a/NDg5NjAzMTU5MDA3/details||1. Пергелянути і прочитати матеріали до укроку за посиланням.|2. В зошиті записати конспект.|3. Прослухати музичні композиції за посиланням.'
	},
	'2022-09-13': {
		'eng': 'https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5||1. Переглянути презентацію(знайти помилки в домашніх завданнях(вміти пояснити)|2. Доробити вправу з останнього слайду;|3. Ппр.3 ст.11 (електронний підручник) дивитись підказку на ст.137 (табличка Be)',
		'hist': 'https://classroom.google.com/c/NTQ0NzkyOTQ2MTgw/a/NTQ3MzU0MzYwMTk5/details||1. Опрацювати презентаційний матеріал та дописати у зошит визначення: Історична подія.|2. Опрацювати матеріал підручника (електронний варіант) стор. 13 - 18 |3. Виконати завдання на стор. 18, QR - код, в зошиті.',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz/a/NTQ3MjM1NDg0Nzc0/details||Завдання на урок:|1. В зошиті записати|13 вересня|Дистанційна робота||2. Перейди за посиланням і пограй у гру "Знайди пару"🤗|https://learningapps.org/view22838707|3. Пригадай, як виконуються дії з іменованими числами. Виконай усно номер 1 ( дивись додані картинки)|4. Фізкультхвилинка|5. Номер 65 виконай письмово в зошиті.|Виконай дію:|1) 4 кг 150 г + 7 кг 270 г;|2) 8 м 12 см – 5 м 31 см;|3) 4 км 25 м : 5;|4) 2 см 3 мм ∙ 4;|5) 3 ц 21 кг + 1 т 127 кг;|6) 5 хв 20 с – 1 хв 40 с;|7) 3 кг 200 г ∙ 8;|8) 6 ц 24 кг : 3.|6. Подумай, для чого тобі знадобляться ці знання?|7. Оціни свою роботу на уроці використовуючи світлофор ( дивись завантажені картинки). Результат запиши в коментарі ( який колір світлофора сьогодні ти обрав?)|Домашнє завдання|1. № 60 з нового підручника (завантажений 5 вересня в класрум).',
		'nat': 'https://classroom.google.com/c/NTQ1MDc1MDgxMzg1/a/NTQ3MjQ5NjY2MTIz/details||1. Продивіться відео.|2. Прочитайте сторінку 14 підручника, дайте відповідь на запитання на с.14|3. Виконайте практичну роботу за інструкцією в прикріпленому документі і відправте в класрум до зазначеного терміну (14.09.22 до 18.00)',
		'uklit': 'https://classroom.google.com/c/NTQ1MjMzNDAzMDE0/a/NTQ3MzY2MDQyNzY3/details||1. Виразно читати с. 113-117 (старий підручник)|2. Скласти три власних загадки та намалювати до них ілюстрації.',
		'fiz': 'https://classroom.google.com/c/NTI3MjA4NzU0NjU1/a/NTI3NjMwNDI2NTEy/details||Працюємо асинхронно, повторюємо минулу схему уроку:|1. Суглобова розминка|2. 3 х|Присід 12|Зірка 12|Сетапи 12|Джампінг Джек 12|3. Заминка, відновлення дихання.'
	},
	'2022-09-14': {
		'prog': 'https://classroom.google.com/c/NTQ1MTU5NzIwMDMx/a/NDg5NzA0NTAwNjA0/details}}1. Читати підручник сторінка 9-10.|2. Виконати вправу 3 сторінка 10.',
		'pain': 'https://classroom.google.com/c/NTI3MTc4MTYzNjQ5/a/NDg5NzA1MDI1MzUz/details||1. Переглянути відеоурок.|2. Дібрати необхідні матеріали|3. Створити свою композицію з осіннього листя, продумай на що схожа твоя композиція, доопрацюй маркером, або фломастером. Фото твоєї роботи прикріпи в класрум.',
		'fiz': 'https://classroom.google.com/c/NTI3MjA4NzU0NjU1/a/NTI3NzAzOTMxMDMw/details||Схема уроку:|1. Суглобова розминка|2. 3 х|Ангели стоячи 10|Бар’єрист 12|Підйом ніг в упорі сидячи 12|Стрибки на місці 12|3. Заминка, відновлення дихання.',
		'uklen': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy/a/NDg5NzA4OTA0MDUx/details|||Самостійна робота|1. Утворити синонімічний ряд до слова: розумний|2. До поданих слів підіьрати антоніми: |молодість - |далеко - |либокий -|попереду - |3. Скласти два речення з поданими омонімами, щоб позначали різні значення: ніс і ніс|4. Скласти два речення із паронімами: незгода - негода',
		'dram': 'https://classroom.google.com/c/NTI3MTI3NTg1MjMx/a/NDg5NzA2NzkyMjMy/details||Виразно читати пєси',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz/a/NTQ3NjIxMDUyNDg5/details||Самостійна робота|1 варіант- Ачкасов, Бажан,Бойко, Данилюк,Дудка,Дудник,Дяденко, Жмурко, Журбенко,Засаднюк, Іванова, Канишина, Коханчук|2 варіант- Кошляк, Лапайко, Нікітюк, Одайський, Пасічник, Рвачов,Сорока,Сорохманюк, Спеней, Спицька, Шарай, Юзько.'
	},
	'2022-09-15': {
		'fiz': 'https://classroom.google.com/c/NTI3MjA4NzU0NjU1/a/NTI3NzAzOTMxMDMw/details||Схема уроку:|1. Суглобова розминка|2. 3 х|Ангели стоячи 10|Бар’єрист 12|Підйом ніг в упорі сидячи 12|Стрибки на місці 12|3. Заминка, відновлення дихання.',
		'nat': 'https://classroom.google.com/c/NTQ1MDc1MDgxMzg1/a/NTI3NzUyMzM3NTI3/details||1. Опрацювати матеріал підручника с.15 - 17.|2. Дати відповіді на запитання на с.17',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz||1. номер 84(1,2),|2. номер 86(1,2)',
		'uklen': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy||1. Передостанній слайд у презентації (усно)|2. Останній слайд (письмово).',
		'zarlit': 'https://classroom.google.com/c/NTQ0NzUwODYxNzA1||1. С.15 підручника, виписати 2 прислівя, якиими можна охарактеризувати Момотару',
		'eng': '1. https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5||Впр.2, ст.12 (електронний підручник) - письмово|2. Впр.3, ст.12 (усно)',
		'oz': 'https://classroom.google.com/c/NTQ1MDE1NTYzNDM2||Підручник с.13-18, |прочитати, |записати в зошиті (берем тоненький зошит в клітинку) номери рятувальних та аварійних служб.'
	},
	'2022-09-16': {
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz||1. №97,|2. 99. |3.Принести 3 тоненькі зошити (12-18 сторінок)',
		'tec': 'https://classroom.google.com/c/NTQ1NTc3MDc3MTYz/a/NTQ4MTU3MjUzMzM5/details||1. Вітальна листівка',
		'hist': 'https://classroom.google.com/c/NTQ0NzkyOTQ2MTgw/a/NTQ4MDU5MzMyMDg2/details||1. Підготувати повідомлення (3-5 речень), інформацію шукати в мережі інтернет.|Завдання вибираємо за бажанням з слайдів 4,6,8;',
		'uklit': 'https://classroom.google.com/c/NTQ1MjMzNDAzMDE0||1. Виразно читати с.124-126, |2. Виписати до словника визначення - акровірш;|3. скласти самостійно 1 або 2 акровірші (письмово).',
		'eng': 'https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5||1. Впр.3, ст.12 (вивчити назви країн та національностей);|2. Впр.5, ст.13(читати 5раз вголос)'
	},

	'2022-09-19': {
		'uklen': '||1. Виписати 10 іншомовних слів з апострофом та мяким знаком',
		'zarlit': '||1. Намалювати малюнок бажаного предмету',
		'eng': '||1. Стор 5, впр. 3',
		'mat': '||Немає - була тестова робта',
		'mus': '||Подивтись відеоролік'
	},

	'2022-09-20': {
		'eng': '||1. Написати 5-6 речень про свою сімю (стор. 5, зразок впрва 3)',
		'hist': '||1. Прочитати пар.2 стор 12-13 (старий підручника).|2 Подивитись відео за QR-кодом з форзацу підручника ',
		'mat': '||1. 118|2. 123',
		'nat': '||1. Стор. 18-20 (новий підручник)|2. Стор. 22 №3',
		'uklit': '||1. Стор. 22-31 прочитати (стара книжка). |2. Скласти план',
		'fiz': '||1. Форма'
	},
	'2022-09-21': {
		'fiz': '||Форма',
		'pain': '||Зробити виріб (довільний)',
		'prog': '||1. Читати стор 12-15',
		'uklen': '||1. Стор. 37 впр. 83 (новий підручник)',
		'dram': '||1. Назвати по іншому олівці (записати у зошиті)',
		'mat': '||1. №127 1 приклад|2. 135 1, 2 приклади'
	},
	'2022-09-22': {
		'fiz': '||Форма',
		'nat': 'https://classroom.google.com/c/NTQ1MDc1MDgxMzg1/a/NTQ5NTAwODIwNjc5/details||1. Опрацювати с.19-21, на с.22 №4 -виконати письмово. (прочитати інформацію можна в старому підручнику на с.12-15, але письмове завдання, потрібно зробити з електронного підручника)',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz||1. Параграф 2 читати|2. номер 146,148 виконати письмово',
		'uklen': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy/a/NTQ5Mjk3NjYxNzE1/details||1. Опрацювати правила с. 39,|2. Переглянути відео,|3. Виконати вправу 88 (розподільна робота) с.39',
		'zarlit': '||1. Сторінка 64-67 читати(старий підручник)',
		'eng': '||1. Сторінка 6 прочитати|2. Вправа 3',
		'oz': 'https://classroom.google.com/c/NTQ1MDE1NTYzNDM2||1. Ел. підручник с. 23-26, в зошиті записати потреби і бажання. '
	},
	'2022-09-23': {
		'mat': '||1. № 149, 153',
		'tec': '||1. Власний виріб',
		'hist': '||1. Параграф 2 стор. 19|2. Завдання 3 письмово',
		'uklit': '||1. Зробити сенкан до словосполучення "Яйце райце"',
		'eng': '||1. Таблиця на стор. 8 записати у зошит'
	},

	'2022-09-26': {
		'uklen': '||1. стор. 44 првавила (електронна книга)|2. вправа 101 стор 46 (електронна книга)',
		'zarlit': '||1. стор. 37 казка "Фарбований шакал" читати, переказати (стара книжка)',
		'eng': '||1. Вправа 1, 2 стор.9',
		'mat': '||1. №205, №224 (старий підручник)',
		'mus': '||'
	},
	'2022-09-27': {
		'eng': '||1. Вправа 3 стор. 123 (старий підручник)',
		'hist': '||1. Повторити стрічку часу (періоди)',
		'mat': '||1. № 217, №.229 (електронний підручник)',
		'nat': '||1. Зробити ваги',
		'uklit': '||1. План переказ стор. 33-36(старий підручник)',
		'fiz': '||1. Форма'
	},
	'2022-09-28': {
		'fiz': '||1. Форма',
		'pain': '||1. Підготувати: аркуш А4 для акварелі, пензлики, гуашь, палітра, стаканчик для води',
		'prog': '||!!!',
		'uklen': '||Впарва 21, стор. 18 (старий підручник)',
		'dram': '||1. Намалювати афішу для вистави (вистава на власний розсуд)',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz||1. Тема: Віднімання натуральних чисел. Властивості віднімання Параграф 5 - опрацювати. 2. № 247(1,2), 250 (електронний підручник)'
	},
	'2022-09-29': {
		'fiz': '||Форма',
		'nat': 'https://classroom.google.com/c/NTQ1MDc1MDgxMzg1||1. Презентація в класрумі',
		'mat': '||1. №273, №275 (електронний підручник)',
		'uklen': '||1. Вправа 109 стор. 49 (електронний підручник)',
		'zarlit': '||!!!',
		'eng': '||1. Впарва 6 стор. 124 (старий підручник)',
		'oz': '||1. Параграф 3 читати і виконати завдання усно на стор.23-24 (старий підручник)'
	},
	'2022-09-30': {
		'mat': '||Не задали в честь свята вчителя-',
		'tec': '||-',
		'hist': '||1. Повторити презентацію про простір',
		'uklit': '||1. стор. 50-56 читати виразна (старий підручник)',
		'eng': '||1. стор. 125 вправа 8 читати (старий підручник)'
	},

	'2022-10-03': {
		'uklen': '||1. Стор. 52 впр. 115 + діалог (електронний підручник)',
		'zarlit': '||1. Стор. 73-74 читати (!?записати?!) (старий підручник)',
		'eng': '||1. Стор. 129 впр. 1(письмово), 2',
		'mat': '||1. №195 (електронний підручник)',
		'mus': '||1. Вивчити пісню (текст у зошиті)'
	},
	'2022-10-04': {
		'eng': '||1. Стор. 129 впр. 3',
		'hist': '||1. Параграф 6,7 прочитати (старий підручник).| 2. Повторити презентацію',
		'mat': '||!!!',
		'nat': 'https://classroom.google.com/c/NTQ1MDc1MDgxMzg1/a/NTUxOTUwNzAyMzc4/details||1. Виконати практичну роботу на с. 23 (електронний підручник)|2. Перевірити свої знання, виконавши тестові завдання с.24 (електронний підручник)|3. Знати відповіді на запитання рубрики "Поміркуємо разом" с.24 (електронний підручник)',
		'uklit': '||1. Переказати і скласти 5 запитань по казці "Лис Микита" (старий підручник)',
		'fiz': '||1. Форма'
	},
	'2022-10-05': {
		'fiz': '||1. Форма',
		'pain': '||1. Принести пластилін, доску, ніж для різки пластиліну',
		'prog': '||1. Стор. 18-24 прочитати (електронний підручник)',
		'uklen': '||1. Скласти міні твір 5 реень з професійними словами',
		'dram': 'https://classroom.google.com/c/NTI3MTI3NTg1MjMx||1. Продумати оформлення сцени (декорації), або підберіть музику для ІІ дії пєси-казки "Півникова наука" (текст пєси в класрумі)',
		'mat': '||!!!'
	},
	'2022-10-06': {
		'fiz': '||1. Форма',
		'nat': '||1. Параграф 7 (старий підручник) і принести пластилін',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz||1. Параграф 6 читати|2. номер 294',
		'uklen': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy||1. Виправити лексичні помилки (завдання в класрумі)',
		'zarlit': '||1. Стор. 91-95 читати',
		'eng': '||Стор. 20-21 впр. 3, 4 (електронний підручник)',
		'oz': '||Стор. 25-28 параг. 4 читати (старий підручник)'
	},
	'2022-10-07': {
		'mat': '||!!!Нічого!!!',
		'tec': '||1. Доробити мотанку (для тих хто не доробив на уроці)',
		'hist': '||1. Параг. 6,7 (старий підручник)|2. Повторити умовні позначки і вміти читати карту',
		'uklit': '||1. Стор. 58 впр. 11 (старий підручник)',
		'eng': '||1. Дописати твір, що почали на уроці'
	},

	'2022-10-10': { 'uklen': '-', 'zarlit': '-', 'eng': '-', 'mat': '-', 'mus': '-' },
	'2022-10-11': { 'eng': '-', 'hist': '-', 'mat': '-', 'nat': '-', 'uklit': '-', 'fiz': '-' },
	'2022-10-12': { 'fiz': '-', 'pain': '-', 'prog': '-', 'uklen': '-', 'dram': '-', 'mat': '-' },
	'2022-10-13': { 'fiz': '-', 'nat': '-', 'mat': '-', 'uklen': '-', 'zarlit': '-', 'eng': '-', 'oz': '-' },
	'2022-10-14': { 'mat': '-', 'tec': '-', 'hist': '-', 'uklit': '-', 'eng': '-' },

	'2022-10-17': {
		'uklen': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy||1. Впр. 146(1) письмово (електронний підручник).',
		'zarlit': '||1. Придумати історію про пригоди улюбленої іграшки (за бажанням)|2. Повторити харатерні ознакилітературної казки (стор. 75)',
		'eng': 'https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5||1. Переглядаєм презентацію, вставляємо (усно is/ are) та читаєм вголос.|2. Стор.-23 впр. 4 (електронного підручника) виконати письмово(списати речення)',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz||1. 328. Обчисли зручним способом:||1) 4 ⋅ 89 ⋅ 25|2) 2 ⋅ 472 ⋅ 5|3) 5 ⋅ 61 ⋅ 4|4) 50 ⋅ 15 ⋅ 2|5) 125 ⋅ 14 ⋅ 8|6) 8 ⋅ 36 ⋅ 25.',
		'mus': '||!!!'
	},
	'2022-10-18': {
		'eng': 'https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5||1. Опрацюйте самостійно з електронним підручником на ст.24, 25|2. Стор.-24 впр. 1,2 (УСНО)|3. Стор.-25 впр. 3 (ПИСЬМОВО)',
		'hist': 'https://classroom.google.com/c/NTQ0NzkyOTQ2MTgw/m/NTU3NDY3ODM3ODcx/details||Опрацювати матеріал уроку.|1. Презентаційний|2. Підручник (електронний), п.5 (стор.29 -33)|3. Завд. 2, стор.34',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz||1. №345(1) (електронний підручник)',
		'nat': 'https://classroom.google.com/c/NTQ1MDc1MDgxMzg1/a/NTU3MzYwNjE2MTc0/details||1. Прочитати електронний підручник с.30 - 31.|2.  Спробувати створити моделі молекул з пластиліну кисню, водню, вуглекислого газу, води за схемами цих речовин, що зображені на с.31',
		'uklit': 'https://classroom.google.com/c/NTQ1MjMzNDAzMDE0||1. Останній слайд у презентації.',
		'fiz': '||1. Форма'
	},
	'2022-10-19': {
		'fiz': '||1. Форма',
		'pain': 'https://classroom.google.com/c/NTI3MTc4MTYzNjQ5/a/NTU3Nzg4NTUzNTU3/details||1. Розглянь форми овочів та фруктів та переглянь відеоурок.|2. Добери пластилін, стеки, дощечку для ліплення та серветки(сухі).|3. Створи обємну композицію "Овочі та фрукти" із пластиліну. Намагайся передати форму і фактуру кожного предмета, який будеш ліпити. Після роботи ретельно витри руки сухою серветкою. Фото своєї композиції прикріпи в класрум.',
		'prog': 'https://classroom.google.com/c/NTQ1MTU5NzIwMDMx/a/NTU3NzkzMzg4OTgz/details||1. читати підручник сторінка 24-27|2. переглянути презентацію|3. переглянути відеоурок за посиланням https://cutt.ly/iB1DxR4',
		'uklen': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy||1. Вправу 150 с.65 (письмово)|2. Вивчити правила с.64.',
		'dram': 'https://classroom.google.com/c/NTI3MTI3NTg1MjMx/a/NTU3Njc0NTM3NjEx/details||1. Правила поведінки дітей у театрі',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz/a/NTU3ODI5ODA3NjE4/details||Дистанційна робота|1 Степінь натурального числа. Квадрат і куб натурального числа|2. Перейти за посиланням і переглянути відео урок https://www.youtube.com/watch?v=qrk4qEs1m4Q|3. Усі 5 номерів, розвязані у відео уроці записати в зошит|4. Д.З. параграф 8-опрацювати, №361-письмово'
	},
	'2022-10-20': {
		'fiz': '||1. Форма',
		'nat': 'https://classroom.google.com/c/NTQ1MDc1MDgxMzg1/a/NTU4MDU2NDU2ODQx/details||1. Опрацювати с. 28 - 31 старого підручника, дати відповіді на запитання на 33',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz||1. Повторити тему "Степінь натурального числа. Квадрат і куб числа", параграф 8',
		'uklen': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy||1. Вивчити значення поняття афоризм с.67|2. Усно опрацювати таблицю вправи 157 с.67|3. Стор. - 68, впр. 159',
		'zarlit': '||1. Стор. 100-103 перказати казку Хлопчик зірка',
		'eng': 'https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5||1. Do exercise 3 page 25(written)|2. Listen to the recording and then train reading the sentences of ex. 1 p.25',
		'oz': 'https://classroom.google.com/c/NTQ1MDE1NTYzNDM2||1. Параграф 6 с.47-55 (електронний підручник)|2. виконати завдання на с. 55(електронний підручник)'
	},
	'2022-10-21': {
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz/a/NDkxMTQ3NTY1NjYy/details||1. №382(2,4) (електроний підручник)',
		'tec': 'https://classroom.google.com/c/NTQ1NTc3MDc3MTYz/a/NTU1MDQ0MjA4OTgx/details||1. Ознайомтесь з поданою інформацією, проаналізуйте, який оберіг ви зможете виготовити. Враховуйте наявність матеріалів та інструментів. Можливий пошук ідей в інтернеті. Роботу виконуєте до наступної пятниці',
		'hist': 'https://classroom.google.com/c/NTQ0NzkyOTQ2MTgw/a/NTU4NDUyMzk1MTY2/details||1. Повторити матеріал уроку (презентаційни та підручник).|2. Підручник п.6, стор. 35, провести дослідження. Записати до зошити, сфотографувати, прикріпити до теми уроку. При виконанні дз - уважно прочитайте інформацію у презентаціях.',
		'uklit': 'https://classroom.google.com/c/NTQ1MjMzNDAzMDE0||1. Написати 5-6 речень про те чого тебе навчила казка Лілея',
		'eng': 'https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5||1. Впр.1, 2 ст.26 (електронного підручника) прослухайте, запамятайте слова, прочитайте розповіді;|2. Впр. 1 ст.27 (перепишіть речення собі в зошит, вставивши потрібні слова)'
	},

	'2022-10-24': {
		'uklen': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy/a/NDkxMjE5OTAwMjAy/details||1. Вправа 163 с.69 (виконати за варіантами) (електроний підручник)',
		'zarlit': 'https://classroom.google.com/c/NTQ0NzUwODYxNzA1||1. Домашка ст.106-114',
		'eng': 'https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5||1. Do exercise 3 page 29 (as in the example)',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz/a/NTU4OTQ2MjczNDcy/details||1. Параграф 9-опрацювати, №397(1,3), №395(1,3,5)-виконати письмово',
		'mus': 'https://classroom.google.com/c/NTI2OTIxMzY1NjM3/a/NTU4OTM0MzM5MTA2/details||1. Заспівати пісню "Ой у лузі червона калина" (тільки куплет 1 і приспів ), записавши себе на відео. |2. Заспівати пісню "Україно моя" (тільки куплет 1 і приспів), записавши себе на відео.'
	},
	'2022-10-25': {
		'eng': 'https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5||1. Ex.7, 8 page 31 (written)',
		'hist': '||!!!',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz/a/NTU5MjQwMjY4NjY0/details||1. Параграф 9-повторити,|2. №408(1-3), №401- виконати письмово',
		'nat': 'https://classroom.google.com/c/NTQ1MDc1MDgxMzg1/a/NTU5MTUwOTI1NTk0/details||1. 1. Прочитати (старий підручник) параграф 5, дати відповіді на запитання на с. 25',
		'uklit': 'https://classroom.google.com/c/NTQ1MjMzNDAzMDE0||1. Прочитати казку "Чотири сестри"  с.74-86 (електронний підручник) або прослухати аудіокнигу|2. Скласти 5 запитань до казки (письмово).',
		'fiz': '||1. Форма'
	},
	'2022-10-26': {
		'fiz': '||1. Форма',
		'pain': 'https://classroom.google.com/c/NTI3MTc4MTYzNjQ5/a/NTU5NTM4NTg1MTA2/details||1. Переглнь інформацію з відеоуроку про архітектуру та її види.|2. Спробуй створити свій архітектурний ансамбль "Вражаюча архітектурна споруда" на аркуші паперу.|3. Матеріали для роботи обери за власним уподобанням.|4. Фото власної композиції прикріпи в класрум',
		'prog': 'https://classroom.google.com/c/NTQ1MTU5NzIwMDMx/a/NTU4OTgyNDY2NzAz/details||1. переглянути презентацію|2. виконати практичне завдання |3. читати підручник сторінка 28-33',
		'uklen': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy||1. Впр. 170 с.71 (електронний підручник).',
		'dram': '||!!!',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz/a/NTU5NTcyNzQ2ODg3/details||1. В зошиті записати 26 жовтня Дистанційна робота Ділення з остачею|2. Перейти за посиланням і переглянути відео урок https://www.youtube.com/watch?v=3hZfl724aDE|3. У відео уроці розвязані №422, 425,428, переписати в зошит, розібратися.|4. Домашнє завдання на 27.10 : параграф 10-читати, №424-виконати письмово і здати на перевірку'
	},
	'2022-10-27': {
		'fiz': '||1. Форма',
		'nat': 'https://classroom.google.com/c/NTQ1MDc1MDgxMzg1/a/NTU5NzU0NjUwOTUx/details||1. Опрацювати матеріал підручника с. 32 - 33|2. Виконати завдання зі с. 33',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz||1. №434, №436-виконати письмово',
		'uklen': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy||1. Впр. 167 с.70 (електронний підручник)|2. Повторити все вивчене про фразеологізми.',
		'zarlit': '||1. Повторити особливості літературної казки|2. Виконати підсумкові завдання за електроним підручником. Експркес тест 4',
		'eng': 'https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5||1. Діти, читаєте завдання до проєкту на ст.31; |2. Малюєте невеличкий малюнок нової спальні та описуєте її (на окремому аркуші паперу), як вказано у прєкті.',
		'oz': 'https://classroom.google.com/c/NTQ1MDE1NTYzNDM2||1. переглядаємо відео та читаємо параграф 7 в ел підручнику і даємо відповіді на питання в кінці параграфа.'
	},
	'2022-10-28': {
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz/a/NTYwMTQ1OTYxMjc4/details||1. Нижче знайдете завдання самостійної роботи. Виконуєте їх і прикріпляєте на перевірку.',
		'tec': 'https://classroom.google.com/c/NTQ1NTc3MDc3MTYz/a/NTYwMTUyNDMwNjY2/details||1. Рамка для фото',
		'hist': 'https://classroom.google.com/c/NTQ0NzkyOTQ2MTgw/a/NTYwMTY5ODMzMTcx/details||1. Перейдіть за посиланням https://vseosvita.ua/test/start/ynq925 та вкажіть необхідну інформацію. Пройдіть тестування.',
		'uklit': 'https://classroom.google.com/c/NTQ1MjMzNDAzMDE0||1. Скласти тестові завдання до казки (6 або 12 запитань і до них по три або чотири варіанти відповідей, позначте правильну відповідь).',
		'eng': 'https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5||1. Працюєте з електронним підручником на сторінці 32;|2. Самостійно виконуєте вправи 2, 3 та 1 виконуєте за зразком.|3. Речення вправи 1, ст.32 списати собі в зошит'
	},

	'2022-10-31': {
		'uklen': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy/a/NTYwNDUwMjY3NDY3/details||Виконати тести онлайн за посиланням https://vseosvita.ua/test/go-settings?code=xro689 за темою "Повторення вивченого з фразеології"|2. Підготуватися до контрольної роботи. Повторити: що таке лексикологія, фразеологія, лексика, фразеологізми, синоніми, антоніми, омоніми, пароніми, запозичені слова, діалектизми, історизми, професійні слова, неологізми, архаїзми.',
		'zarlit': '||1. Повторити вивчене про літературну казку. Виписати прислівя (2-3) до образу Хлопчика Зірки',
		'eng': 'https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5||1. -Listen to CD48;|2. Ex.1, p.35(orally);3. Ex.2,p 34; Ex.2, p.35(written)',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz/a/NTYwNDYyOTUyMTk5/details||1. 436. Наталя поділила 87 на деяке число і в остачі отримала 21. На яке число ділила Наталя? (Укажи всі можливості.)',
		'mus': 'https://classroom.google.com/c/NTI2OTIxMzY1NjM3/a/NTYwNDYwMTAzOTYy/details||1. Перглянути презнтацію до урок "Мистецький ансамбль" за посиланням|2. Прослухати Струнний квартет Соль-Мажор В.А.Моцарта за посиланням|3. Прослухати разом з батьками "МОЦАРТ ДЛЯ ДІТЕЙ - КРАЩЕ" за посиланням|4. Вчити НАПАМЯТЬ пісню "Планета дитинства" за посиланням'
	},
	'2022-11-01': {
		'eng': 'https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5||1. За зразком вправи 8 на сторінці 35 скласти 6 речень про себе та свого знайомого.',
		'hist': 'https://classroom.google.com/c/NTQ0NzkyOTQ2MTgw/a/NTYwNzI4NjA4NTkw/details||1. Опрацюйте матеріал уроку (підручник, відео, презентація). Підручник п. 8, завд 1, стор.48(виконати у зошиті), фото виконаної роботи прикріпити до теми уроку.|2. Створити родинне дерево',
		'mat': '||!!!',
		'nat': '||1. Стор. 42 параграф 10 прочитати і відповісти на питання',
		'uklit': 'https://classroom.google.com/c/NTQ1MjMzNDAzMDE0||1. Підготуватися до контрольної роботи за темами "Народні та літературні казки" (народна казка "Яйце-райце", І.Франко "Фарбований Лис", Леся Українка "Лілея", В.Шевчук "Чотири сестри")',
		'fiz': '||1. Форма'
	},
	'2022-11-02': {
		'fiz': '||1. Форма',
		'pain': 'https://classroom.google.com/c/NTI3MTc4MTYzNjQ5/a/NTYwOTg1MjI3MDA0/details||1. Ознойомся з мистецтвом дизайну та його видами. Уяви себе дизайнером. На основі відео-майстеркласу спробуй створити замальовку крісла, або торшера чи настільної лампи у вигляді соняшника.|2. Виконай руханку за посиланням. Фото своєї роботи надішли в класрум',
		'prog': 'https://classroom.google.com/c/NTQ1MTU5NzIwMDMx||1. Проаналізувати стор. 34-39',
		'uklen': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy||1. КОНТРОЛЬНА РОБОТА https://vseosvita.ua/test/start/kht377',
		'dram': 'https://classroom.google.com/c/NTI3MTI3NTg1MjMx/a/NTYwOTYwODQ4MjAw/details||1. Створити хмарку слів з теми "Вистава" (програма за посиланням https://wordart.com/  ). Створену хмарку прикріпити в гугл-класі',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz/a/NTYxMDM3MTY4NTMw/details||1. Опрацювати параграфhttps://classroom.google.com/c/NTI2OTIzMTIyMzUz/a/NTY3NzQzMzQ4Nzcy/details 11, письмово виконати № 443, №447'
	},
	'2022-11-03': {
		'fiz': '||1. Форма',
		'nat': 'https://classroom.google.com/c/NTQ1MDc1MDgxMzg1/a/NTY3NjY3OTc2MjIz/details||1. 1. Виконати завдання презентації ( письмово)|2. Ще раз продивитися параграфи 9, 10, 12|3. Ачкасову Владиславу підготувати доповідь на тему : "Вода як розчинник"; Данилюк Олені підготувати доповідь на тему : "Розчини в природі побуті та організмі людини"',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz/a/NTY3NzQzMzQ4Nzcy/details||1. Параграф 11-повторити, №456-письмово',
		'uklen': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy||1. Вивчити класифікацію звуків (у зошиті), виконати завдання зі слайду (останній).',
		'zarlit': 'https://classroom.google.com/c/NTQ0NzUwODYxNzA1/a/NTYxNTA1OTM0NTQy/details||1. Контрольна робота Літературна казка',
		'eng': 'https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5||1. Ex.1, 2 p.37',
		'oz': 'https://classroom.google.com/c/NTQ1MDE1NTYzNDM2||1. Намалювати дерево і на писати на листочках синього кольору те, що тобі не подобається, а червоних - подобається'
	},
	'2022-11-04': {
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz/a/NTY4MDA4MjIxNzQ2/details||1. №481(3,4), №487(1,4)-письмово. І здаємо на перевірку|2. Параграф 12 -опрацювати',
		'tec': 'https://classroom.google.com/c/NTQ1NTc3MDc3MTYz/a/NTY4MDA4MTY5Njk2/details||1. Вигтовлення браслета в техніці макраме',
		'hist': 'https://classroom.google.com/c/NTQ0NzkyOTQ2MTgw/a/NTY4MDI1MzYwMjM3/details||1. Практична робота. Писемні історичні джерела. Речові історичні джерела.',
		'uklit': 'https://classroom.google.com/c/NTQ1MjMzNDAzMDE0/m/NDkxODEyMTA3NzI2/details||1. КОНТРОЛЬНА РОБОТА https://vseosvita.ua/test/start/pds089',
		'eng': 'https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5||Ex.1, 2 p.39'
	},

	'2022-11-07': {
		'uklen': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy/m/NTY4NDgzNzYwMzY2/details||1. Вивчити правила про склад і наголос за презентацією, правила с. 83 (електронний підручник),виконати вправу 206 (1) с. 85 (письмово).',
		'zarlit': '||1. Казкові пригоди персонажів на шоколадні фабриці містера Волнки',
		'eng': 'https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5||1. Today you work yourself.|1) read ex.3 page 39;|2) write ex.4 page 39;|3) do the tasks from the file',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz/a/NTY4NTI4MDQwODc2/details||1. Номер 496(2,4,5), номер 501(2)',
		'mus': '||1. Пройти гру Танці світу https://wordwall.net/play/32776/425/118'
	},
	'2022-11-08': {
		'eng': 'https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5||Do exercise 1 page40 Use the oudio to read the invitations',
		'hist': 'https://classroom.google.com/c/NTQ0NzkyOTQ2MTgw/a/NTY4ODMxNTA5MzI2/details||Повторити п.9 (стор.53), правила роботи з візуальним джерелом. В зошиті описати улюблене фото (за правилами, див. стор. 53). Фото роботи прикріпити до теми.',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz||1. Далі попрацюйте з відео уроком https://m.youtube.com/watch?v=v7Jeaocvx0M Тема: Текстові задачі на рух',
		'nat': 'https://classroom.google.com/c/NTQ1MDc1MDgxMzg1/a/NTY4NzI0MTc3Mzg4/details||Опрацювати праграфи 11, 15. Виконати практичну роботу- це парграф 16, с. 62 підручника.|Підготуватись до заліку по питанням:|1. Фізичні тіла|2. Частинки речовини - атоми та молекули.|3. Різноманіття речовин, їхні властивості та застосування.|4. Розташування, рух та взаємодія частинок у твердих тілах, рідинах і газах.|5. Властивості  тверрдих тіл, рідин і газів та їх пояснення на основі знань про будову речовини.|6. Явище дифузії. Вплив температури на швидкість дифузії. Дифузія в природі та організмі людини.|7. Використання властивостей твердих тіл, рідин і газів людиною.|8. Вода як розчинник. Розчини в природі, побуті та організмі людини.',
		'uklit': 'https://classroom.google.com/c/NTQ1MjMzNDAzMDE0/m/NTY4ODE5Mjc4OTgx/details||1.Прослухай за відео легенду «Берегиня»  або прочитати в підручнику с.93-95 (електронний підручник), вміти переказувати|2. Заповнити таблицю завдання 11 с.95 (письмово).|3. Знайди інформацію про українські обереги (за бажанням).',
		'fiz': '||1. Форма'
	},
	'2022-11-09': {
		'fiz': '||1. Форма',
		'pain': 'https://classroom.google.com/c/NTI3MTc4MTYzNjQ5/a/NTY4Nzg0ODM5ODIz/details||1.Переглянь відеоурок. Ознайомся з поняттям ілюстрація. Пригадай що таке казка.|Якими лініями та кольорами намалювати доброго персонажа а якими - злого. Розглянь ілюстрації української художниці-ілюстратара Катерини Штанко.|2. З майстер-класу довідайся як намалювати Цибуліно та синьйора Помідора.|3. Виконай гімнастику для очей.|4. Створи образ свого персонажа з казки.|5. ВИконай руханку Фото своєї роботи прикріпи в класрум.|Д.З. підготуй до наступного уроку обрізки кольорового паперу та фото танцюючої людини клей ножиці.',
		'prog': 'https://classroom.google.com/c/NTQ1MTU5NzIwMDMx/a/NTY4OTI3MDY1Mjc4/details||1. читати підручник сторінка 40-44|2. опрацювати презентацію |3. виконати практичне завдання 1, 2.',
		'uklen': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy/a/NTY5MDk3NTk2NzIx/details||Електронний підручник. Вивчити дзвінкі і глухі звуки. Вправа 211 (I, II) с.87. Творче завдання (  за бажанням) Виписати 2 прислівя про  родину.У першому прислівї підкреслити глухі приголосні. У другому прислівї - дзвінкі приголосні.',
		'dram': 'https://classroom.google.com/c/NTI3MTI3NTg1MjMx/a/NTY4OTczNDYyNDUy/details||У зошиті пишете число, самостійна робота. Далі виконуєте завдання у визначеному порядку|1. Виконати онлайн-тести.|2. Дайте письмову відповідь на запитання.',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz/a/NTY5MTE5ODMwMDc5/details||1. Параграф 13-читати, номер 521(1), номер 526-письмово'
	},
	'2022-11-10': {
		'fiz': '||1. Форма',
		'nat': 'https://classroom.google.com/c/NTQ1MDc1MDgxMzg1/a/NTY5MzEyODY1MjYx/details||1. Тематичний залік №1. Контрольна робота №1. Виконати завдання заліку і здати в класрум до зазначеного терміну (до 10.15)',
		'mat': 'https://classroom.google.com/c/NTI2OTIzMTIyMzUz||1. Номер 528',
		'uklen': 'https://classroom.google.com/c/NTQ1MjMyODExMjEy/m/NTY5NDAzMzM3MzEx/details||1. Виконати вправу 217 с.89 письмово всім, а вправу 218 (1) - за бажанням.',
		'zarlit': 'https://classroom.google.com/c/NTQ0NzUwODYxNzA1||Сторінка 100-116 читати та переказувати в електронному підручнику',
		'eng': 'https://classroom.google.com/c/NTQ1NTY3Mjk4ODQ5||Вправа 1,2 сторінка 41-письмово.',
		'oz': 'https://classroom.google.com/c/NTQ1MDE1NTYzNDM2||Параграф 9, ел.підручник, пройти крос-тест на с.76 (усно), в зошиті записати 5 порад для ефективного тайм - менеджменту.'
	},
	'2022-11-11': { 'mat': '-', 'tec': '-', 'hist': '-', 'uklit': '-', 'eng': '-' },

	'2022-11-14': { 'uklen': '-', 'zarlit': '-', 'eng': '-', 'mat': '-', 'mus': '-' },
	'2022-11-15': { 'eng': '-', 'hist': '-', 'mat': '-', 'nat': '-', 'uklit': '-', 'fiz': '-' },
	'2022-11-16': { 'fiz': '-', 'pain': '-', 'prog': '-', 'uklen': '-', 'dram': '-', 'mat': '-' },
	'2022-11-17': { 'fiz': '-', 'nat': '-', 'mat': '-', 'uklen': '-', 'zarlit': '-', 'eng': '-', 'oz': '-' },
	'2022-11-18': { 'mat': '-', 'tec': '-', 'hist': '-', 'uklit': '-', 'eng': '-' },

	'2022-11-21': { 'uklen': '-', 'zarlit': '-', 'eng': '-', 'mat': '-', 'mus': '-' },
	'2022-11-22': { 'eng': '-', 'hist': '-', 'mat': '-', 'nat': '-', 'uklit': '-', 'fiz': '-' },
	'2022-11-23': { 'fiz': '-', 'pain': '-', 'prog': '-', 'uklen': '-', 'dram': '-', 'mat': '-' },
	'2022-11-24': { 'fiz': '-', 'nat': '-', 'mat': '-', 'uklen': '-', 'zarlit': '-', 'eng': '-', 'oz': '-' },
	'2022-11-25': { 'mat': '-', 'tec': '-', 'hist': '-', 'uklit': '-', 'eng': '-' },

	'2022-11-28': { 'uklen': '-', 'zarlit': '-', 'eng': '-', 'mat': '-', 'mus': '-' },
	'2022-11-29': { 'eng': '-', 'hist': '-', 'mat': '-', 'nat': '-', 'uklit': '-', 'fiz': '-' },
	'2022-11-30': { 'fiz': '-', 'pain': '-', 'prog': '-', 'uklen': '-', 'dram': '-', 'mat': '-' },
	'2022-12-01': { 'fiz': '-', 'nat': '-', 'mat': '-', 'uklen': '-', 'zarlit': '-', 'eng': '-', 'oz': '-' },
	'2022-12-02': { 'mat': '-', 'tec': '-', 'hist': '-', 'uklit': '-', 'eng': '-' },

	'2022-12-05': { 'uklen': '-', 'zarlit': '-', 'eng': '-', 'mat': '-', 'mus': '-' },
	'2022-12-06': { 'eng': '-', 'hist': '-', 'mat': '-', 'nat': '-', 'uklit': '-', 'fiz': '-' },
	'2022-12-07': { 'fiz': '-', 'pain': '-', 'prog': '-', 'uklen': '-', 'dram': '-', 'mat': '-' },
	'2022-12-08': { 'fiz': '-', 'nat': '-', 'mat': '-', 'uklen': '-', 'zarlit': '-', 'eng': '-', 'oz': '-' },
	'2022-12-09': { 'mat': '-', 'tec': '-', 'hist': '-', 'uklit': '-', 'eng': '-' },

	'2022-12-12': { 'uklen': '-', 'zarlit': '-', 'eng': '-', 'mat': '-', 'mus': '-' },
	'2022-12-13': { 'eng': '-', 'hist': '-', 'mat': '-', 'nat': '-', 'uklit': '-', 'fiz': '-' },
	'2022-12-14': { 'fiz': '-', 'pain': '-', 'prog': '-', 'uklen': '-', 'dram': '-', 'mat': '-' },
	'2022-12-15': { 'fiz': '-', 'nat': '-', 'mat': '-', 'uklen': '-', 'zarlit': '-', 'eng': '-', 'oz': '-' },
	'2022-12-16': { 'mat': '-', 'tec': '-', 'hist': '-', 'uklit': '-', 'eng': '-' },

	'2022-12-19': { 'uklen': '-', 'zarlit': '-', 'eng': '-', 'mat': '-', 'mus': '-' },
	'2022-12-20': { 'eng': '-', 'hist': '-', 'mat': '-', 'nat': '-', 'uklit': '-', 'fiz': '-' },
	'2022-12-21': { 'fiz': '-', 'pain': '-', 'prog': '-', 'uklen': '-', 'dram': '-', 'mat': '-' },
	'2022-12-22': { 'fiz': '-', 'nat': '-', 'mat': '-', 'uklen': '-', 'zarlit': '-', 'eng': '-', 'oz': '-' },
	'2022-12-23': { 'mat': '-', 'tec': '-', 'hist': '-', 'uklit': '-', 'eng': '-' },

	'2022-12-26': { 'uklen': '-', 'zarlit': '-', 'eng': '-', 'mat': '-', 'mus': '-' },
	'2022-12-27': { 'eng': '-', 'hist': '-', 'mat': '-', 'nat': '-', 'uklit': '-', 'fiz': '-' },
	'2022-12-28': { 'fiz': '-', 'pain': '-', 'prog': '-', 'uklen': '-', 'dram': '-', 'mat': '-' },
	'2022-12-29': { 'fiz': '-', 'nat': '-', 'mat': '-', 'uklen': '-', 'zarlit': '-', 'eng': '-', 'oz': '-' },
	'2022-12-30': { 'mat': '-', 'tec': '-', 'hist': '-', 'uklit': '-', 'eng': '-' }

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

