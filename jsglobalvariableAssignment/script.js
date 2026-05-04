
//global variable
var schoolName="ABC school";
 console.log(schoolName);

 var add="abcd";
 function adds(){
    console.log(add);
 }
 adds();
//local variable
function aashi(){
    var name="aashi";
    console.log(name);
}
aashi();

//function aashi1(){
   // var name1="shubh";
    //console.log(name1);
//}
//console.log(name1);
//aashi1();

function classroom(){
    if(true){
        let sub="subtract";
        let mult="multiply";
        console.log(sub);
        console.log(mult);
    }
}
classroom();


//function classroom(){
  //  if(true){
     //   let sub="subtract";
       // let mult="multiply";
        //console.log(sub);
        //console.log(mult);
    //}
    //console.log(sub);
    //console.log(mult);
//}
//classroom();

{
    const city = "Bhopal";
    console.log(city);
}
//console.log(city);
 
//global
var fifth="abcd";
function aashi2(){
    //local
    const city1="indore";
    {
        //block
        const city2="Mumbai";
        console.log(city2);
    }
    console.log(city1);

}
console.log(fifth);
aashi2();
console.log(fifth);


function student(){
    if(true){
        var a= 10;
        let b=20;
        const c=30;
        console.log("Inside Block")
        console.log(a);
        console.log(b);
        console.log(c);
    }
    console.log("outside block")
    console.log(a);
    console.log(b);
    console.log(c);
}
student();


