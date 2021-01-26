// var numsquare = 6;
// var colors = [];
// var pickedColor;
// var squares = document.querySelectorAll(".square");
// var colorDisplay = document.getElementById("color_display");
// colorDisplay.textContent = pickedColor;
// var message_display = document.querySelector("#message");

// var modeButtons = document.querySelectorAll(".mode");


// init();

// function init() {

//     setupmodebuttons();
//     setupsquares();
//     reset();
// }

// function setupmodebuttons(){
//     for(var i = 0; i < modeButtons.length; i++){
//         modeButtons[i].addEventListener("click", function(){
//             modeButtons[0].classList.remove("selected");
//             modeButtons[1].classList.remove("selected");
//             this.classList.add("selected");

//             this.textContent === "Easy"? numsquare = 3 : numsquare = 6;

//             reset();
//         });
//     }
// }

// function setupsquares(){
//     for(var i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
    
//         squares[i].addEventListener('click', function() {
//             var clicked_color = this.style.backgroundColor;
//             if(clicked_color === pickedColor) {
//                 message_display.textContent = "Correct";
//                 resetButton.textContent = "Play Again";
//                 change_colors(clicked_color);
//                 h1.style.backgroundColor = clicked_color;
//             }else {
//                 this.style.backgroundColor = "#232323";
//                 message_display.textContent = "Try Again";
//             }
//         });
//     }
// }

// function reset() {
//     colors = generateRandomColors(numsquare);
//     pickedColor = pick_color();
//     colorDisplay.textContent = pickedColor;
//     this.textContent = "New Colors"
//     message_display.textContent = "";

//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.display = "block";
//             squares[i].style.backgroundColor = colors[i];
//         }else{
//             squares[i].style.display = "none";
//         }
//     }
//     h1.style.background = "steelblue";

// }

// // var easyBtn = document.querySelector("#easyBtn");
// // var hardBtn = document.querySelector("#hardBtn");

// // easyBtn.addEventListener("click", function() {
// //     hardBtn.classList.remove("selected");
// //     easyBtn.classList.add("selected");
// //     numsquare = 3;
// //     colors = generateRandomColors(numsquare);
// //     pickedColor = pick_color();
// //     colorDisplay.textContent = pickedColor;
// //     for(var i = 0; i < squares.length; i++){
// //         if(colors[i]){
// //             squares[i].style.backgroundColor = colors[i];
// //         }else {
// //             squares[i].style.display = "none";
// //         }
// //     }
// // });

// // hardBtn.addEventListener("click", function() {
// //     hardBtn.classList.add("selected");
// //     easyBtn.classList.remove("selected");
// //     numsquare = 6;
// //     colors = generateRandomColors(numsquare);
// //     pickedColor = pick_color();
// //     colorDisplay.textContent = pickedColor;
// //     for(var i = 0; i < squares.length; i++){
// //         squares[i].style.backgroundColor = colors[i];
// //         squares[i].style.display = "block";
// //     }
// // });

// var h1 = document.querySelector("h1");

// var resetButton = document.querySelector("#reset");

// resetButton.addEventListener("click", function(){
//     // colors = generateRandomColors(numsquare);
//     // pickedColor = pick_color();
//     // colorDisplay.textContent = pickedColor;
//     // this.textContent = "New Colors"
//     // message_display.textContent = "";

//     // for(var i = 0; i < squares.length; i++){
//     //     squares[i].style.backgroundColor = colors[i];
//     // }
//     // h1.style.background = "steelblue";

//     reset();
// });

// // for(var i = 0; i < squares.length; i++){
// //     squares[i].style.backgroundColor = colors[i];

// //     squares[i].addEventListener('click', function() {
// //         var clicked_color = this.style.backgroundColor;
// //         if(clicked_color === pickedColor) {
// //             message_display.textContent = "Correct";
// //             resetButton.textContent = "Play Again";
// //             change_colors(clicked_color);
// //             h1.style.backgroundColor = clicked_color;
// //         }else {
// //             this.style.backgroundColor = "#232323";
// //             message_display.textContent = "Try Again";
// //         }
// //     });
// // }

// function change_colors(color){
//     for(var i=0; i < squares.length; i++){
//         squares[i].style.backgroundColor = color;
//     }
// }

// function pick_color() {
//     var random = Math.floor(Math.random()*colors.length);
//     return colors[random];
// }

// function generateRandomColors(num) {
//     var arr=[];
//     for(var i = 0; i < num; i++){
//         arr.push(random_Color());
//     }
//     return arr;
// }

// function random_Color() {
//     var r = Math.floor(Math.random()*256);
//     var g = Math.floor(Math.random()*256);
//     var b = Math.floor(Math.random()*256);

//     return "rgb(" + r + ", " + g + ", " + b + ")";
// }

// SIMPLIFIED CODE

var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("color_display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}



function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

