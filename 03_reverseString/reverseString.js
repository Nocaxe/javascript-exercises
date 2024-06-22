const reverseString = function(string) {
    array = Array.from(string);
    revarray = []
    let k = string.length - 1
    for (let i = 0; i < string.length; i++) {
        temp = array[i];
        revarray[k] = temp;
        k--;
    }
    return revarray.join("");
};

// Do not edit below this line
module.exports = reverseString;
