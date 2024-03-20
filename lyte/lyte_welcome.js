console.log("LYTE: Welcome string loaded.");

let debug_time = "";
let debug_day = ""

function welcome_string() {
	t_day = null;
	if (e_tuesday.length === 0) {
  		lyte_getTime()
	}
	if (debug_time == "") { wk = System.digital.innerText.slice(0, 5); } 
	else { 	wk = debug_time; }

	if (debug_day == "") { day = document.getElementById('weekCurrent').innerText }
	else { day = debug_day }
	
	if (day == "вівторок") { t_day = true }
	if (t_day == true) { meetings = e_tuesday }
	else { meetings = none_tuesday }
	//console.log(wk)
	let wel = document.getElementById('welcomestring');
	for (let i = 0; i < meetings.length; i++) {
	    const [meetingNumber, start, end] = meetings[i].split(" - ");
	    
	    if (wk >= start && wk <= end) {
	        //console.log(`Meeting ${meetingNumber} is ongoing.`);
	        //console.log(meetingNumber)
	        if (meetingNumber == 'курат.год ') { wel.innerText = `Зараз йде кураторська година.` }
	        else { wel.innerText = `Зараз йде ${meetingNumber} пара.` }
	        break;
	    } else if (wk < start) {
	    	wel.innerText = `${meetingNumber} пара почнется о: ${start}`
	        //console.log(`Meeting ${meetingNumber} is about to start at ${start}`);
	        break;
	    }
	}
}

setInterval(welcome_string, 1000);