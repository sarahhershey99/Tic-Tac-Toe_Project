const playerO = "O";
const playerX = "X";
let currentPlayer = playerO;
let gameEnded = false;
let squares = document.getElementById("board");
function swapTurns(){
    if (currentPlayer === playerO){
        currentPlayer = playerX
    } else {
        currentPlayer = playerO
    };
};
document.addEventListener('click', (e) => {
    this.textContent = currentPlayer;
        swapTurns();
        console.log("clicked");
});
