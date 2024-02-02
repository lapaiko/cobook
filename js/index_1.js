
// -4 ТИЖДЕНЬ - коробка
function week__row() {
	let dt = '2024-01-01'
	let send = SJAXtext('php/indexmaket.php?Action=week__row&week_date=2024-01-01&language=uk');
	//let week__row = document.getElementsByClassName("week__row")[0];

	week__row.innerHTML = send;
}

//*****************************************************************************************************************************
//** -1 Контент: завантаження головного вікна                                                                                   **
function init() {

	week__row();

	Shedule();

	// Ініціація обєктів і запуск налаштування сторінки
	init_inteface();
}




init();