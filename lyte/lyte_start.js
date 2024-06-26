var __version__ = '0.1';
var cur_ver = document.body.childNodes[8].src.substr(44);

var logo = document.querySelector('img[src="img/Caption_503.png"][style="width:730px; height:280px; position: absolute; bottom: 60px; right: 40px;"]');
logo.remove();
logo = undefined;

scripts = [
	'https://raw.githubusercontent.com/LIKVIDATOR1337/lyte/main/lyte/lyte_test.js',
	'https://raw.githubusercontent.com/LIKVIDATOR1337/lyte/main/lyte/lyte_welcome.js']
loadAndInjectScripts(scripts)

user_block = document.getElementById('infa_user'); 
user_block.insertAdjacentHTML('beforeend', '<i class="nf nf-cod-settings_gear" onclick="modal.showModal()" style="position:relative; top:125px; left:285px; font-size: 32px;color: #eee;">'); 

var index = `
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
	        Get Updates: <a href="https://github.com/LIKVIDATOR1337/lyte" target="_blank">GitHub</a>
	      </div>
	</footer>
</div>
`;


var settings_modal = `
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

const modal = document.getElementById('lyte_settings');
