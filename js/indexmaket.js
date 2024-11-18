// Визначаємо різницю між шириною всього вікна (вьюпорта) та шириною об'єкта внутрі нього
// Визначаємо ширину СКРОЛА
const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + "px";
const header = document.querySelector('.header');

// m.1.0 МЕНЮ - кнопка БУРГЕР
function header__burger() {
	const header__burger = document.querySelector('.header__burger');
	const header__menu = document.querySelector('.header__menu');
	if (header__burger) {
		header__burger.addEventListener("click", function (e) {
			const body = document.body; body.classList.toggle('_lock');
			header__burger.classList.toggle('_active');
			header__menu.classList.toggle('_active');

			// Фіксуємо ширину боді, шапки, обгортки
			let lockPadding = "0px"; if (body.classList.length == 1) lockPadding = lockPaddingValue;
			body.style.paddingRight = lockPadding; header.style.paddingRight = lockPadding; header__menu.style.paddingRight = lockPadding;
		});
	}
}

//********************************************************************
// m.2.1 РОЗКЛАД НА ТИЖДЕНЬ - елемент
function week__row() {
	let date_str = JSON.stringify(chIndex.chdate);
	//let date_str =chIndex.chdate.date_week_begin+"|"+chIndex.chdate.date_shedule+"|"+chIndex.chdate.date_now;
	let week__row = document.getElementsByClassName("week__row")[0];
	let send = SJAXtext('php/indexmaket.php?Action=week__row&date_str=' + date_str + '&language=uk');
	week__row.innerHTML = send;
}

//********************************************************************
// m.2.2 ЗАВДАННЯ СПРИНТА- елемент
function scrum__row() {
	let date_str = JSON.stringify(chIndex.chdate);
	let scrum__row = document.getElementsByClassName("scrum__row")[0];
	let send = SJAXtext('php/indexmaket.php?Action=scrum__row&date_str=' + date_str + '&language=uk');
	scrum__row.innerHTML = send;
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
	let chid = getChID(task.id), task_done = 0;
	let task__do_progres = document.getElementById(chid['idtask'] + "__progres");

	let task_all = document.getElementById(chid['idtask'] + "__list").childNodes.length;
	for (let j = 0; j < task_all; j++) {
		let active = document.getElementById(chid['idtask'] + "_" + j + "__check").classList.length;
		if (active == 2) { task_done++; }
	}

	task__do_progres.childNodes[0].data = task_done + " / " + task_all;
	task__do_progres.childNodes[1].style.width = (task_done / task_all * 100) + "%";
	return task_done + "|" + task_all;
}

// m.5.0 ЗАВДАННЯ - прогрес виконання - старт
function task__do_progres_start() {
	const task = document.getElementsByClassName("task");
	for (let i = 0; i < task.length; i++) {
		// m.5.0 ЗАВДАННЯ - прогрес виконання - статус
		task__progres(task[i]);
	}
}


//***********************************************************************
// m.6.0.1 ЗАВДАННЯ - чекбокс
// m.6.0.0 ЗАВДАННЯ - чекбокс - запис у json
function task__caption_check_json(iditem, value, chstatus) {
	let task_json = SJAXtext('php/indexjson.php?Action=task__caption_check_json&iditem=' + iditem + '&value=' + value + '&chstatus=' + chstatus);
	return task_json;
}

// m.6.0.1 ЗАВДАННЯ - чекбокс - обробка події
function task__caption_check_event(event) {
	let chid = getChID(this.id);
	this.classList.toggle('_active');
	SetIDToggle(chid['iditem'] + "__caption", '_active');
	let active = this.classList.length, value = "ok"; if (active == 1) value = "no";

	SetIDToggle(chid['iditem_mirror'] + "__check", '_active');
	SetIDToggle(chid['iditem_mirror'] + "__caption", '_active');

	// 5.0 ЗАВДАННЯ - прогрес виконання - статус
	let chstatus = task__progres(document.getElementById(chid['idtask'] + "__add"));
	let task_add_mirror = document.getElementById(chid['idtask_mirror'] + "__add");
	if (task_add_mirror) { chstatus = task__progres(task_add_mirror); }

	// m.6.0.0 ЗАВДАННЯ - чекбокс - запис у json
	task__caption_check_json(chid['dtitem'], value, chstatus);
}

