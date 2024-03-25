console.log("Lyte init...");

function fix_chrome() {
	if (document.body.style.zoom) {
		document.body.style.zoom = "1.0";
	}
}

setInterval(fix_chrome, 1000);

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