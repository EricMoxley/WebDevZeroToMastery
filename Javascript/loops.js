//array
const basket = ['apples', 'oranges', 'grapes'];

//object
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000,
}

//1st type
for ( let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

//2nd type
basket.forEach(item => {
    console.log(item);
})

// for of
// 'Iterating' - arrays, strings
for (item of basket) {
    console.log(item);
}

// for in - Properties
// 'enumerating - objects
for (item in detailedBasket) {
    console.log(item)
}