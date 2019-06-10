let originalBoard;
let playerHuman1 = 'O';
let playerHuman2 = 'X';
let playerAI = 'X';
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const cells = document.querySelectorAll('.cell');
startGame();

function startGame(){
    document.querySelector('.endGame').style.display = 'none';
    originalBoard = Array.from(Array(9).keys());
    for (i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false);
    }
}

function turnClick(square){
    turn(square.target.id, playerHuman1);
};

function turn(squeareId, player){
    originalBoard[squeareId] = player;
    document.getElementById(squeareId).innerText = player;
    let gameWon = function checkWin(originalBoard, player){
        if (gameWon) gameover(gameWon);
    }
}

function checkWin(board, player)
// https://www.youtube.com/watch?v=P2TcQ3h0ipQ 22:46