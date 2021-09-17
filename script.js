// these will make buttons work
var information = document.querySelector("#information");
var testInfo = document.querySelector(".test-info");
var begin = document.querySelector("#begin");
var testQuestions = document.querySelector(".test-questions");
var submit= document.querySelector("#submit");
var results = document.querySelector(".results");
// these 2 will loop back to the start of the quiz or to the homepage 
var restart = document.querySelector("#restart");
var titlePage = document.querySelector(".title-page");
var container = document.querySelector(".container");

// not sure on this
var questions = document.querySelector(".questions");
var answerOption1 = document.querySelector("#answer-option1");
var answerOption2 = document.querySelector("#answer-option2");
var answerOption3 = document.querySelector("#answer-option3");
var answerOption4 = document.querySelector("#answer-option4");
var submitQuestion = document.querySelector("#submit-question");

var questions = document.querySelector(".questions");
var answerOption = document.querySelector(".answer-option");
var submitQuestion = document.querySelector("#submit-question");

// need to review
// var clockMessage = document.querySelector(".clock-message");
// var countdown = document.querySelector(".countdown");
// var clock = document.querySelector(".clock");
// var results = document.querySelector(".results");
// var testResult= document.querySelector(".test-result");
// var username = document.querySelector(".username");
// var scoreboard = document.querySelector(".scoreboard");

information.onclick = ()=>{
    titlePage.classList.replace("title-page", "container"); console.log("clicked");
    document.getElementById('quiz_container').style.display = 'block'
    document.getElementById('js_logo').style.display = 'none'
    document.getElementById('information').style.display = 'none'
    document.getElementById('first_section').style.display = 'none'
}

begin.onclick = ()=>{
    info_box.classList.replace("quiz_container", "questions"); //hide info box
    document.getElementById('questions').style.display = 'block'
    document.getElementById('quiz_container').style.display = 'none'
}

//////// need to check if this is the way to do for the rest of it '

// begin.onclick = ()=>{
//     testQuestions.classList.replace("title-page", "container"); console.log("clicked");
//     document.getElementById('quiz_container').style.display = 'block'
//     document.getElementById('js_logo').style.display = 'none'
//     document.getElementById('information').style.display = 'none'
//     document.getElementById('first_section').style.display = 'none'
// }

// // if startQuiz button clicked
// information.onclick = ()=>{
//     titlePage.classList.replace("title-page", "container"); console.log("clicked");
// }
// // if startQuiz button clicked
// begin.onclick = ()=>{
//     container.classList.replace("title-page", "container"); console.log("clicked");
// }
// // if startQuiz button clicked
// submit.onclick = ()=>{
//     titlePage.classList.replace("results", "container"); console.log("clicked");
// }
// // if startQuiz button clicked
// restart.onclick = ()=>{
//     titlePage.classList.replace("title-page", "title-page"); console.log("clicked");
// }



// if startQuiz button clicked
    // document.getElementById("information").addEventListener("click", displaytestinfo);

    // function displaytestinfo () {
    //     var displayinformation = document.getElementById("information");
    //         if (displayinformation.style.display === "none") {
    //             displayinformation.style.display = "block";
    //         } else {
    //             displayinformation.style.display = "none";
    //         }
    //     }

    // document.getElementById("begin").addEventListener("click", displaytestQuestions);

    // function displaytestQuestions () {
    //     var displayquestions = document.getElementById("begin");
    //         if (displayquestions.style.display === "none") {
    //             displayquestions.style.display = "block";
    //         } else {
    //             displayquestions.style.display = "none";
    //         }
    // }    

    // document.getElementById("submit").addEventListener("click", displayresults);

    // function displayresults () {
    //     var displayscores = document.getElementById("submit");
    //         if (displayscores.style.display === "none") {
    //             displayscores.style.display = "block";
    //         } else {
    //             displayscores.style.display = "none";
    //         }

    // document.getElementById("restart").addEventListener("click", displaytestinfo);

    // function displaytestinfo () {
    //     displayinformation = document.getElementById("restart");
    //         if (displayinformation.style.display === "none") {
    //             displayinformation.style.display = "block";
    //         } else {
    //             displayinformation.style.display = "none";
    //         }
    //     }
    // }

// var questions = [
//         {

