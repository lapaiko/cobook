const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');

if (headerBurger) {
	headerBurger.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		headerBurger.classList.toggle('_active');
		headerMenu.classList.toggle('_active');
	});
}

const description__button = document.getElementsByClassName("description__button");
if (description__button) {
	for (let i = 0; i < description__button.length; i++) {
		description__button[i].addEventListener("click", function (e) {
			this.classList.toggle('_active');
			let c = this.parentNode.childNodes[7].classList.toggle('_active');
		});
	}
}


const task__title = document.getElementsByClassName("task__title");
if (task__title) {
	for (let i = 0; i < task__title.length; i++) {
		task__title[i].addEventListener("click", function (e) {
			this.classList.toggle('_active');
			this.parentNode.childNodes[7].classList.toggle('_active');
			let c = this.parentNode.parentNode.childNodes[4].classList.toggle('_active');
		});
	}
}


const task__check = document.getElementsByClassName("task__check");
if (task__check) {
	for (let i = 0; i < task__check.length; i++) {
		task__check[i].addEventListener("click", function (e) {
			this.classList.toggle('_active');
			this.parentNode.childNodes[8].classList.toggle('_active');
		});
	}
}
