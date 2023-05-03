function convertCelsiusToFahrenheit() {
    const celsiusInput = document.getElementById("celsius-input");
    const fahrenheitOutput = document.getElementById("fahrenheit-output");
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    fahrenheitOutput.innerText = `${fahrenheit}°F`;
  }
  
  function convertFahrenheitToCelsius() {
    const fahrenheitInput = document.getElementById("fahrenheit-input");
    const celsiusOutput = document.getElementById("celsius-output");
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) * 5/9;
    celsiusOutput.innerText = `${celsius}°C`;
  }