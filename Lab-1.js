// Declaring variables 
var start = true;

var playerResult = 0;

var computerResult = 0;


 while (start === true) {

    // Asking user to select one from Rock, Paper or Scissors
    var playerTurn = prompt("Hi human, please select one from Rock, Paper or Scissors?");

    var computerTurn = Math.random();

    if (computerTurn <0.33){
        computerTurn = "rock";

    }else if(computerTurn <=0.66){
        computerTurn = "paper";

    }
    else{
        computerTurn = "scissors";
    }



    var option = function(a,b){
    
    // Comparing the player input and computer's selection 
    if(a.toLowerCase() === b){
        return alert("It's a tie!!!!!!!");
    }

    if(a.toLowerCase()==="rock"){
        if(b === "scissors"){
            playerResult++
            return alert("Rock defeats Scissors, Player Result =  " + playerResult + " Computer Result =  " + computerResult);
        }
        else{
            computerResult++
            return alert("Paper defeats Rock, PLayer Result =  " + playerResult + " Computer Result =  " + computerResult);
        }
    }

    if(a.toLowerCase()==="paper"){

        if(b==="rock"){
            playerResult++
            return alert("Paper defeats Rock, PLayer Result =  " + playerResult + " Computer Result =  " + computerResult);
        }
        else{
            computerResult++
            return alert("Scissors defeats Paper, PLayer Result =  " + playerResult + " Computer Result =  " + computerResult);
        }
    }

    if(a.toLowerCase()==="scissors"){
        if(b==="rock"){
            computerResult++
            return alert( "Rock defeats Scissors, PLayer Result =  " + playerResult + " Computer Result =  " + computerResult);
        }
        else{
            playerResult++
            return alert("Scissors defeats Rocks, PLayer Result =  " + playerResult + " Computer Result =  " + computerResult);
        }
    } else {
        alert("Please select only from Rock, Paper or Scissors!")
    }
    };
    option(playerTurn,computerTurn);

   // Bonus
   var playAgain = prompt("Play again (Y or N)");

   if (playAgain === "Y") {
    start = true;

   } else if (playAgain === "N") {
       start = false;

       alert("Player Score =  " + playerResult + " Computer Result =  " + computerResult);

   }

}