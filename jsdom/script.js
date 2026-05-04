function Submit() {
  console.log("Submit btn click");
  const fn = document.getElementById("fullName").value;
  console.log(fn);
  document.getElementById("myData").innerText = fn;
  document.getElementById("myData2").innerText = fn;
  document.getElementById("fullName").value = "";
}
