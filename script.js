const lat = 61.17; // Byt ut med den önskade latituden
const long = 12.99; // Byt ut med den önskade longituden

const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&current_weather=true&past_days=1`;

// Funktion för att hämta väderdata och uppdatera webbsidan
function fetchWeather() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Hämta temperaturdata från API-responsen
            const currentTemperature = data.current_weather.temperature;
        
            document.getElementById('temperature').textContent = `${currentTemperature}`;
          
        })
        .catch(error => {
            console.error('Fel vid hämtning av väderdata:', error);
        });
}

// Kör funktionen när sidan laddas
window.addEventListener('load', fetchWeather);

// Visa text på skärm
const addNameBtn = document.querySelector('#addNameBtn');
const nameText = document.querySelector('#name-text');

/* Lägger till en lyssnare som lyssnar efter när du klickar på knappen, när du klickat på knappen så skrivs texten ut till skärmen  */
addNameBtn.addEventListener('click',() =>{
    const getName = prompt('Vad heter du?');
    /* Här kan du ändra vilken text som syns i webbläsaren, när du klickat på knappen */
    nameText.innerHTML = `Hej ${getName}, vad roligt att träffa dig!`;
});