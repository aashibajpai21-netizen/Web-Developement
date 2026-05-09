document.querySelector("form").addEventListener("submit",(event) => {
    event.preventDefault();
    const dob= document.getElementById("DOB").value ;
    const curDate = document.getElementById("CurrentDate").value ;


    const Age=Number(curDate.split("-")[0])-Number(dob.split("-")[0]);
    
    const birthMonth = Number(dob.split("-")[1]);
     const currentMonth = Number(curDate.split("-")[1]);
      const birthDay = Number(dob.split("-")[2]);
       const currentDay = Number(curDate.split("-")[2]);
       if(
        currentMonth < birthMonth ||
        (currentMonth === birthMonth && currentDay < birthDay)
    ){
        Age--;
    }
     document.getElementById("DOB").value=" ";
    document.getElementById("CurrentDate").value="";
    document.getElementById("MyAge").innerText = Age;

    
});