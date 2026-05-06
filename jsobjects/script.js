const persons = [
  {
    name: "Aarav Sharma",
    mobile: "9876543210",
    profession: "Software Engineer",
    place: "Bhopal"
  },
  {
    name: "Priya Verma",
    mobile: "9123456780",
    profession: "Teacher",
    place: "Indore"
  },
  {
    name: "Rohan Mehta",
    mobile: "9988776655",
    profession: "Doctor",
    place: "Delhi"
  },
  {
    name: "Sneha Patel",
    mobile: "9090909090",
    profession: "Designer",
    place: "Mumbai"
  },
  {
    name: "Karan Singh",
    mobile: "9345678123",
    profession: "Photographer",
    place: "Jaipur"
  }
];

persons.forEach((item)=>{
    console.log(item["name"])
});
persons.map((element, idx)=> {
    console.log(idx);
    console.log(element.mobile)
});
console.log(persons);
console.log(persons[1]["name"]);//bracket notation
console.log(persons[1].name);//dot notation

let vishal={
     name: "Karan Singh",
    mobile: "9345678123",
    profession: "Photographer",
    place: "Jaipur"

}
console.log(Object.keys(vishal));
console.log(Object.values(vishal));


let ar=[33,23,45,67,78,99,90,89];
ar.sort((a,b)=> a-b);
console.log(ar);
console.log(ar.find((val) => val===1));
console.log (ar.findIndex((val) => val ===1));
console.log(ar.findLastIndex((val) => val ===6));

let arr2=[22,43,6,74,43,23,78,90,56]
console.log(arr2);
console.log(arr2.filter((val) => val>20));//gives tge multi search
console.log(arr2.find((val) => val>20));//gives single search and give first occurrence of successful
console.log(arr2.slice(0,7));
let ar2="this is my name";
console.log(ar2);
console.log(split());