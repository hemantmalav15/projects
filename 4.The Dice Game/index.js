//get random number between 1 - 6
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
// select the image file of that number
let randomImageSource = "images/dice" + randomNumber1 + ".png";

// select image 1
let img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImageSource);

//get random number between 1 - 6
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
// select the image file of that number
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// select image 2
let img2 = document.querySelectorAll("img")[1];
//set that random image on second image's position
img2.setAttribute("src", randomImageSource2);

//if num1 > num2 then num1 wins
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩 Play 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").textContent = "draw!";
}