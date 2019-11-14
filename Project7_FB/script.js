const database = [
    {
        username: "eric",
        password: "secret"
    }
];

const newsFeed = [
    {
        username: "Bob",
        timeline: "So tired from all that learning."
    },
    {
        username: "Sally",
        timeline: "Javascript is so cool."
    }
];

const userNamePrompt = prompt("What's your username?");
const passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
    if (user === database[0].username && 
        pass === database[0].password){
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password!");
    }
}

signIn(userNamePrompt, passwordPrompt);