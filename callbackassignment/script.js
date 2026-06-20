 function greet(callback) {
    console.log("Hello User");
    callback();
}

function sayWelcome() {
    console.log("Welcome to JavaScript!");
}

greet(sayWelcome);



function sayBye() {
    console.log("Goodbye!");
}

function executeCallback(callback) {
    console.log("Executing callback...");
    callback();
}

executeCallback(sayBye);



setTimeout(() => {
    console.log("Welcome");
}, 2000);