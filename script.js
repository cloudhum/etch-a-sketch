function createDivs(num){
    const container = document.querySelector(".container");
    for (let i = 1; i <= num; i++){
        const div = document.createElement('div')
        div.classList.add('square');
        container.appendChild(div);
    }
}
createDivs(256);

//get squares
const squares = document.querySelectorAll('.square');
console.log(squares);

//add eventlisteners
squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "lavender";
    });
});

//get button
const selectGridSizeBtn = document.querySelector('.grid-select');
selectGridSizeBtn.addEventListener('click', () => prompt("Enter grid size"))
