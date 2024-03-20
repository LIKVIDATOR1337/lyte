console.log("[RESURRECTION LYTE]: Override.js Loaded!");

let nav = document.getElementById('navigation');
nav.style.setProperty('background-color', 'unset', 'important')

var none_tuesday = [];
var e_tuesday = [];


function lyte_getTime() {
	console.log("[RESURRECTION LYTE]: Getting time from api");
	var a = {};
	a.param = "get_lessonTime";
    Modul_TT.XHR.query(a, Modul_TT.serverScript);
    Modul_TT.XHR.request.onreadystatechange = function() {
        4 == this.readyState && 200 == this.status && (answer = this.responseText,
            anw = answer,
            anw = anw.replaceAll('<td class="tabPS" style="text-align:center;">-</td>', '').split('|'),
            anw.forEach(element => {
            	let tuesday = null;
            	if (element.includes("курат.год") == true) {
            	    tuesday = true;
            	}
            	element = element.match(/(?<=>)[^<]+/gm);
            	for (let i = 0; i < element.length; i += 3) {
                	if (tuesday == true) {
                	    e_tuesday.push(element[i]+ " - " + element[i+1] + " - " + element[i+2]);
                	} else {
                	    none_tuesday.push(element[i]+ " - " + element[i+1] + " - " + element[i+2]);
                	}
            	}
            })
    )}
}

