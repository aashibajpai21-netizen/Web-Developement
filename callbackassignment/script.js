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


console.log("Start");

setTimeout(() => {
    console.log("Async Task");
}, 3000);

console.log("End");

setTimeout(() => {
    console.log("Step 1");

    setTimeout(() => {
        console.log("Step 2");
    }, 2000);

}, 1000);


function takeOrder(callback) {
    setTimeout(() => {
        console.log("Order Taken");
        callback();
    }, 1000);
}

function cooking(callback) {
    setTimeout(() => {
        console.log("Cooking");
        callback();
    }, 2000);
}

function served(callback) {
    setTimeout(() => {
        console.log("Served");
    }, 1000);
}

// Nested callbacks
takeOrder(() => {
    cooking(() => {
        served();
    });
});