

const dino = document.querySelector(".dino");
const background = document.querySelector(".background")
let inJumping = false;
let position = 0;


console.log(dino);

function handKeyUp(event){
    if( event.keyCode === 32){

        if(!inJumping){
            jump();
        }
    }
}

function jump(){

    
    inJumping = true;

    let upInterevalo = setInterval(() => {

        if(position>=150){
            clearInterval(upInterevalo);

            //descendo 
            let downInterval = setInterval(() => {
                
                if(position <=20){ 
                    clearInterval(downInterval);
                    inJumping = false;
                }
                position -= 20;
                dino.style.bottom = position + 'px';
            },20);
        }

        else{
         //subindo   
        position += 20; 

        dino.style.bottom =  position + 'px';
        }


    }, 20);
   
}

//cactos
function creatCactos(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let numberTime = Math.random()*6000;


    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInvterval = setInterval(() => {
       

        if(cactusPosition <-60){
            clearInterval(leftInvterval);
            console.log(cactusPosition);
            background.removeChild(cactus);
        }
        else if(cactusPosition > 0 && cactusPosition < 60 && position<60 ){
                //Game Over
            
                clearInterval(leftInvterval);
                document.body.innerHTML = '<h1 class= "game-over"> Fim de Jogo </h1>';
        }
         else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }

    }, 20);

    setTimeout(creatCactos, numberTime );
}



creatCactos();

document.addEventListener('keyup' , handKeyUp );