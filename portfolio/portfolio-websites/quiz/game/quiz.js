let currentQuestion = 1;
let correctAnswers = 0;

const goodAnswerSound = new Audio('sounds/good-answer.mp3');
const wrongAnswerSound = new Audio('sounds/wrong-answer.mp3');


const quizTitle = document.getElementById('quiz-title');
const quizImage = document.getElementById('quiz-image');
const resultUI = document.getElementById('result-ui');
const resultMessage = document.getElementById('result');
const answerMessage = document.getElementById('good-answer');
const nextButton = document.getElementById('next-button');
const questionDisplay = document.getElementById('question-display');

const answer = [
    document.getElementById('answer1'),
    document.getElementById('answer2'),
    document.getElementById('answer3'),
    document.getElementById('answer4')
]

const quiz = {
    question: [
        '', // This is so that the question number is exactly the sort of the array.
        {
            title: 'Hoe oud is Olivia geworden? (Als je dit niet goed hebt, dan mag je GEEN taart)',
            image: 'https://www.baktotaal.nl/media/catalog/product/cache/eb002657933dbd4c15eb7abaeee5f499/V/e/Verjaardagstaart_recept_9001.png',
            options: ['9', '8', '11', '10'],
            answer: '10'
        },
        {
            title: 'Hoeveel gram was Olivia bij de geboorte?',
            image: 'https://www.nextdirect.com/nxtcms/resource/blob/6230276/d69e7976fd1d7fe3cc95c18dd0c659cb/19-08-24-gender-2-baby-min-data.jpg',
            options: ['4200 gr.','3800 gr.','3200 gr.','3000 gr.'],
            answer: '3800 gr.'
        },
        {
            title: "Wat is Olivia's lievelingsdier?",
            image: 'https://d147a5vd7kzml6.cloudfront.net/img/appeltern_nl/251877/3005x2000/resize:normal/dieren_en_huisdieren_in_de_tuin.jpg',
            options: ['Paard','Kat','Hond','Capybara'],
            answer: 'Paard'
        },
        {
            title: "Hoe lang is Olivia's haar?",
            image: 'https://www.pruikenplaza.nl/pics/prk/j/j22gkE-3c.jpg',
            options: ['21 cm.','50 cm.','18 cm.','25 cm.'],
            answer: '50 cm.'
        },
        {
            title: 'Op welke positie speelt Olivia bij hockey?',
            image: 'https://www.politiesport.nl/wp-content/uploads/2023/09/wallpaper-hockey.webp',
            options: ['Voor','Achter','Middenveld','Keeper'],
            answer: 'Middenveld'
        },
        {
            title: 'Hoelang is Jennifer al oppas van Olivia?',
            image: 'https://cdn.webshopapp.com/shops/328337/files/433593144/1652x2313x2/feestkleding-breda-mok-cartoon-oppas.jpg',
            options: ['5 Jaar','10 Jaar','3 Jaar','9 Jaar'],
            answer: '10 Jaar'
        },
        {
            title: "Wat is Olivia's lievelingskleur?",
            image: 'https://reigerenderaaf.nl/wp-content/uploads/2022/07/grimms_regenboog_groot_reigerenderaaf_10.jpg',
            options: ['Blauw','Paars','Turquoise','Roze'],
            answer: 'Roze'
        },
        {
            title: "Wat is Olivia's lievelingsgerecht?",
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
            options: ['Penne','Spaghetti','Pizza','Spruitjes'],
            answer: 'Penne'
        },
        {
            title: "Wat is Olivia's lievelingsfruit?",
            image: 'https://media-01.imu.nl/storage/florum.nl/23110/wanneer-kan-ik-fruit-planten-en-zaaien-2560x1100.jpg',
            options: ['Ananas','Watermeloen','Mango','Banaan'],
            answer: 'Mango'
        },
        {
            title: "Wat is Olivia's lievelingssport?",
            image: 'https://bollenstreek.nl/wp-content/uploads/2017/10/Bollenstreek-paarden-op-het-strand-620x350.jpg',
            options: ['Turnen','Hockey','Dansen','Paardrijden'],
            answer: 'Turnen'
        },
        {
            title: "Wat is Olivia's lievelingartiest?",
            image: 'https://image.focuspoints.io/plaatje-crashcourse.png?_jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ3aWR0aCI6MTAwMCwiaXNzIjoiZjIxZWNmNzhjODQzNGQ1ZGI0MWY1ZDhhM2FkMGY2ZGEiLCJhY3Rpb24iOiJ0cmFuc2Zvcm0iLCJ1cmwiOiJodHRwczovL3d3dy5oYW56ZS5ubC9iaW5hcmllcy9jb250ZW50L2dhbGxlcnkvaGFuemUvb3BsZWlkaW5nZW4vc3BjYy9jcmFzaGNvdXJzZS9wbGFhdGplLWNyYXNoY291cnNlLnBuZz90cz0xNjU2NTk0ODU1NjMwIiwiaGVpZ2h0Ijo2MDB9.iOQ5_cFwWKv-Yqx1Dkhevu-Ky0JTS66wAZnOtajpuGjs2zCNMJKox1mleWTTMVjcT22Y68i1WjH04meGlIoKjw',
            options: ['The Weeknd','Billie Eilish','Olivia Rodrigo','Roxy Dekker'],
            answer: 'Roxy Dekker'
        },
        {
            title: "Wat is Olivia's lievelingsnummer? (Van Roxy Dekker dus)",
            image: 'https://i.scdn.co/image/ab6761610000e5ebf153334656b20d5a5b1ad052',
            options: ['Anti-Hero','Sugardaddy','Satisfyer','End of The World'],
            answer: 'Satisfyer'
        },
        {
            title: "In welke groep zit Olivia nu?",
            image: 'https://lh3.googleusercontent.com/proxy/H4RmHjjEIoMgyz4Uh1yBESkMRmvDPy0Sz7bh_1iXlJbQFq7uZDpQenNrvDPyNokn082cV8amBYkMc1h1it_cZVhlWg',
            options: ['Groep 5','Groep 6','Groep 7','Groep 8'],
            answer: 'Groep 7'
        },
        {
            title: "Wat is Olivia's tweede naam?",
            image: 'https://elanillo.com//wp-content/uploads/2018/11/spanish-names2.png',
            options: ['Anna','Catharina','Victoria','Maria'],
            answer: 'Anna'
        },
        {
            title: "Wie is Olivia's beste vriendin?",
            image: 'https://assets.omdenken.nl/afbeeldingen/Meedenker-geen-vriendinnen-kleiner.jpg',
            options: ['Sophie','Olivia','Emma','Zoë'],
            answer: 'Sophie'
        }
    ]
}


