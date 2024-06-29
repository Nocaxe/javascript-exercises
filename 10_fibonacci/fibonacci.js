const fibonacci = function(input) {
    const num = Number(input);
    if (num < 0 | num === NaN) {
        return ('OOPS');
    }
    if (num === 0) {
        return 0
    }
    if (num === 1) {
        return 1
    }
    first = 0;
    second = 1;
    for (i = 0; i < num - 1; i++) {
        value = first + second;
        first = second;
        second = value;
    }
    return value;
};

// Do not edit below this line
module.exports = fibonacci;
