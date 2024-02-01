
// -4 ТИЖДЕНЬ - коробка
function week__row() {
	var send = SJAXtext('php/indexmaket.php?Action=week__row&date_shedule=2024-01');
	let week__row = document.getElementsByClassName("week__row")[0];

	week__row.innerHTML = send;
}

//*****************************************************************************************************************************
//** -1 Контент: завантаження головного вікна                                                                                   **
function init() {
	var snd = SJAXtext('php/indexmaket.php?Action=init');

	Shedule();

	// Ініціація обєктів і запуск налаштування сторінки
	init_inteface();
}




init();