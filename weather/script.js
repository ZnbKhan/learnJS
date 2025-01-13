document.addEventListener('DOMContentLoaded', ()=>{
    // grab all the inputs
    const cityInput = document.getElementById('city-input');
    const weatherBtn = document.getElementById('get-weather-btn')
    const weatherInfo = document.getElementById('weather-info')
    const cityNameDisplay = document.getElementById('city-name')
    const  temperatureDisplay= document.getElementById('temperature')
    const description = document.getElementById('description');
    const errorMsg = document.getElementById('error-message');


  weatherBtn.addEventListener('click', async function (){
      const city =  cityInput.value.trim()  
      if(!city) return;  

      //whenever doing a web-request always put this on mind
      //It may throw an Error
      //sserver/database is always in another continent

      try{
           const weatherData =  await fetchWeatherData(city);
           displayWeatherData(weatherData);
      }catch(error){
         showError(error);
      }


    })

    async function fetchWeatherData(city){
        // gets the data
         const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

         const response =  await fetch(URL);
        //  console.log(typeof response);
        //  console.log(response);  

         if(!response.ok){
            throw new Error("City is not found")
         }

        const jsonResponse = await response.json();
        // console.log(jsonResponse);
        
        return jsonResponse;
    }

    function displayWeatherData(data){
        // display
        console.log(data);
        const {name, main, weather} = data;
        cityNameDisplay.textContent = name;
        temperatureDisplay.textContent = `Temperature: ${main?.temp}`;
        description.textContent = `Weather: ${weather[0]?.description}`;

        // unlock the display
        weatherInfo.classList.remove("hidden");
        errorMsg.classList.add("hidden")
        
    }

    function showError(){
        // error
        weatherInfo.classList.remove("hidden")
        errorMsg.classList.add("hidden");
        
    }
    
    
})
