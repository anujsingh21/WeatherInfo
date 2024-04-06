const options = {
	method: "GET",
	headers: {
			"X-RapidAPI-Key": "6bfb5077b1mshd273b1b8a895803p1900f9jsn6e161426a4c9",
			"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
	},
};

const getWeather = (city) => {
	cityName.innerHTML = city;
	fetch(
			"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
			options
	)
			.then((response) => response.json())
			.then((response) => {
					console.log(response);
					cloud_pct.innerHTML = response.cloud_pct;
					temp.innerHTML = response.temp;
					temp2.innerHTML = response.temp;
					feels_like.innerHTML = response.feels_like;
					humidity.innerHTML = response.humidity;
					humidity2.innerHTML = response.humidity;
					min_temp.innerHTML = response.min_temp;
					max_temp.innerHTML = response.max_temp;
					wind_speed.innerHTML = response.wind_speed;
					wind_speed2.innerHTML = response.wind_speed;
					wind_degrees.innerHTML = response.wind_degrees;
					sunrise.innerHTML = response.sunrise;
					sunset.innerHTML = response.sunset;
			})
			.catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value);
});

getWeather("");

const options2 = {
	method: "GET",
	headers: {
			"X-RapidAPI-Key": "6bfb5077b1mshd273b1b8a895803p1900f9jsn6e161426a4c9",
			"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
	},
};

fetch(
	"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai",
	options
)
	.then((response) => response.json())
	.then((response) => {
			console.log(response);
			cloud_pctc.innerHTML = response.cloud_pct;
			tempc.innerHTML = response.temp;
			feels_likec.innerHTML = response.feels_like;
			humidityc.innerHTML = response.humidity;
			min_tempc.innerHTML = response.min_temp;
			max_tempc.innerHTML = response.max_temp;
			wind_speedc.innerHTML = response.wind_speed;
			wind_degreesc.innerHTML = response.wind_degrees;
			sunrisec.innerHTML = response.sunrise;
			sunsetc.innerHTML = response.sunset;
	})
	.catch((err) => console.error(err));

	const options3 = {
			method: "GET",
			headers: {
					"X-RapidAPI-Key": "6bfb5077b1mshd273b1b8a895803p1900f9jsn6e161426a4c9",
					"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
			},
	};
	
	fetch(
			"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=boston",
			options
	)
			.then((response) => response.json())
			.then((response) => {
					console.log(response);
					cloud_pctb.innerHTML = response.cloud_pct;
					tempb.innerHTML = response.temp;
					feels_likeb.innerHTML = response.feels_like;
					humidityb.innerHTML = response.humidity;
					min_tempb.innerHTML = response.min_temp;
					max_tempb.innerHTML = response.max_temp;
					wind_speedb.innerHTML = response.wind_speed;
					wind_degreesb.innerHTML = response.wind_degrees;
					sunriseb.innerHTML = response.sunrise;
					sunsetb.innerHTML = response.sunset;
			})
			.catch((err) => console.error(err));

			const options4 = {
					method: "GET",
					headers: {
							"X-RapidAPI-Key": "6bfb5077b1mshd273b1b8a895803p1900f9jsn6e161426a4c9",
							"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
					},
			};
			
			fetch(
					"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow",
					options
			)
					.then((response) => response.json())
					.then((response) => {
							console.log(response);
							cloud_pctl.innerHTML = response.cloud_pct;
							templ.innerHTML = response.temp;
							feels_likel.innerHTML = response.feels_like;
							humidityl.innerHTML = response.humidity;
							min_templ.innerHTML = response.min_temp;
							max_templ.innerHTML = response.max_temp;
							wind_speedl.innerHTML = response.wind_speed;
							wind_degreesl.innerHTML = response.wind_degrees;
							sunrisel.innerHTML = response.sunrise;
							sunsetl.innerHTML = response.sunset;
					})
					.catch((err) => console.error(err));


					const options5 = {
							method: "GET",
							headers: {
									"X-RapidAPI-Key": "6bfb5077b1mshd273b1b8a895803p1900f9jsn6e161426a4c9",
									"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
							},
					};
					
					fetch(
							"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
							options
					)
							.then((response) => response.json())
							.then((response) => {
									console.log(response);
									cloud_pctk.innerHTML = response.cloud_pct;
									tempk.innerHTML = response.temp;
									feels_likek.innerHTML = response.feels_like;
									humidityk.innerHTML = response.humidity;
									min_tempk.innerHTML = response.min_temp;
									max_tempk.innerHTML = response.max_temp;
									wind_speedk.innerHTML = response.wind_speed;
									wind_degreesk.innerHTML = response.wind_degrees;
									sunrisek.innerHTML = response.sunrise;
									sunsetk.innerHTML = response.sunset;
							})
							.catch((err) => console.error(err));

							// Get references to elements
							const mainContent = document.querySelector('main');

							// Add event listener to the form submission
							document.getElementById('submit').addEventListener('click', function(event) {
									event.preventDefault();

									// Get the value of the input field
									const city = document.getElementById('city').value;
									mainContent.style.display = 'block';
							});
							function displayWeather(city) {
}
