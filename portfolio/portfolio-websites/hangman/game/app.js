
var randomWord;
var randomWordArray;
var lettersShown = [];
var lettersShownString = "";
var guessedLetters = [];
var tries = 0;
var form = document.getElementById('form-form');
let regex = /^[a-z]+$/;
var lettersGuessed = 0;
var currentLanguage = document.getElementById('current-language') + '';

form.addEventListener('submit', event => {
    event.preventDefault();
});


async function onLoad() {
    try {
        const language = window.location.search;
        randomWord = await getRandomWord(language) + '';
        randomWord = randomWord.toLowerCase();
        
        console.log(randomWord);

        randomWordArray = randomWord.split('');
        console.log(randomWordArray);
        console.log(randomWord);


        for (i=0;i<randomWord.length;i++) {
            lettersShown[i] = '_ ';
        }
        lettersShownString = lettersShown.join('');
        document.getElementById('words').innerHTML = `<h1>${lettersShownString}</h1>`;
        console.log(lettersShown);
        console.log(lettersShownString);
    } catch (error) {
        console.log(error);
    }
}


async function getRandomWord(lang) {
    /* Api URL, key is not needed. */
    const apiUrl= `https://random-word-api.herokuapp.com/word${lang}`;
    
    /* Fetches random word from API URL. */
    const response = await fetch(apiUrl);
    console.log(response);

    /* Checks if response throws no errors */
    if(!response.ok) {
        console.log('Could not get data.');
        throw new Error('Could not get data.');
    }

    
    return await response.json();
}

function checkLetter() {
    tries++;
    let guessed = false;
    let checkWord = document.getElementById('word-input');
    const checkWordSplit = checkWord.value.split('');


    if(!regex.test(checkWord.value) || !checkWord.value) {
        document.getElementById('message').innerHTML = `Please enter a lowercase letter.`;
        document.getElementById('message').style.color = 'red';
        return;
    }

    // Checks entire word
    /*if (checkWord.value == randomWord) {
        console.log('correct!');
        window.alert('You guessed the word!');
        window.open('/en-hangman.html');
    } else {
        console.log('Entire word was not guessed.');
    }*/

    // Checks if any letters match up or 

    for (j=0;j<randomWord.length;j++) {
        for (k=0;k<randomWord.length;k++) {
            if (randomWordArray[j] == checkWordSplit[k]) {
                for(m=0;m<guessedLetters.length;m++) {
                    if (guessedLetters[m] == checkWord.value) {
                        console.log('Letter already guessed!');
                        document.getElementById('message').innerHTML = `This letter is already guessed.`;
                        document.getElementById('message').style.color = 'red';

                        return;
                    }
                }
                if (guessed) {
                    console.log('letter ' + randomWordArray[j] + ' is shown.');
                    document.getElementById('message').innerHTML = `Correct! The letter ${randomWordArray[j]} is shown.`;
                    document.getElementById('message').style.color = 'green';
                    guessedLetters[guessedLetters.length] = randomWordArray[j];
                    lettersGuessed++;
                   
                    // Stops if statement from going a second time
                    guessed = true; 
                }

                // Will go until end of for-loop
                lettersShown[j] = randomWordArray[j];
                
            }
        }
    }

    console.log(lettersGuessed);

    if(lettersShownString == randomWord) {
        console.log('won');
        alert('You win!');
        location.reload;
    }

    lettersShownString = lettersShown.join('');
    document.getElementById('words').innerHTML = `<h1>${lettersShownString}</h1>`;
    console.log(tries);
    document.getElementById('tries').textContent = `Tries: ${tries}/20`;
    
    // When too many tries are inputted
    if (tries==20) {
        alert('You lose!');
        location.reload();
    }
    
    // Incorrect goes here:
    if (!guessed) {
        document.getElementById('message').innerHTML = `The letter you typed is not present in this word.`
        document.getElementById('message').style.color = 'red';
        guessedLetters[guessedLetters.length] = checkWord.value;
    }
       
    // Updates guessed letters
    document.getElementById('guessed-words').innerHTML = `Guessed letters: ${guessedLetters}`
    
    // Clears input field
    checkWord.value = ''; 
}