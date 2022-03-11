    let playerWins = 0

    let computerWins = 0

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

    const gameOverButton = document.querySelector('.gameover-button');

    const modal = document.querySelector('.modal');

    gameOverButton.addEventListener('click', () => {

        location.reload();
    })

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

        computerMoveText.textContent = "Computer's move is: " + computersMove;

        playerMoveText.textContent = "Player's move is: " + usersMove;

            const img = document.createElement('img')

            img.src = "/images/minecraft-heart.png";


            img.style.width="50px";
            img.style.height="50px";
            img.style.mixBlendMode = "multiply";
            img.style.filter="brightness(1.75)"
            
            //https://stackoverflow.com/questions/6289592/transparent-background-color-in-image helped with a transparent png

            if (usersMove == computersMove) {

                return "It's a tie!";
            }
            else if (usersMove == "rock") {

                if (computersMove == "scissors") {

                    playerWins++;
                    playerWinsText.appendChild(img);
                    return "You win!! Rock crushes scissors.";
                }
                else if (computersMove == "paper") {

                    computerWins++;
                    computerWinsText.appendChild(img);
                    return "You lose!! Paper eats rock.";
                }
            }
            else if (usersMove == ("paper")) {

                if (computersMove == ("rock")) {

                    playerWins++;
                    playerWinsText.appendChild(img);
                    return "You win!! Paper eats rock.";
                }
                else if (computersMove == ("scissors")) {

                    computerWins++;
                    computerWinsText.appendChild(img);
                    return "You lose!! Scissor cuts paper.";
                }
            }
            else if (usersMove == "scissors") {

                if (computersMove == "paper") {

                    playerWins++;
                    playerWinsText.appendChild(img);
                    return "You win!! Scissor cuts paper.";
                }
                else if (computersMove == "rock") {

                    computerWins++;
                    computerWinsText.appendChild(img);
                    return "You lose!! Rock breaks scissors.";
                }
            }
    }

        function playGame(playerInput){

                gameResultText.textContent = "Game Result: " + playRound(playerInput.toLowerCase(), computerSelection());

        if(playerWins == 5 | computerWins == 5){

            modal.style.display = "block";

            if(playerWins > computerWins){

                roundResult.textContent = "Player wins the round!" + " Player wins: " + playerWins + " Computer wins: " + computerWins;
            }
            else if(computerWins > playerWins){

                roundResult.textContent = "Computer wins the round!" + " Player wins: " + playerWins + " Computer wins: " + computerWins;
            }
            else if(computerWins == playerWins){

                roundResult.textContent = "Tie round!";

            }

            computerWins = 0;
            playerWins = 0;
        }
        }
        

        parentRoundResultDiv.appendChild(roundResult);
        