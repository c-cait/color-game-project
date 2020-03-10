var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");

var modeButtons = document.getElementsByClassName("mode")

init();

function init(){
	//mode buttons event listeners
setUpModeButtons();
setUpSquares();
reset(); //this will help generate colors

}

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function (){
		modeButtons[0].classList.remove("selected") //removing the selected class
		modeButtons[1].classList.remove("selected")
		this.classList.add("selected")
		//turniary operator 
		//this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		//above code does the same thing as the if statement below
		if(this.textContent === "Easy"){
			numSquares = 3;
		} else {
			numSquares = 6;
		}
		reset();
	});
	}	
}

function setUpSquares(){
	for(i = 0; i < squares.length; i++) {
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked sqaure
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?"
		} 
			//if color is wrong we want to fade the box out 
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
	});
	}

}

function reset() {
	colors = generateRandomColors(numSquares);
	//pick a new random color from array 
	pickedColor = pickColor();
	//chagne colordisplay to match picked color
	colorDisplay.textContent = pickedColor
	resetButton.textContent = "New Colors"
	//change the colors of the sqaures on the page
	for(var i = 0; i < squares.length; i++){
		//if there is a square to color, then color it else hide it
		if(colors[i]){
			squares[i].style.display = "block"; //how we bring squares back inhard
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";

}

function changeColors(color){
	//loop through all squares 
		for(i = 0; i < squares.length; i++){
			//change each square to match given color
			squares[i].style.backgroundColor = color;
		}
}

function pickColor(){
	//pick a random number all the way to the 
	//last index of the color array
	//math.floor chops off remaining decimal point
	//questin on 198 @ minutes 8:40-9:09
	var random= Math.floor(Math.random() * colors.length)
	//use variable to access the array at that index
	return colors[random];
}

function generateRandomColors(num) {
	//make array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256)
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256)
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")"
}


resetButton.addEventListener("click", function() {
	reset()
});





