console.log(a); // Before declaration

var a = 10;

console.log(a); // After declaration
var a = 10; // Global variable

function test() {
    var b = 20;

    console.log(a + b);
}

test();