console.log("Lyte init...");

function fix_chrome() {
	if (document.body.style.zoom) {
		document.body.style.zoom = "1.0";
	}
}

setInterval(fix_chrome, 1000);

var none_tuesday = [];
var e_tuesday = [];

function lyte_getTime() {
    console.log("[LYTE]: Getting time from API");
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

function loadAndInjectScripts(scriptUrls) {
    scriptUrls.forEach(url => {
        fetch(url)
            .then(response => response.text())
            .then(scriptText => {
                const scriptElement = document.createElement('script');
                scriptElement.textContent = scriptText;
                document.head.appendChild(scriptElement);
            })
            .catch(error => console.error(`Error loading ${url}: ${error}`));
    });
}

function loadAndInjectStyles(cssUrls) {
    cssUrls.forEach(url => {
        fetch(url)
            .then(response => response.text())
            .then(cssText => {
                const styleElement = document.createElement('style');
                styleElement.textContent = cssText;
                document.head.appendChild(styleElement);
            })
            .catch(error => console.error(`Error loading ${url}: ${error}`));
    });
}

function reloadCSS_lyte() {
    var styleElements = document.getElementsByTagName('style');
    for (var i = 0; i < styleElements.length; i++) {
        var styleElement = styleElements[i];
        if (styleElement.innerHTML.includes('/*LYTE CSS*/')) {
            styleElement.parentNode.removeChild(styleElement);
        }
    }
    if (localStorage.getItem('lyte_use_default_font') == 'false') {
        var css = ['https://raw.githubusercontent.com/LIKVIDATOR1337/lyte/main/lyte/lyte.css',
                   'https://raw.githubusercontent.com/LIKVIDATOR1337/lyte/main/lyte/lyte_fix.css'];
    }
    else { var css = ['https://raw.githubusercontent.com/LIKVIDATOR1337/lyte/main/lyte/lyte.css',
                      'https://raw.githubusercontent.com/LIKVIDATOR1337/lyte/main/lyte/lyte_def_font.css'] }
    loadAndInjectStyles(css);
}

var slider = `
<div class="slider" style="z-index:-3;top: 0;left: 0;">
    <div class="slide"></div>
    <div class="slide"></div>
    <div class="slide"></div>
    <div class="slide"></div>
    <div class="slide"></div>
    <div class="slide"></div>
    <div class="slide"></div>
    <div class="slide"></div>
    <div class="slide"></div>
    <div class="slide"></div>
    <div class="slide"></div>
    <div class="slide"></div>
</div>
`

document.body.insertAdjacentHTML('beforeend', slider);

var nana = document.getElementById('win_0.form_name');

if (document.getElementById('win_0')) {
    if (document.getElementById('win_0.form_name').innerText == "АВТОРИЗАЦІЯ КОРИСТУВАЧА")
    {
    	loadAndInjectStyles(['https://raw.githubusercontent.com/LIKVIDATOR1337/lyte/main/lyte/lyte_logon.css'])
		document.head.insertAdjacentHTML('beforeend', `<style>@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital@0;1&display=swap'); body {font-family:"Open Sans",sans-serif !important;font-optical-sizing: auto;}</style> `)
    }
} else {
    loadAndInjectScripts(['https://raw.githubusercontent.com/LIKVIDATOR1337/lyte/main/lyte/lyte_start.js']);
}

