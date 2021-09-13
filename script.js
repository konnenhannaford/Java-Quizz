// i get this
var informationButton = document.querySelector("#information-button");
var testInfo = document.querySelector(".test-info");
var begin = document.querySelector("#begin");
var testQuestions = document.querySelector(".test-questions");

// not sure on this
var questions = document.querySelector(".questions");
var answerOptions = document.querySelector(".answer-options");
var submitQuestion = document.querySelector("#submit-question");

// need to review
// var clockMessage = document.querySelector(".clock-message");
// var countdown = document.querySelector(".countdown");
// var clock = document.querySelector(".clock");
// var submitQuestion = document.querySelector(".submit-question");
// var results = document.querySelector(".results");
// var resultsMessage= document.querySelector(".results-message");
// var score = document.querySelector(".score");
// var endOptions = document.querySelector(".end-options");
// var tryAgain = document.querySelector(".try-again");
// var giveUp = document.querySelector(".give-up");
// var submitQuestion = document.querySelector(".Begin");

document.querySelector("#information-button").addEventListener("click", displaytextinfo)

function displaytextinfo () {
    var element = document.querySelector("#information-button");
    element.classList.toggle(".test-info");


var questions = [
        {

        question: "What comes after 3?",
        correctanswer: 4,
        answer1: "two", 
        answer2: "three", 
        answer3: "four", 
        answer4: "five",
      },
        {

        question: "What comes after 3?",
        correctanswer: 4,
        answer1: "two", 
        answer2: "three", 
        answer3: "four", 
        answer4: "five",
      },
        {
        
        question: "What comes after 3?",
        correctanswer: 4,
        answer1: "two", 
        answer2: "three", 
        answer3: "four", 
        answer4: "five",
      },
        {

        question: "What comes after 3?",
        correctanswer: 4,
        answer1: "two", 
        answer2: "three", 
        answer3: "four", 
        answer4: "five",
      },
    
    ];
}