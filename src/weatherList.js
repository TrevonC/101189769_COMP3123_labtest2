import React, { Component } from 'react';
import axios from 'axios';

export default class WeatherList extends Component {
  getWeatherData = async () => {
    let api = 'http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=4f22a301546ccd3f61a255af088baa66&units=metric';
    let url = '';
    try {
      await axios.get(api).then((res) => {
        document.getElementById('temperature').innerText = `Currently the temperature is ${res.data.main.temp}°C in ${res.data.name}!`;
        url = `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`;
      });
    } catch (err) {
      console.error(err);
    }
    try {
      await axios.get(url).then((res) => {
        document.getElementById('icon').src = url;
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <div>
          <button type="button" class="btn btn-outline-success" onClick={this.getWeatherData}>Retrieve Weather Data</button>
          <img id="icon" src="" alt=""></img> <p id="temperature"></p>
        </div>
        <div class="break" >COMP3123 - LabTest 2</div>
      </div>
    );
  }
}
