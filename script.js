let playerChoice = prompt("Enter Rock,Paper or Scissors", "ENTER TEXT HERE");
playerChoice = playerChoice.toUpperCase();
let computer = computerPlay();
let player = playerSelection();
console.log("COMPUTER:" + " " + computer);
console.log("PLAYER:" + " " + player);


function computerPlay(computer){
   let rock = 1
   let paper = 2
   let scissors = 3 
   let computerResults = Math.floor(Math.random(3)*3 + 1);    
    
    if (computerResults === 1) {        
        return "ROCK"; 
    }
    else if (computerResults === 2) {       
        return "PAPER";
    }
    else 
        return "SCISSORS";    
}

computerPlay()

function playerSelection(player) {  

    let playerResults = playerChoice

     if (playerResults === "ROCK") {        
       return "ROCK";
    }
     else if (playerResults === "PAPER"){        
        return "PAPER";
    }
     else if (playerResults === "SCISSORS"){
        return "SCISSORS";
    }     
     else  playerResults = prompt("ERROR TRY AGAIN", "ENTER TEXT HERE");    
        return playerResults = playerResults.toUpperCase();
    
}

function winner() {
     if (computer === player){
     console.log('TIE');
    }
     else if (computer === "ROCK" && player === "PAPER"){
         console.log('PLAYER WINS');
    }
     else if (computer === "PAPER" && player === "SCISSORS"){
          console.log('PLAYER WINS');
    } 
     else if (computer === "SCISSORS" && player === "ROCK"){
        console.log('PLAYER WINS');
    }
     else console.log('COMPUTER WINS');    
 
}

winner()





