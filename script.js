var information = document.querySelector("#information");
var begin = document.querySelector("#begin");
var restart = document.querySelector("#restart");
var titlePage = document.querySelector(".title-page");
var container = document.querySelector(".container");
var timer 

information.onclick = ()=>{
    titlePage.classList.replace("title-page", "container"); console.log("clicked");
    document.getElementById('quiz_container').style.display = 'block'

    document.getElementById('js_logo').style.display = 'none'
    document.getElementById('information').style.display = 'none'
    document.getElementById('first_section').style.display = 'none'
}


restart.onclick = ()=>{
    window.location.reload(); 
}
var click  = 0;

    var questions = [
        {

        question: "When was Javascript released",
        correctanswer: "December 4, 1995",
        answeroption1: "December 14, 1995", 
        answeroption2: "December 4, 1995", 
        answeroption3: "December 4, 1991", 
        answeroption4: "December 24, 1985",
      },
        {

        question: "Whis isn't a way of declaring a Variable",
        correctanswer: "FUNCTION",
        answeroption1: "LET", 
        answeroption2: "CONST", 
        answeroption3: "VAR", 
        answeroption4: "FUNCTION",
      },
        {
        
        question: "Who created Javascript?",
        correctanswer: "Brendan Eich",
        answeroption1: "Brendan Eich", 
        answeroption2: "John Hancock", 
        answeroption3: "Scott Morrison", 
        answeroption4: "Bill Gates",
      },
        {

        question: "Which of these is isnt a core language of web development?",
        correctanswer: "C-+",
        answeroption1: "HTML", 
        answeroption2: "Javascript", 
        answeroption3: "CSS", 
        answeroption4: "C-+",
      },
    
    ];


    var sec = 30;
    function startTimer(){
        timer = setInterval(function(){
            sec--;
            document.getElementById('timerDisplay').innerHTML='00:'+sec;
            if (sec < 0) {
                clearInterval(timer);
                //alert("Time is up!");
                document.querySelector("#message").innerHTML="Your time is up!  You got a total of " +points ;
                if(points > 0){

                 document.querySelector("#questions").style.display ="none";
                 document.querySelector("#results").style.display ="block";
                 document.querySelector(".scoreboard").style.display ="none";

             }else{
                 document.querySelector("#questions").style.display ="none";
                 document.querySelector("#results").style.display ="block";
                 document.querySelector(".test-result").style.display ="none";
                 
             }

            }
        }, 1000);
    }

  

begin.onclick = ()=>{
   // info_box.classList.replace("quiz_container", "questions"); //hide info box
    document.getElementById('questions').style.display = 'block'
    document.getElementById('quiz_container1').style.display = 'none';

 
    startTimer();




    for(var i = 0; i<questions.length; i++){
        document.querySelector(".questions").innerHTML = questions[0].question;
        document.querySelector(".answer-option1").innerHTML = '<input type="radio" id="'+questions[0].answeroption1+'" name="fav_language" value="'+questions[0].answeroption1+'"><label for="'+questions[0].answeroption1+'">'+questions[0].answeroption1+'</label><br>';
        document.querySelector(".answer-option2").innerHTML ='<input type="radio" id="'+questions[0].answeroption2+'" name="fav_language" value="'+questions[0].answeroption2+'"><label for="'+questions[0].answeroption2+'">'+questions[0].answeroption2+'</label><br>';;
        document.querySelector(".answer-option3").innerHTML = '<input type="radio" id="'+questions[0].answeroption3+'" name="fav_language" value="'+questions[0].answeroption3+'"><label for="'+questions[0].answeroption3+'">'+questions[0].answeroption3+'</label><br>';;
        document.querySelector(".answer-option4").innerHTML = '<input type="radio" id="'+questions[0].answeroption4+'" name="fav_language" value="'+questions[0].answeroption4+'"><label for="'+questions[0].answeroption4+'">'+questions[0].answeroption4+'</label><br>';;
    }


}

var points = 0;


function next(){
         click = click+1;

var previousQuestion = click-1;

var selectAnswer = document.querySelector('input[name="fav_language"]:checked').value;


if(selectAnswer == questions[previousQuestion].correctanswer){
    points = points+1;

}else{
     sec = sec -10;
}



document.querySelector(".questions").innerHTML = questions[click].question;

document.querySelector(".answer-option1").innerHTML = '<input type="radio" id="'+questions[click].answeroption1+'" name="fav_language" value="'+questions[click].answeroption1+'"><label for="'+questions[click].answeroption1+'">'+questions[click].answeroption1+'</label><br>';
document.querySelector(".answer-option2").innerHTML ='<input type="radio" id="'+questions[click].answeroption2+'" name="fav_language" value="'+questions[click].answeroption2+'"><label for="'+questions[click].answeroption2+'">'+questions[click].answeroption2+'</label><br>';;
document.querySelector(".answer-option3").innerHTML = '<input type="radio" id="'+questions[click].answeroption3+'" name="fav_language" value="'+questions[click].answeroption3+'"><label for="'+questions[click].answeroption3+'">'+questions[click].answeroption3+'</label><br>';;
document.querySelector(".answer-option4").innerHTML = '<input type="radio" id="'+questions[click].answeroption4+'" name="fav_language" value="'+questions[click].answeroption4+'"><label for="'+questions[click].answeroption4+'">'+questions[click].answeroption4+'</label><br>';;


}



function submitScore(){
    var name = document.querySelector('input[name="user"]').value;

     document.querySelector("#userScore").innerHTML= "<h3>"+name+": Your score is "+points; 
      document.querySelector(".test-result").style.display ="none";
     document.querySelector(".scoreboard").style.display ="block";

}

// function saveScore(){
//     var name = initials.value;
//     name = name.toUpperCase();
//     if (initialsEl.value === "") {
//         alert("Please enter initials");
//         return;
//     };
//     // Add key and value to localStorage
//     var leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
//     var submittedscore = {name: ,
//     points: };
//     leaderboard.push(submittedscore);
//     // Put the object into storage and moves it to highscores.html
//     window.localStorage.setItem("Leaderboard", JSON.stringify(leaderboard));
//     window.location.replace("leaderbaord.html");
// };



