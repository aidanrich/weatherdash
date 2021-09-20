var APIKey = "2d62885b9291cabc94e793d6b1fc4f27"

var city = localStorage.getItem("city").replace(/\s/g, '+');

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

var forecast = document.querySelector(".fiveday")


button1.addEventListener("click", () => {
    $(".card-title").empty();
    $(".card-text").empty();

    
    saverTester("city", typeArea.value)

    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + typeArea.value + "&units=imperial" + "&appid=" + APIKey)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            console.log(data.main);
            // still need windspeed and uv index and date
            var cityMain = document.createElement('h3');
            var tempMain = document.createElement('p');
            var humidity = document.createElement('p');

            //Setting the text of the h3 element and p element.
            cityMain.textContent = localStorage.getItem("city");
            tempMain.textContent = "Temperature: " + data.main.temp + " F";
            humidity.textContent = "Humidity: " + data.main.humidity;
            console.log(humidity.textContent);

            //Appending the dynamically generated html to the div associated with the id="users"
            //Append will attach the element as the bottom most child.
            cityNameContainer.appendChild(cityMain);
            tempContainer.appendChild(tempMain);
            humContainer.append(humidity);

            console.log(data.main.temp)

        });

    fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + typeArea.value + "&units=imperial" + "&appid=" + APIKey)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            console.log();

            for (let i = 0; i < 40; i+=8) {
                // still need windspeed and uv index and date
                var cityMain = document.createElement('h3');
                var tempMain = document.createElement('p');
                var humidity = document.createElement('p');
                var iconPic = document.createElement('img');
    
                //Setting the text of the h3 element and p element.
                cityMain.textContent = localStorage.getItem("city");
                tempMain.textContent = "Temperature: " + data.list[i].main.temp + " F";
                humidity.textContent = "Humidity: " + data.list[i].main.humidity;
                iconPic.setAttribute("src", `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`);
                
    
                //Appending the dynamically generated html to the div associated with the id="users"
                //Append will attach the element as the bottom most child.
                forecast.appendChild(cityMain);
                forecast.appendChild(tempMain);
                forecast.append(humidity);
                forecast.append(iconPic);
    
               
    

            }
        })

})

cityNameContainer.textContent = "Last city searched: " + localStorage.getItem("city");

// Now I need a fetch(queryURL)
console.log(queryURL)




console.log("hello")