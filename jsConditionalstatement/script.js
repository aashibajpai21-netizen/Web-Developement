let n = 95;

if(n>=90){
    console.log("A");
}
else if(n>=75){
    console.log("B");
}
else if(n>=50){
    console.log("C");
}
else{
    console.log("fail");
}


let usr="abcde"
let pass="12345"
if(usr=== "abcde" && pass==="12345"){
    console.log("login success");
}
else{
 console.log("login failed")
}

let n1=0;
if(n1%2==0){
    console.log("even number")
}
else{
    console.log("odd number")
}

let a=1;
let b=5;
console.log(a>2 || b>6)

let data;
let name="";
data=name || "N/A"
console.log(data);
//if(name){
 //   data=name;
//} else{
  //  data="N/A";
//}
//console.log(data);
//in and first is false then other is not checked
// in or first is true then other is not checked

let x=20;
{//when we use gates if first value is false then next  condition is not checked
console.log(x>10 || y<=5)
}

//example for break and continue
for(let i=0;i<5;i++){
    if(i==3){
        continue;
    }
    console.log(i);
}

let choice;

