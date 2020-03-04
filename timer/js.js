function timerStart(){
	let msId = setInterval(() => timer('ms', 9), 100);
	let secId = setInterval(() => timer('seconds', 59), 1000);
	let minId = setInterval(() => timer('minutes', 59), 60000);
	let hrsId = setInterval(() => timer('hours', 59), 3600000);
	function timer(myId, maxVal){
		let msNum = document.getElementById(myId).textContent;
		if(msNum == maxVal){
			msNum = 0;
			document.getElementById(myId).textContent = msNum;
		}
		else{
			msNum = msNum / 1 + 1;
			document.getElementById(myId).textContent = msNum;
		}
	}
	let stop = getElementById('stop');
	stop.onclick = timerStop();
	function timerStop(){
		//clearInterval(msId);
		console.log('заебумба');
	}
}