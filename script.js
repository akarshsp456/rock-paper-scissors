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

