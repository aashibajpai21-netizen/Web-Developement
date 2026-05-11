function calculateGrossSalary(basic){

    let hra = 0;
    let da = 0;

    if(basic < 10000){

        hra = basic * 0.20;
        da = basic * 0.80;

    }

    else if(basic <= 20000){

        hra = basic * 0.25;
        da = basic * 0.90;

    }

    else{

        hra = basic * 0.30;
        da = basic * 0.95;

    }

    const gross = basic + hra + da;

    return{
        basic,
        hra,
        da,
        gross
    };

}


// Calculate Button

document.querySelector(".btn1").addEventListener("click",()=>{

    const salary = Number(document.getElementById("salary").value);

    const error = document.getElementById("error");

    const success = document.getElementById("success");

    error.innerText = "";

    success.classList.add("d-none");



    if(document.getElementById("salary").value === ""){

        error.innerText = "Please enter salary";
        return;

    }

    if(isNaN(salary) || salary < 0){

        error.innerText = "Enter valid salary";
        return;

    }




    const button = document.querySelector(".btn1");

    const spinner = document.getElementById("spinner");

    button.disabled = true;

    spinner.classList.remove("d-none");


});