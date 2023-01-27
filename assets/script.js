let APIKey = "732a88c6f9f8186453f47b435c9ba5f3";

let queryURL ="https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=" + APIKey; 

fetch(queryURL)
.then(response => response.json())
.then(citiesFound => {
    let firstCity = citiesFound[0];
    console.log(firstCity.lat);
    console.log(firstCity.lon);
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=" + APIKey`)
})

.then(response => response.json())
.then(data => {
    console.log(data)
})