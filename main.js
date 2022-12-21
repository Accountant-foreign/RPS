var counterPlayer=0;
var counterComputer=0;

function getComputerChoice(){
    let randomInt=Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if(randomInt==1) {
        console.log("Computers choice: Rock");
        return "rock";
    }
    else if(randomInt==2) {
        console.log("Computers choice: Paper");
        return "paper"
    }
    else {
        console.log("Computers choice: Scissors");
        return "scissors";
    }
};

function playRound(playerSelection, computerSelection){
    playerSelection=playerSelection.toLowerCase();
    if(playerSelection==computerSelection) {
        console.log("Tie");
        return "Tie";
    }
    
    switch (playerSelection) {
        case "rock":
            if(computerSelection=="paper"){
                console.log("You Lose! Paper beats rock!");
                counterComputer++;
                return "You Lose! Paper beats rock!";
            } else {
                console.log("You win! Rock beats Scissors");
                counterPlayer++;
                return "You win! Rock beats Scissors";
            }
        
        case "paper":
            if(computerSelection=="scissors"){
                console.log("You Lose! Scissors beats paper!");
                counterComputer++;
                return "You Lose! Scissors beats paper!";
            } else {
                console.log("You win! Paper beats Rock");
                counterPlayer++;
                return "You win! Paper beats Rock"
            }

        case "scissors":
            if(computerSelection=="rock"){
                console.log("You Lose! Rock beats scissors!");
                counterComputer++;
                return "You Lose! Rock beats scissors!";
            } else {
                console.log("You win! Scissors beats paper");
                counterPlayer++;
                return "You win! Scissors beats paper"
            }
    
        default:
            //document.write("Looks like that shit don't work my G")
            return "Don't work"
    }
}

function game(playerChoice){
    let compChoice=getComputerChoice();
    let chance=playRound(playerChoice, compChoice);
    document.getElementById('message').innerHTML=chance;

    document.getElementById('player').innerHTML=counterPlayer;
    document.getElementById('computer').innerHTML=counterComputer;

    if(counterPlayer==5||counterComputer==5){
        if(counterComputer==counterPlayer){
            document.write/*('<div id="test">The Game is a Tie...</div>');
            document.getElementById('test').appendChild*/('<button onclick="location.reload()">Try again</button>');
        } else if(counterPlayer>counterComputer){
            document.write/*('<div id="test">Congratulations! You won!</div>');
            document.getElementById('test').appendChild*/('<button onclick="location.reload()">Try again</button>');
        } else {
            document.write/*('<div id="test">Unfortunately, you lost... try again by clicking the button below.</div>');
            document.getElementById('test').appendChild*/('<button onclick="location.reload()">Try again</button>');
        }
        return;
    }
}
