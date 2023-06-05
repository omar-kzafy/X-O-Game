let gridItems = document.getElementsByClassName('square');
let boradArray = ['0', '1', '2',
                  '3', '4', '5',
                  '6', '7', '8' ];
let gameIsFinished = false;
let currentTurn = 'x';
document.getElementById('header').style.webkitTextStroke = `2px rgb(34, 185, 4)`;
for (const item of gridItems) {
    item.addEventListener('click',function () {
        if (gameIsFinished) {
            return
        }
        let isAwinner = false;
        let value = item.getAttribute('value');
        let index = value - 1; 

        if (boradArray[index] == 'x' || boradArray[index] == 'o') {
            return
        }
        let squareContent = document.querySelector(`.square[value="${value}"]`);
        boradArray[index] = currentTurn;
        squareContent.innerHTML = currentTurn;
        if (currentTurn == 'x') {
            currentTurn = 'o'
        } else {
            currentTurn = 'x'
        }
        if (currentTurn =='x') {
            document.getElementById('header').style.webkitTextStroke = `2px rgb(34, 185, 4)`
        } else {
            document.getElementById('header').style.webkitTextStroke = `2px rgb(185, 70, 4)`
        }
        document.getElementById("instruction").textContent = `${currentTurn} Turn`;
        evaluateBoard();       
    })
}
function evaluateBoard() {
    console.log(boradArray[0], boradArray[1], boradArray[2], boradArray[0] === boradArray[1] === boradArray[2])
    if( 
        // rows
        (boradArray[0] == boradArray[1] && boradArray[1] == boradArray[2]) || 
        (boradArray[3] == boradArray[4] && boradArray[4] == boradArray[5]) ||
        (boradArray[6] == boradArray[7] && boradArray[7] == boradArray[8]) ||

        // cols
        (boradArray[0] == boradArray[3] && boradArray[3] == boradArray[6]) || 
        (boradArray[1] == boradArray[4] && boradArray[4] == boradArray[7]) ||
        (boradArray[2] == boradArray[5] && boradArray[5] == boradArray[8]) ||

        // Diagonal
        (boradArray[2] == boradArray[4] && boradArray[4] == boradArray[6]) || 
        (boradArray[0] == boradArray[4] && boradArray[4] == boradArray[8]) ||
        ((boradArray[2] == boradArray[4] && boradArray[4] == boradArray[6] && boradArray[0] == boradArray[4] && boradArray[4] == boradArray[8]))
        ){
            var winner = currentTurn == "o" ? "x" : "o"
            alertify.alert(`${winner} Won!`)
            gameIsFinished = true
            return;
        }

    // check for draw..
    var isDraw = true
    for (square of boradArray)
    {
        if (square != "x" && square != "o"){
            console.log("not draw cuz of " + square)
            isDraw = false
            break
        }
    }

    if(isDraw)
    {
        alertify.alert(`Draw`);
    }
}
document.getElementById('reset-btn').addEventListener('click',function () {
    reset()
})
function reset() {
    for (item of gridItems) {
        let value = item.getAttribute('value');
        let squareContent = document.querySelector(`.square[value="${value}"]`);
        squareContent.innerHTML = '';
        boradArray = ['0', '1', '2',
                  '3', '4', '5',
                  '6', '7', '8' ];
        gameIsFinished = false;
        currentTurn = 'x';
        document.getElementById('header').style.webkitTextStroke = `2px rgb(34, 185, 4)`
        document.getElementById("instruction").textContent = `${currentTurn} Turn`;
    }  
}