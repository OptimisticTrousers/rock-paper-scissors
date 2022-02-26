    let computerMove = ""
    let playerWins = 0
    let computerWins = 0

    const gameResultText = document.querySelector('div.result > h2');

    const parentMoveDiv = document.querySelector('.gameMoves');
    const computerMoveText = parentMoveDiv.lastElementChild;
    const playerMoveText = parentMoveDiv.firstElementChild;


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

                playGame(button.textContent.toLowerCase());
            })
        })

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

    function playRound(usersMove, computersMove) {

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
    }


        function playGame(playerInput){

            if (playerInput == "rock" || playerInput == "paper" || playerInput == "scissors") {

                gameResultText.textContent = "Result: " + playRound(playerInput.toLowerCase(), computerSelection());
                index++;
                playerWinsText.textContent = `Player Wins: ${playerWins}`;
                computerWinsText.textContent = `Computer Wins: ${computerWins}`;
            }
            else {

                gameResultText.textContent = "Invalid Input " + playerInput;
            }
        }
        
        if(index == 10){

            if(playerWins > computerWins){

                roundResult.textContent = "Player wins the round!" + " Player wins: " + playerWins + "Computer wins: " + computerWins;
            }
            else if(computerWins > playerWins){

                roundResult.textContent = "Computer wins the round!" + " Player wins: " + playerWins + " Computer wins: " + computerWins;
            }
            else if(computerWins == playerWins){

                roundResult.textContent = "Tie round!";
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
        