// get container and button, add click event listener
const container = document.querySelector(".container");
const selectGridSizeBtn = document.querySelector('.grid-select');
selectGridSizeBtn.addEventListener('click', capturePrompt);

//create intiial grid 
createDivs(256);
listenToSquares();

function createDivs(num) {
    for (let i = 1; i <= num; i++) {
        const div = document.createElement('div')
        div.classList.add('square');
        container.appendChild(div);
    }
}

function listenToSquares() {
    //get squares and add event listeners for each square/div
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "lavender";
        });
    });
}

function resetGrid(input) {
    // remove all current divs
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        container.removeChild(square);
    });

    // create new divs/squares
    createDivs(input * input);

    //change div height/width
    squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.style.width = `${960 / input}px`;
        square.style.height = `${960 / input}px`;
    });

    //attach event listeners to new divs
    listenToSquares();
}

function capturePrompt() {
    let input = prompt('Enter grid size:');
    console.log(input);
    resetGrid(input);
}