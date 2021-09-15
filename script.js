// these will make buttons work
var information = document.querySelector("#information");
var testInfo = document.querySelector(".test-info");
var begin = document.querySelector("#begin");
var testQuestions = document.querySelector(".test-questions");
var submit= document.querySelector("#submit");
var results = document.querySelector(".results");
// these 2 will loop back to the start of the quiz or to the homepage 
var restart = document.querySelector("#restart");
var titlePage = document.querySelector("title-page");
var container = document.querySelector("container");

// not sure on this
var questions = document.querySelector(".questions");
var answerOption1 = document.querySelector(".answer-option1");
var answerOption2 = document.querySelector(".answer-option2");
var answerOption3 = document.querySelector(".answer-option3");
var answerOption4 = document.querySelector(".answer-option4");
var submitQuestion = document.querySelector("#submit-question");

// need to review
// var clockMessage = document.querySelector(".clock-message");
// var countdown = document.querySelector(".countdown");
// var clock = document.querySelector(".clock");
// var results = document.querySelector(".results");
// var testResult= document.querySelector(".test-result");
// var username = document.querySelector(".username");
// var scoreboard = document.querySelector(".scoreboard");


// if startQuiz button clicked
information.onclick = ()=>{
    titlePage.classList.replace("title-page")}

// if startQuiz button clicked
    document.getElementById("information").addEventListener("click", displaytestinfo);

    function displaytestinfo () {
        var displayinformation = document.getElementById("information");
            if (displayinformation.style.display === "none") {
                displayinformation.style.display = "block";
            } else {
                displayinformation.style.display = "none";
            }
        }

    document.getElementById("begin").addEventListener("click", displaytestQuestions);

    function displaytestQuestions () {
        var displayquestions = document.getElementById("begin");
            if (displayquestions.style.display === "none") {
                displayquestions.style.display = "block";
            } else {
                displayquestions.style.display = "none";
            }
    }    

    document.getElementById("submit").addEventListener("click", displayresults);

    function displayresults () {
        var displayscores = document.getElementById("submit");
            if (displayscores.style.display === "none") {
                displayscores.style.display = "block";
            } else {
                displayscores.style.display = "none";
            }

    document.getElementById("restart").addEventListener("click", displaytestinfo);

    function displaytestinfo () {
        displayinformation = document.getElementById("restart");
            if (displayinformation.style.display === "none") {
                displayinformation.style.display = "block";
            } else {
                displayinformation.style.display = "none";
            }
        }
    }

// var questions = [
//         {

//         question: "What comes after 3?",
//         correctanswer: 4,
//         answer1: "two", 
//         answer2: "three", 
//         answer3: "four", 
//         answer4: "five",
//       },
//         {

//         question: "What comes after 3?",
//         correctanswer: 4,
//         answer1: "two", 
//         answer2: "three", 
//         answer3: "four", 
//         answer4: "five",
//       },
//         {
        
//         question: "What comes after 3?",
//         correctanswer: 4,
//         answer1: "two", 
//         answer2: "three", 
//         answer3: "four", 
//         answer4: "five",
//       },
//         {

//         question: "What comes after 3?",
//         correctanswer: 4,
//         answer1: "two", 
//         answer2: "three", 
//         answer3: "four", 
//         answer4: "five",
//       },
    
//     ];
// .