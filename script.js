let digit = 1; // Initialize the current question index

const correctAnswers = [
    'Rome', 'Sicily', 'Ankara', 'North pole', 'Athens', 'Zagreb', 'Bucharest', 'Greece', 'Dubrovnik', '124.5 m', 'Italy'
    // Add more questions and answers here if needed
];

const welcome = document.getElementById('welcome');
const points = document.getElementById('points');
const sorry = document.getElementById('sorry');
const win = document.getElementById('win');
const finishBtn = document.getElementById('finish-btn');
const gnomes=document.getElementById('gnomes');
const advent=document.getElementById('advent');
const resultSection = document.getElementById('result-section');
const nextBtn=document.getElementById('next-btn');
const answerBtn = document.getElementById('answer-btn');

nextBtn.addEventListener('click', showQuestion);
answerBtn.addEventListener('click', checkAnswer);
finishBtn.addEventListener('click', finished);

function showQuestion(event) {
    if (event) {
        event.preventDefault;
    }
    resultSection.style.display='none'
    const currentQuestion = document.getElementById(`q${digit}`);
    currentQuestion.style.display = 'block'; 
    answerBtn.style.display='block'
    
    nextBtn.style.display='none'
    welcome.style.display='none'
    welcome.style.display='none'
    gnomes.style.display='none'
    points.style.display='none'
    advent.style.display='block'

}

function checkAnswer(event) {
    if (event) {
        event.preventDefault;
    }
    resultSection.style.display='block'
    const currentQuestion = document.getElementById(`q${digit}`);
    const selectedAnswer = document.querySelector(`input[name="q${digit}"]:checked`);
    const corAns=correctAnswers[`${digit-1}`]
    if ( selectedAnswer.value === correctAnswers[`${digit-1}`]) {
        resultSection.textContent = 'Correct answer!';
       
    } else {
            resultSection.textContent = `Wrong answer! ${corAns} is correct!`;
    }
    currentQuestion.style.display='none'
    answerBtn.style.display='none'
    nextBtn.style.display='block'
    digit++;
    
}
function finished(event) {
    if (event) {
        event.preventDefault;
    }
    
    win.style.display='block'
    advent.style.display='none'
    const currentQuestion = document.getElementById(`q${digit}`);
    currentQuestion.style.display='none'
    answerBtn.style.display='none'


    
    
    
}

