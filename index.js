/*
import java.util.Scanner;

// 
// Decompiled by Procyon v0.5.36
// 

public class RockPaperScissors
{
    static final String ROCK = "rock";
    static final String PAPER = "paper";
    static final String SCISSORS = "scissors";
    
    public static void playRound(final String usersMove, String computersMove) {
        System.out.println("Computer's move is: " + computersMove);
        final double result = Math.random();
        if (result < 0.5) {
            if (usersMove.equals(computersMove)) {
                System.out.println("It's a tie!");
            }
            else if (usersMove.equals("rock")) {
                if (computersMove.equals("scissors")) {
                    System.out.println("You win!! Rock crushes scissors.");
                }
                else if (computersMove.equals("paper")) {
                    System.out.println("You lose!! Paper eats rock.");
                }
            }
            else if (usersMove.equals("paper")) {
                if (computersMove.equals("rock")) {
                    System.out.println("You win!! Paper eats rock.");
                }
                else if (computersMove.equals("scissors")) {
                    System.out.println("You lose!! Scissor cuts paper.");
                }
            }
            else if (usersMove.equals("scissors")) {
                if (computersMove.equals("paper")) {
                    System.out.println("You win!! Scissor cuts paper.");
                }
                else if (computersMove.equals("rock")) {
                    System.out.println("You lose!! Rock breaks scissors.");
                }
            }
            else {
                System.out.println("Invalid user input.");
            }
        }
        else if (usersMove.equals("rock")) {
            computersMove = "paper";
            System.out.println("You lose! It's rigged! Paper eats rock");
        }
        else if (usersMove.equals("paper")) {
            computersMove = "scissors";
            System.out.println("You lose! It's rigged! Scissors cuts paper");
        }
        else if (usersMove.equals("scissors")) {
            computersMove = "rock";
            System.out.println("You lose! It's rigged! Rock crushes scissors");
        }
    }
    
    public static String computerSelection() {
        final int result = (int)(Math.random() * 3.0);
        String computerMove = "";
        switch (result) {
            case 0: {
                computerMove = "rock";
                break;
            }
            case 1: {
                computerMove = "paper";
                break;
            }
            case 2: {
                computerMove = "scissors";
                break;
            }
        }
        return computerMove;
    }
    
    public static String getPlayerMove(final Scanner input) {
        System.out.println("Rock, Paper, or Scissors? ");
        final String playerInput = input.next().toLowerCase();
        return playerInput;
    }
    
    public static String getPlayerName(final Scanner input) {
        System.out.println("Please enter your name: ");
        final String playerName = input.next().toLowerCase();
        return playerName;
    }
    
    public static String whoGoesFirst(final Scanner input) {
        System.out.println("Do you want to go first? Respond with y or n: ");
        final String playerChoice = input.next().toLowerCase();
        if (playerChoice.equals("n") || playerChoice.equals("no")) {
            System.out.println("The computer made it's move! Your turn");
        }
        return playerChoice;
    }
    
    public static void main(final String[] args) {
        final Scanner input = new Scanner(System.in);
        final String playerName = getPlayerName(input);
        boolean run = true;
        do {
            whoGoesFirst(input);
            final String playerInput = getPlayerMove(input).toLowerCase();
            if (playerInput.equals("rock") || playerInput.equals("paper") || playerInput.equals("scissors")) {
                playRound(playerInput, computerSelection());
                System.out.println(String.valueOf(playerName) + ", Do you want to play again? y or n");
                final String choice = input.next();
                if (!choice.equals("n") && !choice.equals("no")) {
                    continue;
                }
                run = false;
            }
            else {
                System.out.println("Invalid Input " + playerInput);
            }
        } while (run);
    }
}*/
let computerMove = ""
let playerWins = 0
let computerWins = 0

    function computerSelection() {
        let result = parseInt(Math.random() * 3.0);
        let computerPlay = ""
        switch (result) {
            case 0: 
                computerPlay = "rock";
                break;
            
            case 1: 
                computerPlay = "paper";
                break;
            
            case 2: 
                computerPlay= "scissors";
                break;
            
        }
        return computerPlay
    }

    const gameResultText = document.querySelector('div.result > h2');

    const parentMoveDiv = document.querySelector('.gameMoves');
    const computerMoveText = parentMoveDiv.lastElementChild;
    const playerMoveText = parentMoveDiv.firstElementChild;

    function playRound(usersMove, computersMove) {
        const result = Math.random();
        //if (result < 0.5) {
        computerMoveText.textContent = "Computer's move is: " + computersMove;
        playerMoveText.textContent = "Player's move is: " + usersMove;
            if (usersMove == computersMove) {
                return "It's a tie!";
            }
            else if (usersMove == "rock") {
                if (computersMove == "scissors") {
                    playerWins++;
                    return "You win!! Rock crushes scissors.";
                }
                else if (computersMove == "paper") {
                    computerWins++;
                    return "You lose!! Paper eats rock.";
                }
            }
            else if (usersMove == ("paper")) {
                if (computersMove == ("rock")) {
                    playerWins++;
                    return "You win!! Paper eats rock.";
                }
                else if (computersMove == ("scissors")) {
                    computerWins++;
                    return "You lose!! Scissor cuts paper.";
                }
            }
            else if (usersMove == "scissors") {
                if (computersMove == "paper") {
                    playerWins++;
                    return "You win!! Scissor cuts paper.";
                }
                else if (computersMove == "rock") {
                    computerWins++;
                    return "You lose!! Rock breaks scissors.";
                }
            }
            else {
                return "Invalid user input.";
            }
        /*}
        
        else if (usersMove == "rock") {
            computersMove = "paper";
            alert("You lose! It's rigged! Paper eats rock");
            computerWins++;
        }
        else if (usersMove == "paper") {
            computersMove = "scissors";
            alert("You lose! It's rigged! Scissors cuts paper");
            computerWins++;
        }
        else if (usersMove == "scissors") {
            computersMove = "rock";
            alert("You lose! It's rigged! Rock crushes scissors");
            computerWins++;
        }*/
    }