// m.6.0.2 ЗАВДАННЯ - чекбокс - кнопка
function task__caption_check() {
	const task__caption_check = document.getElementsByClassName("task__caption_check");
	if (task__caption_check) {
		for (let i = 0; i < task__caption_check.length; i++) {
			// m.6.0.1 ЗАВДАННЯ - чекбокс - обробка події
			task__caption_check[i].addEventListener("click", task__caption_check_event);
		}
	}
}

//***********************************************************************
// m.7.0 ЗАВДАННЯ - редагувати - кнопка
// m.7.0.0 ЗАВДАННЯ - редагувати - обробка події
function task__caption_edit_event(event) {
	let caption = this.parentNode.parentNode.getElementsByClassName("task__caption")[0];
	let input = this.parentNode.parentNode.getElementsByClassName("task__input")[0];
	caption.classList.toggle('_active');
	input.classList.toggle('_active');

	let caption_text = caption.getElementsByClassName("task__caption_text")[0];
	let input_text = input.getElementsByClassName("task__input_text")[0].children[0];
	input_text.value = caption_text.innerHTML;
}

// m.7.0.1 ЗАВДАННЯ - редагувати - кнопка
function task__caption_edit() {
	const task__caption_edit = document.getElementsByClassName("task__caption_edit");
	if (task__caption_edit) {
		for (let i = 0; i < task__caption_edit.length; i++) {
			// m.7.0.0 ЗАВДАННЯ - редагувати - обробка події
			task__caption_edit[i].addEventListener("click", task__caption_edit_event);
		}
	}
}

//***********************************************************************
// m.8.0 ЗАВДАННЯ - зберегти
// m.8.0.0 ЗАВДАННЯ - зберегти - дані у json
function task__input_save_json(index, value) {
	let task_json = SJAXtext('php/indexjson.php?Action=task__input_save_json&index=' + index + '&value=' + value);
	return task_json;
}

// m.8.0.1 ЗАВДАННЯ - зберегти - обробка події
function task__input_save_event(event) {
	//let idsave = this.id; //// !!!! РОЗРОБИТИ ФУНКЦІЮ ПО ID
	let caption = this.parentNode.parentNode.parentNode.getElementsByClassName("task__caption")[0];
	let input = this.parentNode.parentNode.parentNode.getElementsByClassName("task__input")[0];
	caption.classList.toggle('_active');
	input.classList.toggle('_active');

	let caption_text = caption.getElementsByClassName("task__caption_text")[0];
	let input_text = input.getElementsByClassName("task__input_text")[0].children[0];
	let value = input_text.value;
	caption_text.innerHTML = value;

	let id = input_text.id, arid = id.split("__"), index = arid[1];
	let presentation = "scrum"; if ([arid[0]] == "scrum") presentation = "week";
	SetIDDiv(presentation + "__" + index + "__caption", value);
	SetIDInput(presentation + "__" + index + "__text", value);

	// m.8.0.0 ЗАВДАННЯ - зберегти - дані у json
	task__input_save_json(index, value);
}

// m.8.0.2 ЗАВДАННЯ - зберегти - кнопка
function task__input_save() {
	const task__input_save = document.getElementsByClassName("task__input_save");
	if (task__input_save) {
		for (let i = 0; i < task__input_save.length; i++) {
			task__input_save[i].addEventListener("click", task__input_save_event);
		}
	}
}

// m.8.0.3 ЗАВДАННЯ - закрити - обробка події
function task__input_close_event(event) {
	let caption = this.parentNode.parentNode.parentNode.getElementsByClassName("task__caption")[0];
	let input = this.parentNode.parentNode.parentNode.getElementsByClassName("task__input")[0];
	caption.classList.toggle('_active');
	input.classList.toggle('_active');
}

