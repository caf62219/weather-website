//Constant Variables
var mainTemperature= document.getElementById("main-temperature");
var forecastOne=document.getElementById("forecast-one");
var forecastTwo=document.getElementById("forecast-two");
var forecastThree=document.getElementById("forecast-three");
var forecastFour=document.getElementById("forecast-four");
var forecastFive=document.getElementById("forecast-five")
var inputCity=document.getElementById("input-city");
var button=document.querySelector(".btn");
var grouping=document.getElementById("grouping");
var cities=document.getElementById("cities")

var date= dayjs().format('dddd M/D/YY')
var inputLocation =inputCity.value

//function for the current weather
function currentWeather() {
    inputLocation =inputCity.value.trim()
    //request URL incorporating the user inputted city
    var requestUrl ="https://api.openweathermap.org/data/2.5/weather?q="+inputLocation+"&APPID=88a5790f881a820d719667c737ffc4f3&units=imperial";

//fetch request that returns data
    fetch(requestUrl)
        .then(function (response){
            return response.json();
        })
        .then(function (data) {
            console.log(data);
//creating elements that will be part of the display
            var city=document.createElement("h2");
            var headerIconEl =document.createElement("img");
            var temperature = document.createElement("p");
            var wind= document.createElement("p");
            var humidity= document.createElement("p")

//creating content for the newly created elements
            city.textContent=data.name + " ("+date + ") ";
            imgSrc=data.weather[0].icon
            iconUrl= "https://openweathermap.org/img/w/"+imgSrc+ ".png";
            headerIconEl.src=iconUrl
            temperature.textContent="Temp: " + data.main.temp + " degrees F";
            wind.textContent= "Wind Speed: " + data.wind.speed + " mph";
            humidity.textContent="Humidity: " + data.main.humidity +"%";
//appending the new elements to the DOM  
           mainTemperature.appendChild(city);
           mainTemperature.appendChild(headerIconEl);
           mainTemperature.appendChild(temperature);
           mainTemperature.appendChild(wind);
           mainTemperature.appendChild(humidity);
        })
}
//function that displays the five day forecast
function fiveDay() {
     
    inputLocation =inputCity.value.trim()
    
    var requestUrl ="https://api.openweathermap.org/data/2.5/forecast?q="+inputLocation+"&APPID=88a5790f881a820d719667c737ffc4f3&units=imperial";
    
    //second fetch function for the forecast
     fetch(requestUrl)
         .then(function (response){
             return response.json();
         })
         .then(function (data) {
             console.log(data);
               //for loop to create a series of cards with set weather time
                for (i=0; i<data.list.length; i++) {
                    if (data.list[i].dt_txt.substring(11,13)=="03") {
                        console.log(data.list[i])
                    
                        //creating new elements
                    var cardDiv=document.createElement("div");
                    cardDiv.className="forecast card col-lg-2 col-md-2 col-sm-4"
                    var dateOne=document.createElement("h4");
                    var iconOne =document.createElement("img");
                    var temperatureOne = document.createElement("p");
                    var windOne= document.createElement("p");
                    var humidityOne= document.createElement("p") 

                    //setting the text content for the new elements
                    dateOne.textContent=data.list[i].dt_txt.substring(0,10);
                    imgSrcOne=data.list[i].weather[0].icon;
                    iconUrlOne= "https://openweathermap.org/img/w/"+imgSrcOne+ ".png";
                    iconOne.src=iconUrlOne;
                    temperatureOne.textContent="Temperature: "+data.list[i].main.temp + " degrees F";
                    windOne.textContent ="Wind Speed: "+data.list[i].wind.speed + " mph";
                    humidityOne.textContent= "Humidity: "+data.list[i].main.humidity + "%";
                    
                    //appending the children to card div
                    cardDiv.appendChild(dateOne);
                    cardDiv.appendChild(iconOne);
                    cardDiv.appendChild(temperatureOne);
                    cardDiv.appendChild(windOne);
                    cardDiv.appendChild(humidityOne);
                    
                    //appending the children to grouping
                    grouping.appendChild(cardDiv); 
                }
                }
            })
        }
 button.addEventListener("click" , function(){
    //clears the boxes before adding in new elements
    mainTemperature.textContent="";
    grouping.textContent="";
    //calls the current weather and five day functions when the button is clicked
    currentWeather();
    fiveDay() 
    storeCities();
 })

 //If you enter on the City input box you get the same result as clicking the search button
inputCity.addEventListener("keypress", function(event){
    if (event.key ==="Enter") {
        event.preventDefault()
         //clears the boxes before adding in new elements
        mainTemperature.textContent="";
        grouping.textContent="";
    //calls the current weather and five day functions when the button is clicked
        currentWeather();
        fiveDay() 
        storeCities();
    }
 })
 
function storeCities() {
   //variable for the initial array
    var locations=JSON.parse(localStorage.getItem("cities")) || [];  
   //pushes inputLocation into locations so they can save to local storage
    locations.push(inputLocation);
    localStorage.setItem("cities",JSON.stringify(locations));
        const cityButton = document.createElement("button");
        cities.appendChild(cityButton)
        cityButton.textContent = inputLocation;
  //adds a listener for the cities button when clicked to render it    
    cityButton.addEventListener("click", function(event){
        inputCity.value=event.target.textContent
        mainTemperature.textContent="";
        grouping.textContent="";
        currentWeather();
        fiveDay()   
    })
}
//function for cities from local storage to appear on page on reload
function renderCities(){
    var locations=JSON.parse(localStorage.getItem("cities"));
//array to load each of the city buttons      
    if (Array.isArray(locations) && locations.length > 0){
        for (i=0; i<locations.length; i++) {
            var cityButton = document.createElement("button");
            cities.appendChild(cityButton);
            cityButton.textContent = locations[i];
   //adds a listener for the cities button when clicked to render it        
            cityButton.addEventListener("click", function(event){
                inputCity.value=event.target.textContent;
                mainTemperature.textContent="";
                grouping.textContent="";
                currentWeather();
                fiveDay();   
        })
    }}
    
      
}
//runs the render city function so the buttons for the cities appear from local storage on page refresh
renderCities()
