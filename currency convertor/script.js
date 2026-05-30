const country1 = document.getElementById("country1");

const country2 = document.getElementById("country2");

const amount = document.getElementById("amount");

const btn = document.getElementById("btn");

const result = document.getElementById("result");
async function loadCountries() {

    const response = await fetch("sample.json");

    const data = await response.json();

 data.forEach((country) => {
        const option1 =
        document.createElement("option");

        option1.value =
`${country.Currency_Code.toLowerCase()},${country.Country_Code}`;

        option1.textContent =
`${country.Country} (${country.Currency_Code})`;

        // Create second dropdown option
        const option2 =
        option1.cloneNode(true);

        // Add into dropdowns
        country1.appendChild(option1);
         country2.appendChild(option2);
    });

    const amount =
