class Interface {
  constructor() {
    this.location=document.getElementById('ys-location');
    this.desc=document.getElementById('ys-desc');
    this.string=document.getElementById('ys-string');
    this.details=document.getElementById('ys-details');
    this.icon=document.getElementById('ys-icon');
    this.humidity=document.getElementById('ys-humidity');
    this.feelsLike=document.getElementById('ys-feels-like');
    this.dewpoint=document.getElementById('ys-dewpoint');
    this.wind=document.getElementById('ys-wind');
    this.visibility=document.getElementById('ys-visibility');
    this.lastUpdated=document.getElementById('ys-last-updated');
  }

  draw(weather){
    this.location.textContent=weather.display_location.full;
    this.desc.textContent=weather.weather;
    this.string.textContent=weather.temperature_string;
    this.icon.setAttribute('src',weather.icon_url);
    this.humidity.textContent=`Relative Humidity: ${weather.relative_humidity}`;
    this.dewpoint.textContent=`DewPoint: ${weather.dewpoint_string}`;
    this.feelsLike.textContent=`Feel like: ${weather.feelslike_string}`;
    this.wind.textContent=`Wind: ${weather.wind_string}`;
    this.visibility.textContent=`Visibility: ${weather.visibility_mi} mi/ ${weather.visibility_km} km`;
    this.lastUpdated.textContent=`${weather.observation_time}`;
    };
}