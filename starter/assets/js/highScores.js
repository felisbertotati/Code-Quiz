var highScoresFinal = document.getElementById("highscores");
//save all the results
var clear = document.getElementById("clear");

function highScores() {
  //get initials array
  let highScoresInitials = JSON.parse(localStorage.getItem("highScoresE1"));
  // populate highscores list
  let li = "";

  highScoresInitials.forEach((score) => {
    li = li + "<p>" + score.initials + "  :  " + score.score + "</p>";
  });

  highScoresFinal.innerHTML = li;
}

highScores();
//clear highScores
clear.addEventListener("click", function () {
  localStorage.clear();
  highScoresFinal.innerHTML = "";
});
