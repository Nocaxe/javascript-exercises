const getTheTitles = function(books) {
    titles = books.reduce((title, each) => {
        title.push(each.title);
        return title;
    }, [])
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
