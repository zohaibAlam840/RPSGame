let result = document.querySelector(".result");
let buttons = document.querySelectorAll(".btn");
let computerScore = 0;
let palyerScore = 0;
let counter = 0;
let rounds = document.querySelector(".rounds"); 
let roundCounter = 0;

 function computerChoice(){
    let choice = ["Rock","Paper","Scissors"];
    return choice[Math.floor(Math.random()*choice.length)];
 }
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        let computerCh = computerChoice();
        playARound(button.value,computerCh);
        console.log(computerCh);
    })
})
 
function playARound(player1,player2){

    if(player1 == 'Rock' && player2 == 'Scissors'||
        player1 == 'Paper' && player2 == 'Rock'||
        player1 == 'Scissors' && player2 == 'Paper'){
            palyerScore +=1;
            counter+=1;
            result.innerHTML = `you won! ${player1} Beats ${player2} your Score : ${palyerScore} and Computer Score : ${computerScore}`; 
            roundCounter+=1;
            rounds.innerHTML=`ROUND ${roundCounter}`;
        }
    else if(player1 == player2){
        result.innerHTML = `Draw! you both chose ${player1} your Score : ${palyerScore} and Computer Score : ${computerScore}`;
        counter+=1;
        roundCounter+=1;
        rounds.innerHTML=`ROUND ${roundCounter}`;
    }   
    else{
        computerScore +=1;
        result.innerHTML = `you loss! ${player1} can not beat ${player2} your Score : ${palyerScore} and Computer Score : ${computerScore}`; 
        counter+=1;
        roundCounter+=1;
        rounds.innerHTML=`ROUND ${roundCounter}`;
    }
    if(counter==5){
        counter = 0;
        roundCounter = 0;
        if(computerScore>palyerScore){
            result.innerHTML = `TOTAL SCORE AFTER 5 ROUNDS ARE :: COMPUTER SCORE: ${computerScore} : PLAYER SCORE : ${palyerScore} SO COMPUTER HAVE WON NOW NEW GAME WILL START`;
        }
        else if(computerScore<palyerScore){
            result.innerHTML = `TOTAL SCORE AFTER 5 ROUNDS ARE :: COMPUTER SCORE: ${computerScore} : PLAYER SCORE : ${palyerScore} SO YOU HAVE WON NOW NEW GAME WILL START`;
        }
        else{
            result.innerHTML = `TOTAL SCORE AFTER 5 ROUNDS ARE :: COMPUTER SCORE: ${computerScore} : PLAYER SCORE : ${palyerScore} SO IT IS A DRAW NOW NEW GAME WILL START`;
        }
        computerScore = 0;
        palyerScore= 0;
    }
}
