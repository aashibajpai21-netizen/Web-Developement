console.log(a); 

var a = 10;

console.log(a);
var a = 10; 

function test() {
    var b = 20;

    console.log(a + b);
}

test();

function functionA() {
    console.log("Inside Function A");

    functionB();

    console.log("Function A Ends");
}

function functionB() {
    console.log("Inside Function B");
}

functionA();

var name = "Global Variable";

function test() {
    var name = "Function Variable";

    console.log(name); // Function scope variable
}

test();

console.log(name); // Global variable
function test() {
    console.log(this);
}

test();

const student = {
    name: "Aashi",
    age: 21,

    details: function () {
        console.log(this.name);
        console.log(this.age);
    }
};

student.details();

console.log(a); 

var a = 10;
let b = 20;
const c = 30;

console.log(a);
console.log(b);
console.log(c);

function functionA() {
    console.log("Inside Function A");

    functionB();

    console.log("Function A Finished");
}

function functionB() {
    console.log("Inside Function B");
}

console.log("Global Execution Starts");

functionA();

console.log("Global Execution Ends");