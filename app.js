let playerScore=0;
let computerScore=0;
let counter=0;




function computerPlay(){
    let gameOptions = ["Rock","Paper","Scissors"];
    let gameChoice = gameOptions[Math.floor(Math.random()* gameOptions.length)].toLowerCase();
    return gameChoice;
}

function playerPlay(){
    let playerChoiceCase = prompt("Type rock paper or scissors");
    playerChoice= playerChoiceCase.toLowerCase();
    if(playerChoice=="rock" || playerChoice=="paper" || playerChoice=="scissors"){
        alert(`You have selected ${playerChoice}`);
        return playerChoice;

    }
    else if(playerChoice===null || playerChoice==="" ){
        alert("You need to enter rock, paper or scissors")
        playerPlay();
    }else{
        alert("Please enter rock paper or scissors");
        playerPlay();
    }
    
}




function game(){


    

    while(counter<5){

        function playRound(playerSelection, computerSelection){
    
            //    playerSelection =  playerSelection.toLowerCase();
            //    computerSelection = computerSelection.toLowerCase();
            
            if(playerSelection=="rock" && computerSelection=="scissors"){
                playerScore++;
                counter+=1;
                alert("Player Wins, Rock beats Scissors");
            }else if(playerSelection=="paper" && computerSelection=="rock"){
                playerScore++;
                counter+=1;
                alert("Player Wins, Paper beats Rock");
        
            }else if(playerSelection=="scissors" && computerSelection=="paper"){        
                playerScore++;
                counter+=1;
                alert("Player Wins, Scissors beats Paper");
            }else if(playerSelection==computerSelection){
                counter+=1;
                alert("Tie Game!");
            }else{
                counter+=1;
                computerScore++;
                alert(`Computer Wins, ${computerSelection} beats ${playerSelection}`);
            }
                
        }

        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        playRound(playerSelection,computerSelection);

    }  
    
    
    if(counter<5){
        if(playerScore>computerScore){
            alert(`Player is currently winning, Scores: Player: ${playerScore} Computer: ${computerScore}`);
        }else if(computerScore> playerScore){
           alert(`Computer is currently winning, Scores: Player: ${playerScore} Computer: ${computerScore}`);
        }else if(computerScore==playerScore){
           alert(`Computer and Player are currently tied, Scores: Player: ${playerScore} Computer: ${computerScore}`);
        }
        
    }else if(counter==5){
        if(playerScore>computerScore){
            alert(`Player Wins: Player: ${playerScore} Computer: ${computerScore}`);
            resetGame();
        }else if(computerScore> playerScore){
            alert(`Computer Wins: ${playerScore} Computer: ${computerScore}`);
            resetGame();
        }
    }

   
}

function resetGame(){
    computerScore=0;
    playerScore=0;
    counter=0
    alert("Game Now Reset")
    playerPlay();
    game();
}

game();