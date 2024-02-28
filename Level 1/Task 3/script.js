function convertTemperature() {
    let temperatureInput = document.getElementById("temperatureInput").value;
    let unitSelect = document.getElementById("unitSelect").value;
    let resultElement = document.getElementById("result");
    let convertedTemperature;

    if (isNaN(temperatureInput)) {
        resultElement.innerHTML = "Please enter a valid number for temperature.";
        return;
    }

    if (unitSelect === "celsius") {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        resultElement.innerHTML = temperatureInput + "°C is " + convertedTemperature.toFixed(2) + "°F.";
    } else {
        convertedTemperature = (temperatureInput - 32) * 5/9;
        resultElement.innerHTML = temperatureInput + "°F is " + convertedTemperature.toFixed(2) + "°C.";
    }
}
