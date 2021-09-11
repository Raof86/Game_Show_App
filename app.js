let element_1 = document.getElementById('qwerty');
let element_2 = document.getElementById('phrase');
let element_3 = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');

let missed_variable = 0;

const phrase = ['JavaScript is fun', 'Ruby doesnt make sense', 'Golang is ambitios', 'Java and coffee', 'JQuery is dying'];


// return a random phrase from an array
const getRandomPhraseAsArray = arr => {
   let randomNumber = Math.floor(Math.random() * phrase.length)
    arr = phrase[randomNumber];
}

// adds the letters of a string to the display
const addPhraseToDisplay = arr => {
    let items = '';
    function createListItems (arr) {
        for (let i = 0; i < arr.length; i++)
        items += `<li>${arr[i]}</li>`;
    }
    document.querySelector('main').innerHTML= `
        <ul>
        ${createListItems(arr)}
        </ul>
        `;
}

// check if a letter is in the phrase
const checkLetter = button => {
}

// check if the game has been won or lost 
const checkWin = () => {
}

// listen for the start game button to be pressed
element_3.addEventListener('click', () => 
overlay.style.display="none"
)

// listen for the onscreen keybord to be clicked 
qwerty.addEventListener('click', e => {});