function quizLoop() {
    // Changes the question title
    if (quiz.question[quiz.question.length-1] == quiz.question[currentQuestion]) {
        quizTitle.innerHTML = `<span style="color:red;">LAATSTE VRAAG:</span> ${quiz.question[currentQuestion].title}`;
    } else {
        quizTitle.innerHTML = quiz.question[currentQuestion].title;
    }
    // Changes the image
    quizImage.src = quiz.question[currentQuestion].image;
    // Changes QUIZ question overview
    questionDisplay.innerHTML = `<p class="current-question">Vraag <span style="font-weight:bolder;">${currentQuestion}</span>/${quiz.question.length - 1}</p>`;
    // For every answer, it prints the options.
    for (i=0;i<quiz.question[currentQuestion].options.length;i++) {
        answer[i].innerHTML = quiz.question[currentQuestion].options[i];
    }
}
    
// Checks answer
function submit(ans) {
    if (ans==quiz.question[currentQuestion].answer) {correctAnswers++;}
    console.log(`Q: ${currentQuestion}. Correct answers: ${correctAnswers}`);
    if (quiz.question.length ==  currentQuestion+1) {
        nextButton.onclick = endOfQuiz;
        nextButton.innerHTML = 'Beeindig Quiz';
    }
    if (ans == quiz.question[currentQuestion].answer) {
        goodAnswerSound.play();
        resultUI.style.display = 'block';
        resultUI.style.height = '238px';
        resultMessage.style.color = 'green';
        resultMessage.innerHTML = 'GOED!';
        answerMessage.style.display = 'none';
    } else {
        wrongAnswerSound.play();
        resultUI.style.display = 'block';
        resultUI.style.height = 'auto';
        resultMessage.style.color = 'red';
        resultMessage.innerHTML = `FOUT!`;

        answerMessage.style.display = 'block';
        answerMessage.innerHTML = `Het goede antwoord was: <span style="font-weight:bolder;">${quiz.question[currentQuestion].answer}</span>`
    }
    
}

// Continues to the next question
function nextQuestion() {
    resultUI.style.display = 'none';
    currentQuestion++;
    if (nextButton.innerHTML == 'Ga terug naar HOME') {
        window.open('../index.html');
    } else {
        quizLoop();
    }
    
}

function endOfQuiz() {
    resultUI.style.display = 'block';
    resultUI.style.height = 'auto';
    resultMessage.innerHTML = 'END QUIZ!';
    resultMessage.style.color = 'black';
    
    answerMessage.style.display = 'block'
    answerMessage.innerHTML = `Score: <span style="font-weight:bolder">${correctAnswers}</span>/${quiz.question.length - 1}<br>Cijfer: <span style="font-weight:bolder;">${((correctAnswers / (quiz.question.length-1)) * 9) + 1}</span>`
    answerMessage.style.fontSize = '20pt';
    nextButton.innerHTML = 'Go Back To HOME';

    // Adds try again button
    resultUI.innerHTML += `<button onclick="location.reload()" style="position: absolute;top:5px;left:5px;font-weight:bolder;cursor:pointer;">Try Again</button>`;
}