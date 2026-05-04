//normal hoisting 
console.log(a);
var a=10;
console.log(a);
//hoisting with function declaration
meet();
function meet(){
    console.log("Meet");
}
 var meet1;
 console.log("before intialisation",meet1);
 meet1="lets meet";
 console.log("after initialisation",meet1)

 //console.log(a1);
 //let a1=10;

 //console.log(b1);
 //const b1=20;
  greet();//hoisting with function expression
 function greet(){
    console.log(" lets greet");
 }

//say();
 var say=function(){// function expression
    console.log("let the work be done")
 }
 say();
 //function expression is behave like variable

 console.log(greet2);

//greet2(); 

// Function expression
var greet2 = function () {
    console.log("Hello");
};

{
    //console.log(b3);
    let b3=10;
    console.log(b3);

}

console.log(g);//this shows undefined meaning this can be accessed before declaration
var g=10;
console.log(g);

console.log(c);//this caused reference error this can be accessed in temporal dead zone
let c=20;
console.log(c);




 