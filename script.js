function createDivs(num){
    const container = document.querySelector(".container");
    for (let i = 1; i <= num; i++){
        const div = document.createElement('div')
        div.classList.add('cell');
        container.appendChild(div);
    }
}

createDivs(256);