window.onload=init;

let vid;
let alreadyStopper = false;

function init(){
	vid = document.querySelector('#myPlayer');
	vid.ontimeupdate = diplayCurentTime;
}

function playVideo(){
	vid.play();
}

function pauseVideo(){
	vid.pause();
}

function restartVideo(){
	vid.currentTime = 0;
}

function diplayCurentTime(){
	console.log(vid.currentTime);
	if (alreadyStopper===false && vid.currentTime>5) {
		vid.pause();
		alreadyStopper=true;
	}
}
