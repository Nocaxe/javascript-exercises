remarray = []
const removeFromArray = function(array, ...remove) {
    remarray = remove;
    result = array.filter(check);
    return result;
};

function check(val) {
    return remarray.includes(val) === false;
}

// Do not edit below this line
module.exports = removeFromArray;
