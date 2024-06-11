var form = document.getElementById('form');


form.addEventListener('submit', (event) => {
    e.preventDefault();
    try {
        button();
    } catch (error) {
        
    }
    
});

async function button() {
    try {
        const randomWord = await getRandomWord();
        console.log(randomWord);

        document.body.innerHTML += `<h1>${randomWord}</h1>`;
        window.open('google.com');
    } catch (error) {
        console.log(error);
    }
}

async function onLoad() {
    const langs = await checkLangs();
    console.log(langs);
    document.getElementById('available-lang').innerHTML = langs + ',en';
    
}

async function checkLangs() {
    const langUrl = `https://random-word-api.herokuapp.com/languages`;
    
    const response = await fetch(langUrl);
    console.log(response);

    if (!response.ok) {
        console.log('Could not retrieve avaliable languages.');
        throw new Error('Could not retrieve available languages.');
    }

    return await response.json();
}

async function getRandomWord() {
    /* Api URL, key is not needed, for Dutch and English words. */
    const apiUrlEN = 'https://random-word-api.herokuapp.com/word';
    const apiUrlFR = 'https://random-word-api.herokuapp.com/word?lang=fr';
    
    /* Fetches random word from API URL. */
    const response = await fetch(apiUrlFR);
    console.log(response);

    /* Checks if response throws no errors */
    if(!response.ok) {
        console.log('Could not get data.');
        throw new Error('Could not get data.');
    }

    
    return await response.json();
}


   