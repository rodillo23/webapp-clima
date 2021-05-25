
import getWeather from '../utils/getWeather.js'


const weatherTemplate = async ()=>{
  const data = await getWeather()
  const date = new Date().toLocaleDateString()
  const temp = data.main.temp
  
  const sunriseTime = new Date(data.sys.sunrise).toLocaleTimeString().split(':')
  sunriseTime.pop()
  const sunrise = sunriseTime.join(':')

  const sunsetTime = new Date(data.sys.sunset).toLocaleTimeString().split(':')
  sunsetTime.pop()
  const sunset = sunsetTime.join(':')
  
  const view = `
    
    <div class="weather-now">
      <h1 class="weather-city">${data.name}, ${data.sys.country}</h1>
      <p class="weather-date">${date}</p>
      
      <div class="half">
        
        <div class="weather-container">
          <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" width="250"/>

          <div class="weather-details">
            <p class="weather-temp">${Math.floor(temp)}<span>°</span> </p>
            <p class="weather-desc">${data.weather[0].description}</p>
          </div>
        </div>

        <div class="weather-container-moreDetails">
          <div class="up">
            <p class="bold">${Math.floor(data.main.temp_max)} ° </br> <span>Max</span></p>
            
            <p class="bold">${Math.floor(data.wind.speed)}  </br> <span>Viento</span></p>

            <p class="bold">${sunrise} </br> <span>Sunrise</span></p>
          </div>
          
          <div class="down">
            <p class="bold">${Math.floor(data.main.temp_min)} ° </br> <span>Min</span></p>
            
            <p class="bold">${Math.floor(data.main.humidity)}%  </br> <span>Humedad</span></p>

            <p class="bold">${sunset} </br> <span>Sunset</span></p>
          </div>
        </div>
      </div>


    </div>
  `
  return view
}

export default weatherTemplate