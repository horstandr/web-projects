const apiKey = "5d2b1f20302db241ae9e9a15c63ddf1b";
const formCity = document.getElementById('formCity');
const card = document.getElementById('card');
const cardCity = document.getElementById('city');
const cardTemp = document.getElementById('temp');
const cardWeather = document.getElementById('weather');
const cardEmoji = document.getElementById('emoji');
const cardHumidity = document.getElementById('humidity');

var form = document.getElementById('weatherForm');

form.addEventListener('submit', async event => {
    
    event.preventDefault();

    const city = formCity.value;

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.log(error);
            displayError(error);
        }

        
    } else {
        displayError('Please enter a city!');
    }
});

function displayError(message) {
    
    const errorDisplay = document.createElement('p');
    errorDisplay.innerHTML = message;
    errorDisplay.classList.add('error');

    card.textContent = '';
    card.style.display = 'block';
    card.appendChild(errorDisplay);
}

async function getWeatherData(city) {

    const apiUrl = `https://api.openweathermap.org//data/2.5/weather?q=${city}&appid=${apiKey}`;


    const response = await fetch(apiUrl);

    console.log(response);

    if(!response.ok) {
        throw new Error("Could not fetch weather data");

    }

    return await response.json();
}

function displayWeatherInfo(data) {
    console.log(data);
    const  {name: city,
            main: {temp, humidity},
            weather: [{description, id}]} = data;
    
    card.textContent = '';
    card.style.display = 'block';

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("h2");
    const weatherDisplay = document.createElement("h3");
    const emojiDisplay = document.createElement("h1");
    const humidityDisplay = document.createElement("h3");
    
    cityDisplay.classList.add('city');
    tempDisplay.classList.add('temp');
    weatherDisplay.classList.add('weather');
    emojiDisplay.classList.add('emoji');
    humidityDisplay.classList.add('humidity');
    if (city.length > 8) {
        card.style.width = 'fit-content';
        cityDisplay.style.padding = '0 50px';
    } else {
        card.style.width = '550px';
        cityDisplay.style.padding = '20px';
        cityDisplay.style.marginTop = '0px';
    }

    

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${Math.round((temp - 273).toFixed(1))} °C`;
    weatherDisplay.textContent = description.charAt(0).toUpperCase() + description.slice(1);
    emojiDisplay.textContent = getEmoji(id);
    humidityDisplay.textContent = `Humidity: ${humidity}%`;

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(weatherDisplay);
    card.appendChild(emojiDisplay);
    card.appendChild(humidityDisplay);

}   

function getEmoji(weatherId) {
    switch(true) {
        case (weatherId >= 200 && weatherId < 300):
            return '⛈';
        case (weatherId >= 300 && weatherId < 400):
            return '🌧';
        case (weatherId >= 500 && weatherId < 600):
            return '🌧';
        case (weatherId >= 600 && weatherId < 700):
            return '❄';
        case (weatherId >= 700 && weatherId < 800):
            return '🌫';
        case (weatherId === 800):
            return '☀';
        case (weatherId >= 801 && weatherId < 810):
            return '☁';
        default:
            return '✨';
    }
}
