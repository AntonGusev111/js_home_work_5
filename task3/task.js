function checkClick(id){
    let checkHole = document.getElementById(id);
    hitCounter(checkHole.className.includes( 'hole_has-mole' ))
}

function hitCounter(hit){
    if (hit === true){
        deadMole ++;
        //write html
    } if (hit === false){
        luckyMole ++;
        //write html
    }
    if (deadMole == 10){
        alert ('you win!')
        deadMole = 0;
        luckyMole = 0;
    } if (luckyMole == 5){
        alert('You lose')
        deadMole = 0;
        luckyMole = 0;
    }
    counterDisplay()
}

function counterDisplay(){
    let dead = document.getElementById('dead');
    let lucky = document.getElementById('lost');
    dead.innerHTML = deadMole;
    lucky.innerHTML = luckyMole;
}

function holesLisener() {
    document.onclick = function(e) {
            let clickHole = e.target.id;  
            checkClick(clickHole)
          };
}

let deadMole = 0;
let luckyMole = 0;

holesLisener()