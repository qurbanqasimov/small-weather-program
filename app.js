const input = document.querySelector("input");
const button = document.querySelector("button");
const temp = document.querySelector(".temperature");

button.addEventListener("click", () => {
    const value = input.value;
    const KEY = "fa4d01b4e6cdcd4314624962530bcae1";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${KEY}`)
    .then((Response) => Response.json())
    .then((data) => {
        temp.textContent = parseInt(`${data.main.temp} °C`);
        const description = document.querySelector(".description");
        description.textContent = data.weather[0].description;
        const image = document.querySelector(".weather img");
        
        switch(data.weather[0].main){
            case "Clear":
                image.src = "./images/clear.png";
                break;
            case "Clouds":
                image.src = "./images/cloud.png";
                break;
            case "Mist":
                image.src = "./images/mist.png";
                break;    
            case "Rain":
                image.src = "./images/rain.png";
                break;
            case "Snow":
                image.src = "./images/snow.png";
                break;
            default:
                image.src = './images/cloud.png';        
        }
    })
    .catch((error) => {
        console.error("Error fetching weather data:", error);
    });
});
