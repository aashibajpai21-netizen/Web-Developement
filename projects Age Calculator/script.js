document.querySelector("form").addEventListener("submit",(event) => {
    event.preventDefault();
    const dob= document.getElementById("DOB").value ;
    const curDate = document.getElementById("CurrentDate").value ;


    const Age=NUmber(curDate.split("-")[0])-Number(dob.split("-")[0]);
    documenjt.getElementById("DOB").value=" ";
    document.getElementById("CurrentDate").value="";
    document.getElementById("MyAge").innerText = Age;
    
});