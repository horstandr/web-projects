var form = document.getElementById('form');
var result = document.getElementById('love-result');

var name1 = document.getElementById('name1');
var name2 = document.getElementById('name2');



form.addEventListener('submit', event => {
    event.preventDefault();

    const love  = Math.floor(Math.random() * 50) + 50;
    result.innerHTML = `Love: ${love}/100`;


});