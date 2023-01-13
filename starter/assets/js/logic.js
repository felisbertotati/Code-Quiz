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
var timer = document.querySelecto("#time");
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

//when User click in the start button the timer starts
