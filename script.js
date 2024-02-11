const grid = document.querySelector('.container');
const btn = document.querySelector('#btn');
const hover = document.querySelector('.container');
let size = makeGrid(16);

function makeGrid(size){
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			const sqr = document.createElement('div');
			sqr.classList.add("square");
			grid.appendChild(sqr);
		}
	}
}

function newGrid(size){
	grid.innerHTML='';

	const squareSize = document.querySelector(':root');

	squareSize.style.setProperty('--size', `${size}`);

	makeGrid(size);
}

hover.addEventListener("mouseover", (event) => {
	event.target.style.background = "red";
});

btn.addEventListener('click', () => {
	size = prompt('Give the size of the grid (MAX 100)');

	if(size === null || size >= 100 || size == 0){
		alert("Size not valid, enter a number again");
	}else{
		newGrid(size);
	}
})
