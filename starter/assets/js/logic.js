// html id convert in variables
var timer = document.getElementById("time");
var startScreen = document.getElementById("start-screen");
var startE1 = document.getElementById("start"); //button
var questionE1 = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choicesE1 = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");
var finalScoreE1 = document.getElementById("final-score");
var initials = document.getElementById("initials");
var submitE1 = document.getElementById("submit");
var feedback = document.getElementById("feedback");

var timerCount;
var timeLeft;
var currentQestion;
var time;
//start the game
function startGame() {
  countdown();
  displayQuestions();
}
startE1.addEventListener("click", startGame);
//time function
function countdown() {
  //when User click in the start button the timer starts
  timerCount = 75;
  //var timeLeft = 75;
  time = setInterval(function () {
    timer.textContent = timerCount;
    //if user wons the game
    timerCount--;
    if (timeLeft <= 0) {
      clearInterval(time);
    }
    //add winner function
    if (timeLeft === 0) {
      clearInterval(time);
      //user lose the game function
      endGame();
    }
  }, 1000);
}

// display the questions
function displayQuestions() {
  //var random questions
  var question = quiz[Math.floor(Math.random() * quiz.length)];
  //define questions
  questionTitle.textContent = question.title;
  console.log(question);
  //add choices in the list
  question.choices.forEach((index) => {
    var choicesLi = document.createElement("button");
    choicesLi.textContent = index;
    choicesE1.appendChild(choicesLi);
    console.log(index);
  });
  questionE1.classList.remove("hide");
}
//check user questions
function questionCheck() {}
// end of the game
function endGame() {}
//check the results
function CheckResults() {}
