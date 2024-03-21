var chMaine = {};

//*****************************************************************************************************************************
//** Інструмент: синхронни/асинхронний запит                                                                                 **

//** Ініціалізація обєкту для синхронного/асинхронного запиту
function initRequest() {
	if (window.XMLHttpRequest) { if (navigator.userAgent.indexOf('MSIE') != -1) { isIE = true; } return new XMLHttpRequest(); }
	else if (window.ActiveXObject) { isIE = true; return new ActiveXObject("Microsoft.XMLHTTP"); }
}
//** Синхронний запит - стрічка
function SJAXtext(query) {
	var xmlhttp = initRequest();
	xmlhttp.open('GET', query, false); xmlhttp.send(); return xmlhttp.responseText;
}
//** Синхронний запит - стрічка
function SJAXtextPOST(url, param) {
	var xmlhttp = initRequest();

	xmlhttp.open('POST', url, false);
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xmlhttp.send(param);

	return xmlhttp.responseText;
}
//** Синхронний запит - XML
function SJAXxml(query) {
	var xmlhttp = initRequest();
	xmlhttp.open('GET', query, false); xmlhttp.send(); return xmlhttp.responseXML;

}
//** Асинхронний запит
function AJAX(query) {
	var xmlhttp = initRequest();
	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			return this.responseText;
		}
	};
	xmlhttp.open('GET', query, true); xmlhttp.send();
}

//*****************************************************************************************************************************
//** Інструмент: встановлення/отримання властивостей/значень тегів                                                           **
function SetIDDiv(id, content) { if (document.getElementById(id)) { document.getElementById(id).innerHTML = content; } }
function SetObjectDiv(object, content) { if (object) { object.innerHTML = content; } }

function AddIDDiv(id, content) { if (document.getElementById(id)) { document.getElementById(id).innerHTML = document.getElementById(id).innerHTML + content; } }
function AddObjectDiv(object, content) { if (object) { object.innerHTML = object.innerHTML + content; } }

function GetIDDiv(id) { var content = ""; if (document.getElementById(id)) { content = document.getElementById(id).innerHTML } return content; }
function GetObjectDiv(object) { var content = ""; if (object) { content = object.innerHTML } return content; }

function SetIDInput(id, value) { if (document.getElementById(id)) { document.getElementById(id).value = value; } }
function SetObjectInput(object, value) { if (object) { object.value = value; } }

function GetIDInput(id) { var value = ""; if (document.getElementById(id)) { value = document.getElementById(id).value } return value; }
function GetObjectInput(object) { var value = ""; if (object) { value = object.value } return value; }

function SetObjectToggle(object, classname) { if (object) { object.classList.toggle(classname); } }
function SetIDToggle(id, classname) { let object = document.getElementById(id); SetObjectToggle(object, classname); }

function SetIDEventListClick(id, handler) { if (document.getElementById(id)) { document.getElementById(id).addEventListener("click", handler); } }
function SetIDEventList(id, event, handler) { if (document.getElementById(id)) { document.getElementById(id).addEventListener(event, handler); } }

function getChID(id) {
	let ar = id.split("__"), aritem = ar[1].split("_");
	let presentation = ar[0], element = ar[2], mirror = "scrum";
	if (ar[0] == "scrum") { mirror = "week"; }
	let lesson = aritem[0], date = aritem[1], number = "-";
	if (aritem[2]) number = aritem[2];
	let chid = {};
	chid['mirror'] = mirror;
	chid['presentation'] = presentation;
	chid['lesson'] = lesson;
	chid['date'] = date;
	chid['number'] = parseInt(number);
	chid['element'] = element;
	chid['dttask'] = lesson + "_" + date;
	chid['dtitem'] = lesson + "_" + date + "_" + number;
	chid['idtask'] = presentation + "__" + lesson + "_" + date;
	chid['iditem'] = presentation + "__" + lesson + "_" + date + "_" + number;
	chid['idtask_mirror'] = mirror + "__" + lesson + "_" + date;
	chid['iditem_mirror'] = mirror + "__" + lesson + "_" + date + "_" + number;

	return chid;
}


//function SetIDid(idold, idnew) { if (document.getElementById(idold)) { document.getElementById(idold).id = idnew; } }
