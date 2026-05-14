document
  .getElementById("registrationFrom")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const fn = document.getElementById("fullName").value;
    const gender = document.querySelector("input[name='gender']:checked")?.value;
     const email = document.getElementById("email").value;
    
     const phone = document.getElementById("phone").value;
      const dob = document.getElementById("dob").value;
       const qualification = document.getElementById("qualification").value;
        const marks = document.getElementById("marks").value;
         const course = document.getElementById("course").value;
          const markss= document.getElementById("marks").value;
          
           const city = document.getElementById("city").value;
            const pincode = document.getElementById("pin").value;
         

         const registrationData = {
          "fullName":  fn,
          "Email ": email,
          "gender": gender,
          "phone": phone,
          "dob": dob,
          "qualification": qualification,
          "marks": marks,
          "course": course,
          "city": city,
          "pincode": pin,


         }

  

    const timings = [];

    document
      .querySelectorAll("input[name='timings']:checked")
      .forEach((item) => {
        timings.push(item.value);
      });

    console.log(gndr);

    console.log(timings);
  });

// ResetButton //date calculation 
document
  .getElementById("registrationFrom")
  .addEventListener("reset", (event) => {
    event.preventDefault();

    window.location.reload();
  });

  function validateData(data){
    let isValid = true;
    if(!data.fullName){
      document.getElementById
    }
  }
  function validateData(data{
    let isValid = true;
    if(!/^[A-Za-z\d\.\_]+ @(gmail.com|outlook.com$/.test(data.Email)){
      document.getElementById("emailError").innerText="Only standard email format allowed with gmail.com"
    }
  })