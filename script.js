const rock = document.getElementsByTagName("button")[0];
const paper = document.getElementsByTagName("button")[1];
const scissors = document.getElementsByTagName("button")[2];
const playerBtn = document.querySelector("#player-score");
const computerBtn = document.querySelector("#computer-score");
const computerImg = document.querySelector("#computer-move"); 
const  player_total = document.querySelector("#total-player-score");
const  computer_total = document.querySelector("#total-computer-score");
const playerImg = document.querySelector("#player-move"); 
let player = 0;
let computer = 0;
const choice = ["rock","paper","scissors"]


//make computer choosee random choice
function getComputerChoice(arr) {
    let num = Math.round((Math.random()*2));
    return  arr[num];
    
}


rock.addEventListener("click",()=>{
    console.log("rock");
    let computerMove = (getComputerChoice(choice));
    playerImg.src = "images/rock.jpg";

    if (computerMove === "rock"){
        computerImg.src = "images/rock.jpg";
        playerBtn.innerHTML="0";
        computerBtn.innerHTML="0";

    }else if (computerMove==="paper"){
        computerImg.src = "images/paper.jpg";
        playerBtn.innerHTML="0";
        computerBtn.innerHTML="1";
        computer++;
        computer_total.innerHTML=computer;
    }else{
        computerImg.src = "images/scissors.jpg";
        playerBtn.innerHTML="1";
        computerBtn.innerHTML="0";
        player++;
        player_total.innerHTML=player;

    }
}
)
paper.addEventListener("click",()=>{
    console.log("paper");
    playerImg.src = "images/paper.jpg";
    let computerMove = (getComputerChoice(choice));
    if (computerMove === "paper"){
        computerImg.src = "images/paper.jpg";
        playerBtn.innerHTML="0";
        computerBtn.innerHTML="0";
    }else if (computerMove==="rock"){
        computerImg.src = "images/rock.jpg";
        playerBtn.innerHTML="1";
        computerBtn.innerHTML="0";
        player++;
        player_total.innerHTML=player;
    }else{
        computerImg.src = "images/scissors.jpg";
        playerBtn.innerHTML="0";
        computerBtn.innerHTML="1";
        computer++;
        computer_total.innerHTML=computer;

    }
    
}
)
scissors.addEventListener("click",()=>{
    console.log("scissors");
    playerImg.src = "images/scissors.jpg";
    let computerMove = (getComputerChoice(choice));
    if (computerMove === "scissors"){
        computerImg.src = "images/scissors.jpg";
        playerBtn.innerHTML="0";
        computerBtn.innerHTML="0";
    }else if(computerMove==="rock"){
        computerImg.src = "images/rock.jpg";
        playerBtn.innerHTML="0";
        computerBtn.innerHTML="1";
        computer++;
        computer_total.innerHTML=computer;
    }else{
        computerImg.src = "images/paper.jpg";
        playerBtn.innerHTML="1";
        computerBtn.innerHTML="0";
        player++;
        player_total.innerHTML=player;

    }
}
)