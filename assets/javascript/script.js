var city=document.getElementById("city");
var temperature= document.getElementById("temperature");
var wind= document.getElementById("wind");
var humidity = document.getElementById("humidity");
var date= dayjs().format('dddd M D,YYYY')
var dateOne=document.getElementById("dates-1");
var iconOne= document.getElementById("icon-1");
var temperatureOne= document.getElementById("temperature-1");
var windOne= document.getElementById("wind-1");
var humidityOne = document.getElementById("humidity-1");
var dateTwo=document.getElementById("dates-2");
var iconTwo= document.getElementById("icon-2");
var temperatureTwo= document.getElementById("temperature-2");
var windTwo= document.getElementById("wind-2");
var humidityTwo = document.getElementById("humidity-2");
var dateThree=document.getElementById("dates-3");
var iconThree= document.getElementById("icon-3");
var temperatureThree= document.getElementById("temperature-3");
var windThree= document.getElementById("wind-3");
var humidityThree = document.getElementById("humidity-3");
var dateFour=document.getElementById("dates-4");
var iconFour= document.getElementById("icon-4");
var temperatureFour= document.getElementById("temperature-4");
var windFour= document.getElementById("wind-4");
var humidityFour = document.getElementById("humidity-4");
var dateFive=document.getElementById("dates-5");
var iconFive= document.getElementById("icon-5");
var temperatureFive= document.getElementById("temperature-5");
var windFive= document.getElementById("wind-5");
var humidityFive = document.getElementById("humidity-5");
var dateTomorrow = dayjs().add(1, 'day').format('M D, YYYY')
var dateTwoDays = dayjs().add(2, 'day').format('M D, YYYY')
var dateThreeDays = dayjs().add(3, 'day').format('M D, YYYY')
var dateFourDays = dayjs().add(4, 'day').format('M D, YYYY')
var dateFiveDays = dayjs().add(5, 'day').format('M D, YYYY')



function currentWeather() {
    var requestUrl ='https://api.openweathermap.org/data/2.5/weather?q=Turlock,CA,usa&APPID=88a5790f881a820d719667c737ffc4f3&units=imperial';

    fetch(requestUrl)
        .then(function (response){
            return response.json();
        })
        .then(function (data) {
            console.log(data);
               city.textContent=data.name + " ("+date + ") " + data.weather[0].icon;
               temperature.textContent="Temp: " + data.main.temp + " degrees F";
               wind.textContent= "Wind Speed: " + data.wind.speed + " mph";
               humidity.textContent="Humidity: " + data.main.humidity +"%";
        })
}


function fiveDay() {
     var requestUrl ='https://api.openweathermap.org/data/2.5/forecast?q=Turlock,CA,usa&APPID=88a5790f881a820d719667c737ffc4f3&units=imperial';

     fetch(requestUrl)
         .then(function (response){
             return response.json();
         })
         .then(function (data) {
             console.log(data);
              
               dateOne.textContent=dateTomorrow;

               temperatureOne.textContent="Temperature: "+data.list[5].main.temp + " degrees F";
               windOne.textContent ="Wind Speed: "+data.list[5].wind.speed + " mph";
               humidityOne.textContent= "Humidity: "+data.list[5].main.humidity + "%";

               dateTwo.textContent=dateTwoDays;

               temperatureTwo.textContent="Temperature: "+data.list[13].main.temp + " degrees F";
               windTwo.textContent ="Wind Speed: "+data.list[13].wind.speed + " mph";
               humidityTwo.textContent= "Humidity: "+data.list[13].main.humidity + "%";

               dateThree.textContent=dateThreeDays;

               temperatureThree.textContent="Temperature: "+data.list[21].main.temp + " degrees F";
               windThree.textContent ="Wind Speed: "+data.list[21].wind.speed + " mph";
               humidityThree.textContent= "Humidity: "+data.list[21].main.humidity + "%";

               dateFour.textContent=dateFourDays;

               temperatureFour.textContent="Temperature: "+data.list[29].main.temp + " degrees F";
               windFour.textContent ="Wind Speed: "+data.list[29].wind.speed + " mph";
               humidityFour.textContent= "Humidity: "+data.list[29].main.humidity + "%";

               dateFive.textContent=dateFiveDays;

               temperatureFive.textContent="Temperature: "+data.list[37].main.temp + " degrees F";
               windFive.textContent ="Wind Speed: "+data.list[37].wind.speed + " mph";
               humidityFive.textContent= "Humidity: "+data.list[37].main.humidity + "%";
         })
 }

 currentWeather();
 fiveDay()