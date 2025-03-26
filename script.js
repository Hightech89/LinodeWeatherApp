function getWeather() {
    const apiKey = f35235e5549be7a03d307545321640ce; // Replace with your OpenWeatherMap API key
    const city = document.getElementById("cityInput").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            const weatherDisplay = document.getElementById("weatherDisplay");
            weatherDisplay.innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        })
        .catch(error => {
            const weatherDisplay = document.getElementById("weatherDisplay");
            weatherDisplay.innerHTML = `<p>Error: ${error.message}</p>`;
        });
}