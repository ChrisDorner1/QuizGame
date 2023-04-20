//code for high scores pg
highscore()
//function for calling and displaying highscores
function highscore () {
    var highscoreList = JSON.parse(localStorage.getItem("highscoreList"))
    console.log(highscoreList)
    if (highscoreList !== null) {
        for (var i = 0; i < highscoreList.length; i++) {
            var li = document.createElement("li");
            li.textContent = i+1 + ". " + highscoreList[i].name + " - " + highscoreList[i].score;
            document.body.appendChild(li)
        }
    }
}
var scorelist = document.getElementById("s")