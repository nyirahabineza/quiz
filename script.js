var grade=0;
function check() {
    var questionsOne = document.quiz.firstQuestion.value;
    var questionsTwo = document.quiz.secondQuestion.value;
    var questionsThree = document.quiz.thirdQuestion.value;
    var questionsFour = document.quiz.fothQuestion.value;
    var questionsFive = document.quiz.fithQuestion.value;
    var questionsSix = document.quiz.sixQuestion.value;
    var questionsSeven = document.quiz.sevenQuestion.value;
    var questionsEight = document.quiz.eightQuestion.value;
    var questionsNine = document.quiz.nineQuestion.value;
    var questionsTen = document.quiz.tenQuestion.value;    
  
    
    if (questionsOne == "b") {
        grade += 1;
    }
 if (questionsTwo == "g") {
     grade += 1;
    }
    if (questionsThree == "l") {
       grade += 1;
     }
    if (questionsFour == "m") {
        grade += 1;
     }
    if (questionsFive == "p") {
        grade += 1;
     }
     if (questionsSix == "t") {
       grade += 1;
     }
    if (questionsSeven == "w") {
     grade += 1;
     }
    if (questionsEight == "2") {
      grade += 1;
    }
    if (questionsNine == "6") {
       grade += 1;
 }
    if (questionsTen == "13") {
        grade += 1;
 
}
return grade;
}  
//user interface 
$(document).ready(function() {
    $("form").submit(function(){
        check()
        $("#button").hide();
        $("#quiz").hide();
        $("#answer").text("YOUR SCORE IS: " + grade + "/20.")
        $("#answer").show();
        event.preventDefault();
    })


});