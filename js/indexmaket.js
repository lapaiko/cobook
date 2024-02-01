// Меню Бургер - Кнопка показати/приховти 
function header__burger() {
	const header__burger = document.querySelector('.header__burger');
	const header__menu = document.querySelector('.header__menu');
	if (header__burger) {
		header__burger.addEventListener("click", function (e) {
			document.body.classList.toggle('_lock');
			header__burger.classList.toggle('_active');
			header__menu.classList.toggle('_active');
		});
	}
}

// Лінки - Кнопка показати/приховати
function description__button() {
	const description__button = document.getElementsByClassName("description__button");
	if (description__button) {
		for (let i = 0; i < description__button.length; i++) {
			description__button[i].addEventListener("click", function (e) {
				this.classList.toggle('_active');
				let description__links = this.parentNode.getElementsByClassName("description__links")[0];
				description__links.classList.toggle('_active');
			});
		}
	}
}

// Завдання - Кнопка показати/приховати
function task__do() {
	const task__do = document.getElementsByClassName("task__do");
	if (task__do) {
		for (let i = 0; i < task__do.length; i++) {
			task__do[i].addEventListener("click", function (e) {
				this.classList.toggle('_active');
				let task__add = this.parentNode.getElementsByClassName("task__add")[0];
				let task__list = this.parentNode.parentNode.getElementsByClassName("task__list")[0];
				task__add.classList.toggle('_active');
				task__list.classList.toggle('_active');
			});
		}
	}
}

// Завдання - Прогрес виконання завдань - Установка
function task__progres(task) {
	let task__do_progres = task.getElementsByClassName("task__title")[0].getElementsByClassName("task__do")[0].getElementsByClassName("task__do_progres")[0];

	let task__item = task__do_progres.parentNode.parentNode.parentNode.getElementsByClassName("task__list")[0].getElementsByClassName("task__item");
	let task_all = task__item.length, task_done = 0;
	for (let j = 0; j < task_all; j++) {
		let task__caption_check_classLis = task__item[j].getElementsByClassName("task__caption")[0].getElementsByClassName("task__caption_check")[0].classList;
		if (task__caption_check_classLis.length == 2) { task_done++; }
	}
	task__do_progres.childNodes[0].data = task_done + " / " + task_all;
	task__do_progres.childNodes[1].style.width = (task_done / task_all * 100) + "%";
}

// Завдання - Прогрес виконання завдань - Старт
function task__do_progres_start() {
	const task = document.getElementsByClassName("task");
	for (let i = 0; i < task.length; i++) {
		// Завдання - Прогрес виконання завдань - Установка
		task__progres(task[i]);
	}
}

// Завдання - Кнопка відмітки
function task__caption_check() {
	const task__caption_check = document.getElementsByClassName("task__caption_check");
	if (task__caption_check) {
		for (let i = 0; i < task__caption_check.length; i++) {
			task__caption_check[i].addEventListener("click", function (e) {
				this.classList.toggle('_active');
				let task__caption_text = this.parentNode.getElementsByClassName("task__caption_text")[0];
				task__caption_text.classList.toggle('_active');

				let task = this.parentNode.parentNode.parentNode.parentNode;
				// Завдання - Прогрес виконання завдань - Установка
				task__progres(task);
			});
		}
	}
}

// Завдання - Кнопка редагувати
function task__caption_edit() {
	const task__caption_edit = document.getElementsByClassName("task__caption_edit");
	if (task__caption_edit) {
		for (let i = 0; i < task__caption_edit.length; i++) {
			task__caption_edit[i].addEventListener("click", function (e) {

				let caption = this.parentNode.parentNode.getElementsByClassName("task__caption")[0];
				let input = this.parentNode.parentNode.getElementsByClassName("task__input")[0];
				caption.classList.toggle('_active');
				input.classList.toggle('_active');

				let caption_text = caption.getElementsByClassName("task__caption_text")[0];
				let input_text = input.getElementsByClassName("task__input_text")[0].children[0];
				input_text.value = caption_text.innerHTML;
			});
		}
	}
}

