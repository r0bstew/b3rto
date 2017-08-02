var buttonRock = document.getElementById("action-rock");
var buttonPaper = document.getElementById("action-paper");
var buttonScissors = document.getElementById("action-scissors");

//buttonRock.innerHTML="interesting..";
//buttonRock.style.backgroundColor="red";

buttonRock.addEventListener("click", function() {
	play("rock");
});

buttonPaper.addEventListener("click", function() {
	play("paper");
});

buttonScissors.addEventListener("click", function() {
	play("scissors");
});

function play(playerSelection) {
	//alert("You played " + playerSelection);
  var computerSelection = getComputerRandomSelection();
	var matchResult = determineMatchResult(playerSelection, computerSelection);
  var playerScore = parseInt(document.getElementById("player-score").innerHTML);	
  var computerScore = parseInt(document.getElementById("computer-score").innerHTML);
  var message;
  
  if (matchResult === 0) {
  	message = "TIE!";
  }	else if (matchResult === 1) {
  	message = "PLAYER - POINT";
    playerScore += 1;
  } else if (matchResult === 2) {
  	message = "COMPUTER - POINT";
    computerScore += 1;
  }
  
  displayResults(playerSelection, computerSelection, message, playerScore, computerScore);
  determineGameResult(playerScore, computerScore); 
}

function getComputerRandomSelection() {

	var options = ["rock","paper","scissors"];
  return options[Math.floor(Math.random() * options.length)];
  
}

function determineMatchResult(playerSelection, computerSelection) {

	if (playerSelection === computerSelection) {
		return 0;
	} else {
  	if (playerSelection === "paper") {
  		if (computerSelection === "rock") {
  			return 1;
  		}
      if (computerSelection === "scissors") {
      	return 2;
        }
        
      } else if (playerSelection === "rock") {
      	if (computerSelection === "paper") {
        	return 2;
        }
       	if (computerSelection === "scissors") {
        	return 1;
        	}
        } else if (playerSelection === "scissors") {
        	if (computerSelection === "paper") {
          	return 1;
					}
          if (computerSelection === "rock") {
          return 2;
          }
        }
      }
    }

function determineGameResult(playerScore, computerScore) {

	if(playerScore === 5) {
		document.getElementById("message").innerHTML = "YOU WON!";
    resetGame();
    } else if (computerScore === 5) {
    document.getElementById("message").innerHTML = "COMPUTER WINS!";
    resetGame();
    }

}

function resetGame() {

	document.getElementById("player-said").innerHTML = "";
  document.getElementById("computer-said").innerHTML = "";
  document.getElementById("player-score").innerHTML = "0";
  document.getElementById("computer-score").innerHTML = "0";

}

function displayResults(playerSaid, computerSaid, message, playerScore, computerScore) {

	document.getElementById("player-said").innerHTML = playerSaid;
  document.getElementById("computer-said").innerHTML = computerSaid;
  document.getElementById("message").innerHTML = message;
  document.getElementById("player-score").innerHTML = playerScore;
  document.getElementById("computer-score").innerHTML = computerScore;
  
}