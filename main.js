var button1 = document.querySelector('#button1');
var inputValue = document.querySelector('#input1');
var name = document.querySelector('#name');
var temp = document.querySelector('#temp');
var desc = document.querySelector('#desc');
var button2 = document.querySelector('#button2');
var nameUser = document.querySelector('#name-loc');
var tempUser = document.querySelector('#temp-loc');
var descUser = document.querySelector('#desc-loc');


const apikey='9e39448d1df7a525df8f1a5e85bd8ca6';

inputValue.addEventListener('keyup',getTemperature);

async function getTemperature(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${apikey}`);
    const data = await response.json();
    name1 = data['name'];
    temp1 = Math.floor(data['main']['temp']-273.15);
    desc1 = data['weather'][0]['description'];
    name.innerHTML = name1;
    temp.innerHTML = temp1;
    desc.innerHTML = desc1;
}

button2.addEventListener('click',getLocation);

async function getLocation(){
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(position=>{
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            passData(lat,lon);
        });
    }
    async function passData(lat,lon){
        const locResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`);
        const locData = await locResponse.json();
        name2 = locData['name'];
        temp2 = Math.floor(locData['main']['temp']-273.15);
        desc2 = locData['weather'][0]['description'];
        name.innerHTML = name2;
        temp.innerHTML = temp2;
        desc.innerHTML = desc2;  
        console.log(locData); 
        
    } 
}