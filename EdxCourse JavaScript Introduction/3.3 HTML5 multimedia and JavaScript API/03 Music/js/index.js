window.onload = init;

var sound;

function init(){
	var button = document.querySelector('#button1');

    sound = new Howl({
            urls: ['https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/sounds/plop.mp3'],
            onload: function () {
                console.log("Loaded asset ");
          		button.disabled = false;
            }
        }); 
}

function play(){
	var player = document.querySelector("#audioPlayer");
	player.play();
}


function pause(){
	var player = document.querySelector("#audioPlayer");
	player.pause();
}

function playSound(){
	sound.play()
}