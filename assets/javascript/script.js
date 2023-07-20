var mainTemperature= document.getElementById("main-temperature");
var forecastOne=document.getElementById("forecast-one");
var forecastTwo=document.getElementById("forecast-two");
var forecastThree=document.getElementById("forecast-three");
var forecastFour=document.getElementById("forecast-four");
var forecastFive=document.getElementById("forecast-five")
var inputCity=document.getElementById("input-city");
var button=document.querySelector(".btn");
var cities=document.getElementById("cities")
var grouping=document.getElementById("grouping");


var date= dayjs().format('dddd M/D/YY')
var inputLocation =inputCity.value


function currentWeather() {
    inputLocation= inputCity.value.trim();
    var requestUrl ="https://api.openweathermap.org/data/2.5/weather?q="+inputLocation+"&APPID=88a5790f881a820d719667c737ffc4f3&units=imperial";

    fetch(requestUrl)
        .then(function (response){
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var city=document.createElement("h2");
            var headerIconEl =document.createElement("img");
            var temperature = document.createElement("p");
            var wind= document.createElement("p");
            var humidity= document.createElement("p")


            city.textContent=data.name + " ("+date + ") ";
               imgSrc=data.weather[0].icon
               iconUrl= "https://openweathermap.org/img/w/"+imgSrc+ ".png";
               headerIconEl.src=iconUrl
               temperature.textContent="Temp: " + data.main.temp + " degrees F";
               wind.textContent= "Wind Speed: " + data.wind.speed + " mph";
               humidity.textContent="Humidity: " + data.main.humidity +"%";
               
           mainTemperature.appendChild(city);
           mainTemperature.appendChild(headerIconEl);
           mainTemperature.appendChild(temperature);
           mainTemperature.appendChild(wind);
           mainTemperature.appendChild(humidity);
        })
}
 

function fiveDay() {
     
    inputLocation= inputCity.value.trim();
    
    var requestUrl ="https://api.openweathermap.org/data/2.5/forecast?q="+inputLocation+"&APPID=88a5790f881a820d719667c737ffc4f3&units=imperial";
    
     fetch(requestUrl)
         .then(function (response){
             return response.json();
         })
         .then(function (data) {
             console.log(data);
                for (i=0; i<data.list.length; i++) {
                    if (data.list[i].dt_txt.substring(11,13)=="03") {
                        console.log(data.list[i])
                    
                    var cardDiv=document.createElement("div");
                    cardDiv.className="forecast card col-lg-2 col-md-2 col-sm-4"
                    var dateOne=document.createElement("h4");
                    var iconOne =document.createElement("img");
                    var temperatureOne = document.createElement("p");
                    var windOne= document.createElement("p");
                    var humidityOne= document.createElement("p") 

                    
                    dateOne.textContent=data.list[i].dt_txt.substring(0,10);
                    imgSrcOne=data.list[i].weather[0].icon
                    iconUrlOne= "https://openweathermap.org/img/w/"+imgSrcOne+ ".png";
                    iconOne.src=iconUrlOne
                    temperatureOne.textContent="Temperature: "+data.list[i].main.temp + " degrees F";
                    windOne.textContent ="Wind Speed: "+data.list[i].wind.speed + " mph";
                    humidityOne.textContent= "Humidity: "+data.list[i].main.humidity + "%";
                    
                    cardDiv.appendChild(dateOne);
                    cardDiv.appendChild(iconOne);
                    cardDiv.appendChild(temperatureOne);
                    cardDiv.appendChild(windOne);
                    cardDiv.appendChild(humidityOne);
                    
                    grouping.appendChild(cardDiv) 
                }
                }
               

            })
 }
 button.addEventListener("click", function(){
 currentWeather();
 fiveDay()   
 })
 
function storeCities() {

    var locations = {
        userCity: inputLocation
    }

    cities.push(inputLocation);


    localStorage.setItem("userCity",JSON.stringify(inputLocation))
}
