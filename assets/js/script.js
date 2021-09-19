

var APIKey = "2d62885b9291cabc94e793d6b1fc4f27"

var city = localStorage.getItem("city");

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

var citySearch;

console.log(city);
// Now I need a fetch(queryURL)

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

button1.addEventListener("click", () => {

    console.log(typeArea.value)
    saverTester("city", typeArea.value)
})

typeArea.value = localStorage.getItem("city")


console.log(queryURL)

fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        console.log(data.main);
        for (var i = 0; i < data.length; i++) {
            

           
            
        } 
    });
console.log("hello")
// function weatherSearch() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName('li');
  
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//       a = li[i].getElementsByTagName("a")[0];
//       txtValue = a.textContent || a.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
// }