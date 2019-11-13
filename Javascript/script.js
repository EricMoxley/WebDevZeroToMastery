4 + 3;

if (4+3 === 7) {
    console.log ("Correct!");
    console.log ("Correct!");
    console.log ("Correct!");
    console.log ("Correct!");
} //^function    ^argument

//one way of writing.
function sayHello() {
    console.log("Hello");
}
sayHello();
//second way of writing.
var sayBye = function () {
    console.log("Bye");

}
sayBye();


/* function multiply(a, b) {
    if (a > 10 || b > 10) {
        return "that's too hard";
    } else {
        return a*b;
    }
    return a*b;
} */
//^ type multiply(5, 10); in console to use. if either numbers are higher than 10, it prompts return "thats too hard"

                  //paramters = a, b
function multiply (a, b) {
    return a*b;
}
                    //arguments = 4, 5
var total = multiply(4, 5);
    alert(total);
//^ will alert total of multiply on page load

parameters
arguments