let arr=[];
arr.push(19);
arr.push(20);
console.log(arr);
let arr1=[1,2,3,4,5];
console.log(arr1);
for(var i=0;i<6;i++)
{
    console.log(arr1[i]);
}

let users = [
{ id: 1, name: "Raj" },
{ id: 2, name: "Amit" }
];

console.log(users); // All data

console.log(users[0]); // First item

console.log(users.find(user => user.id === 2));
let user=users.find(user=> user.id===2);
if(user){
    user.name="Rahul";
}
console.log(users);




//let user1=users.filter(user1 => user1 =="Rahul");
//console.log(user1);
let user1=users.filter(user1=> user1.id !==1);
console.log(user1);//raj is removed
users.push((21));
users.push(22);
console.log(users);

let user2=users.find(user2 => user2.id ===2);
if(user2){
    user2.name="Amit";
}
console.log(user2);
//updated list
console.log(users);


users.push(30);
users=users.filter(u => u.id !==1);
console.log("updated users: "+users);


  
