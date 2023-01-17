// html id convert in variables
var timer = document.getElementById("time");
var startScreen = document.getElementById("start-screen");
var startE1 = document.getElementById("start"); //button
var questionE1 = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choicesE1 = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");
var finalScoreE1 = document.getElementById("final-score");
var initialsE1 = document.getElementById("initials");
var submitE1 = document.getElementById("submit");
var feedback = document.getElementById("feedback");
//html class convert in variables
var scoreInput = document.querySelector(".score-input");
var startWrpr = document.querySelector(".start");

// audio correct and incorrect convert in variable
var correct = new Audio("assets/sfx/correct.wav");
var incorrect = new Audio("assets/sfx/incorrect.wav");
// get array from storage
var highScoresE1 = JSON.parse(localStorage.getItem("highScoresE1")) || [];

console.log(highScoresE1);

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
  startWrpr.innerHTML = "";
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
    if (timerCount <= 0) {
      clearInterval(time);
      timer.textContent = 0;
    }
    //if times run out user lose
    if (timerCount === 0) {
      clearInterval(time);
      //user lose the game
      questionE1.classList.add("hide");
      endGame();
    }
  }, 500);
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
    feedback.textContent = "Correct!";
    feedback.classList.remove("hide");
  } else {
    //if user fail decrease -10 in time
    timerCount -= 10;
    feedback.textContent = "Incorrect!";
    feedback.classList.remove("hide");

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
  feedback.classList.add("hide");
  //add final end-screen class
  endScreen.classList.remove("hide");
}
//check the results

function saveResults() {
  //save initials in a variable
  var initials = initialsE1.value;
  finalScore = score;
  //new array with initials and score
  var nameInitials = {
    initials: initials,
    score: finalScore,
  };
  //push score to array
  highScoresE1.push(nameInitials);

  //console.log(highScoresE1);

  //sort array
  highScoresE1.sort((a, b) => {
    a.score - b.score;
    return a.score - b.score;
  });
  console.log(highScoresE1);

  //added highscores in local storage
  localStorage.setItem("highScoresE1", JSON.stringify(highScoresE1));

  //get highscores html
  window.location.href = "./highscores.html";
}
submitE1.addEventListener("click", saveResults);

//key down event for enter
scoreInput.addEventListener("keydown", function (event) {
  // Check if the enter key was pressed
  if (event.key === "Enter") {
    // Submit the form
    saveResults();
  }
});
