var APIKey = "2d62885b9291cabc94e793d6b1fc4f27"

var city = localStorage.getItem("city");

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + APIKey;
var queryFuture = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + "&appid=" + APIKey;

console.log(city);


// I need a search function
// I need weather results to appear on click

// Parse weather data
// convert it into something I can turn into textcontent

// I need to save recent searches to local storage

var typeArea = document.querySelector("#searcher");
var button1 = document.querySelector(".searchcity")

function saverTester(key, value) {
    if (value == "") {
        alert("fill out the form!")
    } else localStorage.setItem(key, value)
}


var cityNameContainer = document.querySelector('#city-result')
var tempContainer = document.querySelector('#temp-result')
var humContainer = document.querySelector('#hum-result')

button1.addEventListener("click", () => {
  
            console.log(typeArea.value)
            saverTester("city", typeArea.value)

    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            console.log(data.main);
            
            var userName = document.createElement('h3');
            var userUrl = document.createElement('p');
            var humidity = document.createElement('p');

            //Setting the text of the h3 element and p element.
            userName.textContent = localStorage.getItem("city");
            userUrl.textContent = "Temperature: " + data.main.temp + " F";
            humidity.textContent = "Humidity: "  + data.main.humidity;
            console.log(humidity.textContent);

            //Appending the dynamically generated html to the div associated with the id="users"
            //Append will attach the element as the bottom most child.
            cityNameContainer.appendChild(userName);
            tempContainer.appendChild(userUrl);
            humContainer.append(humidity);

            console.log(data.main.temp)

        });

        fetch(queryFuture)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            console.log(); 

            // for (let i = 0; i < array.length; i++) {
            //     const element = array[index];
                
            // }
        })

})

cityNameContainer.textContent = "Last city searched: " + localStorage.getItem("city");

// Now I need a fetch(queryURL)
console.log(queryURL)




console.log("hello")