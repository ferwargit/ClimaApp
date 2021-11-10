export default async function getCurrentWeather(cityName){

    const axios = require('axios')

    var results = []
    
    await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=40a5f7559101e8312445dfae9a9b0db1&units=metric&lang=es`)
        .then(function (response){

            const data = response.data     
            const locationName = (data.sys.country + ', ' + ' ' + data.name)
            const temperatureMin = data.main.temp_min
            const temperatureMax = data.main.temp_max
            const wind = data.wind.speed
            const humidity = data.main.humidity
            const currentTemperature = data.main.temp
            const weatherState = data.weather[0].description
            
            results = [currentTemperature, temperatureMin, temperatureMax, locationName, wind, humidity, weatherState]
            // [currentTemperature, temperatureMin, temperatureMax, locationName, wind, humidity]
            console.log(locationName)
        })
        .catch(function (error) {
            console.log(error)
        })

    return results
  }