// Завдання - Кнопка зберегти
function task__input_save() {
	const task__input_save = document.getElementsByClassName("task__input_save");
	if (task__input_save) {
		for (let i = 0; i < task__input_save.length; i++) {
			task__input_save[i].addEventListener("click", function (e) {
				let caption = this.parentNode.parentNode.getElementsByClassName("task__caption")[0];
				let input = this.parentNode.parentNode.getElementsByClassName("task__input")[0];
				caption.classList.toggle('_active');
				input.classList.toggle('_active');

				let caption_text = caption.getElementsByClassName("task__caption_text")[0];
				let input_text = input.getElementsByClassName("task__input_text")[0].children[0];
				caption_text.innerHTML = input_text.value;
			});
		}
	}
}

// Завдання - Кнопка додати
function task__delete() {
	const task__input_delete = document.getElementsByClassName("task__input_delete");
	if (task__input_delete) {
		for (let i = 0; i < task__input_delete.length; i++) {
			task__input_delete[i].addEventListener("click", function (e) {
				let task__item = this.parentNode.parentNode;
				let task__list = this.parentNode.parentNode.parentNode;
				let task = task__list.parentNode;

				task__list.removeChild(task__item);
				// Завдання - Прогрес виконання завдань - Установка
				task__progres(task);
			});
		}
	}
}

// Завдання - Кнопка додати
function task__add() {
	const task__add = document.getElementsByClassName("task__add");
	if (task__add) {
		for (let i = 0; i < task__add.length; i++) {
			task__add[i].addEventListener("click", function (e) {
				let task__list = this.parentNode.parentNode.getElementsByClassName("task__list")[0];
				let task_new = '<div class="task__item"><div class="task__caption"><div class="task__caption_check"></div><div class="task__caption_text">Параг. стор. впр.</div><div class="task__caption_edit"><span></span></div></div><div class="task__input"><div class="task__input_delete"><span></span></div><div class="task__input_text"><textarea></textarea></div><div class="task__input_save"><span></span></div></div></div>';
				task__list.innerHTML = task__list.innerHTML + task_new;
				// Завдання - Кнопка відмітки
				task__caption_check();
				// Завдання - Кнопка редагувати
				task__caption_edit();
				// Завдання - Кнопка зберегти
				task__input_save();
				// Завдання - Кнопка додати
				task__delete();

				let task = task__list.parentNode;
				// Завдання - Прогрес виконання завдань - Установка
				task__progres(task);
			});
		}
	}
}

// Ініціація обєктів і запуск налаштування сторінки
function Init() {
	// Меню Бургер - Кнопка показати/приховти 
	header__burger();
	// Лінки - Кнопка показати/приховати
	description__button();
	// Завдання - Кнопка показати/приховати
	task__do();

	// Завдання - Кнопка відмітки
	task__caption_check();
	// Завдання - Кнопка редагувати
	task__caption_edit();
	// Завдання - Кнопка зберегти
	task__input_save();
	// Завдання - Кнопка додати
	task__delete();


	// Завдання - Прогрес виконання завдань
	task__do_progres_start();

	// Завдання - Кнопка додати
	task__add();

}

function CardDay(day, cardslesson) {
	let cardday = '';
	cardday = cardday + '<div class="weekday">';
	cardday = cardday + '<div class="weekday__conteiner">';
	cardday = cardday + '<div class="weekday__date">' + day + '</div>';
	cardday = cardday + '<div class="weekday__subject">';
	cardday = cardday + cardslesson;
	cardday = cardday + '</div>';
	cardday = cardday + '</div>';
	cardday = cardday + '</div>';
	return cardday;
}

