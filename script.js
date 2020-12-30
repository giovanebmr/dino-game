const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
//console.log(dino);
let isJumping = false;
let position = 0;
let score = 0;

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
	let cactusPosition = 1000;
	let randomTime = Math.random() * 6000;
	
	cactus.classList.add('cactus');
	cactus.style.left = 1000 + 'px';
	background.appendChild(cactus);
	
	let leftInterval = setInterval(()=>{
		if( cactusPosition < -60 ){
			clearInterval(leftInterval);
			background.removeChild(cactus);
			upDateScore();
			console.log(score);
		}else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
			//Game Over
			clearInterval(leftInterval);
			document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
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


createCactus();
createScore();








