// Create a namespace
const queenApp = {};

queenApp.init = () => {
    // Store functions on pageload in init
    queenApp.getQuotes();
}

queenApp.url = 'http://www.nokeynoshade.party/api/queens?limit=12'

// method to call the api
queenApp.getQuotes = () => {
    const url = new URL(queenApp.url);
    fetch(url)
        .then(function (data) {
            return data.json();
        })
        .then(function (jsonData) {
            // console.log(jsonData);
            // we now have the json data we can work with:
            // call the displayQuote method here:
            queenApp.displayQuotes(jsonData);
        })
};
//Method to display data on the page and pass it in a parameter so that the method knows it'll have to actually accept an argument when it's called:
queenApp.displayQuotes = (queens) => {
    // console.log(queens);

    //getting the html element(button)
    //innerHTML
    //append to the button

    //for each quote in the quote array, run some code:
    queens.forEach(queen => {
        const buttonElement = document.querySelector('button');        
        buttonElement.innerText = this.quotes;
        console.log(buttonElement);
    })
    
}

// Display a random quote in the button field - Create function called displayQuote that will pull the quote and display it upon pageload
// Make an event listener method for when user clicks the button and store the user’s selection in a variable

// Return / display the selected Drag Queen profile, passing in the user’s choice to retrieve the related Queen’s name, image, and season’s they were on Drag Race from the API

// Ask the user if they want to pick another quote / ie refresh the page and show different quotes - figure out how to clear the data from the api call, rather than refreshing the page(on button click) 







queenApp.init();
// Call the init at the end of the file