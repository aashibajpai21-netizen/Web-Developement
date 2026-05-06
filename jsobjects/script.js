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
