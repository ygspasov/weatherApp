class Weather {
  constructor(city, state) {
    this.apiKey='1afa626e1d3be15a';
    this.city=city;
    this.state=state;
  }

  //Fetching the weather data from the api
  async getWeather(){
    const response=await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`)

    const responseData=await response.json();
    
    return responseData.current_observation;
  }

  //Switch weather location
  switchLocation(city,state){
    this.city =city;
    this.state=state;
  }
}