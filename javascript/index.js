function updateTime(){

//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
if(losAngelesElement) {
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");


losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");
}


//Sydney
let sydneyElement = document.querySelector("#sydney");
if(sydneyElement) {
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia/Sydney");


sydneyDateElement.innerHTML = moment().format("MMMM Do YYYY");
sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small>]");
}

//Tokyo
let tokyoElement = document.querySelector("#tokyo");
if(tokyoElement){
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");


tokyoDateElement.innerHTML = moment().format("MMMM Do YYYY");
tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
}

//Paris
let parisElement = document.querySelector("#paris");
if(parisElement){
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");


parisDateElement.innerHTML = moment().format("MMMM Do YYYY");
parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}

}


function updateCity(event){
    let cityTimeZone = event.target.value;
    if(cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess();
        

    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    
    citiesElement.innerHTML = 
    ` <div class="city" >
          <h2>${cityName}</h2>
          <div class="timeElements">
            <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
            <div class="date">${cityTime.format("MMMM do YYYY")}</div>
          </div>
          <a href="/">🔙</a>
          `;

          
}



updateTime();
setInterval(updateTime, 1000);








let citiesSelectElement = document.querySelector("#selectCity");

citiesSelectElement.addEventListener("change", updateCity);
