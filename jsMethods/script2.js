
//function Expression
//function expression  usually cannot be written with let
//to prevent accidental change we use const 
const abc=function(){
console.log("Hello World");
};
console.log(abc);//in this abc is a callback function
//function calling 


abc();
//Arrow Function
const arrowfun=()=>{
    console.log("I am Arrow Function");
};
arrowfun();
const addarrow=(a,b) => a+b;

console.log(addarrow(5,6));

let greetUser = name => {
    console.log("Hello " + name);
};

greetUser("Rahul");

