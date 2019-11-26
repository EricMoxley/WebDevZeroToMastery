//arrays examples

var list = ["tiger", "cat", "bear", "bird"];
console.log(list[0]);
//^ Gets "tiger"

//^ list gets full list in browser console

list.shift();
"tiger"
//^removes tiger, shifts list to left
list.pop();
"bird"
//^removes bird
list.push("elephant");
//^adds elephant
list.concat(["bee", "deer"]);
//^adds bee and deer to end of list
list.sort();
//^sorted list by alphabetical order (sorts original list until new adds are assigned to a var)