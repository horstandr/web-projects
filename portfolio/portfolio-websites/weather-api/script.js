const apiKey = "eb209f22e4874ed488c84626240706";
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

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;


    const response = await fetch(apiUrl);

    console.log(response);

    if(!response.ok) {
        throw new Error("Please enter a good city.");

    }

    return await response.json();
}

function displayWeatherInfo(data) {
    console.log(data);
    const  {location: {name},
            current: {temp_c, humidity},
            current: {condition: {text, icon}}} = data;
    
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
    if (name.length > 8) {
        card.style.width = 'fit-content';
        cityDisplay.style.padding = '0 50px';
    } else {
        card.style.width = '550px';
        cityDisplay.style.padding = '20px';
        cityDisplay.style.marginTop = '0px';
    }

    const linkIcon = icon.split('//cdn.weatherapi.com/weather/64x64');
    const linklink = linkIcon[1];
    const iconIcon = 'https://cdn.weatherapi.com/weather/128x128' + linklink;
    console.log(iconIcon);

    cityDisplay.textContent = name;
    tempDisplay.textContent = `${temp_c} °C`;
    weatherDisplay.textContent = text.charAt(0).toUpperCase() + text.slice(1);
    emojiDisplay.innerHTML = getEmoji(iconIcon);
    humidityDisplay.textContent = `Humidity: ${humidity}%`;

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(weatherDisplay);
    card.appendChild(emojiDisplay);
    card.appendChild(humidityDisplay);

}   

function getEmoji(weatherImg) {
    return `<img width="200px" src="${weatherImg}"/>`;
}
