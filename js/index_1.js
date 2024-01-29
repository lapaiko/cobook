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

// Завдання - Кнопка відмітки
function task__caption_check() {
	const task__caption_check = document.getElementsByClassName("task__caption_check");
	if (task__caption_check) {
		for (let i = 0; i < task__caption_check.length; i++) {
			task__caption_check[i].addEventListener("click", function (e) {
				this.classList.toggle('_active');
				let task__caption_text = this.parentNode.getElementsByClassName("task__caption_text")[0];
				task__caption_text.classList.toggle('_active');
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
				task__list.removeChild(task__item);
			});
		}
	}
}

// Завдання - Прогрес виконання завдань
function task__do_progres_start() {
	const task__do_progres = document.getElementsByClassName("task__do_progres");
	if (task__do_progres) {

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

	// Завдання - Кнопка додати
	task__add();

}

Init();