// m.8.0.4 ЗАВДАННЯ - закрити - кнопка
function task__input_close() {
	const task__input_close = document.getElementsByClassName("task__input_close");
	if (task__input_close) {
		for (let i = 0; i < task__input_close.length; i++) {
			task__input_close[i].addEventListener("click", task__input_close_event);
		}
	}
}

//***********************************************************************
// m.9.0 ЗАВДАННЯ - видалити - кнопка 
// m.9.0.0 ЗАВДАННЯ - видалити - дані у json
function task__delete_save_json(dtitem, chstatus) {
	let task_json = SJAXtext('php/indexjson.php?Action=task__delete_save_json&dtitem=' + dtitem + '&chstatus=' + chstatus);
	return task_json;
}

// m.9.0.1 ЗАВДАННЯ - видалити - зміщення id
function task__delete_setid(chid) {
	//let Nitem = document.getElementById(chid['idtask'] + "__list").classList.length;
	let Nitem = document.getElementById(chid['idtask'] + "__list").childElementCount;
	let arrpresentation = ["scrum", "week"];
	let arritem = ["item", "check", "caption", "edit", "delete", "text", "close", "save"];
	if (chid['number'] < Nitem) {
		for (let i = chid['number']; i <= Nitem; i++) {
			for (let p = 0; p < arrpresentation.length; p++) {
				for (let m = 0; m < arritem.length; m++) {
					let iditemnew = arrpresentation[p] + "__" + chid['dttask'] + "_" + i + "__" + arritem[m];
					let iditemold = arrpresentation[p] + "__" + chid['dttask'] + "_" + (i + 1) + "__" + arritem[m];
					if (document.getElementById(iditemold)) { document.getElementById(iditemold).id = iditemnew; }
				}
			}
		}
	}
}

// m.9.0.2 ЗАВДАННЯ - видалити - обробка подій
function task__input_delete_event(event) {
	let chid = getChID(this.id);//scrum__fiz_2024-02-12_2__delete"
	let task__item = document.getElementById(chid['iditem'] + "__item");
	let task__list = document.getElementById(chid['idtask'] + "__list");
	task__list.removeChild(task__item);
	let task__item_mirror = document.getElementById(chid['iditem_mirror'] + "__item");
	let task__list_mirror = document.getElementById(chid['idtask_mirror'] + "__list");
	if (task__item_mirror) { task__list_mirror.removeChild(task__item_mirror); }

	// m.9.0.1 ЗАВДАННЯ - видалити - зміщення id
	task__delete_setid(chid);

	// 5.0 ЗАВДАННЯ - прогрес виконання - статус
	let chstatus = task__progres(document.getElementById(chid['idtask'] + "__add"));
	let task_add_mirror = document.getElementById(chid['idtask_mirror'] + "__add");
	if (task_add_mirror) { chstatus = task__progres(task_add_mirror); }

	// m.9.0.0 ЗАВДАННЯ - видалити - дані у json
	task__delete_save_json(chid['dtitem'], chstatus);
}

// m.9.0.3 ЗАВДАННЯ - видалити - кнопка 
function task__delete() {
	const task__input_delete = document.getElementsByClassName("task__input_delete");
	if (task__input_delete) {
		for (let i = 0; i < task__input_delete.length; i++) {

			// m.9.0.2 ЗАВДАННЯ - видалити - обробка подій
			task__input_delete[i].addEventListener("click", task__input_delete_event);
		}
	}
}

//***********************************************************************
// m.10.0 ЗАВДАННЯ - додати - кнопка
// m.10.0.0 ЗАВДАННЯ - додати - дані у json
function task__add_save_json(index, value, chstatus) {
	let task_json = SJAXtext('php/indexjson.php?Action=task__add_save_json&index=' + index + '&value=' + value + '&chstatus=' + chstatus);
	return task_json;
}

