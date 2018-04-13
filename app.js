//Initializing local storage
const storage = new Storage();

//Acquire location data
const weatherLocation = storage.getLocationFromStorage()

//initializing weather object;
const weather = new Weather(weatherLocation.city, weatherLocation.state);

//initializing the interface object
const interface = new Interface();

// Loading the weather data when the DOM loads
document.addEventListener('DOMContentLoaded', myWeather);

document.getElementById('ys-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  //Switching the location for which we acquire the weather data
  weather.switchLocation(city, state);

  //Saving city and state to local storage
  storage.setLocationToStorage(city, state);

  //Updating the UI after switching the location
  myWeather();

  //Closing the modal on submit
  $('#ysModal').modal('hide');
});

function myWeather() {
  weather.getWeather()
    .then(data => {
      interface.draw(data);
    })
    .catch(err=>{
      $("#error").prepend("<h3 id='errorMsg' style='color:#eee;'>Wrong city or state provided!</h3>");
      setTimeout(()=>{
        $("#errorMsg").remove();
      },4000)
    })
}
