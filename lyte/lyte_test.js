console.log("[LYTE]: lyte_test loaded.");

function getLocalStorageSize(){let total=0;for(let key in localStorage){let value=localStorage.getItem(key);if(value!=null){total+=value.length;}}return total/1024;}

document.getElementById('lyte_use_default_font').addEventListener('click', function() {
	let checkbox = document.getElementById('lyte_use_default_font');
	let isChecked = checkbox.checked;
	if (isChecked == true) { localStorage.setItem('lyte_use_default_font', 'true'); }
	else { localStorage.setItem('lyte_use_default_font', 'false'); }	
});

if(localStorage.getItem('lyte_pfp') !== null) {
    // Profie pic found in localStorage
    let imgElement = document.querySelector('img.menu_button[src="img/i/i10.png"][style="width:80px; height:70px; padding-left:13px"]');
    imgElement.src = localStorage.getItem('lyte_pfp')
    imgElement.style.height = "80px";
}
if (localStorage.getItem('lyte_use_default_font') !== null) { //if present
	let checkbox = document.getElementById('lyte_use_default_font');
	let isChecked = checkbox.checked;
	if (localStorage.getItem('lyte_use_default_font') == 'false') {
		checkbox.checked = false;
        loadAndInjectResources(['https://raw.githubusercontent.com/LIKVIDATOR1337/lyte/main/lyte/lyte_fix.css']);
		document.head.insertAdjacentHTML('beforeend', `<style>@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital@0;1&display=swap');body{font-family:"Open Sans",sans-serif !important;font-optical-sizing: auto;}</style> `)
	}
	else { checkbox.checked = true; 
        loadAndInjectResources(['https://raw.githubusercontent.com/LIKVIDATOR1337/lyte/main/lyte/lyte_def_font.css']);
    }

}
else {localStorage.setItem('lyte_use_default_font', 'false');}

//AUTO UNLOAD PEER.JS
document.getElementById('lyte_auto_unload_peerjs').addEventListener('click', function() {
    let checkbox = document.getElementById('lyte_auto_unload_peerjs');
    let isChecked = checkbox.checked;
    if (isChecked == true) { localStorage.setItem('lyte_auto_unload_peerjs', 'true'); }
    else { localStorage.setItem('lyte_auto_unload_peerjs', 'false'); }    
});
if (localStorage.getItem('lyte_auto_unload_peerjs') !== null) { //if present
    let checkbox = document.getElementById('lyte_auto_unload_peerjs');
    let isChecked = checkbox.checked;
    if (localStorage.getItem('lyte_auto_unload_peerjs') == 'true') {
        checkbox.checked = true;
        peerjs = "";
        Peer = "";
        MPeer = {};
        MPeer.setIdPeer = function(){}
        MPeer.create = function(){}
        MPeer.initialization = function(){}
    }
    else { checkbox.checked = false; }

}
else {localStorage.setItem('lyte_auto_unload_peerjs', 'false');}

let dataPic;

function lyte_DelPFP() { localStorage.removeItem('lyte_pfp'); }

document.getElementById('file-upload').addEventListener('change', function() {
    const file = this.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;

        img.onload = function() {
            const canvas = document.createElement('canvas');
            canvas.width = 80;
            canvas.height = 80;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, 80, 80);
            dataPic = canvas.toDataURL('image/jpeg');
            const fileSizeInBytes = dataPic.length;
            localStorage.setItem('lyte_pfp', dataPic);
            const fileSizeInKB = fileSizeInBytes / 1024;
            const fileSizeInMB = fileSizeInBytes / (1024 * 1024);
            let imgElement = document.querySelector('img.menu_button[src="img/i/i10.png"][style="width:80px; height:70px; padding-left:13px"]');
            imgElement.src = localStorage.getItem('lyte_pfp')
    		imgElement.style.height = "80px";
            // console.log(`Image size: ${fileSizeInKB} KB`);
            // console.log(`Image size: ${fileSizeInMB} MB`);
        };

    };

    reader.readAsDataURL(file);
});
