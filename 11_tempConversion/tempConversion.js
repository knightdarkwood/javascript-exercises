const convertToCelsius = function(farenheit) {
  let celcius = (farenheit - 32) / 1.8
  let result = Number(celcius.toFixed(1))
  return result
};

const convertToFahrenheit = function(celcius) {
  let farenheit = (celcius * 1.8) + 32
  let result = Number(farenheit.toFixed(1))
  return result
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
