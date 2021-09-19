

var APIKey = "2d62885b9291cabc94e793d6b1fc4f27"

var city = localStorage.getItem("city");

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

var citySearch = document.getElementById('city-result');
var tempEl = document.getElementById('temp-result')

console.log(city);


// I need a search function
// I need weather results to appear on click

// Parse weather data
// convert it into something I can turn into textcontent

// I need to save recent searches to local storage
var typeArea = document.querySelector(".searcher");
var button1 = document.querySelector(".searchcity")

function saverTester(key, value) {
    if (value == "") {
        alert("fill out the form you imbecile")
    } else localStorage.setItem(key, value)
}


var cityNameContainer = document.querySelector('#city-result')
var tempContainer = document.querySelector('#temp-result')

button1.addEventListener("click", () => {



    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            console.log(data.main);
            // for (var i = 0; i < data.length; i++) {
            var userName = document.createElement('h3');
            var userUrl = document.createElement('p');

            //Setting the text of the h3 element and p element.
            userName.textContent = localStorage.getItem("city");
            userUrl.textContent = data.main.temp;

            //Appending the dynamically generated html to the div associated with the id="users"
            //Append will attach the element as the bottom most child.
            cityNameContainer.append(userName);
            tempContainer.append(userUrl);
            
            console.log(typeArea.value)
            saverTester("city", typeArea.value)
            // tempResponse.value = data.main.temp;

            // document.getElementById("#city-result").textContent = "boston";

            console.log(data.main.temp)

            // }

        });
})

typeArea.value = localStorage.getItem("city")

// Now I need a fetch(queryURL)
console.log(queryURL)




console.log("hello")
