var startBtn = document.querySelector("#startbutton")
var sh = document.querySelector(".sh")
var timeLeft = 76
var response = document.querySelector(".response")
var correct = document.querySelector(".correct")
var incorrect = document.querySelector(".incorrect")
correct = true
incorrect = false

function startTime() {
    timer = setInterval(function() {
        timeLeft--;
        document.querySelector(".timer").textContent = timeLeft 
        if (timeLeft === 0) {
            clearInterval(timer)
            window.location.href = "score.html"           
        }
        
    }, 1000)
}

startBtn.addEventListener("click", function(){
    startTime()
    startBtn.style.display = "none";
    var q1a1 = document.querySelector(".q1a1")
    document.querySelector("#q1").style.display = "flex"
    document.querySelector(".questions").textContent = "What did sisyphus do to anger the greek gods?"
    q1a1.textContent = "meep meep"
    document.querySelector(".quiz").textContent = "Subject: Greek Mythology"
})


// sh.addEventListener("click", function(){
    
// }) 

// function questionAnswer() {
//     if (correct) {
//         response.textContent = "Correct!"
//     } else (incorrect)
//     response.textContent = "Incorrect :("
// }

// correct.addEventListener("click", function(){
//     questionAnswer()
//     console.log ("clicked")
// })