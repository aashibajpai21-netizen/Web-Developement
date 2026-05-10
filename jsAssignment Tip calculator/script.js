  function calculateTip(){

            const bill = Number(document.getElementById("bill").value);

            const service = Number(document.getElementById("service").value);

            const people = Number(document.getElementById("people").value);

            const tip = bill * service;

            const totalBill = bill + tip;

            const perPerson = totalBill / people;

            document.getElementById("result").style.display = "block";

            document.getElementById("answer").innerText =
            "rupees " + perPerson.toFixed(2);
  }