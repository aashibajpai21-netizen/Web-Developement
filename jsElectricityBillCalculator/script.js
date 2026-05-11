document.getElementById("calculate").addEventListener("click", () => {

    const units = Number(document.getElementById("units").value);

    let firstSlabUnits = 0;
    let secondSlabUnits = 0;
    let thirdSlabUnits = 0;
    let fourthSlabUnits = 0;

    let firstSlabCharge = 0;
    let secondSlabCharge = 0;
    let thirdSlabCharge = 0;
    let fourthSlabCharge = 0;

    if (units <= 50) {

        firstSlabUnits = units;
        firstSlabCharge = firstSlabUnits * 0.50;

    } 
    
    else if (units <= 200) {

        firstSlabUnits = 50;
        firstSlabCharge = 50 * 0.50;

        secondSlabUnits = units - 50;
        secondSlabCharge = secondSlabUnits * 0.75;

    } 
    
    else if (units <= 450) {

        firstSlabUnits = 50;
        firstSlabCharge = 50 * 0.50;

        secondSlabUnits = 150;
        secondSlabCharge = 150 * 0.75;

        thirdSlabUnits = units - 200;
        thirdSlabCharge = thirdSlabUnits * 1.20;

    } 
    
    else {

        firstSlabUnits = 50;
        firstSlabCharge = 50 * 0.50;

        secondSlabUnits = 150;
        secondSlabCharge = 150 * 0.75;

        thirdSlabUnits = 250;
        thirdSlabCharge = 250 * 1.20;

        fourthSlabUnits = units - 450;
        fourthSlabCharge = fourthSlabUnits * 1.50;

    }

    let subtotal =
        firstSlabCharge +
        secondSlabCharge +
        thirdSlabCharge +
        fourthSlabCharge;

    let surcharge = 0;

    if (subtotal > 300) {
        surcharge = subtotal * 0.20;
    }

    let grandTotal = subtotal + surcharge;

    

});

