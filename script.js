let result = document.querySelector(".result");
let buttons = document.querySelectorAll(".btn");
let computerScore = 0;
let palyerScore = 0;

 function computerChoice(){
    let choice = ["Rock","Paper","Scissors"];
    return choice[Math.floor(Math.random()*choice.length)];
 }
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        let computerCh = computerChoice();
        playARound(button.value,computerCh);
    })
})
 
function playARound(player1,player2){
    if(player1 == 'Rock' && player2 == 'Scissors'||
        player1 == 'Paper' && player2 == 'Rock'||
        player1 == 'Scissors' && player2 == 'Paper'){
            palyerScore +=1;
            result.innerHTML = `you won! ${player1} Beats ${player2}`; 
        }
    else if(player1 == player2){
        result.innerHTML = `Draw! you both chose ${player1}`
    }
    else{
        computerScore +=1;
        result.innerHTML = `you loss! ${player1} can not beat ${player2}`; 
    }
}