//let playerResult =  prompt("Please enter 'Rock, Paper, or Scissors' : ")


    
    function getPlayerName() {
        let playerName = prompt("Please enter your name: ");
        return playerName;
    }
    
    function whoGoesFirst() {
        let playerChoice = prompt("Do you want to go first? Respond with y or n: ");
        if (playerChoice == "n" || playerChoice == "no") {
            alert("The computer made it's move! Your turn");
        }
    }

        let run = true;

        let index = 0

        const winResult = document.querySelector('.wins');
        const playerWinsText = winResult.firstElementChild
        const computerWinsText = winResult.lastElementChild

        const roundResult = document.createElement('h2')
        const parentRoundResultDiv = document.querySelector('.round-winner');

        const playerContinueChoice = document.createElement('h3');


        const resultParentDiv = document.querySelector('div.result');

        const btn = document.querySelectorAll('button');

        btn.forEach(button => {
            button.addEventListener('click', () => {

                playGame(button.textContent);
            })
        })

        function playGame(playerInput){

            console.log(playerInput)
            //let playerChoice = whoGoesFirst();
            if (playerInput == "rock" || playerInput == "paper" || playerInput == "scissors") {
                gameResultText.textContent = "Result: " + playRound(playerInput.toLowerCase(), computerSelection());
                index++
                playerWinsText.textContent = `Player Wins: ${playerWins}` 
                computerWinsText.textContent = `Computer Wins: ${computerWins}` 

            }
            else {
                gameResultText.textContent = "Invalid Input " + playerInput;
            }
        }
        
        if(index == 0){
            if(playerWins > computerWins){
                roundResult.textContent = "Player wins the round!" + " Player wins: " + playerWins + "Computer wins: " + computerWins;
            }
            else if(computerWins > playerWins){
                roundResult.textContent = "Computer wins the round!" + " Player wins: " + playerWins + " Computer wins: " + computerWins;
            }
            else if(computerWins == playerWins){
                roundResult.textContent = "Tie round!"
            }
        }
                let choice = playerContinueChoice.textContent = "Do you want to play again? y or n"
                if (choice != "n" && choice != "no") {
                    computerWins = 0
                    index = 0;
                    playerWins= 0
                    playGame();
                }
                else{
                run = false;
                }
        run = false;


        parentRoundResultDiv.appendChild(roundResult);
        