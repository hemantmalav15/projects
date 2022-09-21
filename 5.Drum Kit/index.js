// if we put paranthesis after handleClick in addEventListener then function got called without clicking
// the button that's why we pass only function name so tha if button got clicked it invoke the function 

// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick(){
//     alert("I got clicked");
// }

// another way of writing same way is - using anonymous function(that doesn't have function name)
let numberOfButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        // console.log(this); will gives us the current object (or current button that got clicked)
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// this listen when key is pressed using keyboard
document.addEventListener("keypress",function(event){
    //event.key gives us the key or(char) that pressed on keyboard
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key){
    switch (key) {
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            break;
    }
}
function buttonAnimation(key){
    //why we are adding "." becoz querySelector takes class selector as we select in css we have to use
    //.className and key that are passing us is just simply name of class so we are putting "." here
    let activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    //after adding this class we have to remove it but after some delay also so that animation can be shown
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}