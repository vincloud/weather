function fetchdata() {
    let city = place.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=42ceded71855388cb70f85fb28f8e81b&units=metric`).
        then(res => {
            if (res.ok) {
                return res.json()
            }
            else {
                throw new Error("Failed to fetch data")
            }
        }).then(data => populateValues(data)).catch(error => console.log(error))
}
  
  
function populateValues(data){
    console.log(data.wind.speed);
    let locationName = data.name;
    let temperature = data.main.temp;
    let minmunTemperature =data.main.temp_min;
    let maximumTemperature = data.main.temp_max;
    let typeWeather=data.weather[0].main
    let windSpeed = data.wind.speed
    let time =data.timezone
  let htmlData = ` <div class="d-flex">
  <h6 class="flex-grow-1"> ${locationName} </h6>
  <h6> ${time} </h6>
</div>

<div class="d-flex flex-column text-center mt-5 mb-4">
  <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> ${temperature} </h6>
  <span class="small" style="color: #868B94"> ${typeWeather}  </span>
</div>

<div class="d-flex align-items-center">
  <div class="flex-grow-1" style="font-size: 1rem;">
      <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1">
              wind speed:  ${windSpeed}Km/h </span></div>
      <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1">
              Max Temp: ${maximumTemperature} </span></div>
      <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1">
              Min Temp: ${minmunTemperature} </span></div>
  </div>
  <div>
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
          width="100px">
  </div>
</div>`
    document.querySelector("#result").innerHTML=htmlData
}