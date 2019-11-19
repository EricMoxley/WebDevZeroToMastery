var database = [
    {
        username: "eric",
        password: "secret"
    },
    {
        username: "vincent",
        password: "123"
    },
    {
        username: "moxley",
        password: "777"
    }
];

var newsFeed = [
    {
        username: "Bob",
        timeline: "So tired from all that learning."
    },
    {
        username: "Sally",
        timeline: "Javascript is so cool."
    },
    {
        username: "George",
        timeline: "Python is better!"
    }
];


function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
                return true;
            }
    }
    return false;
}
// ^^Loop for checking isUserValid in var database. if returns true if ===. If not, it returns false. Check below.

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password!");
    }
}
// ^^Function does if valid, give console.log newsfeed, if not, give alert "sorry."

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);