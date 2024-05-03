const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is the largest ocean?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Stephen King", "George Orwell"],
        answer: "Harper Lee"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yen", "Dollar", "Euro", "Pound"],
        answer: "Yen"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Mars"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('nextButton');
const restartButton = document.getElementById('restartButton');

function displayQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    optionsElement.innerHTML = '';
    q.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(answer) {
    const q = questions[currentQuestion];
    if (answer === q.answer) {
        score++;
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Wrong!";
    }
    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
        resultElement.textContent = '';
        nextButton.style.display = 'none';
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    questionElement.textContent = `Quiz Completed! Your Score: ${score}/${questions.length}`;
    optionsElement.innerHTML = '';
    nextButton.style.display = 'none';
    restartButton.style.display = 'block';
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
    resultElement.textContent = '';
    restartButton.style.display = 'none';
}

displayQuestion();
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);
