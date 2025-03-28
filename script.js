console.log("Welcome to rock, paper, scissors game!")

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice;

    if(randomIndex === 0){
        computerChoice = "stone";
    } 
    else if(randomIndex === 1) {
        computerChoice = "paper";
    } 
    else { 
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Stone, Paper or Scissor?");
    return humanChoice;
}


function playRound(humanChoice,computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "stone"){
        if (computerChoice === "stone"){
            console.log("It's a tie!");
        }
        else if (computerChoice === "paper"){
            console.log("You lose :(  paper beats stone!");
            computerScore++ ;
        }    
        else{
            console.log("You win! stone beats scissor!");
            humanScore++ ;
        }
    }

    else if (humanChoice === "paper"){
        if (computerChoice === "stone"){
                console.log("You win! paper beats stone!");
                humanScore++ ;
        }
        else if (computerChoice === "paper"){
                console.log("It's a tie");
        }    
        else{
                console.log("You lose :(  scissors beats paper!");
                computerScore++ ;
        }
    }

    else if (humanChoice === "scissors"){
        if (computerChoice === "stone"){
            console.log("You lose :(  stone beats scissors!");
            computerScore++ ;
        }
        else if (computerChoice === "paper"){
            console.log("You win! scissors beats paper");
            humanScore++ ;
        }    
        else{
            console.log("It's a tie");
        }
    }    

}


let humanScore = 0;
let computerScore = 0;

for(let i=0; i<=4; i++){

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`\nHuman Score = ${humanScore} \nComputer Score = ${computerScore}\n`)
}

if (humanScore>computerScore){
    console.log("YOU WON THE BATTLE");
}    
else if (humanScore<computerScore){
    console.log("SORRY, YOU LOST THE BATTLE");
}
else{
    console.log("BATTLE TIEEDDDD");
}

