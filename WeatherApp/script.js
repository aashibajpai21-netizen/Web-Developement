const API_KEY = "d070e18e69a539057e6e85dd962a6941";

let weatherData = {};

async function getWeather() {

    try {

        const cityName =
            document.getElementById("cityName").value.trim();

        if (!cityName) {
            alert("Enter a city name");
            return;
        }

        const { latitude, longitude } =
            await getGeoLocation(cityName);

        const WEATHER_API =
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

        const response = await fetch(WEATHER_API);

        const data = await response.json();

        const temperature =
            (data.main.temp - 273.15).toFixed(1);

        document.getElementById("cityText").innerText =
            `${data.name}, ${data.sys.country}`;

        document.getElementById("dateText").innerText =
            new Date().toDateString();

        document.getElementById("Temperature").innerText =
            temperature;

        document.getElementById("humidity").innerText =
            data.main.humidity + "%";

        document.getElementById("wind").innerText =
            data.wind.speed + " m/s";

        document.getElementById("visibility").innerText =
            (data.visibility / 1000) + " km";

        document.getElementById("pressure").innerText =
            data.main.pressure + " hPa";

        document.getElementById("condition").innerText =
            data.weather[0].main;

        const icon =
            data.weather[0].icon;

        document.getElementById("weatherIcon").src =
            `https://openweathermap.org/img/wn/${icon}@4x.png`;

        weatherData = {
            temperature,
            humidity: data.main.humidity,
            wind: data.wind.speed,
            condition: data.weather[0].main
        };

    } catch (error) {

        alert("City not found");

        console.log(error);
    }
}

async function getGeoLocation(city) {

    const GEO_LOC_API =
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

    const response = await fetch(GEO_LOC_API);

    const data = await response.json();

    if (data.length === 0) {
        throw new Error("City not found");
    }

    return {
        latitude: data[0].lat,
        longitude: data[0].lon
    };
}


function askAI() {

    const question =
        document.getElementById("question")
        .value
        .toLowerCase();

    let answer = "";

    if (question.includes("umbrella")) {

        answer =
            weatherData.condition.toLowerCase().includes("rain")
                ? "☂️ Carry an umbrella."
                : "☀️ No umbrella needed.";

    } else if (question.includes("jog")) {

        answer =
            weatherData.temperature < 35
                ? "🏃 Great weather for jogging."
                : "🔥 Too hot for jogging.";

    } else if (question.includes("clothes")) {

        answer =
            weatherData.temperature > 30
                ? "👕 Wear light cotton clothes."
                : "🧥 Consider a light jacket.";

    } else {

        answer =
            "🤖 Ask about umbrella, clothes, jogging or outdoor activities.";
    }

    document.getElementById("chatBox").innerHTML =
        `<b>You:</b> ${question}<br><br><b>AI:</b> ${answer}`;
}