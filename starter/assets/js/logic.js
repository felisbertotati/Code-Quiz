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

var correct = new Audio("assets/sfx/correct.wav");
var incorrect = new Audio("assets/sfx/incorrect.wav");

var questions;
var timerCount;
var timeLeft;
var currentQestion = 0;
var time;
var score;
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
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// display the questions
function displayQuestions() {
  //var random questions
  questions = shuffle(quiz);
  console.log(questions);
  //define questions
  questionTitle.textContent = questions[currentQestion].title;
  //add choices in the list
  questions[currentQestion].choices.forEach((index) => {
    var choicesLi = document.createElement("button");
    choicesLi.textContent = index;
    choicesE1.appendChild(choicesLi);
    //style button
    choicesLi.setAttribute(
      "style",
      "text-align: left; width:400px; margin-bottom: 10px; height: 50px"
    );
    //console.log(index);
    choicesLi.addEventListener("click", questionCheck);
  });

  //remove class hide to show the choices
  questionE1.classList.remove("hide");
}
//check user questions
function questionCheck(event) {
  console.log(event.currentTarget.textContent);
  if (event.currentTarget.textContent === questions[currentQestion].answer) {
    score += 10;
    correct.play();
  } else {
    timerCount -= 10;
    incorrect.play();
  }
  currentQestion++;
  displayQuestions();
  choicesE1.classList.add("hide");
}

// end of the game
function endGame() {}
//check the results
function CheckResults() {}
