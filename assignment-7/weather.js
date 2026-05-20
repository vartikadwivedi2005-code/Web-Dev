let input = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.getElementById('list');
let apiK = '9f6290d6cda9a36a63755fadee71f83d';

btn.addEventListener("click", () => {
    let city = input.value;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiK}&units=metric`)
    .then((info) => {
        return info.json();
        console.log(info);
        let time = new Date().toLocaleTimeString();
        console.log(time);
    }).then((val) => {
        list.innerHTML = ""; 
        show(val);
    }).catch(err => console.log("Error:", err));
});

function show(val) {
    let card = document.createElement("div");
    card.className = "weather-card";

    // 1. Weather Info
    let h2 = document.createElement("h2");
    h2.innerText = val.name + ": " + val.main.temp + "°C";

    let weatherImg = document.createElement("img");
    let icon = val.weather[0].icon;
    weatherImg.setAttribute("src", `https://openweathermap.org/img/wn/${icon}@2x.png`); 

    // 2. Map Feature (The Iframe)
    let mapFrame = document.createElement("iframe");
    // We use the city name (val.name) to find the location on the map
    mapFrame.setAttribute("src", `https://maps.google.com/maps?q=${val.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`);
    mapFrame.className = "city-map";

    card.append(h2);
    card.append(weatherImg);
    card.append(mapFrame); // Adding the map to the card
    list.append(card);
}