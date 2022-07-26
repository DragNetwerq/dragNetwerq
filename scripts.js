// Come up with namespace name for our app, 'queenApp' and store it in a variable:
const queenApp = {};

queenApp.init = () => {
    // Store functions on pageload in init
    queenApp.getQuotes(1);
    queenApp.events();
}

// method to call the api
queenApp.getQuotes = (userSelection) => {
    queenApp.url = `http://www.nokeynoshade.party/api/seasons/${userSelection}/queens`
    const url = new URL(queenApp.url);
    fetch(url)
        .then(function (data) {
            return data.json();
        })
        .then(function (jsonData) {
            // we now have the json data we can work with:
            // call the displayQuote method here, and pass in the data as the argument:
            queenApp.displayQuotes(jsonData);
        })
};

let ulElement = document.querySelector('.displayData');
//Method to display data on the page and pass it in a parameter so that the method knows it'll have to actually accept an argument when it's called
// Display a quote in the button field - Create function called displayQuote that will pull the quote and display it upon pageload
queenApp.displayQuotes = (queens) => {
    // clear the ulElement innerHTML
    ulElement.innerHTML = '';
    ulElement = document.querySelector('.displayData');
    
    //for each queen in the array, run the following code:
    queens.forEach(queen => {
        const liElement = document.createElement('li');
        const buttonElement = document.createElement('button');
        const quoteParagraph = document.createElement('p');   

        if(queen.quote != '""'){
            ulElement.appendChild(liElement);
            liElement.appendChild(buttonElement);
            buttonElement.appendChild(quoteParagraph);
        }
        
        // add innerText to the quoteParagraph variable, equal to the queen object's 'quote' property:
        quoteParagraph.innerText = queen.quote;
        
        // Make an event listener method for when user clicks the button:
        const results = document.querySelector('.results');
        buttonElement.addEventListener('click', function(){
        
        // clear the results section of any data on click:
        results.innerText = '';

        // create the image, with src and alt attributes:
        const imageElement = document.createElement('img');
        imageElement.src = queen.image_url;
        imageElement.alt = `Drag Queen ${queen.name}`;
        
        // create the queen name, add the name from the queen object to the new variable:
        const queenName = document.createElement('h3');
        queenName.innerText = queen.name;
        
        const queenQuote = document.createElement('p');
        queenQuote.innerText = `" ${queen.quote} "`;

        results.append(queenName, queenQuote, imageElement);
        })
    })
}

queenApp.events = function() {
    document.querySelector('#season').addEventListener('change', function(){
        // what to do when the select option changes:
        // store the value of the object:
        const userSelection = this.value;
        // pass it as an argument in the queenApp.getQuotes function, using the argument as the value for the season id in the url:
        queenApp.getQuotes(userSelection);
    })
}

queenApp.init();
// Call the init at the end of the file