const findTheOldest = function(people) {
    const date = new Date();
    const year = date.getFullYear();
    aAge = 0;
    bAge = 0;
    people.sort((a, b) => {
        if (a.yearOfDeath) {
            aAge = a.yearOfDeath - a.yearOfBirth;
        }
        else {
            aAge = year - a.yearOfBirth;
        }
        if (b.yearOfDeath) {
            bAge = b.yearOfDeath - b.yearOfBirth;
        }
        else {
            bAge = year - b.yearOfBirth;
        }
        if (aAge > bAge) {
            return -1;
        }
        else if (bAge > aAge) {
            return 1;
        }
        else {
            return 0;
        }
    })
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
