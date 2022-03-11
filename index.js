    let playerWins = 0

    let computerWins = 0

    let run = true;


    const parentMoveDiv = document.querySelector('.gameMoves');
    const playerMoveText = parentMoveDiv.firstElementChild;
    const computerMoveText = parentMoveDiv.lastElementChild;

    const gameResultText = document.querySelector('div.result > h2');
    const resultParentDiv = document.querySelector('div.result');

    const winResult = document.querySelector('.wins');
    const playerWinsText = winResult.firstElementChild
    const computerWinsText = winResult.lastElementChild

    const parentRoundResultDiv = document.querySelector('.round-winner');
    const roundResult = document.createElement('h2')
    const playerContinueChoice = document.createElement('h3');

    const btn = document.querySelectorAll('main > button');

    btn.forEach(button => {
        button.addEventListener('click', () => {

            playGame(button.innerText);
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

        console.log(computersMove)
        console.log(usersMove)

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
    }

        function playGame(playerInput){

                gameResultText.textContent = "Game Result: " + playRound(playerInput.toLowerCase(), computerSelection());
                playerWinsText.textContent = `Player Wins: ${playerWins}`;
                computerWinsText.textContent = `Computer Wins: ${computerWins}`;

        if(playerWins == 5 | computerWins == 5){

            if(playerWins > computerWins){

                roundResult.textContent = "Player wins the round!" + " Player wins: " + playerWins + " Computer wins: " + computerWins;
            }
            else if(computerWins > playerWins){

                roundResult.textContent = "Computer wins the round!" + " Player wins: " + playerWins + " Computer wins: " + computerWins;
            }
            else if(computerWins == playerWins){

                roundResult.textContent = "Tie round!";
            }
        }
                //playerContinueChoice.textContent = "Do you want to play again? y or n"

                //if (choice != "n" && choice != "no") {

                    //computerWins = 0
                    //index = 0;
                    //playerWins= 0
                    //playGame();
                //}
                //else{

                //run = false;
                //}
        }
        

        parentRoundResultDiv.appendChild(roundResult);
        