function CardLesson(num, lesson, teacher, time, classroom, meet, book) {
	var cardslesson = '';

	cardslesson = cardslesson + '<div class="subject__conteiner">';
	cardslesson = cardslesson + '<div class="subject__border">';
	cardslesson = cardslesson + '<div class="description">';
	cardslesson = cardslesson + '<div class="description__row">';
	cardslesson = cardslesson + '<div class="description__number">' + num + '</div>';
	cardslesson = cardslesson + '<div class="description__text">' + lesson + '</div>';
	cardslesson = cardslesson + '<div class="description__communicator">';
	cardslesson = cardslesson + '<div class="description__list">';
	cardslesson = cardslesson + '<div class="description__button"></div>';
	cardslesson = cardslesson + '<div class="description__links">';
	cardslesson = cardslesson + '<div class="description__link">';
	cardslesson = cardslesson + '<a href="' + book + '" target="_blank">';
	cardslesson = cardslesson + '<img src="img/icon_1/book.png" alt=""></a>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '<div class="description__link">';
	cardslesson = cardslesson + '<a href="' + meet + '" target="_blank">';
	cardslesson = cardslesson + '<img src="img/icon_1/meet.png" alt=""></a>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '<div class="description__link">';
	cardslesson = cardslesson + '<a href="' + classroom + '" target="_blank">';
	cardslesson = cardslesson + '<img src="img/icon_1/classroom.png" alt=""></a>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '<div class="contact">';
	cardslesson = cardslesson + '<div class="contact__row">';
	cardslesson = cardslesson + '<div class="contact__time">' + time + '</div>';
	cardslesson = cardslesson + '<div class="contact__tiecher">' + teacher + '</div>';
	cardslesson = cardslesson + '<div class="contact__office">к.45</div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '<div class="task">';
	cardslesson = cardslesson + '<div class="task__title">';
	cardslesson = cardslesson + '<div class="task__add _active"></div>';
	cardslesson = cardslesson + '<div class="task__do"> ';
	cardslesson = cardslesson + '<div class="task__do_progres">0 / 0<span></span></div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '<div class="task__list _active">';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '</div>';

	return cardslesson;
}

function CardLesson_short(num, lesson, teacher, time, classroom, meet, book) {
	var cardslesson = '';

	cardslesson = cardslesson + '<div class="subject__conteiner">';
	cardslesson = cardslesson + '<div class="subject__border">';
	cardslesson = cardslesson + '<div class="description">';
	cardslesson = cardslesson + '<div class="description__row">';
	cardslesson = cardslesson + '<div class="description__number">' + num + '</div>';
	cardslesson = cardslesson + '<div class="description__text">' + lesson + '</div>';
	cardslesson = cardslesson + '<div class="description__communicator">';
	cardslesson = cardslesson + '<div class="description__list">';
	cardslesson = cardslesson + '<div class="description__button"></div>';
	cardslesson = cardslesson + '<div class="description__links">';
	cardslesson = cardslesson + '<div class="description__link">';
	cardslesson = cardslesson + '<a href="' + book + '" target="_blank">';
	cardslesson = cardslesson + '<img src="img/icon_1/book.png" alt=""></a>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '<div class="description__link">';
	cardslesson = cardslesson + '<a href="' + meet + '" target="_blank">';
	cardslesson = cardslesson + '<img src="img/icon_1/meet.png" alt=""></a>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '<div class="description__link">';
	cardslesson = cardslesson + '<a href="' + classroom + '" target="_blank">';
	cardslesson = cardslesson + '<img src="img/icon_1/classroom.png" alt=""></a>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '<div class="contact">';
	cardslesson = cardslesson + '<div class="contact__row">';
	cardslesson = cardslesson + '<div class="contact__time">' + time + '</div>';
	cardslesson = cardslesson + '<div class="contact__tiecher">' + teacher + '</div>';
	cardslesson = cardslesson + '<div class="contact__office">к.45</div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '</div>';
	cardslesson = cardslesson + '</div>';


	return cardslesson;
}

//Розклад уроків - Вивід
function Shedule() {
	let week__row = document.getElementsByClassName("week__row")[0];
	//	for (let idU in chPanda.chName)
	let shedule = '', lessons = '';
	// Формуємо карточки за весь тиждень
	for (let d = 0; d < arSсhedule.length; d++) {
		lessons = '';
		// Формуємо карточку уроків одного дня
		for (let l = 0; l < arSсhedule[d].length; l++) {
			let num = l + 1, idLesson = arSсhedule[d][l], Lesson = chLesson[idLesson];
			let lesson = Lesson.lesson, teacher = Lesson.teacher, classroom = Lesson.classroom, meet = Lesson.meet, book = Lesson.book;
			let time = arTime[l];
			lessons = lessons + CardLesson(num, lesson, teacher, time, classroom, meet, book);
		}
		// Формуємо карточку одного дня
		let nmWeek = arWeek[d];
		shedule = shedule + CardDay(nmWeek, lessons);
	}
	week__row.innerHTML = shedule;
}

//Розклад уроків - Вивід
Shedule();

//Отримуємо домашні завданя
//GetHomework();


Init();


