var intervalId;

var timer = 60;

function start() {
      console.log('clicked start btn');
      intervalId = setInterval(decrement, 1000);
      $(this).css('display', 'none');
}

$("#start").on("click", function () {
    console.log('clicked start btn');
    intervalId = setInterval(decrement, 1000);
    soccerTrivia.init();

    $(this).hide();
    $("#main").show();
});

function decrement() {

  timer--;

  $("#display").html("<h2>" + timer + "</h2>");

  if (timer === 0) {
  $result.hide();
  $thanks.show();
  stop();

  }

function stop(){

clearInterval(intervalId);


}

 }




var counter = 0,
    score = 0;




var content = [
{"question":"Brazil is the most winner of the fifa world cup","answer":"true"},
{"question":"C.Ronaldo is the most time winner of ballon dor", "answer":"false"},
{"question":"L.Messi is leading scorer of UEFA Champions League all time", "answer":"false"},
{"question":"Manchester United has most titles at English Premier League","answer":"true"},
{"question":"Dino Zoff is the goalkeeper who has remained unbeaten for the longest period of time At international level", "answer":"true"},
{"question":"Turkiye hold the 3rd place at 2002 fifa world cup in Japan and S.Korea", "answer":"true"},
{"question":"G.Bale is the most expensive transfer of all the times","answer":"false"},
{"question":"D.Beckham played in Usa for LA Galaxy", "answer":"true"},
{"question":"Usa hosted 1998 Fifa World Cup","answer":"false"},
{"question":"Portugal won the last European Championship in 2016", "answer":"true"},
{"question":"Mexico is the only country hosted world cup 2 consecutive years", "answer":"true"},
{"question":"Sir A.Ferguson is the most successful coach ever", "answer":"true"},
{"question":"Barcelona's home Nou Camp biggest soccer stadium in the world", "answer":"false"},
{"question":"Sevilla is the only team won the European League cup 5 times", "answer":"true"},
{"question":"D.Maradona won the fifa world cup with Argentina on 1990 in italy","answer":"false"},
{"question":"First soccer game played on 1863 in london", "answer":"true"}
]

  var $question = $('.question'),
      $generate = $('.generate'),
      $result = $('.results'),
      $score = $('.score'),
      $thanks = $('.thanks'),
      $options = $('.options');

  var soccerTrivia = {};




  soccerTrivia.init = function(){
  var selection = content[counter];
  type = selection["answer"];
  $question.html(selection["question"]);
  $generate.hide();
  $result.hide();
  $score.hide();
  $thanks.hide();


  }


soccerTrivia.generate = function(){

  if (counter < content.length ){
    var selection = content[counter];
    $question.html(selection["question"]);
    type = selection["answer"];

    $result.hide();
    $score.hide();
    $question.show();
    $options.show();

  } 

  $generate.hide();


}

$('.choice').click(function(e) {
  var chosenAnswer = e.target.id;  
  $result.show();
  $score.show();
  $question.hide();
  $options.hide();

  if (type == chosenAnswer) {
      fullAnswer = "You Scored";
  } else {
      fullAnswer = "Conceded";
  }

  if (chosenAnswer == type) {
      $result.html("<span class='right'>GOAAAAAALLL</span> " + fullAnswer + ".");
      score++;
  } else {
      $result.html("<span class='wrong'>Dammit!!</span> " + fullAnswer + ".");
  }
      counter++;
      $score.html("You're " + score + " for " + counter + ".");
      $generate.show();
  
});


$(document).ready(function() {
    $("#main").hide();
});

$generate.on('click', function() {
 soccerTrivia.generate();
});


