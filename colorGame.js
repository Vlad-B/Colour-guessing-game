let numSquares = 6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll('.square');
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');
let header = document.querySelector('h1');
let resetButton = document.getElementById('reset');
let modeButtons = document.querySelectorAll('.mode');

init();

function init() {
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons() {
	for (let i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener('click', function() {
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');

			this.textContent === 'Easy' ? (numSquares = 3) : (numSquares = 6);
			reset();
		});
	}
}

function setUpSquares() {
	for (let i = 0; i < squares.length; i++) {
		// add click listeners to squares
		squares[i].addEventListener('click', function() {
			//grab color of picked square
			let clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = 'Correct!';
				changeColor(clickedColor);
				header.style.backgroundColor = clickedColor;
				resetButton.textContent = 'Play Again?';
			} else {
				this.style.backgroundColor = '#232323';
				messageDisplay.textContent = 'Try Again!';
			}
		});
	}
}

function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	header.style.backgroundColor = 'steelblue';
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = 'New Colors';
	messageDisplay.textContent = '';
	for (let i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
}

resetButton.addEventListener('click', function() {
	reset();
});

function changeColor(color) {
	//loop through all squares
	for (let i = 0; i < squares.length; i++) {
		// change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	let arr = [];
	//add num random to array
	for (let i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	// get 'red' value between 0 - 255
	let r = Math.floor(Math.random() * 256);
	// get 'green' value between 0 - 255
	let g = Math.floor(Math.random() * 256);
	// get 'blue' value between 0 - 255
	let b = Math.floor(Math.random() * 256);

	//return rgb(r, g, b);
	return `rgb(${r}, ${g}, ${b})`;
}
