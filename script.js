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
  let htmlData = `<ul class="list-group">
  <li class="list-group-item active" aria-current="true">Location: ${locationName} </li>
  <li class="list-group-item">Temperature: ${temperature} </li>
  <li class="list-group-item">Min-Temperature:${minmunTemperature}</li>
  <li class="list-group-item">Max-Temperature:${maximumTemperature}</li>
  <li class="list-group-item">Weather Type:${typeWeather} </li>
  <li class="list-group-item">Wind Speed:${windSpeed} </li>
</ul>`
    document.querySelector("#result").innerHTML=htmlData
}