var quiz = [
  {
    title: "Arrays in JavaScript ca be used to store _______.",
    choices: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      " 4. all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "A vey useful tool used during development and debbugging for printing content to the debugger is: ",
    choices: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "console.log",
  },
];

// html id convert in variables
var timer = document.querySelector("#time");
var startScreen = document.querySelector("#start-screen");
var start = document.querySelector("#start"); //button
var question = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
var submit = document.querySelector("#submit");
var feedback = document.querySelector("#feedback");

var timerCount;
var timeLeft;

//time function
function countdown() {
  //when User click in the start button the timer starts
  start.addEventListener("click", countdown);
  //var timeLeft = 75;

  timerCount = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft;
    //if user wons the game
    if (timeLeft >= 0) {
      clearInterval(timerCount);
    }
    //add winner function
    if (timeLeft === 0) {
      clearInterval(timer);
      //user lose the game function
    }
  }, 1000);
}
// display the questions
function displayQuestions() {}
//check user questions
function questionCheck() {}
// end of the game
function endGame() {}
//check the results
function CheckResults() {}
//save all the results
function saveResults() {}
