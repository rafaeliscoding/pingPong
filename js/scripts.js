
var isAcceptableInteger = function (number){
  var input = parseInt(number);
  console.log("input: ", input);
  if (!isNaN(input) && (input >= 1 && input <= 3999)) {
    return true;
  }
  return false;

}

var count = function (number){
  var output = [];
  var parsedInput = parseInt(number);
  for (var i = 1; i <= parsedInput; i++){
    if (isDivisiblebyThree(i) && !isDivisiblebyFive(i)){
      output.push("ping");
    }else if (isDivisiblebyFive(i) && !isDivisiblebyThree(i)){
      output.push("pong");
    }else if (isDivisiblebyFive(i) && isDivisiblebyThree(i)){
      output.push("ping pong");
    }else {
      output.push(i);
    }

  }
  return output;
}

var isDivisiblebyThree = function (number){
  if (number % 3 == 0){
    return true;
  }
}

var isDivisiblebyFive = function (number){
  if (number % 5 == 0){
    return true;
  }
}

$(document).ready(function(){

    $("form").submit(function (event){
      var input = $("#input").val();
      $(".error").text("");
      $("ul").empty();
      if (isAcceptableInteger(input)){
        console.log(count (input));
        count(input).forEach(function (value){

        if (value === "ping"){
          $("ul").append("<li class='ping'>" + value + "</li>");
        }else if (value === "pong"){
          $("ul").append("<li class='pong'>" + value + "</li>");
        }else if (value === "ping pong"){
          $("ul").append("<li class='pingPong'>" + value + "</li>");
        }else{$("ul").append("<li>" + value + "</li>");}

        });

      }else {
        $(".error").hide().text("Please enter a number between 1 and 3999.").fadeIn();
      }
      $("ul li").hide();
      $("ul li").each(function(i) {
        $(this).delay(100 * i).fadeIn(500);
      });


      event.preventDefault();
    });

});
