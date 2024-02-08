const playerO = "O";
const playerX = "X";
let currentPlayer = playerO;
let gameEnded = false;
let squares = document.getElementsByClassName("sqr");
function swapTurns(){
    if (currentPlayer === playerO){
        currentPlayer = playerX
    } else {
        currentPlayer = playerO
    };
};
for (let i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', (e) =>{
        e.target.textContent = currentPlayer;
        swapTurns();
        console.log("clicked");
    });
};