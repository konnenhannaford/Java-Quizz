var questionEl = document.getElementById("question");
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");

var questions = [
  {
    question: "what's our star?",
    answers: ["the sun", "alpha centauri", "betelgeuse"],
    correctAnswer: 0,
  },
  {
    question: "what's our planet?",
    answers: ["earth", "alpha centauri", "betelgeuse"],
    correctAnswer: 1,
  },
  {
    question: "what's our galaxy",
    answers: ["the milky way", "alpha centauri", "betelgeuse"],
    correctAnswer: 2,
  },
];

var currentQuestionIndex = 0;

function updateQuestion() {
  var currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    console.log('quiz done')
    return;
  }

  questionEl.textContent = currentQuestion.question;
  answer1El.textContent = currentQuestion.answers[0];
  answer2El.textContent = currentQuestion.answers[1];
  answer3El.textContent = currentQuestion.answers[2];
}

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