//         question: "What comes after 3?",
//         correctanswer: 4,
//         answeroption1: "two", 
//         answeroption2: "three", 
//         answeroption3: "four", 
//         answeroption4: "five",
//       },
//         {

//         question: "What comes after 3?",
//         correctanswer: 4,
//         answeroption1: "two", 
//         answeroption2: "three", 
//         answeroption3: "four", 
//         answeroption4: "five",
//       },
//         {
        
//          question: "What comes after 3?",
//         correctanswer: 4,
//         answeroption1: "two", 
//         answeroption2: "three", 
//         answeroption3: "four", 
//         answeroption4: "five",
//       },
//         {

//         question: "What comes after 3?",
//         correctanswer: 4,
//         answeroption1: "two", 
//         answeroption2: "three", 
//         answeroption3: "four", 
//         answeroption4: "five",
//       },
    
//     ];

function checkAnswer(clickedAnswer) {
    var currentQuestion = questions[currentQuestionIndex];
  
    if (!currentQuestion) {
      return;
    }
    
    if (currentQuestion.correctAnswer === clickedAnswer) {
      console.log('correct answer');
    }
    else {
      console.log('wrong answer');
    }
  
    currentQuestionIndex++;
    updateQuestion();
  }
  
  answer1El.addEventListener("click", function () {
    checkAnswer(0);
  });
  
  answer2El.addEventListener("click", function () {
    checkAnswer(1);
  });
  
  answer3El.addEventListener("click", function () {
    checkAnswer(2);
  });
  
  updateQuestion();
  

// -----------------------------------------------------------------------------------------------------------------------------------------------

// restart button
restart.onclick = ()=>{
    window.location.reload(); 
}

// -----------------------------------------------------------------------------------------------------------------------------------------------
// timer - 
// var timerEl = document.getElementById('countdown');
// var mainEl = document.getElementById('main');

// var message =
//   'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
// var words = message.split(' ');

// // Timer that counts down from 5
// function countdown() {
//   var timeLeft = 5;

//   // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   var timeInterval = setInterval(function () {
//     // As long as the `timeLeft` is greater than 1
//     if (timeLeft > 1) {
//       // Set the `textContent` of `timerEl` to show the remaining seconds
//       timerEl.textContent = timeLeft + ' seconds remaining';
//       // Decrement `timeLeft` by 1
//       timeLeft--;
//     } else if (timeLeft === 1) {
//       // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//       timerEl.textContent = timeLeft + ' second remaining';
//       timeLeft--;
//     } else {
//       // Once `timeLeft` gets to 0, set `timerEl` to an empty string
//       timerEl.textContent = '';
//       // Use `clearInterval()` to stop the timer
//       clearInterval(timeInterval);
//       // Call the `displayMessage()` function
//       displayMessage();
//     }
//   }, 1000);
// }

// // Displays the message one word at a time
// function displayMessage() {
//   var wordCount = 0;

//   // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   var msgInterval = setInterval(function () {
//     // If there are no more words left in the message
//     if (words[wordCount] === undefined) {
//       // Use `clearInterval()` to stop the timer
//       clearInterval(msgInterval);
//     } else {
//       // Display one word of the message
//       mainEl.textContent = words[wordCount];
//       wordCount++;
//     }
//   }, 1000);
// }

// countdown();


        // how to add eror message - / or send to end screen 
        // // Function to create and append colorsplosion image
        // function sendMessage() {
        //     timeEl.textContent = " ";
        //     var imgEl = document.createElement("img");
        //     imgEl.setAttribute("src", "images/image_1.jpg");
        //     mainEl.appendChild(imgEl);


// -----------------------------------------------------------------------------------------------------------------------------------------------
        // how to calculate score?
        // var count = 0;
        // //  Select increment and decrement button elements
        // var incrementEl = document.querySelector("#increment");
        // var decrementEl = document.querySelector("#decrement");
        // var countEl = document.querySelector("#count");

        // // Updates count on page
        // function setCounterText() {
        // countEl.textContent = count;
        // }
        // // Attach event listener to increment button element
        // incrementEl.addEventListener("click", function() {
        // count++;
        // setCounterText();
        // });

        // // Attach event listener to decrement button element
        // decrementEl.addEventListener("click", function() {
        // // Action will fire if count is greater than  0
        // if (count > 0) {
        //     count--;
        //     setCounterText();
        // }
        // });
