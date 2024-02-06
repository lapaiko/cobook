// m.1.0 МЕНЮ - кнопка БУРГЕР
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

//********************************************************************
// m.2.0 РОЗКЛАД НА ТИЖДЕНЬ - елемент
function week__row(week_date) {
	let week__row = document.getElementsByClassName("week__row")[0];
	let send = SJAXtext('php/indexmaket.php?Action=week__row&week_date=' + week_date + '&language=uk');
	week__row.innerHTML = send;
}


// m.3.0 ПРЕДМЕТ-ОПИС-комунікатори - кнопка згорнути/розгорнути
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

// m.4.0 ЗАВДАННЯ - список завдань - показати/приховати
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

// m.5.0 ЗАВДАННЯ - прогрес виконання - статус
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

// m.5.0 ЗАВДАННЯ - прогрес виконання - старт
function task__do_progres_start() {
	const task = document.getElementsByClassName("task");
	for (let i = 0; i < task.length; i++) {
		// m.5.0 ЗАВДАННЯ - прогрес виконання - статус
		task__progres(task[i]);
	}
}

// m.6.0 ЗАВДАННЯ - чекбокс ВИКОНАНО
function task__caption_check() {
	const task__caption_check = document.getElementsByClassName("task__caption_check");
	if (task__caption_check) {
		for (let i = 0; i < task__caption_check.length; i++) {
			task__caption_check[i].addEventListener("click", function (e) {
				this.classList.toggle('_active');
				let task__caption_text = this.parentNode.getElementsByClassName("task__caption_text")[0];
				task__caption_text.classList.toggle('_active');

				let task = this.parentNode.parentNode.parentNode.parentNode;
				// 5.0 ЗАВДАННЯ - прогрес виконання - статус
				task__progres(task);
			});
		}
	}
}

// m.7.0 ЗАВДАННЯ - кнопка редагувати
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

// m.8.0 ЗАВДАННЯ - кнопка записати
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

// m.9.0 ЗАВДАННЯ - кнопка видалити
function task__delete() {
	const task__input_delete = document.getElementsByClassName("task__input_delete");
	if (task__input_delete) {
		for (let i = 0; i < task__input_delete.length; i++) {
			task__input_delete[i].addEventListener("click", function (e) {
				let task__item = this.parentNode.parentNode;
				let task__list = this.parentNode.parentNode.parentNode;
				let task = task__list.parentNode;

				task__list.removeChild(task__item);
				// m.5.0 ЗАВДАННЯ - прогрес виконання - статус
				task__progres(task);
			});
		}
	}
}

// m.10.0 ЗАВДАННЯ - кнопка ДОДАТИ
function task__add() {
	const task__add = document.getElementsByClassName("task__add");
	if (task__add) {
		for (let i = 0; i < task__add.length; i++) {
			task__add[i].addEventListener("click", function (e) {
				let task__list = this.parentNode.parentNode.getElementsByClassName("task__list")[0];
				let task_new = '<div class="task__item"><div class="task__caption"><div class="task__caption_check"></div><div class="task__caption_text">Параг. стор. впр.</div><div class="task__caption_edit"><span></span></div></div><div class="task__input"><div class="task__input_delete"><span></span></div><div class="task__input_text"><textarea></textarea></div><div class="task__input_save"><span></span></div></div></div>';
				task__list.innerHTML = task__list.innerHTML + task_new;
				// m.6.0 ЗАВДАННЯ - чекбокс ВИКОНАНО
				task__caption_check();
				// m.7.0 ЗАВДАННЯ - кнопка редагувати
				task__caption_edit();
				// m.8.0 ЗАВДАННЯ - кнопка записати
				task__input_save();
				// m.9.0 ЗАВДАННЯ - кнопка видалити
				task__delete();


				let task = task__list.parentNode;
				// m.5.0 ЗАВДАННЯ - прогрес виконання - статус
				task__progres(task);
			});
		}
	}
}


// m.1.0 МЕНЮ_ПРЕДМЕТ-ОПИС_ЗАВДАННЯ - присвоєння подій обєктам інтерфейсу
function init_inteface() {

	// m.1.0 МЕНЮ - кнопка БУРГЕР
	header__burger();
	// m.3.0 ПРЕДМЕТ-ОПИС-комунікатори - кнопка згорнути/розгорнути
	description__button();
	// m.4.0 ЗАВДАННЯ - список завдань - показати/приховати
	task__do();

	// m.6.0 ЗАВДАННЯ - чекбокс ВИКОНАНО
	task__caption_check();
	// m.7.0 ЗАВДАННЯ - кнопка редагувати
	task__caption_edit();
	// m.8.0 ЗАВДАННЯ - кнопка записати
	task__input_save();
	// m.9.0 ЗАВДАННЯ - кнопка видалити
	task__delete();

	// m.5.0 ЗАВДАННЯ - прогрес виконання - старт
	task__do_progres_start();

	// m.0.0 ЗАВДАННЯ - кнопка ДОДАТИ
	task__add();
}