window.onload=init;

let vid;
let alreadyStopper = false;
let endofvideos = false; 

function init(){
	vid = document.querySelector('#myPlayer');
	vid.ontimeupdate = diplayCurentTime;
	vid.addEventListener('ended', doAfterVideo, false)

	//create a video from js
	var video = document.createElement('video');
	video.src = 'http://html5doctor.com/demos/video-canvas-magic/video.mp4';
	video.controls = true;
	document.body.appendChild(video);
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

function doAfterVideo(e){
	console.log("The video has finished, load next one")

	if (endofvideos !== true){
		//we coul use an array to load a big number of video one after the other
		vid.src = 'http://www.archive.org/download/AnimatedMechanicalArtPiecesAtMit/P1120973_512kb.mp4';
		vid.load();
		vid.play();
		// Whatever you want to do after the event (play another video,		
		endofvideos = true;
	}

}

//HTML5 Video Events and API --> https://www.w3.org/2010/05/video/mediaevents.html