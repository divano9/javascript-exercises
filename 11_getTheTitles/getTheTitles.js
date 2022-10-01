const getTheTitles = function(books) {

    let title = []; // result is suposed to be an array

    for (const book of books){ // get the titles for each object in an array
        title.push(book.title);
    }

    // console.log(title);

    return title
};

const boks = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

  // document.getElementById("p").innerHTML = getTheTitles(boks);

// Do not edit below this line
module.exports = getTheTitles;
