/* globals Modul_TT */
// ==UserScript==
// @name         Timetable SNU - Lyte
// @namespace    http://github.com/LIKVIDATOR1337/lyte/
// @version      0.1
// @description  try to take over the world!
// @author       LIKVIDATOR1337
// @match        https://timetable.lond.lg.ua/
// @icon         https://snu.edu.ua/wp-content/uploads/2022/03/cropped-snulogo-1-32x32.png
// @run-at document-idle
// ==/UserScript==

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

var localinject = false;
var injecturl = '';

injecturl = localinject ? 'http://127.0.0.1:8000' : 'https://raw.githubusercontent.com/LIKVIDATOR1337/lyte/main';

const resources = [`${injecturl}/lyte/lyte_init.js`,`${injecturl}/lyte/lyte_slide.css`, `${injecturl}/lyte/lyte.css`];

(function() {
    'use strict';
    loadAndInjectResources(resources);
})();