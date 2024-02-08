var chIndex = {};

//********************************************************************
//*  0 БЛОК СЛУЖБОВИХ ФУНКЦІЙ

//********************************************************************
//* 0.0.1 Стрічка з двозначним числом
//* IN: '1'; OUT: '01'
function addzero(fn_num) {
	return ('0' + fn_num).slice(-2);
}

//********************************************************************
//* 0.0.2 Дата(стрічка) -> хеш: рік, місяць, день, день тижня
//* IN:	рік-місяць-день -> '2024-02-05'
//* OUT: хеш: рік,місяць,день, день тижня (дата, число, стрічка) -> '05 Feb 2024', '2024', '2', '5', '1', '02', '05'
function getchdt(fn_strdate) {
	let dtdate = new Date();
	if (fn_strdate != '-' && fn_strdate != '' && fn_strdate != ' ' && fn_strdate != 'now') { dtdate = new Date(fn_strdate); }
	let intyear = dtdate.getFullYear(), intmonth = dtdate.getMonth() + 1, intdate = dtdate.getDate(), intweekdate = dtdate.getDay();
	let stryear = intyear, strmonth = addzero(intmonth), strdate = addzero(intdate);
	let getchdt = { dtdate: dtdate, intyear: intyear, intmonth: intmonth, intdate: intdate, intweekdate: intweekdate, stryear: stryear, strmonth: strmonth, strdate: strdate };
	return getchdt;
}

//********************************************************************
//* 0.0.3 Дата(дата) -> днів у місяці
//* IN:	дата -> '05 Feb 2024'
//* OUT: днів у місяці -> 31
function getdaysinmonth(fn_dtdate) {
	let intyear = fn_dtdate.getFullYear(), intmonth = fn_dtdate.getMonth() + 1;
	let daysinmonth = new Date(intyear, intmonth, 0).getDate();
	return daysinmonth;
}

//********************************************************************
//* 0.0.4 Дата(стрічка) -> день тижня
//* IN:	дата -> '2024-02-05'
//* OUT: день тижня -> 1
function getweekday(fn_strdate) {
	let intweekday = new Date(fn_strdate).getDay();;
	return intweekday;
}

//********************************************************************
//* 0.0.5 Дата(стрічка) +/- днів -> нова дата
//* IN:	дата -> '2024-02-05'; '-3'
//* OUT: дата -> '2024-02-02'
function getdateplusday(fn_strdate, intday) {
	let dtdate = new Date(fn_strdate); dtdate.setDate(dtdate.getDate() + intday);
	let intyear = dtdate.getFullYear(), intmonth = dtdate.getMonth() + 1, intdate = dtdate.getDate();
	let strdate = intyear + "-" + addzero(intmonth) + "-" + addzero(intdate);
	return strdate;
}

