console.log(a); // Before declaration

var a = 10;

console.log(a); // After declaration
var a = 10; // Global variable

function test() {
    var b = 20;

    console.log(a + b);
}

test();
function functionA() {
    console.log("Inside Function A");

    functionB();

    console.log("Back to Function A");
}

function functionB() {
    console.log("Inside Function B");
}

console.log("Start");

functionA();

console.log("End");

// Global variable
let message = "Hello from Global Scope";

function testScope() {

    let message = "Hello from Function Scope";

    console.log("Inside Function:", message);
}
testScope();

// Accessing global variable
console.log("Outside Function:", message);
// Non-Strict Mode
function nonStrictFunction() {
    console.log("Non-Strict Mode:", this);
}

nonStrictFunction();

function step1(callback) {
    setTimeout(() => {
        console.log("Step 1: Data Fetching");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2: Data Processing");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3: Data Saving");
        callback();
    }, 1000);
}

function step4() {
    setTimeout(() => {
        console.log("Step 4: Task Completed");
    }, 1000);
}

// Nested callbacks
step1(() => {
    step2(() => {
        step3(() => {
            step4();
        });
    });
});