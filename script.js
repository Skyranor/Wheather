const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "a1849d2bdc364c868a79d7446a02b62d",
}

const cities =  {
    2643743: "London",
    625144: "Minsk",
    3084826: "Gdansk",
    703448: "Kyiv",
    5391959: "San Francisco",
    2950158: "Berlin",
    2172517: "Canberra",
 }

function getWeather() {
    const cityId = document.querySelector('#city').value;
	fetch(`${param.url}weather?id=${cityId}&units=metric&appid=${param.appid}`)
	.then(weather => {
			return weather.json();
		}).then(showWeather);

}

function createElements() {
    let card = document.querySelector('.card');
    let select = document.createElement('select');

    select.setAttribute('id', 'city');
    card.prepend(select);
    for (let key in cities) {
        let option = document.createElement('option');
        select.append(option);
        option.value = key;
        option.textContent = cities[key];
    }
} 


function showWeather(data) {
    document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + '&deg;';
    document.querySelector('.factor').innerHTML = data.weather[0].description;
    document.querySelector('.date').innerHTML = new Date().toLocaleDateString().split('.').join('. ');
    document.querySelector('.content-img').src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";;
    document.querySelector('.wind').textContent = 'Wind: ' + data.wind.speed + ' m/s';
    document.querySelector('.hum').textContent = 'Hum: ' + data.main.humidity + ' %';
	console.log(data);
}

createElements()
getWeather(); 

document.querySelector('#city').onchange = getWeather;



