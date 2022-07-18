// Create a namespace
const queenApp = {};

queenApp.init = () => {
    // Store functions on pageload in init
    queenApp.getQuotes();
    

}

queenApp.url = 'http://www.nokeynoshade.party/api/queens?limit=8'

// method to call the api
queenApp.getQuotes = () => {
    const url = new URL(queenApp.url);
    fetch(url)
        .then(function (data) {
            return data.json();
        })
        .then(function (jsonData) {
            console.log(jsonData);
            // we now have the json data we can work with:
            // call the displayQuote method here:
            queenApp.displayQuotes(jsonData);
        })
};


//Method to display data on the page and pass it in a parameter so that the method knows it'll have to actually accept an argument when it's called

// Display a random quote in the button field - Create function called displayQuote that will pull the quote and display it upon pageload
queenApp.displayQuotes = (queens) => {

    // ***** NEED TO GET RANDOMIZER TO ACTUALLY APPLY TO THE QUEEN ARRAY FROM API *****
    // getRandomQueen = (randQueens) => {
    //     const randomQueen = Math.floor(Math.random() * randQueens.length);
    // console.log(randomQueen);
    //     // return queens[randomQueen];
    //     queenApp.individualQueen = queens[randomQueen];
    // }
    
    // getRandomQueen(queens);
    // console.log(queenApp.individualQueen);
    

    const ulElement = document.querySelector('.displayData');

    //for each quote in the quote array, run some code:
    queens.forEach(queen => {
        const liElement = document.createElement('li');
        const buttonElement = document.createElement('button');
        const quoteParagraph = document.createElement('p');   
        // console.log(queen);

        ulElement.appendChild(liElement);
        liElement.appendChild(buttonElement);
        
        if(quoteParagraph != ' ' ){
            buttonElement.appendChild(quoteParagraph);
        }
        // console.log(buttonElement);
        
        // add innerText to the quoteParagraph variable, equal to the queen object's 'quote' property:
        quoteParagraph.innerText = queen.quote;
        // console.log(quoteParagraph);

        // Make an event listener method for when user clicks the button and store the user’s selection in a variable
        buttonElement.addEventListener('click', function(){
        
        // clear the results section of any data on click:
        const results = document.querySelector('.results');
        results.innerText = '';

        // create the image, with src and alt attributes:
        const imageElement = document.createElement('img');
        imageElement.src = queen.image_url;
        imageElement.alt = `Drag Queen ${queen.name}`;
        
        // create the queen name:
        const queenName = document.createElement('h3');
        queenName.innerText = queen.name;

        // create the queen season number:
        const seasonNum = document.createElement('p');
        seasonNum.innerText = `Appeared on Season # ${queen.seasons[0].seasonNumber}`;
        
        results.append(queenName, seasonNum, imageElement);

        })
    })
    
}

// Return / display the selected Drag Queen profile, passing in the user’s choice to retrieve the related Queen’s name, image, and season’s they were on Drag Race from the API

// Ask the user if they want to pick another quote / ie refresh the page and show different quotes - figure out how to clear the data from the api call, rather than refreshing the page(on button click) 

queenApp.init();
// Call the init at the end of the file