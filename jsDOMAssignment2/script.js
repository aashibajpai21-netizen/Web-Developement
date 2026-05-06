function submit() {
  console.log("submit btn clicked");
  const name = document.getElementById("fullName").value;
  console.log(name);
  const city = document.getElementById("fullName1").value;
  console.log(city);
  document.getElementById("dataName").innerText ="Name : " +  name;
  document.getElementById("dataCity").innerText ="City : " +  city;
  document.getElementById("displaydiv").classList.remove("d-none");
       document.body.style.backgroundColor = "orange";
}

