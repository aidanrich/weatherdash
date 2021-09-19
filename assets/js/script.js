var tableBody = document.getElementById('weathertable');
var fetchButton = document.getElementById('fetch-button');


var APIKey = "2d62885b9291cabc94e793d6b1fc4f27"

var city = "boston";

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

// Now I need a fetch(queryURL)

console.log(queryURL)

fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].weather);
        } 
    });