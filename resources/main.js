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
        document.body.innerHTML="";
        let element=document.createElement('button');
        element.addEventListener('click', () => {
            location.reload();
        });
        element.innerHTML="Try again";
        if(counterComputer==counterPlayer){
            alert("Looks like its a tie :|");
            document.body.appendChild(element);
        } else if(counterPlayer>counterComputer){
            alert("Congratulations, you won :D");
            document.body.appendChild(element);
        } else {
            alert("Unfortunate, but you lose :(");
            document.body.appendChild(element);
        }
        return;
    }
}
