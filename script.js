const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "2a16487f7a30942e5606896e75c3287a",
}

const input = document.querySelector("#input");
input.addEventListener("keydown", enter);

function enter(e) {
    if (e.keyCode === 13) {
        getInfo(input.value);
    }
}

async function getInfo(data) {
    const res = (await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`));
    const result = await res.json();
    displayResult(result);
}

function displayResult(result) {
    let city = document.querySelector("#city");
    city.textContent = `${result.name}, ${result.sys.country}`;

    getOurDate();

    let temperature = document.querySelector("#temperature");
    temperature.textContent = `${Math.round(result.main.temp)}°C`;
    console.log(result);

    let feelsLike = document.querySelector("#feelslike");
    feelsLike.textContent = `Feels like: ${Math.round(result.main.feels_like)}°C`

    let conditions = document.querySelector("#conditions");
    conditions.textContent = `${result.weather[0].main}`;

    let varation = document.querySelector("#varation");
    varation.textContent = `Min: ${Math.round(result.main.temp_min)}°C, Max: ${Math.round(result.main.temp_max)}°C`;
}

function getOurDate() {
    const myDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = days[myDate.getDay()];

    let todayDate = myDate.getDate();

    let month = months[myDate.getMonth()];

    let year = myDate.getFullYear();

    let showDate = document.querySelector("#date");
    showDate.textContent = `${day}` + " " + `${todayDate}` + " " + `${month}` + " " + `${year}`;
}






