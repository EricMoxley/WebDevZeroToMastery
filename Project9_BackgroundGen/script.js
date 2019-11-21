var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + "," 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//Example of advanced control flow, ternary operator. 
condition ? expr1 : expr2

function isUserValid(bool) {
    return bool;
}
var answer = isUserValid(true) ? "You may enter" : "Access denied";

var automatedAnswer =
    "Your account $ is " + isUserValid(false) ? "1234" : "not available"

//Example of Switch statement (case, break)
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "left":
            whatHappens = "you found treasure";
            break;
        case "right":
            whatHappens = "you run into a river";
            break;
        default:
            whatHappens = "Please enter a valid direction";
    }
    return whatHappens;
}