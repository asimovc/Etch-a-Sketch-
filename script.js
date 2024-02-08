const grid = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
	for (let j = 0; j < 16; j++) {
		const sqr = document.createElement('div');
		sqr.classList.add("square");
		grid.appendChild(sqr);
	}
}

const hover = document.querySelector('.container');

hover.addEventListener("mouseover", (event) => {
	event.target.style.background = "red";
});
