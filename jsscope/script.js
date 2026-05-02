var a1=5;
console.log(a1);
console.log(b1);
var b1=10;
console.log(a1);
console.log(b1);



let test="this is global test variable "
function classA(){
console.log("classA", test );
}
function classB(){
    console.log("classB",test);
}
function classC(){
    let test2="thius is local variable"
    console.log("classC",test);
    console.log("classC",test2);
}

//local vARIABLE CAN BE A BLOCK VARIABLE BUT BLOCK VARIABLE CANNOT BE A LOCAL VARIABLE
{
    let a=5;
    function classF(){
        console.log("classF",test);
        console.log(a);
    }
    function classG(){
        console.log("")

    }
}
classA()
classB()
classC()


let a2;
let b2;
let c2;
a2=10;
console.log(a2);
console.log(b2);
console.log(c2);
 b1=15;
 console.log(a2);
console.log(b2);
console.log(c2);
//Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope before code execution.

//Because of hoisting, variables and functions can sometimes be used before they are declared in the code.
 
//due to hoisting nature we can call function before declaration
abc();
function abc(){
    console.log("i am a function")
}
let R=123;
console.log(R);

