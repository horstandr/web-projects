var form = document.getElementById('form');
var result = document.getElementById('love-result');

var name1 = document.getElementById('name1');
var name2 = document.getElementById('name2');

var checkLetters = /^[A-Za-z ]+$/;


form.addEventListener('submit', event => {
    event.preventDefault();

    const love  = Math.round(Math.random() * 50) + 50;
    if (!name1.value.match(checkLetters) || !name2.value.match(checkLetters)) {
        result.innerHTML = `Please input 2 names!`;
        return;
    }
    if (name1.value.toLowerCase() == 'shasjf' && name2.value.toLowerCase() == 'shasjd') {
        result.innerHTML = `Love: 100/100`;
    } else if (name1.value.toLowerCase() == 'veaskdjfhlerle' && name2.value.toLowerCase() == 'asdfaskjdhf') {
        result.innerHTML = `Love: 100/100`;
    } else {
        result.innerHTML = `Love: ${love}/100`;
    }
});