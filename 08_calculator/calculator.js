const add = function(a, b) {
	return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(a) {
	return a.reduce((sum, val) => sum + val, 0);
};

const multiply = function(a) {
  return a.reduce((pdt, val) => pdt * val, 1)
};

const power = function(a, b) {
  ans = a;
	for (i = 0; i < b - 1; i++) {
    ans *= a;
  }
  return ans
};

const factorial = function(a) {
  fac = 1;
	for (i = a; i >= 1; i--) {
    fac *= i;
  }
  return fac
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
