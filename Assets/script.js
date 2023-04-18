var startBtn = document.querySelector("#startbutton")
var sh = document.querySelector(".sh")
var timeLeft = 76
var response = document.querySelector(".response")
var q = document.querySelector("#q")
var a1 = document.querySelector("#a1")
var a2 = document.querySelector("#a2")
var a3 = document.querySelector("#a3")
var a4 = document.querySelector("#a4")
var q2 = document.querySelector("#q2")
var answers = document.querySelectorAll(".answers")
var theQuestion = 0

function startTime() {
    timer = setInterval(function() {
        timeLeft--;
        document.querySelector(".timer").textContent = timeLeft 
        if (timeLeft <= 0) {
            clearInterval(timer)
            window.location.href = "score.html"           
        }
        
    }, 1000)
}

startBtn.addEventListener("click", function(){
    startTime()
    startBtn.style.display = "none";
    q.style.display = "flex"
    q.textContent = "What did sisyphus do to anger the greek gods?"
    a1.style.display = "flex"
    a1.textContent = "A. Kill all the guests and travelers in his palace."
    a2.style.display = "flex"
    a2.textContent = "B. Fed the gods his children."
    a3.style.display = "flex"
    a3.textContent = "C. Tricked Death and tied him up."
    a4.style.display = "flex"
    a4.textContent = "D. None of the above."
    document.querySelector(".quiz").textContent = "Subject: Greek Mythology"
    if (clickedArr[1] == "correct") {
        console.log("correct")
        response.textContent = "Correct :)"
        question2()
    } else {
        console.log("incorrect")
        response.textContent = "Incorrect :("
        timeLeft -= 15
        question2()
    }
})

function question2() {
    q.style.display = "none"
    a1.style.display = "none"
    a2.style.display = "none"
    a3.style.display = "none"
    a4.style.display = "none"
    q2.style.display = "flex"
    q2.textContent = "According to greek mythology, who killed Kronos?"
    q2a1.style.display = "flex"
    q2a1.textContent = "A. Aphrodite."
    q2a2.style.display = "flex"
    q2a2.textContent = "B. Poseidon."
    q2a3.style.display = "flex"
    q2a3.textContent = "C. Zeus."
    q2a4.style.display = "flex"
    q2a4.textContent = "D. Gaea."
if (clickedarr2[3] == "correct") {
    console.log("correct")
    response.textContent = "Correct :)"
    question3()
} else {
    console.log("incorrect")
    response.textContent = "Incorrect :("
    timeLeft -= 15
    question3()

}
}

function question3() {
    q2.style.display = "none"
    q2a1.style.display = "none"
    q2a2.style.display = "none"
    q2a3.style.display = "none"
    q2a4.style.display = "none"
    q3.style.display = "flex"
    q3.textContent = "How was Athena Born?"
    q3a1.textContent = "A. Through sheer will and determination of Zeus' first wife"
    q3a2.textContent = "B. From sea foam made from the blood of Uranus"
    q3a3.textcontent = "C. Rupturing from Zeus' skull after he ate his pregnant first wife"
    q3a4.textContent = "D. She wasnt born she fell for the sky to avenge Uranus"
    if (clickedarr3[4] == "correct") {
        console.log("correct")
        response.textContent = "Correct :)"
    } else {
        console.log("incorrect")
        response.textContent = "Incorrect :("
        timeLeft -= 15
    
    }




}


function responses(clickedArr) {
    console.log(clickedArr[1])
    if (clickedArr[1] == "correct") {
        console.log("correct")
        response.textContent = "Correct :)"
        question2()
    } else {
        console.log("incorrect")
        response.textContent = "Incorrect :("
        timeLeft -= 15
        question2()
    }
}
for ( var i = 0; i < answers.length; i++) {
    answers [i].addEventListener("click", function() {

    // responses()
    var answerClicked = event.target
    var answerClickedClasses = answerClicked.classList.value.split(" ")
    responses(answerClickedClasses)
    console.log(answerClickedClasses)
})}
