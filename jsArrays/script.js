let arr=[12,34,56,87,42,17];
for(var i=0;i<7;i++){
    console.log(arr[i]);
}
console.log(arr);
arr[2]=arr[2]+10;
console.log(arr);

arr.push(99);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(11);
console.log(arr);
arr.shift();
console.log(arr);
console.log(arr.at(6));
console.log(arr.indexOf(89));
console.log(arr.includes(89));
let unar=[56,23,89,34,7,8,56,78,7];
unar.sort();
console.log("For each loop")
console.log(unar);
//this uses merge and quick sort internally
unar.forEach((element)=>{
    console.log(element);
});