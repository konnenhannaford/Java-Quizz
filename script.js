// this is nicks code to get clock to work
var timeEl = document.querySelector(".timer-count");
var mainEl = document.querySelector("main")

var secondsLeft = 10;

function setTime () {

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
        clearInterval(timerInterval);

        sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    timeEl.textConent = " LOSER!!! "
}

setTime();