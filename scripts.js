// Come up with namespace name for our app, 'queenApp' and store it in a variable:
const queenApp = {};

queenApp.init = () => {
    // Store functions on pageload in init
    queenApp.getQuotes();
}

queenApp.url = 'http://www.nokeynoshade.party/api/queens?limit=9'

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
            // call the displayQuote method here, and pass in the data as the argument:
            queenApp.displayQuotes(jsonData);
        })
};

//Method to display data on the page and pass it in a parameter so that the method knows it'll have to actually accept an argument when it's called
// Display a quote in the button field - Create function called displayQuote that will pull the quote and display it upon pageload
queenApp.displayQuotes = (queens) => {

    const ulElement = document.querySelector('.displayData');

    //for each queen in the array, run the following code:
    queens.forEach(queen => {
        const liElement = document.createElement('li');
        const buttonElement = document.createElement('button');
        const quoteParagraph = document.createElement('p');   
        // console.log(queen);

        if(queen.quote != '""'){
            ulElement.appendChild(liElement);
            liElement.appendChild(buttonElement);
            buttonElement.appendChild(quoteParagraph);
        }
        // console.log(buttonElement);
        
        // add innerText to the quoteParagraph variable, equal to the queen object's 'quote' property:
        quoteParagraph.innerText = queen.quote;
        // console.log(queen.quote);

        // Make an event listener method for when user clicks the button:
        buttonElement.addEventListener('click', function(){
        
        // clear the results section of any data on click:
        const results = document.querySelector('.results');
        results.innerText = '';

        // create the image, with src and alt attributes:
        const imageElement = document.createElement('img');
        imageElement.src = queen.image_url;
        imageElement.alt = `Drag Queen ${queen.name}`;
        
        // create the queen name, add the name from the queen object to the new variable:
        const queenName = document.createElement('h3');
        queenName.innerText = queen.name;

        // create the queen season number, add the season number from the queen object to the new variable:
        const seasonNum = document.createElement('p');
        seasonNum.innerText = `Appeared on Season # ${queen.seasons[0].seasonNumber}`;
        
        results.append(queenName, seasonNum, imageElement);
        })
    })
    
}

queenApp.init();
// Call the init at the end of the file