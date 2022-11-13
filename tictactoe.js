let gameArea = document.querySelector('.game-area');
let gameRows = document.querySelectorAll('.row');

gameArea.addEventListener('click', () => {ticTacToe()});

const winningPatterns = {
    1: [1, 2, 3],
    2: [1, 5, 9],
    3: [1, 4, 7],
    4: [4, 5, 6],
    5: [7, 8, 9],
    6: [3, 5, 7],
    7: [2, 5, 8],
    8: [3, 6, 9]
}

let playerTurn = 'x';

let score = {
    x: 0,
    o: 0,
}

let currentBoard = {x: [], o: []};

function checkWinner() {
    gameRows.forEach((doc) => {
        let choice = doc.textContent.toLowerCase();
        let player = currentBoard[choice];
            
        if (choice && !player.includes(doc.id)) player.push(doc.id);
    });

    const playerX = currentBoard.x.sort();
    const playerO = currentBoard.o.sort();

    for (let i = 1; i <= 8; i++) {
        let pattern = winningPatterns[i];
        let x = 0;
        let o = 0;
    
        playerX.forEach((choice) => {
            choice = parseInt(choice);

            if (choice === pattern[0] || choice === pattern[1] || choice === pattern[2]) x++;
        });

        playerO.forEach((choice) => {
            choice = parseInt(choice);

            if (choice === pattern[0] || choice === pattern[1] || choice === pattern[2]) o++;
        });
        
        if (x === 3 || o === 3) {
            const winner = x === 3 ? 'x' : 'o';

            return winner;
        }
    }

    return false;
}

function changeBoard(type, text) {
    gameRows.forEach((e) => {
        e.textContent = '';
    });
    gameArea.style.display = 'none';
    const newDiv = document.createElement('div');
    newDiv.className = type;
    newDiv.innerHTML = text;
    gameArea.after(newDiv);

    const playAgain = document.createElement('div');
    playAgain.className = 'play-again';
    playAgain.innerHTML = 'play again';
    newDiv.after(playAgain);

    playAgain.addEventListener('click', (e) => {
        newDiv.remove();
        playAgain.remove();
        
        currentBoard = {x: [], o: []};
        winner = null;
        
        gameArea.style.display = '';
    });
}

function ticTacToe() {
    let playerPick = event.target.id;

    const pushPick = document.getElementById(`${playerPick}`);

    if (!pushPick.textContent) {
        const tryAgain = document.querySelector('.try');
        if (tryAgain) tryAgain.remove();

        pushPick.textContent = playerTurn.toUpperCase();
        playerTurn = playerTurn == 'x' ? 'o' : 'x';
    } else {
        if (!document.querySelector('.try')) {
            const tryAgain = document.createElement('div');
            tryAgain.className = 'try';
            tryAgain.textContent = 'Try Again';
            document.querySelector('.try-again').prepend(tryAgain);
        }
    }
    const turnID = document.getElementById('turn');
    turnID.textContent = playerTurn;
    
    let winner = checkWinner();
    if (winner) {
        changeBoard('winner', `winner ${winner}`);
        
        playerTurn = winner;
        score[winner] += 1;
        turnID.textContent = winner;
        
        const scoreArea = document.getElementById(`${winner}-score`);
        scoreArea.textContent = score[winner];
    } else {
        let counter = 0;
        gameRows.forEach((e) => {
            if (e.innerHTML !== '') counter++
        });

        if (counter === 9) {
            changeBoard('tie', 'game is a tie');
        }
    }
}






// const playerX = [1,2,3,6];
// for (let i = 1; i <= 6; i++) {
//     let pattern = winningPatterns[i];
//     let x = 0;

//     playerX.forEach((choice) => {
//         if (choice === pattern[0] || choice === pattern[1] || choice === pattern[2]) {
//             x++;
//         }
//     });

//     if (x === 3) {
//         console.log('Player X Wins!');
//     }
// }