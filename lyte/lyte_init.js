console.log("Lyte init...");

function loadScript(url) {
   fetch(url)
     .then((response) => response.text())
     .then((text) => eval(text))
} 

function reloadCSS_lyte() {
	document.querySelectorAll("link[rel=stylesheet]").forEach(link => {
	    if (link.href.includes("lyte.css")) {
	        link.href = link.href.replace(/\?.*|$/, "?" + Date.now());
	    }
		if (link.href.includes("lyte_fix.css")) {
	        link.href = link.href.replace(/\?.*|$/, "?" + Date.now());
	    }
	});
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
    	console.log("first time.");
    	document.head.insertAdjacentHTML('beforeend', `<link href="https://raw.githubusercontent.com/LIKVIDATOR1337/lyte/main/lyte/lyte_logon.css" rel="stylesheet" type="text/css">`)
		document.head.insertAdjacentHTML('beforeend', `<style>@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital@0;1&display=swap'); body {font-family:"Open Sans",sans-serif !important;font-optical-sizing: auto;}</style> `)
    }
} else {
    loadScript("https://raw.githubusercontent.com/LIKVIDATOR1337/lyte/main/lyte/lyte_start.js");
    reloadCSS_lyte();
}


// const observer = new MutationObserver(() => {
//     const targetElement = document.getElementById('win_0.form_name');
//     if (targetElement.innerHTML == "АВТОРИЗАЦІЯ КОРИСТУВАЧА") {
//     	console.log("first time.");
//         observer.disconnect();
//     }
// });
// observer.observe(document.body, { childList: true, subtree: true });
