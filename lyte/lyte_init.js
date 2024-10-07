console.log("Lyte init...");


var localinject = false;
var injecturl = '';

injecturl = localinject ? 'http://127.0.0.1:8000' : 'https://raw.githubusercontent.com/LIKVIDATOR1337/lyte/main';

var none_tuesday = [];
var e_tuesday = [];

function lyte_getTime() {
    console.log("[LYTE]: Getting time from API");
    Modul_TT.XHR.query({ param: "get_lessonTime" }, Modul_TT.serverScript);

    Modul_TT.XHR.request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            const anw = this.responseText
                .replaceAll('<td class="tabPS" style="text-align:center;">-</td>', '')
                .split('|');

            anw.forEach(element => {
                const isTuesday = element.includes("курат.год");
                const times = element.match(/(?<=>)[^<]+/gm) || [];
                
                for (let i = 0; i < times.length; i += 3) {
                    const lesson = `${times[i]} - ${times[i + 1]} - ${times[i + 2]}`;
                    isTuesday ? e_tuesday.push(lesson) : none_tuesday.push(lesson);
                }
            });
        }
    };
}

function loadAndInjectResources(urls) {
    urls.forEach(url => {
        fetch(url)
            .then(response => response.text())
            .then(content => {
                if (url.endsWith('.css')) {
                    const styleElement = document.createElement('style');
                    styleElement.textContent = content;
                    document.head.appendChild(styleElement);
                } else if (url.endsWith('.js')) {
                    const scriptElement = document.createElement('script');
                    scriptElement.textContent = content;
                    document.head.appendChild(scriptElement);
                } else {
                    console.error(`Unsupported file type for ${url}`);
                }
            })
            .catch(error => console.error(`Error loading ${url}: ${error}`));
    });
}

function reloadCSS_lyte() {
    let styleElements = document.getElementsByTagName('style');
    let css;
    for (let i = 0; i < styleElements.length; i++) {
        let styleElement = styleElements[i];
        if (styleElement.innerHTML.includes('/*LYTE CSS*/')) {
            styleElement.parentNode.removeChild(styleElement);
        }
    }
    if (localStorage.getItem('lyte_use_default_font') == 'false') {
        css = [`${injecturl}/lyte/lyte.css`,
                   `${injecturl}/lyte/lyte_fix.css`];
    }
    else { css = [`${injecturl}/lyte/lyte.css`,
                      `${injecturl}/lyte/lyte_def_font.css`] }
    loadAndInjectResources(css);
}

let slider = `
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

if (document.getElementById('win_0')) {
    if (document.getElementById('win_0.form_name').innerText == "АВТОРИЗАЦІЯ КОРИСТУВАЧА")
    {
    	loadAndInjectResources([`${injecturl}/lyte/lyte_logon.css`])
        let rp = document.querySelector('div[title*="натисніть для отримання на свою корпоративну пошту листа з параметрами доступу"]');
        let ls = document.querySelector('input[title*="введіть логін, він збігається з e-mail корпоративної пошти"]');
        rp.innerHTML = "<i class='nf nf-fa-lock_open'></i> Нагадати пароль";
        ls.placeholder = "sdd-21d-135@snu.edu.ua";
		document.head.insertAdjacentHTML('beforeend', `<style>@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital@0;1&display=swap'); @import url('https://www.nerdfonts.com/assets/css/webfont.css'); body {font-family:"Open Sans",sans-serif !important;font-optical-sizing: auto;}</style> `)
    }
} else {
    loadAndInjectResources([`${injecturl}/lyte/lyte_start.js`]);
}

