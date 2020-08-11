var currentQuestion=0;
    var totalScore=0;
    var cQuestion=document.getElementById('currentQuestion');
    var totalQuestions=document.getElementById('totalQuestions');
    var splashSecreen=document.getElementById('start');
    var quizScreen=document.getElementById('quiz-secreen');
    var x=0;
    var resultSecreen=document.getElementById('resultSecreen');
    var timeLeft=document.getElementById('timeLeft');
    var score=document.getElementById('score');
    var question=document.getElementById('question');
    var opt1=document.getElementById('opt1');
    var opt2=document.getElementById('opt2');
    var opt3=document.getElementById('opt3');
    var opt4=document.getElementById('opt4');
    var btn=document.getElementsByClassName('btn');
    var next=document.getElementById('next');
    var quizQuestions=[
      {
        question:"What is JavaScript? ",
        choice1:"Programming Language",
        choice2:"Markup Language",
        choice3:"Rebotic Language",
        choice4:"Machine Language",
        ans:"Programming Language",
      },
         {
        question:"Who is the Inventor of JavaScript?",
        choice1:"Dennis Ritchie",
        choice2:"Brendan Eich",
        choice3:"Guido van Rossum",
        choice4:"James Gosling",
        ans:"Brendan Eich",
      },
         {
        question:"JavaScript was released as version 1.0 in?",
        choice1:"April 1996",
        choice2:"June 1995",
        choice3:"November 1999",
        choice4:"March 1996",
        ans:"March 1996",
      },
         {
        question:"IOT Stands For______",
        choice1:"Internet Objects Things",
        choice2:"Internet Of Things",
        choice3:"Internet Operator Telegram",
        choice4:"internet obsession tool",
        ans:"Internet Of Things",
      },
         {
        question:"Owner of Microsoft Company?",
        choice1:"Steve Jobs",
        choice2:"Elon Musk",
        choice3:"Bill Gates",
        choice4:"Jack Ma",
        ans:"Bill Gates",
      },
         {
        question:"Owner of Iphone Company?",
        choice1:"Steve Jobs",
        choice2:"Elon Musk",
        choice3:"Bill Gates",
        choice4:"Jack Ma",
        ans:"Steve jobs",
      },
      {
        question:"Owner of AliBaba?",
        choice1:"Steve Jobs",
        choice2:"Elon Musk",
        choice3:"Bill Gates",
        choice4:"Jack Ma",
        ans:"Steve jobs",
      }

    ];
    function nextQuestion(no){
    Inter(300);
    cQuestion.textContent=" "+(no+1);
    totalQuestions.textContent=" "+quizQuestions.length;
    console.log("number "+no);
    question.textContent=quizQuestions[no].question;
    opt1.textContent=quizQuestions[no].choice1;
    opt2.textContent=quizQuestions[no].choice2;
    opt3.textContent=quizQuestions[no].choice3;
    opt4.textContent=quizQuestions[no].choice4;
  }
    var z=setInterval(function(){
        if(x==1){
          clearInterval(z);
          splashSecreen.style.display="none";
          quizScreen.style.display="block";
          nextQuestion(currentQuestion);
        }
        x++;
    },2000);
    for(var i=0;i<btn.length;i++){
      btn[i].onclick=function(){
        if(this.textContent==quizQuestions[currentQuestion].ans){
            totalScore++;
            if(currentQuestion<4){
            clearInterval(bar);
            currentQuestion++;
            nextQuestion(currentQuestion);
            console.log(totalScore);
            }else{
              endSecreen();
            }
        }
        else{
          if(currentQuestion<4){
            currentQuestion++;
            clearInterval(bar);
            nextQuestion(currentQuestion);
            console.log(totalScore);
            }else{
              endSecreen();
            }
        }
      }
    }
    var bar;
    function endSecreen(){
      quizScreen.style.display="none";
      resultSecreen.style.display="block";
      score.textContent=totalScore;
    }
    function Inter(set){
    var statusTime=set;
    timeLeft.style.width=statusTime+"px";
    bar=setInterval(function(){
     if(statusTime==0){
         clearInterval(bar); 
          if(currentQuestion<4){
            currentQuestion++;
            nextQuestion(currentQuestion);
          }
          else{
            endSecreen();
          } 
           
        }
        timeLeft.style.width=statusTime+"px";
        statusTime=statusTime-30;
    },1000); 
   }
  next.onclick=function(){
    if(currentQuestion<4){
    currentQuestion++;
    nextQuestion(currentQuestion);
    }
    else{
      endSecreen();
    }
   
  }