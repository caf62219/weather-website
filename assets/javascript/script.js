var mainTemperature= document.getElementById("main-temperature");
var forecastOne=document.getElementById("forecast-one");
var forecastTwo=document.getElementById("forecast-two");
var forecastThree=document.getElementById("forecast-three");
var forecastFour=document.getElementById("forecast-four");
var forecastFive=document.getElementById("forecast-five")
var inputCity=document.getElementById("input-city");
var button=document.querySelector(".btn");

var date= dayjs().format('dddd M/D/YY')
var dateTomorrow = dayjs().add(1, 'day').format('M/D/YY');
var dateTwoDays = dayjs().add(2, 'day').format('M/D/YY');
var dateThreeDays = dayjs().add(3, 'day').format('M/D/YY');
var dateFourDays = dayjs().add(4, 'day').format('M/D/YY');
var dateFiveDays = dayjs().add(5, 'day').format('M/D/YY');



function currentWeather() {
    var inputLocation= inputCity.value;
    var requestUrl ="https://api.openweathermap.org/data/2.5/weather?q=Modesto,CA,USA&APPID=88a5790f881a820d719667c737ffc4f3&units=imperial";

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
     
    var inputLocation= inputCity.value;
    
    var requestUrl ="https://api.openweathermap.org/data/2.5/forecast?q=Modesto,CA,USA&APPID=88a5790f881a820d719667c737ffc4f3&units=imperial";
    
     fetch(requestUrl)
         .then(function (response){
             return response.json();
         })
         .then(function (data) {
             console.log(data);
                var dateOne=document.createElement("h4");
                var iconOne =document.createElement("img");
                var temperatureOne = document.createElement("p");
                var windOne= document.createElement("p");
                var humidityOne= document.createElement("p") 

               dateOne.textContent=dateTomorrow;
               imgSrcOne=data.list[1].weather[0].icon
               iconUrlOne= "https://openweathermap.org/img/w/"+imgSrcOne+ ".png";
               iconOne.src=iconUrlOne
               temperatureOne.textContent="Temperature: "+data.list[1].main.temp + " degrees F";
               windOne.textContent ="Wind Speed: "+data.list[1].wind.speed + " mph";
               humidityOne.textContent= "Humidity: "+data.list[1].main.humidity + "%";

               forecastOne.appendChild(dateOne);
               forecastOne.appendChild(iconOne);
               forecastOne.appendChild(temperatureOne);
               forecastOne.appendChild(windOne);
               forecastOne.appendChild(humidityOne);

               var dateTwo=document.createElement("h4");
                var iconTwo =document.createElement("img");
                var temperatureTwo = document.createElement("p");
                var windTwo= document.createElement("p");
                var humidityTwo= document.createElement("p") 

               dateTwo.textContent=dateTwoDays;
               imgSrcTwo=data.list[9].weather[0].icon
               iconUrlTwo= "https://openweathermap.org/img/w/"+imgSrcTwo+ ".png";
               iconTwo.src=iconUrlTwo
               temperatureTwo.textContent="Temperature: "+data.list[9].main.temp + " degrees F";
               windTwo.textContent ="Wind Speed: "+data.list[9].wind.speed + " mph";
               humidityTwo.textContent= "Humidity: "+data.list[9].main.humidity + "%";

               forecastTwo.appendChild(dateTwo);
               forecastTwo.appendChild(iconTwo);
               forecastTwo.appendChild(temperatureTwo);
               forecastTwo.appendChild(windTwo);
               forecastTwo.appendChild(humidityTwo);

               var dateThree=document.createElement("h4");
               var iconThree =document.createElement("img");
               var temperatureThree = document.createElement("p");
               var windThree= document.createElement("p");
               var humidityThree= document.createElement("p") 

               dateThree.textContent=dateThreeDays;
               imgSrcThree=data.list[17].weather[0].icon
               iconUrlThree= "https://openweathermap.org/img/w/"+imgSrcThree+ ".png";
               iconThree.src=iconUrlThree
               temperatureThree.textContent="Temperature: "+data.list[17].main.temp + " degrees F";
               windThree.textContent ="Wind Speed: "+data.list[17].wind.speed + " mph";
               humidityThree.textContent= "Humidity: "+data.list[17].main.humidity + "%";

               forecastThree.appendChild(dateThree);
               forecastThree.appendChild(iconThree);
               forecastThree.appendChild(temperatureThree);
               forecastThree.appendChild(windThree);
               forecastThree.appendChild(humidityThree);

               var dateFour=document.createElement("h4");
               var iconFour =document.createElement("img");
               var temperatureFour = document.createElement("p");
               var windFour= document.createElement("p");
               var humidityFour= document.createElement("p")

               dateFour.textContent=dateFourDays;
               imgSrcFour=data.list[25].weather[0].icon
               iconUrlFour= "https://openweathermap.org/img/w/"+imgSrcFour+ ".png";
               iconFour.src=iconUrlFour
               temperatureFour.textContent="Temperature: "+data.list[25].main.temp + " degrees F";
               windFour.textContent ="Wind Speed: "+data.list[25].wind.speed + " mph";
               humidityFour.textContent= "Humidity: "+data.list[25].main.humidity + "%";

               forecastFour.appendChild(dateFour);
               forecastFour.appendChild(iconFour);
               forecastFour.appendChild(temperatureFour);
               forecastFour.appendChild(windFour);
               forecastFour.appendChild(humidityFour);

               var dateFive=document.createElement("h4");
               var iconFive =document.createElement("img");
               var temperatureFive = document.createElement("p");
               var windFive= document.createElement("p");
               var humidityFive= document.createElement("p")

               dateFive.textContent=dateFiveDays;
               imgSrcFive=data.list[33].weather[0].icon
               iconUrlFive= "https://openweathermap.org/img/w/"+imgSrcFive+ ".png";
               iconFive.src=iconUrlFive
               temperatureFive.textContent="Temperature: "+data.list[33].main.temp + " degrees F";
               windFive.textContent ="Wind Speed: "+data.list[33].wind.speed + " mph";
               humidityFive.textContent= "Humidity: "+data.list[33].main.humidity + "%";
         
               forecastFive.appendChild(dateFive);
               forecastFive.appendChild(iconFive);
               forecastFive.appendChild(temperatureFive);
               forecastFive.appendChild(windFive);
               forecastFive.appendChild(humidityFive);
         
            })
 }
 button.addEventListener("click", function(){
 currentWeather();
 fiveDay()   
 })
 

