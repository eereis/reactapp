import React from 'react';
import './App.css';
import Main from './components/main';
import Search from './components/search';
import Weather from './components/weather';

const API_KEY = "f1113e7fe82138f89f3f4464bdbb57a1";

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    icon: undefined,
    error: undefined,
    cod: undefined
  }

  generateRandomID() {
    const randomID = (""+ Math.random()).substring(2,9);
      //console.log("ID:" + citylist.id);

      return randomID;
}
  randomizeCity = async (e) => {
    //e.preventDefault();
    const cityID = this.generateRandomID(); // call generateRandomID here
    const API_CALL = await fetch (`http://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${API_KEY}&units=metric`);
    const response = await API_CALL.json();
    console.log(cityID);

    if(response.cod === '404'){
      this.randomizeCity(e);
    }
    else {
    this.setState({

      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      description: response.weather[0].description,
      icon: response.weather[0].icon

    })
}

}
  getWeather = async (e) =>  {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const API_CALL = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const response = await API_CALL.json();

    console.log(response);

    if(response.cod === '404'){
      this.setState({
        cod: "Invalid city name"
      })
    }
    else if(city){
    this.setState({

      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      description: response.weather[0].description,
      icon: response.weather[0].icon,
      error: ""

    })
    // Change background color based on weather conditions
    if((response.weather[0].icon === '01d') || (response.weather[0].icon === '01n')) {
      document.body.style.background = 'white';

    }
    else if((response.weather[0].icon === '02d') || (response.weather[0].icon === '02n')){
      document.body.style.background = 'grey';

    }
    else if((response.weather[0].icon === '03d') || (response.weather[0].icon === '03n')){
      document.body.style.background = 'grey';

    }
    else if((response.weather[0].icon === '04d') || (response.weather[0].icon === '04n')){
      document.body.style.background = 'grey';

    }
    else if((response.weather[0].icon === '09d') || (response.weather[0].icon === '09n')){
      document.body.style.background = '#8884FF';

    }
    else if((response.weather[0].icon === '10d') || (response.weather[0].icon === '10n')){
      document.body.style.background = '#8884FF';

    }
    else if((response.weather[0].icon === '11d') || (response.weather[0].icon === '11n')){
      document.body.style.background = 'grey';

    }
    else if((response.weather[0].icon === '13d') || (response.weather[0].icon === '13n')){
      document.body.style.background = 'white';

    }
    else if((response.weather[0].icon === '50d') || (response.weather[0].icon === '50n')){
      document.body.style.background = '#E0E0E0';

    }
    else{
      document.body.style.background = 'aqua'; // default background color
    }

  }else{
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      description: undefined,
      icon: undefined,
      //error: "Please enter a valid city name",
      cod: ""
    })
  }
  }
  render() {
   return (
    <div>
    <Main />
    <Search
    loadWeather={this.getWeather}
    randomize={this.randomizeCity}
    />
    <Weather
    temperature={this.state.temperature}
    city={this.state.city}
    country={this.state.country}
    description={this.state.description}
    icon=<img alt="" src={`http://openweathermap.org/img/w/${this.state.icon}.png`}/>
    error={this.state.error}
    cod={this.state.cod}/>
    </div>
   )
 }
}

export default App;
