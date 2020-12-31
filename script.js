const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
//console.log(dino);
let isJumping = false;
let position = 0;
let score = 0;
let windowWidth = larguraTela() - 100;








function larguraTela(){
	return window.innerWidth;
};

window.addEventListener('resize', ()=>{
	windowWidth = larguraTela() - 100;
});

const processaEvento = (event)=>{
	//console.log("pressionou uma tecla qualquer...");
		if(event.keyCode === 32){
			//console.log("pressionou a tecla espaço");
			if(!isJumping){
				jump();
			}
		}
}

//document.addEventListener( 'keyup', processaEvento);

document.addEventListener('keypress', processaEvento);

function jump(){
	isJumping = true;
	
	let upInterval = setInterval(()=>{
		if(position >= 250){
			clearInterval(upInterval);
			//descendo
			let downInterval = setInterval(()=>{
				if( position <= 20){
					clearInterval(downInterval);
					isJumping = false;
				}else{
					position -= 15;
					dino.style.bottom = position + 'px';
				}
			},20);
		}else{
			//subindo
			position += 20; 	
			dino.style.bottom = position + 'px';
		}
	},20);
}

function createCactus(){
	const cactus = document.createElement('div');
	let cactusPosition = windowWidth;
	let randomTime = Math.random() * 6000;
	
	cactus.classList.add('cactus');
	cactus.style.left = windowWidth + 'px';
	background.appendChild(cactus);
	
	let leftInterval = setInterval(()=>{
		if( cactusPosition < -60 ){
			clearInterval(leftInterval);
			background.removeChild(cactus);
			upDateScore();
		}else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
			//Game Over
			clearInterval(leftInterval);
			document.body.innerHTML = '' +
				'<div class="game-over">' +
					'<h1>Fim de jogo</h1>' +
					'<p>Seu score: ' + score + '</p>' +
					'<p><button onclick="location.reload()">reset</button></p>' +
				'</div>';
		}else{
			cactusPosition -= 5;
			cactus.style.left = cactusPosition + 'px';
		}
	},20);
	
	setTimeout(createCactus, randomTime);
}

function createScore(){
	document.querySelector('.score').innerHTML = '<div class="score">SCORE: ' + score + '</div>';
}

function upDateScore(){
	score++;
	createScore();
}







/*referencia: http://www.stucox.com/blog/you-cant-detect-a-touchscreen/
and
https://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript
*/
function is_touch_device() {
    if ("ontouchstart" in window || window.TouchEvent)
        return true;

    if (window.DocumentTouch && document instanceof DocumentTouch)
        return true;

    const prefixes = ["", "-webkit-", "-moz-", "-o-", "-ms-"];
    const queries = prefixes.map(prefix => `(${prefix}touch-enabled)`);

    return window.matchMedia(queries.join(",")).matches;
}


if( is_touch_device() === true ){
	window.addEventListener('touchstart', ()=>{
		if(!isJumping){
				jump();
			}
	} )
}





createCactus();
createScore();








