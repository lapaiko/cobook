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
	//xmlhttp.onreadystatechange = function() { if (this.readyState == 4 && this.status == 200) { 
	// }	};//xmlhttp.send(query); 
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
function SetDiv(id, content) { if (document.getElementById(id)) { document.getElementById(id).innerHTML = content; } }
function AddDiv(id, content) { if (document.getElementById(id)) { document.getElementById(id).innerHTML = document.getElementById(id).innerHTML + content; } }
function GetDiv(id) { var content = ""; if (document.getElementById(id)) { content = document.getElementById(id).innerHTML } return content; }

function SetInput(id, value) { if (document.getElementById(id)) { document.getElementById(id).value = value; } }
function GetInput(id) { var value = ""; if (document.getElementById(id)) { value = document.getElementById(id).value } return value; }

