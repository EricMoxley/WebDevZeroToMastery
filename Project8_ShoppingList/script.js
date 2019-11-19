var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
//^Cache query
function inputLength() {
    return input.value.length;
};

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);    
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    };
};

function addListAfterKeypress(event){
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    };
};
//^4 functions created for create list to add to child, add to list after a click, add to list after keypress code 13 (enter)

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

//^button and input listener actions, then function it calls back (callback functions) for that we created above.