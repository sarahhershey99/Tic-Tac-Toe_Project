let playerO = "O";
// makes playerO display "O"
let playerX = "X";
// makes playerX display "X"
let currentPlayer = playerO;
// makes it so playerO starts the game and gives the rest of the code a starting point
const board = document.getElementById("board");
// selects the id "board" from the DOM so I can use it in my code
let winCombos = [
    [1, 2, 3], [4, 5, 6], 
    [7, 8, 9], [1, 4, 7], 
    [2, 5, 8], [3, 6, 9], 
    [1, 5, 9], [3, 5, 7]
  ];
  // sets winning conditions for the game
const resetBtn = document.getElementById("resetButton");
// selects the reset button from the DOM so I can add code to it
let squares = document.getElementsByClassName("sqr");
//selects each of the squares from the DOM so I can add code to it
function swapTurns(){ //creates a function
    if (currentPlayer === playerO){ //sets the condition of the "if" statement
        currentPlayer = playerX // says what to do if the condition is true
    } else { // sets a condition for the "if" statement if the previous condition is false
        currentPlayer = playerO // says what to do if that condition is true
    };
};
for (let i = 0; i < squares.length; i++){ // creates a loop that cycles through the squares
    squares[i].addEventListener('click', (e) =>{ // adds a click event to each of the squares 
        squares[i].textContent = currentPlayer; // changes the text content of the squares after it's been clicked
        checkWin(); // calls the checkWin function
        swapTurns(); // calls the swapTurns function
    });
};
function checkWin(){ // creates a function
    let count;// calls count so I can use it 
    for (let i = 0; i < winCombos.length; i++) { // creates a loop to cycle through the winning conditions
        count = 0; // sets count to 0
    if (currentPlayer === playerO){ // if the current player is playerO, run the code below
        for (let j = 0; j < winCombos[i].length; j++){ // creates a loop within the first loop to cycle through the winning conditions
            if (squares[winCombos[i][j] - 1].textContent == currentPlayer){ // if the current player hasn't made a winning condition
                count++ // increment count 
                if (count>= 3){ // if count is less than or equal to 3 (making a winning condition)
                    window.alert(`Congrats!${currentPlayer} you've won!`); // shows a winning message
                };
            };
        };
    // this is all the same as the previous block of code except for playerX
    } else if (currentPlayer === playerX){
        for (let j = 0; j < winCombos[i].length; j++){
            if (squares[winCombos[i][j] - 1].textContent == currentPlayer){
                count++
                if (count>= 3){
                    window.alert(`Congrats!${currentPlayer} you've won!`);
                };
            };
        };
    };
};
};

function reset(){ //creates a function
    for (let i = 0; i < squares.length; i++){ // a loop to cycle through the squares
    squares[i].textContent = ""; // changes the text content of the squares to an empty string
    };
};
resetBtn.addEventListener('click', (e)=>{ // adds a click event to the reset button
    reset(); // calls the reset function
});
