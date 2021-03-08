import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import DayInfo from './DayInfo'
import DayInfoDefault from './DayInfoDefault'
import MainInfo from './MainInfo'
import MainInfoDefault from './MainInfoDefault'

//  https://windowsreport.com/best-windows-10-weather-apps/
//  https://openweathermap.org/forecast5

export default function App() {

  const defaultCity = "Montreal"

  const icons = {
    sun: "https://s1.twnmm.com/images/en_ca/icons/wxicons_medium/1.png",
    moon: "//s1.twnmm.com/images/fr_ca/icons/wxicons_large/20.png",
    cloud: "//s1.twnmm.com/images/fr_ca/icons/wxicons_medium/8.png",
    rain: "//s1.twnmm.com/images/fr_ca/icons/wxicons_medium/29.png",
    cloudSun: "//s1.twnmm.com/images/fr_ca/icons/wxicons_large/3.png"
  }

  const [city, setCity] = useState(defaultCity)
  const [currentWeather, setCurrentWeather] = useState([])
  const [foreCastWeather, setForeCastWeather] = useState([])
  const [currentLocation, setCurrentLocation] = useState([])
  const [daysWeather, setDaysWeather] = useState([])
  const [apiLoading, setApiLoading] = useState(true)

  const API_KEY = "d1fdd84e645530cb3bec87ea771bb224"
  let currentWeaterURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
  let foreCastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`


  const [query, setQuery] = useState("");

  // Set state to input value when user is typing
  function handleChange() {
    setQuery(document.getElementById("weather-input").value);
  }

  function searchCity() {
    setCity(query)
  }

  useEffect(() => {
    // Get user location
    navigator.geolocation.getCurrentPosition(function (position) {
      setCurrentLocation(position)
      console.log('here', currentLocation)
      console.log("Latitude: ", position.coords.latitude)
      console.log("Longitude: ", position.coords.longitude)
      console.log("Location:  ", position)
    },
      function (error) {
        console.error('Error code = ' + error.code + " - " + error.message)
      })
    // Track user location
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        console.log("Tracking latitude :", position.coords.latitude)
        console.log("Tracking longitude :", position.coords.longitude)
      },
        function (error) {
          console.error('Error code = ' + error.code + " - " + error.message)
        })
    }

    getCurrentWeatherData();
    getForeCastData();
  }, [city])

  async function getForeCastData() {
    await fetch(foreCastURL)
      .then(response => response.json())
      .then(response => {
        setForeCastWeather(response)
        console.log(response)
        filterDaysWeather(response)
        setApiLoading(false)
      })
      .catch(err => {
        console.log(err)
      });
  }

  async function getCurrentWeatherData() {
    await fetch(currentWeaterURL)
      .then(response => response.json())
      .then(response => {
        setCurrentWeather(response)
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      });
  }

  if (apiLoading) {
    return (
      <Container className="d-flex justify-content-center align-items-center flex-column h-100 text-center bg-light">
        <h1>WARNING !</h1>
        <p className="long-text">Data is loading.. <br /> Crudcrud has reached its limit.. <br />You are navigating offline..</p>
      </Container>
    );
  } else {
    return (
      <div className="weather-app-wrapper text-center">
        <div className="container">
          <header id="main-header">
            <div className="row mb-5" id="main-header-info">
              <div className="col-12 py-4 ">
                <h5 className="mr-5">Search by city</h5>
                <input type="text" className="mx-2" id="weather-input" placeholder="Search" onChange={handleChange} /><button className="btn btn-dark" onClick={searchCity}>Search</button>
              </div>
            </div>
          </header>
        </div>
        {/* <button onClick={() => getForeCastData()}>Fetch foreCast</button>
        <button onClick={() => getCurrentWeatherData()}>Fetch currentWeather</button>
        <button onClick={() => console.log(currentLocation)}>Console location</button>
        <button onClick={() => console.log(daysWeather)}>Console Days</button> */}

        {/* <MainInfoDefault/> */}
        <MainInfo
          country={currentWeather.sys.country}
          city={currentWeather.name}
          temp={kelvinToCelcius(currentWeather.main.temp)}
          icon={returnIcon(currentWeather.weather[0].main)}
          tempState={currentWeather.weather[0].main}
          tempStateDescription={currentWeather.weather[0].description}
          feels_like={kelvinToCelcius(currentWeather.main.feels_like)}
          wind_speed={currentWeather.wind.speed}
          humidity={currentWeather.main.humidity}
          visibility={visibilityConvert(currentWeather.visibility)}
        />

        <h1 className="text-white">Daily</h1>
        <hr />
        <div className="container-fluid days-info-container">
          <div className="row d-flex justify-content-center justify-content-around">
            {daysWeather.map((element, index) => (
              <DayInfo
                date={element.dt_txt.substring(0, 10)}
                icon={element.main}
                temp={kelvinToCelcius(element.main.temp)}
                feels_like={kelvinToCelcius(element.main.feels_like)}
                tempState={element.weather[0].main}
                icon={returnIcon(element.weather[0].main)}
                key={index}
              />
            ))}
          </div>
        </div>
        {/* <DayInfoDefault /> */}
      </div>
    )
  }



  function visibilityConvert(visibility) {
    // convert visibility in km
    return visibility / 1000;
  }

  function kelvinToCelcius(temp) {
    // convert temperature to celcius
    return Math.round(temp - 273.15)
  }
  // api response returns 40 requests of 3 hours timestamps. 3x 8hours = 24hr. So set the state daysWeather to contains 5 days of temperature
  function filterDaysWeather(element) {
    setDaysWeather([])
    const limit = 39;
    for (let i = 0; i < limit; i += 8) {
      setDaysWeather(previousData => [...previousData, element.list[i]])
    }
  }

  // Function to returns right icon for weather
  function returnIcon(weather) {
    // data.weather[0].main = "Clouds" , "Sun" etc..
    switch (weather) {
      case "Clouds":
        return icons.cloud
        break;
      case "Sun":
        return icons.sun
        break;
      case "Clear":
        return icons.sun
        break;
      case "Rain":
        return icons.rain
        break;
      default:
        return icons.cloudSun
    }
  }
}
