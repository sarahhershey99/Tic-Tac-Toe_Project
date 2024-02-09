const playerO = "O";
const playerX = "X";
let currentPlayer = playerO;
let gameEnded = false;
const board = document.getElementById("board");
let winCombos = [
    [1, 2, 3], [4, 5, 6], 
    [7, 8, 9], [1, 4, 7], 
    [2, 5, 8], [3, 6, 9], 
    [1, 5, 9], [3, 5, 7]
  ];
const resetBtn = document.getElementById("resetButton");
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
        squares[i].textContent = currentPlayer;
        swapTurns();
        console.log("clicked");
    });
};
function checkWin(){
    for (let i = 0; i < winCombos.length; i++) {
    if (currentPlayer === playerO && winCombos == true){
        prompt("Congrats playerO! You've won!");
    } else if (currentPlayer === playerX && winCombos == true){
        prompt("Congrats playerX! You've won!");
    };
};
};

function reset(){
    for (let i = 0; i < squares.length; i++){
    
    };
};
resetBtn.addEventListener('click', (e)=>{
    reset();
});
