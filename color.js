var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 6;

easyBtn.addEventListener("click", function(){
easyBtn.classList.add("selected");
hardBtn.classList.remove("selected");
h1.style.backgroundColor = "steelblue";
numSquares = 3;
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	if(colors[i]){
		squares[i].style.backgroundColor = colors[i];

	} else {
		squares[i].style.display = "none";
	}
}

});

hardBtn.addEventListener("click", function(){
hardBtn.classList.add("selected");
easyBtn.classList.remove("selected");
h1.style.backgroundColor = "steelblue";
numSquares = 6;
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].style.display = "block";
	
}

});


resetButton.addEventListener("click", function(){
	messageDisplay.textContent= "";
	resetButton.textContent = "New Colors";
//generate all new colors
	colors = generateRandomColors(numSquares);
//pick a new random color from array
	pickedColor = pickColor();
//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
//change the colors of squares

	for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	}

	h1.style.backgroundColor = "steelblue";

});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	//add click listeners
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor){
			resetButton.textContent = "Play Again";
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}

	});
}

function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num time
	 for (var i = 0; i < num; i++) {
	 	//get random color and push into arr
	 	arr.push(randomColor())
	 }
	//return that array
	return arr;
}

function randomColor(){
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);

return "rgb(" + r + ", " + g + ", " + b + ")"

}