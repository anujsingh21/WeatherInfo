const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "6bfb5077b1mshd273b1b8a895803p1900f9jsn6e161426a4c9",
		"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
	},
};

const getWeather = (city) => {
	document.getElementById("cityName").innerHTML = city;
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
		.then((response) => response.json())
		.then((response) => {
			console.log(response);
			document.getElementById("cloud_pct").innerHTML = response.cloud_pct;
			document.getElementById("temp").innerHTML = response.temp;
			document.getElementById("temp2").innerHTML = response.temp;
			document.getElementById("feels_like").innerHTML = response.feels_like;
			document.getElementById("humidity").innerHTML = response.humidity;
			document.getElementById("humidity2").innerHTML = response.humidity;
			document.getElementById("min_temp").innerHTML = response.min_temp;
			document.getElementById("max_temp").innerHTML = response.max_temp;
			document.getElementById("wind_speed").innerHTML = response.wind_speed;
			document.getElementById("wind_speed2").innerHTML = response.wind_speed;
			document.getElementById("wind_degrees").innerHTML = response.wind_degrees;
			document.getElementById("sunrise").innerHTML = response.sunrise;
			document.getElementById("sunset").innerHTML = response.sunset;
		})
		.catch((err) => console.error(err));
};

document.getElementById("submit").addEventListener("click", (e) => {
	e.preventDefault();
	const city = document.getElementById("city").value;
	getWeather(city);
});

getWeather("");

// Example to fetch weather for multiple cities
const fetchWeatherForCity = (city, prefix) => {
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
		.then((response) => response.json())
		.then((response) => {
			console.log(response);
			document.getElementById(`cloud_pct${prefix}`).innerHTML = response.cloud_pct;
			document.getElementById(`temp${prefix}`).innerHTML = response.temp;
			document.getElementById(`feels_like${prefix}`).innerHTML = response.feels_like;
			document.getElementById(`humidity${prefix}`).innerHTML = response.humidity;
			document.getElementById(`min_temp${prefix}`).innerHTML = response.min_temp;
			document.getElementById(`max_temp${prefix}`).innerHTML = response.max_temp;
			document.getElementById(`wind_speed${prefix}`).innerHTML = response.wind_speed;
			document.getElementById(`wind_degrees${prefix}`).innerHTML = response.wind_degrees;
			document.getElementById(`sunrise${prefix}`).innerHTML = response.sunrise;
			document.getElementById(`sunset${prefix}`).innerHTML = response.sunset;
		})
		.catch((err) => console.error(err));
};

fetchWeatherForCity("Shanghai", "c");
fetchWeatherForCity("Boston", "b");
fetchWeatherForCity("Lucknow", "l");
fetchWeatherForCity("Kolkata", "k");

// Ensure elements are displayed correctly on form submission
document.getElementById("submit").addEventListener("click", function(event) {
	event.preventDefault();
	const city = document.getElementById("city").value;
	document.querySelector('main').style.display = 'block';
	getWeather(city);
});
