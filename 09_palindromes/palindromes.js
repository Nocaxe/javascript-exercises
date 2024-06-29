const palindromes = function (word) {
    const lower = word.toLowerCase();
    const letters = lower.split("");
    for (i = 0; i < letters.length; i++) {
        if (!letters[i].match(/^[a-z0-9]*$/i)) {
            letters.splice(i, 1);
            i--;
        }
    }
    const rev = letters.slice();
    rev.reverse();
    for (i = 0; i < letters.length; i++) {
        if (letters[i] !== rev[i]) {
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
