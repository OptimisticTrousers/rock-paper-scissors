let computerMove = ""

function computerPlay(){
    let result = parseInt(Math.random()*3)  
    console.log(result)

    if(result === 0){
        computerMove = "Rock"
    }
    else if(result === 1){
        computerMove = "Paper"
    }
    else if(result === 2){
        computerMove = "Scissors"
    }

}
    console.log(computerMove)


//let playerResult =  prompt("Please enter 'Rock, Paper, or Scissors' : ")

function firstRound(playerSelection, computerSelection){

    if(playerSelection == computerSelection){
        return "Tied! No one wins!"
    }
    if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"){
        return "You win! Rock beats scissors"
    
    }
    else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors"){
        return "You lose! Scissors beats rock"
    }
    if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors"){
        return "Scissors beats paper"
    }
    if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
        return "Paper beats rock!"
    }
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";


}

computerPlay();
