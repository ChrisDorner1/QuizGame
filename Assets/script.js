var startBtn = document.querySelector("#startbutton")
var sh = document.querySelector(".sh")
var timeLeft = 76
var response = document.querySelector(".response")
var q = document.querySelector("#q")
var a01 = document.querySelector("#a1")
var a02 = document.querySelector("#a2")
var a03 = document.querySelector("#a3")
var a04 = document.querySelector("#a4")
var answers = document.querySelectorAll(".answers")
var correct = document.querySelectorAll(".correct")
var incorrect = document.querySelectorAll(".incorrect")
var runningquestion = 0
var submitEl = document.querySelector("#submit")
var highscoreList = []
submitEl.addEventListener("click", submit)
//array for questions
var questions = [
    {
        question: "What did Sisyphus do to anger the greek gods?",
        a1: "A. Kill all the guest in travelers in his palace",
        a2: "B. Fed the gods his children",
        a3: "C. Tricked and tied up death",
        a4: "D. None of the above.",
        correct: "a1"
     },
    {
        question: "According to greek mythology, who killed Kronos?",
        a1:"A. Aphrodite.",
        a2: "B. Poseidon.",
        a3: "C. Zeus.",
        a4:"D. Gaea.",
        correct: "a3"
    },
    {
        question: "How was Athena born?",
        a1: "A. through the sheer will and determination of Zeus' first wife",
        a2: "B. From sea foam made from the blood of Uranus",
        a3: "C. Reupturing from Zeus' skull after he ate his pregnant wife",
        a4: "D. She wasn't born, she fell from the sky to avenge Uranus",
        correct: "a3"
    },
    {
        question: "Who was the father of the Minotaur?",
        a1: "A. Zeus",
        a2: "B. The king of Crete, king Minos",
        a3: "C. Theseus",
        a4: "D. A White bull that was sacred to Poseidon",
        correct: "a4"
    
    },
    {
        question: "Why was Medusa turned into a monster?",
        a1: "A. She angered Aphrodite",
        a2: "B. Poseidon was trying to seduce her for her extreme beauty, she ran to Athena's temple for help",
        a3: "C. Her father was a king and angerd the gods",
        a4: "D. She claimed her intelegence and wits were greater than the gods",
        correct: "a2"
    }

]
var lastQuestion = questions.length -1;
//starts timer at top

function startTime() {
    timer = setInterval(function() {
        timeLeft--;
        document.querySelector(".timer").textContent = timeLeft
        if (timeLeft <= 0) {
            clearInterval(timer)          
        }
        
    }, 1000)
}

 
    var buttonOne = document.querySelector(".b1")
    var buttonTwo = document.querySelector(".b2")
    var buttonThree = document.querySelector(".b3")
    var buttonFour = document.querySelector(".b4")

// checks if answer was correct and displays next questions. Also runs score submision at end of quiz

function checkAnswer(correct) {
    if(correct == questions[runningquestion].correct) {
        response.textContent = "correct"
    } else {
        response.textContent = "incorrect"
        timeLeft -= 15
    }
    if (runningquestion < lastQuestion && timeLeft > 0) {
        runningquestion++;
        renderQuestions();
    } else {
        scoreRender()
    }
}
//shows score submision 
function scoreRender() {
    clearInterval(timer)
    score = timeLeft
    var scorePage = document.querySelector("#scorePage").style.display = "flex"
}

 function renderQuestions() {
      var k = questions[runningquestion]
      q.innerHTML = k.question
      a01.innerHTML = k.a1
      a02.innerHTML = k.a2
      a03.innerHTML = k.a3
      a04.innerHTML = k.a4
  }
  // adds functionality to start button
startBtn.addEventListener("click", function(){
    runningquestion = 0
    startTime()
    renderQuestions()  
    startBtn.style.display = "none";
    document.querySelector(".quiz").textContent = "Subject: Greek Mythology"
})

//grabs initials and score storing them in local storage
function submit() {
    var input = document.querySelector('input')
    var highscore1 = {
        name: input.value,
        score: timeLeft
    }
    highscoreList.push(highscore1)
    localStorage.setItem("highscoreList", JSON.stringify(highscoreList))
    window.location.href = "score.html"
}
// adds functionality to the try again button
var tA = document.querySelector("#tryagain").addEventListener("click", tryagain)
console.log(tA)
function tryagain() {
    timeLeft = 76
    timeLeft.textContent = timeLeft
    scorePage.style.display = "none"
    startBtn.style.display = "flex"

}