//********************************************************************
//---* 0.1 ДАТА - хеш дати: рік, місяць(номер;дата-поч/зав;по дням тижня), день, тиждень(хеш дат: понед.; понед./неділя поточного)  
// IN: дата:
// 	- "yyyy-mm-dd" - стрічка дати
// 	- "", "-", " " - порожня стрічка - береться теперешня дата
// OUT: хеш дати: рік, місяць, день, день тижня,  
//		- 				"2024", "02", "05", "2", 		
//		- дата				- "2024-02-05"
// 	- місяць початок  - "2024-02-01"
// 	- місяця кінець 	- "2024-02-29"
// 	- тиждень початок	- "2024-02-05" 
// 	- тиждень кінець	- "2024-02-11"
//		- хеш місяця		- число-день=тижня
//		- хеш тижнів		- номер тижня=дата початку тижня
function getchdate(fn_date) //"yyyy-mm-dd" або ""/"-"/"now"
{
	let chdt = getchdt(fn_date); // 0.0.2 Дата(стрічка) -> хеш: рік, місяць, день, день тижня

	let daysinmonth = getdaysinmonth(chdt.dtdate); // 0.0.3 Дата(дата) -> днів у місяці

	let chdate = {}; chdate.chmonth = {}, chdate.chweek = [];

	// Рік, Місяць, День, День тижня, Днів у місяці, Дата місяця-початкова/кінцева/поточна
	chdate.year = chdt.intyear; chdate.month = chdt.intmonth; chdate.date = chdt.intdate;
	chdate.weekday = chdt.intweekdate; chdate.days_in_month = daysinmonth;
	chdate.date_now = chdt.stryear + "-" + chdt.strmonth + "-" + chdt.strdate;
	chdate.date_month_begin = chdt.stryear + "-" + chdt.strmonth + "-01";
	chdate.date_month_end = chdt.stryear + "-" + chdt.strmonth + "-" + daysinmonth;

	//Тиждень поточної Дати - дата початку / кінця тижня
	let delta = 1 - chdate.weekday; if (chdate.weekday == 0) delta = -6;
	chdate.date_week_begin = getdateplusday(chdate.date_now, delta); //0.0.5 Дата(стрічка) +/- днів
	chdate.date_week_end = getdateplusday(chdate.date_week_begin, 6);//0.0.5 Дата(стрічка) +/- днів

	// Розклад занять = 1 або 2 півріччя -> !!!-автоматизувати
	chdate.date_shedule = chdt.stryear + "-01-01";
	if (chdt.intmonth >= 9) chdate.date_shedule = chdt.stryear + "-09-01";

	// Хеш Місяць / Тиждень
	let iw = 0, intweekday, keydate;
	for (let i = 1; i <= daysinmonth; i++) {
		keydate = chdt.stryear + "-" + chdt.strmonth + "-" + addzero(i);
		intweekday = getweekday(keydate); // 0.0.4 Дата(стрічка) -> день тижня

		// Місяць -> дата = день тижня 
		chdate.chmonth[keydate] = intweekday;

		//Тиждень -> дата початку тижня
		if (i == 1) {
			delta = 1 - intweekday;
			if (intweekday == 0) delta = -6;
			chdate.chweek[iw] = getdateplusday(keydate, delta);//0.0.5 Дата(стрічка) +/- днів
			iw++;
		}
		else {
			if (intweekday == 1) {
				chdate.chweek[iw] = keydate;
				iw++;
			}
		}
	}
	//Тиждень -> дата початку тижня
	if (intweekday != 1) { chdate.chweek[iw] = getdateplusday(chdate.chweek[iw - 1], 7); }

	return chdate;
}


//********************************************************************
//* 1 БЛОК ОСНОВНИХ ФУНКЦІЙ

//---* 1.0 СТОРІНКА - завантаження початкових даних
function setchIndex() {

	// ДАТА - поточний місяць
	chIndex.chdate = {};
	let weekdayname = SJAXtext('php/indexjson.php?Action=week_day_name&language=uk');

	//---* 0.1 ДАТА - хеш дати: рік, місяць(номер;дата-поч/зав;по дням тижня), день, тиждень(хеш дат: понед.; понед./неділя поточного)  
	let chdate = getchdate('now');

	chIndex.chdate = chdate;
	chIndex.chdate.chweekdayname = JSON.parse(weekdayname);
}


//* 1.1 СТОРІНКА -> РОЗКЛАД / ЗАВДАННЯ -> завантаження
function init() {


	// -1.1 Пернесення дат завдань з дня отримання на день здачі завдання
	// !!! ВИДАЛАИТИ ПІСЛЯ РОБОТИ БЛОКУ ВИВОДУ / РЕДАГУВАННЯ / ВИДАЛЕННЯ ЗАВДАНЬ
	task_transfer_dates();

	//---* 1.0 СТОРІНКА - завантаження початкових даних
	setchIndex();

	// m.2.1 РОЗКЛАД НА ТИЖДЕНЬ - елемент
	week__row(); // chIndex - дані функції

	//********************************************************************
	// m.2.2 ЗАВДАННЯ СПРИНТА- елемент
	scrum__row();

	// m.11.0 МЕНЮ_ПРЕДМЕТ-ОПИС_ЗАВДАННЯ - присвоєння подій обєктам інтерфейсу
	init_inteface();
}



//* 1.1 СТОРІНКА -> РОЗКЛАД / ЗАВДАННЯ -> завантаження
init();




//********************************************************************
// -1 БЛОК ОДНОРАЗОВИХ ФУНКЦІЙ

// -1.1 Пернесення дат завдань з дня отримання на день здачі завдання
// !!! ВИДАЛАИТИ ПІСЛЯ РОБОТИ БЛОКУ ВИВОДУ / РЕДАГУВАННЯ / ВИДАЛЕННЯ ЗАВДАНЬ
function task_transfer_dates() {
	let task_json = SJAXtext('php/indexjson.php?Action=task_transfer_dates');
}
