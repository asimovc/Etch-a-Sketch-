const grid = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
	for (let j = 0; j < 16; j++) {
		const sqr = document.createElement('div');
		grid.appendChild(sqr);
	}
}
