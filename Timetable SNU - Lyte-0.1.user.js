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

var scriptUrl = ['https://raw.githubusercontent.com/LIKVIDATOR1337/lyte/main/lyte/lyte_init.js']

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

const cssUrls = ['https://raw.githubusercontent.com/LIKVIDATOR1337/lyte/main/lyte/lyte_slide.css', 'https://raw.githubusercontent.com/LIKVIDATOR1337/lyte/main/lyte/lyte.css'];
loadAndInjectStyles(cssUrls);

(function() {
    'use strict';
    loadAndInjectScripts(scriptUrl);
})();