import placeholderQuestions from "./placeholder-questions.js";
console.log({placeholderQuestions});
console.log("works from round-1.js")



let WhosTurn = document.getElementById("player-turn");
let playerOneScore = document.getElementById("player1rd")
let playerTwoScore = document.getElementById("player2rd")
let Params = new URLSearchParams(document.location.search);

let player1Name = Params.get("name1");
let player2Name = Params.get("name2");
let currentPlayer = player1Name

let player1Points = 0
let player2Points = 0

console.log("name1")
WhosTurn.textContent = `${currentPlayer}'s turn to start`;
let Turn = ""
// Turn = alert(`its ${currentPlayer}'s turn`)

let natureQs = placeholderQuestions.filter((cat)=>cat.category === "Nature");
let historyQs = placeholderQuestions.filter((cat)=>cat.category === "History");
let animalsQs = placeholderQuestions.filter((cat)=>cat.category === "Animals");
let mythologyQs = placeholderQuestions.filter((cat)=>cat.category === "Mythology");
let computersQs = placeholderQuestions.filter((cat)=> cat.category === "Computers");
let generalQs = placeholderQuestions.filter((cat)=>cat.category === "General");
// Get the modal
let modal = document.getElementById("myModal");
let modalText = document.getElementById("modal-text")
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";  
  }
}
function randomQuestion(min, max) {
    let range = max - min + 1;
    return Math.floor(Math.random() * range +min)
}

let counter = 0
function populateQuestionsRound1 (categoryQuestions, categoryTitle) {
    console.log(categoryTitle);
document.querySelectorAll(categoryTitle).forEach((item) => {
    let userClick = true;
    item.addEventListener("click", () => {
        if (userClick) {
            userClick = false;
            item.style.backgroundColor = "white";
        console.log("click")
        modal.style.display = "block";
        modalText.textContent = categoryQuestions[counter].question;
    if (counter < 4) 
        { counter++;} 
        } else {
            window.alert("dont click again")
        }
    })
})
}
populateQuestionsRound1(natureQs, ".cat-1");
populateQuestionsRound1(historyQs, ".cat-2");
populateQuestionsRound1(animalsQs, ".cat-3");
populateQuestionsRound1(mythologyQs, ".cat-4");
populateQuestionsRound1(computersQs, ".cat-5");
populateQuestionsRound1(generalQs, ".cat-6");

let userGuess = document.querySelector(".questionAnswer")
let guessBTN = document.getElementById("guess-button")

console.log(document.querySelector(".questionAnswer"))
console.log(document.getElementById("guess-button"))

guessBTN.addEventListener("click",guessTheAnswer)



function guessTheAnswer (){
    console.log()
    console.log(userGuess.value)
}






let Answers = document.querySelectorAll(".questionAnswer");
console.log(Answers);
function answerChecker(category, ){
for(let i = 0; i < Answers.length; i++) {
natureAnswers[i].addEventListener("keyup", () => {
    let answer = natureAnswers[i].value.toLowerCase();
    let actualAnswer = category[i].answer.toLowerCase();
    if (answer == actualAnswer) {
      Answers[i].style.backgroundColor = "lightgreen";


      if (currentPlayer = Player1) {
        player1Points += questionPoints

      } else {
        player2Points += questionPoints
      }
      // CurrentPlayerPoints plus points 
      // currentPlayer = currentPlayer
      //question disappears
    } else {
      console.log("it's incorrect");
      Answers[i].style.backgroundColor = "red";
      // current player minus points
        /*   if (currentPlayer = player1) {
      current player = player 2 
        } else if (currentPlayer = player2) {
          
     */
        }
  });
}
}


function populateQuestionsRound2 (categoryQuestions, categoryTitle) {
    console.log(categoryTitle);
    let counter = 5
document.querySelectorAll(categoryTitle).forEach((item) => {
    item.addEventListener("click", () => {
        console.log("click")
        modal.style.display = "block";
        modalText.textContent = categoryQuestions[counter].question;
        if (counter < 8) { counter++;} else {}
        console.log("YOOOOO" + placeholderQuestions[categoryQuestions])
    console.log(modal.textContent);
    })
})
}