// m.10.0.1 ЗАВДАННЯ - додати - кнопка
function task__add() {
	const task__add = document.getElementsByClassName("task__add");
	if (task__add) {
		for (let i = 0; i < task__add.length; i++) {
			task__add[i].addEventListener("click", function (e) {
				let task__list = this.parentNode.parentNode.getElementsByClassName("task__list")[0];

				let list_length = task__list.childNodes.length, value = "-";
				let arid = this.id.split("__"), datetask = arid[1], dateitem = datetask + "_" + list_length;
				let presentation = "scrum"; if (arid[0] == "scrum") { presentation = "week"; }
				let task__list_mirror = document.getElementById(presentation + "__" + datetask + "__list");

				// ДОДАЄМО ЗАВДАННЯ
				let iditem_week = "week__" + dateitem + "__", iditem_scrum = "scrum__" + dateitem + "__";
				let idtask_week = "week__" + datetask + "__list", idtask_scrum = "scrum__" + datetask + "__list";
				let task_new_maket_scrum = SJAXtext('php/indexmaket.php?Action=task__add&iditem=' + iditem_scrum);
				let task_new_maket_week = SJAXtext('php/indexmaket.php?Action=task__add&iditem=' + iditem_week);
				AddIDDiv(idtask_scrum, task_new_maket_scrum);
				AddIDDiv(idtask_week, task_new_maket_week);

				// 5.0 ЗАВДАННЯ - прогрес виконання - статус
				let chstatus = task__progres(task__list.parentNode);
				if (task__list_mirror) chstatus = task__progres(task__list_mirror.parentNode);
				// m.10.0.0 ЗАВДАННЯ - додати - дані у json
				task__add_save_json(dateitem, value, chstatus);

				// ОНОВЛЮЄМО ПОДІЇ: чекбокс, редагувати, зберегти, закрити, видалити
				let $Nitem = parseInt(chstatus.split("|")[1]);
				for (let $iitem = 0; $iitem < $Nitem; $iitem++) {
					iditem_week = "week__" + datetask + "_" + $iitem + "__"; iditem_scrum = "scrum__" + datetask + "_" + $iitem + "__";
					// m.6.0.1 ЗАВДАННЯ - чекбокс - обробка події
					SetIDEventList(iditem_scrum + "check", "click", task__caption_check_event);
					SetIDEventList(iditem_week + "check", "click", task__caption_check_event);

					// m.7.0.0 ЗАВДАННЯ - редагувати - обробка події
					SetIDEventList(iditem_scrum + "edit", "click", task__caption_edit_event);
					SetIDEventList(iditem_week + "edit", "click", task__caption_edit_event);

					// m.8.0.1 ЗАВДАННЯ - зберегти - обробка події
					SetIDEventList(iditem_scrum + "save", "click", task__input_save_event);
					SetIDEventList(iditem_week + "save", "click", task__input_save_event);

					// m.8.0.3 ЗАВДАННЯ - закрити - обробка події
					SetIDEventList(iditem_scrum + "close", "click", task__input_close_event);
					SetIDEventList(iditem_week + "close", "click", task__input_close_event);

					// m.9.0.2 ЗАВДАННЯ - видалити - обробка подій
					SetIDEventList(iditem_scrum + "delete", "click", task__input_delete_event);
					SetIDEventList(iditem_week + "delete", "click", task__input_delete_event);
				}
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

	// m.6.0.2 ЗАВДАННЯ - чекбокс - кнопка
	task__caption_check();
	// m.7.0.1 ЗАВДАННЯ - редагувати - кнопка
	task__caption_edit();
	// m.8.0.2 ЗАВДАННЯ - зберегти - кнопка
	task__input_save();
	// m.8.0.4 ЗАВДАННЯ - закрити - кнопка
	task__input_close();
	// m.9.0 ЗАВДАННЯ - видалити - кнопка 
	task__delete();

	// m.5.0 ЗАВДАННЯ - прогрес виконання - старт
	task__do_progres_start();

	// m.10.0.1 ЗАВДАННЯ - додати - кнопка
	task__add();
}