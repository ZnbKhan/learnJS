document.addEventListener('DOMContentLoaded', ()=>{
    // grab all elments
    const cityName = document.getElementById('city-input');
    const weatherBtn = document.getElementById('get-weather-btn');
    const weatherInfo = document.getElementById('weather-info');
    const displayCityName = document.getElementById('city-name');
    const displayTemperature = document.getElementById('temperature');
    const displayDescription = document.getElementById('description');
    const errorMsg = document.getElementById('error-message');

    const API_KEY = "0ac50a764504289ddebd20affc4bd3d4";

    weatherBtn.addEventListener('click', async ()=>{
        let city = cityName.value.trim();

        if(!city) return;
     
        try{
            const weatherData = await fetchWeatherData(city);
            // console.log(weatherData);
            displayWeatherData(weatherData);
        }catch(error){
            showErrorMsg(error)

        }


    })

    async function fetchWeatherData(city){
      const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
    //   console.log(data);
      const responseData = await data.json();
    //   console.log(responseData);

      return responseData;
    }

    function displayWeatherData(data){
      weatherInfo.classList.remove("hidden");
      console.log(data);
      
      const {name, main, weather} = data;
      displayCityName.textContent = name;
      displayTemperature.textContent = `Temprature: ${main?.temp} Celcius`;
      displayDescription.textContent = `Description: ${weather[0]?.description}`;
    }

    function showErrorMsg(error){
    //   console.log(error);
    weatherInfo.classList.add("hidden");
    errorMsg.classList.remove("hidden")
      
    }



})