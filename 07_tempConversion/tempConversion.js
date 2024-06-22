const convertToCelsius = function(celc) {
  fahr = (celc - 32) * (5/9);
  if (fahr % 1 === 0) {
    return fahr;
  }
  else {
    return +fahr.toFixed(1);
  }
};

const convertToFahrenheit = function(fahr) {
  celc = fahr * (9/5) + 32;
  if (celc % 1 === 0) {
    return celc;
  }
  else {
    return +celc.toFixed(1);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
