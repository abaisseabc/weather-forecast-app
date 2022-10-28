// api key = 5808708a7b778551ef1ba86c7f6d13fb

let weatherBlock = document.querySelector('.weather'), 
    searchInput = document.querySelector('.search__input'),
    searchBtn = document.querySelector('.search__btn')


let city = 'Krasnodar', key = '5808708a7b778551ef1ba86c7f6d13fb';

const getWeatherFromApi = async function () {
    try {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5808708a7b778551ef1ba86c7f6d13fb`)
        const weather = await res.json();
    
    
        let temperature = Math.floor(weather.main.temp) - 273;
        let feelsLike = Math.floor(weather.main.feels_like) - 273;
    
        html =
        `
            <h1 class="weather__city">Ваш город: ${city}</h1>
            <p class="weather__temperature">Температура воздуха: ${temperature}</p>
            <p class="weather__feels_like">Температура ощущается как: ${feelsLike}</p>
        `
        weatherBlock.insertAdjacentHTML('beforeend', html);
    
        document.addEventListener('keydown', (e) => {
            if(e.key === 'Enter') {
                getValueInInput();
            }
        });
    
        searchBtn.addEventListener('click', getValueInInput);
    }
    catch {
        alert('This city not found');
        city = 'Krasnodar';
        getWeatherFromApi();
        searchInput.value = '';
    }
}

getWeatherFromApi();

function getValueInInput() {
    let value = searchInput.value;

    if(!value) {
        return false;
    }

    city = value;
    weatherBlock.innerHTML = '';
    getWeatherFromApi();
    searchInput.value = '';
}