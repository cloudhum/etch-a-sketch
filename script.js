function createDivs(num){
    const container = document.querySelector(".container");
    for (let i = 1; i <= num; i++){
        const div = document.createElement('div')
        div.classList.add('square');
        container.appendChild(div);
    }
}
//createDivs(256);//
createDivs(4096);

//get squares
const squares = document.querySelectorAll('.square');
console.log(squares);

//add event listeners for each square/div
squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "lavender";
    });
});

function capturePrompt() {
    let input = prompt('Enter grid size:');
    console.log(input);
}

//grab button and add event listener
const selectGridSizeBtn = document.querySelector('.grid-select');
selectGridSizeBtn.addEventListener('click', capturePrompt);

