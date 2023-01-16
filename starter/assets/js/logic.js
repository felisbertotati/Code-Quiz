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

var questions = shuffle(quiz);
var timerCount;
var timeLeft;
var currentQestion = 0;
var time;
var score = 0;
var currentScore = 0;
var finalScore;
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
//Fisher-yates shuffle algorithm

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// display the questions
function displayQuestions() {
  var choicesLi;
  choicesE1.innerHTML = "";
  //define questions

  questionTitle.textContent = questions[currentQestion].title;
  //add choices in the list
  questions[currentQestion].choices.forEach((index) => {
    choicesLi = document.createElement("button");
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
  //when user click in the button equals to the current question correct answer
  console.log(event.currentTarget.textContent);
  if (event.currentTarget.textContent === questions[currentQestion].answer) {
    //increase the score
    score += 10;
    //play correct sound
    correct.play();
  } else {
    //if user fail decrease -10 in time
    timerCount -= 10;
    //play incorrect sound
    incorrect.play();
  }
  //increase the question index
  currentQestion++;
  //call display Question function
  console.log(currentQestion);

  //if there are no more questions, end the game
  if (currentQestion === questions.length) {
    //remove questions
    questionE1.classList.add("hide");
    endGame();
  } else {
    // otherwise pass for the next question
    displayQuestions();
  }
}

// end of the game
function endGame() {
  clearInterval(time);
  score = score + timerCount;
  finalScoreE1.textContent = score;
  //add final end-screen class
  endScreen.classList.remove("hide");
  checkResults(finalScore);
}
//check the results
function checkResults() {}
