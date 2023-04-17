// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

console.log("works from index.js");

let nameForm = document.getElementById("name-form");
let player1Name = document.getElementById("player-1-name");
let player2Name = document.getElementById("player-2-name");
// let startButton = document.getElementById("start-button")
nameForm.addEventListener("submit", formSubmit);

function formSubmit (event){
    event.preventDefault();
    window.location.href = `./round-1.html?name1=${player1Name.value}&name2=${player2Name.value}`
    }

