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
	'2022-09-01': { 'fiz': '', 'nat': '', 'mat': '', 'uklen': '', 'zarlit': '', 'eng': '', 'oz': '' },
	'2022-09-02': { 'mat': '', 'tec': '', 'hist': '', 'uklit': '', 'eng': '' },

	'2022-09-05': { 'uklen': '', 'zarlit': '', 'eng': '', 'mat': '', 'mus': '' },
	'2022-09-06': { 'eng': '', 'hist': '', 'mat': '', 'nat': '', 'uklit': '', 'fiz': '' },
	'2022-09-07': { 'fiz': '', 'pain': '', 'prog': '', 'uklen': '', 'dram': '', 'mat': '' },
	'2022-09-08': { 'fiz': '', 'nat': '', 'mat': '', 'uklen': '', 'zarlit': '', 'eng': '', 'oz': '' },
	'2022-09-09': { 'mat': '', 'tec': '', 'hist': '', 'uklit': '', 'eng': '' },

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
	'2022-09-16': { 'mat': '', 'tec': '', 'hist': '', 'uklit': '', 'eng': '' },

	'2022-09-19': { 'uklen': '', 'zarlit': '', 'eng': '', 'mat': '', 'mus': '' },
	'2022-09-20': { 'eng': '', 'hist': '', 'mat': '', 'nat': '', 'uklit': '', 'fiz': '' },
	'2022-09-21': { 'fiz': '', 'pain': '', 'prog': '', 'uklen': '', 'dram': '', 'mat': '' },
	'2022-09-22': { 'fiz': '', 'nat': '', 'mat': '', 'uklen': '', 'zarlit': '', 'eng': '', 'oz': '' },
	'2022-09-23': { 'mat': '', 'tec': '', 'hist': '', 'uklit': '', 'eng': '' },

	'2022-09-26': { 'uklen': '', 'zarlit': '', 'eng': '', 'mat': '', 'mus': '' },
	'2022-09-27': { 'eng': '', 'hist': '', 'mat': '', 'nat': '', 'uklit': '', 'fiz': '' },
	'2022-09-28': { 'fiz': '', 'pain': '', 'prog': '', 'uklen': '', 'dram': '', 'mat': '' },
	'2022-09-29': { 'fiz': '', 'nat': '', 'mat': '', 'uklen': '', 'zarlit': '', 'eng': '', 'oz': '' },
	'2022-09-30': { 'mat': '', 'tec': '', 'hist': '', 'uklit': '', 'eng': '' },

	'2022-10-03': { 'uklen': '', 'zarlit': '', 'eng': '', 'mat': '', 'mus': '' },
	'2022-10-04': { 'eng': '', 'hist': '', 'mat': '', 'nat': '', 'uklit': '', 'fiz': '' },
	'2022-10-05': { 'fiz': '', 'pain': '', 'prog': '', 'uklen': '', 'dram': '', 'mat': '' },
	'2022-10-06': { 'fiz': '', 'nat': '', 'mat': '', 'uklen': '', 'zarlit': '', 'eng': '', 'oz': '' },
	'2022-10-07': { 'mat': '', 'tec': '', 'hist': '', 'uklit': '', 'eng': '' },

	'2022-10-10': { 'uklen': '', 'zarlit': '', 'eng': '', 'mat': '', 'mus': '' },
	'2022-10-11': { 'eng': '', 'hist': '', 'mat': '', 'nat': '', 'uklit': '', 'fiz': '' },
	'2022-10-12': { 'fiz': '', 'pain': '', 'prog': '', 'uklen': '', 'dram': '', 'mat': '' },
	'2022-10-13': { 'fiz': '', 'nat': '', 'mat': '', 'uklen': '', 'zarlit': '', 'eng': '', 'oz': '' },
	'2022-10-14': { 'mat': '', 'tec': '', 'hist': '', 'uklit': '', 'eng': '' },

	'2022-10-17': { 'uklen': '', 'zarlit': '', 'eng': '', 'mat': '', 'mus': '' },
	'2022-10-18': { 'eng': '', 'hist': '', 'mat': '', 'nat': '', 'uklit': '', 'fiz': '' },
	'2022-10-19': { 'fiz': '', 'pain': '', 'prog': '', 'uklen': '', 'dram': '', 'mat': '' },
	'2022-10-20': { 'fiz': '', 'nat': '', 'mat': '', 'uklen': '', 'zarlit': '', 'eng': '', 'oz': '' },
	'2022-10-21': { 'mat': '', 'tec': '', 'hist': '', 'uklit': '', 'eng': '' },

	'2022-10-24': { 'uklen': '', 'zarlit': '', 'eng': '', 'mat': '', 'mus': '' },
	'2022-10-25': { 'eng': '', 'hist': '', 'mat': '', 'nat': '', 'uklit': '', 'fiz': '' },
	'2022-10-26': { 'fiz': '', 'pain': '', 'prog': '', 'uklen': '', 'dram': '', 'mat': '' },
	'2022-10-27': { 'fiz': '', 'nat': '', 'mat': '', 'uklen': '', 'zarlit': '', 'eng': '', 'oz': '' },
	'2022-10-28': { 'mat': '', 'tec': '', 'hist': '', 'uklit': '', 'eng': '' }
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

