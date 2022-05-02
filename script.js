function createDivs(num){
    const container = document.querySelector(".container");
    for (let i = 1; i <= num; i++){
        const div = document.createElement('div')
        div.classList.add('square');
        container.appendChild(div);
    }
}
createDivs(256);
//add eventlisteners 
const squares = document.querySelectorAll('.square');
console.log(squares);

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "black";
    });
});

