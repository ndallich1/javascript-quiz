let timerElement = document.querySelector('.timer-count');
let startButton = document.querySelector('.start-button');
let question = document.getElementById('question');
let choiceA = document.getElementById('A');
let choiceB = document.getElementById('B');
let choiceC = document.getElementById('C');
let choiceD = document.getElementById('D');

// bank of variables that we will mess with as we go through the solution
let scoreCounter = 0;
let isCorrect = false;
let timer;
let timerCount;

// question bank 
let questions = [

  {

      question : "Javascript is:",

      choiceA : "object-oriented",

      choiceB : "a programming language",

      choiceC : "used to make webpages interactive",

      choiceD : "all of the above",

      correct : "D",

  },{

    question : "What should always be declared before it is used?",

    choiceA : "object",

    choiceB : "variable",

    choiceC : "function",

    choiceD : "operator",

    correct : "B",

  },{

    question : "What part of the following statement is called a declaration? let x = 42",

    choiceA : "let",

    choiceB : "let x",

    choiceC : "x = 42",

    choiceD : "42",

    correct : "B",

  },{

    question : "What part of the following statement is called an initializer? let x = 42",

    choiceA : "let x",

    choiceB : "x = 42",

    choiceC : "42 ",

    choiceD : "let",

    correct : "C",

  },{

    question : "When a variable is declared outside of any function, it is called a _____ variable.",

    choiceA : "modular",

    choiceB : "block",

    choiceC : "global",

    choiceD : "statement",

    correct : "C",

  },{

    question : "What is string concatenation?",

    choiceA : "Connecting strings in variables",

    choiceB : "Subtracting strings in variables",

    choiceC : "Multiplying strings in variables",

    choiceD : "Dividing strings in variables",

    correct : "A",

  }
];

function init() {
  getScores();
}

// this startGame function is called when the start button is clicked
function startQuiz() {
  isCorrect = false;
  timerCount = 75;
  // prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  startTimer();
}

function correct() {
  question.correct = 'Correct! 🏆';
  scoreCounter++;
  startButton.disabled = false;
  setScore();
}

function timeUp() {
  question.choice = "Time's up";
  scoreCounter--;
  startButton.disabled = false;
  setScore();
}

// the startTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
        correct();
      }
    // tests if time has run out 
    if (timerCount === 0) {
      // clears interval
      clearInterval(timer);
      timeUp();
    }
  }, 1000); }



// attach event listener to start button to call startGame function on click
startButton.addEventListener('click', startQuiz);