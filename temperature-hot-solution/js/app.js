const API_KEY = `7ffb793b50bc090f7b04d45536437daa`;
const searchTemperature = () => {
    const cityName = document.getElementById('city-name');
    const city = cityName.value;
    cityName.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('weather', temperature.weather[0].main);
    // set weather icon 
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('w-icon');
    imgIcon.setAttribute('src', url);
}