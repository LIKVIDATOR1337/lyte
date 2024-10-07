var __version__ = '0.2';
var cur_ver = document.body.querySelector('script[src*="js/System.js?ver="]').src.substr(46);

//Fix zoom property
ListWin.zoom = 1.0;
System.adaptationZoom();

let logo = document.querySelector('img[src="img/Caption_503.png"][style="width:730px; height:280px; position: absolute; bottom: 60px; right: 40px;"]');
logo.remove();
logo = undefined;

let scripts = [
	`${injecturl}/lyte/lyte_test.js`,
	`${injecturl}/lyte/lyte_welcome.js`]
loadAndInjectResources(scripts)
scripts = undefined;

user_block = document.getElementById('infa_user'); 
user_block.insertAdjacentHTML('beforeend', '<i class="nf nf-cod-settings_gear" onclick="modal.showModal()" style="position:relative; top:125px; left:285px; font-size: 32px;color: #eee;">'); 

let index = `
<div class="wrapper" style="z-index: 0;">
	<div class="main" >
	  <div><h2 style="color: white;">Інформаційна система TimeTable</h2></div>
	  <div><h3 style="color: white;"><div class="c" id="welcomestring"></div></h3></div>
	</div>
	<footer class="footer" style="color:white;">
	      <div class="footer-column l">
	        Photos: <a href="http://www.photosed.net/">photosed.net</a>
	      </div>
	      <div class="footer-column c">
	        Resurrection Lyte - version ${__version__} : SNU TimeTable version ${cur_ver}
	      </div>
	      <div class="footer-column e">
	        Get Updates: <i class="nf nf-cod-github"></i> <a href="https://github.com/LIKVIDATOR1337/lyte" target="_blank"> GitHub</a>
	      </div>
	</footer>
</div>
`;


let settings_modal = `
<dialog class="lyte_settings_style" id="lyte_settings">
  <span class="settings_title">Настройки Lyte</span>
  <hr>
  	<div class="settings_prop">
  		<span class="l">Использовать Times New Roman</span>
  		<label class="switch"><input type="checkbox" id="lyte_use_default_font"><span class="sw_slider"></span></label>
	</div>
	<div class="settings_prop mlt">
  		<span class="l">Аватарка</span>
  		<label for="file-upload" class="custom-file-upload">Загрузить файл</label>
		<input id="file-upload" type="file">
		<label for="remove_pfp" class="del_pfp">Удалить</label>
		<button id="remove_pfp" class="hyde_btn" onclick="lyte_DelPFP()">
	</div>
	<div class="settings_prop">
  		<span class="l">Отключить видеозвонки</span>
  		<label class="switch"><input type="checkbox" id="lyte_auto_unload_peerjs"><span class="sw_slider"></span></label>
	</div>
  <hr>
  <button onclick="modal.close('lyte_settings')">Закрыть</button>
  <button onclick="reloadCSS_lyte()">Перезагрузить CSS</button>
</dialog>
`
document.body.insertAdjacentHTML('beforeend', index);
document.body.insertAdjacentHTML('beforeend', settings_modal);

index = undefined;
settings_modal = undefined;

const modal = document.getElementById('lyte_settings');

//Optimize UX

//document.querySelector('div[title*="натисніть для отримання на свою корпоративну пошту листа з параметрами доступу"]');
let sub_div = user_block.querySelector('div[style*="position:relative; top:-70px; width:97%; text-align:left;"]')
sub_div.children[2].remove();
Array.from(sub_div.querySelectorAll('span')).find(el => el.textContent.trim() === 'користувач:').remove();
sub_div.querySelector('div[style*="padding-left: 60px; text-align: left; width: auto;"]').remove();
sub_div.children[3].remove();
let group_title = Array.from(sub_div.querySelectorAll('span')).find(el => el.textContent.trim() === 'група:');
let groups = sub_div.querySelector('div[style*="padding-left: 60px; text-align: end; width:auto;"]');
groups.style.paddingLeft = '';  // Removes inline padding-left
groups.style.textAlign = '';    // Removes inline text-align
groups.querySelectorAll('br').forEach(br => br.remove())
if (groups.innerText.split("; ").length > 1) {
	group_title.innerText = "групи:"
}
