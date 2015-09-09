$(function(){
  var fizzBuzz = function(n){
    var strfb = "";
    for (i = 1; i <= n; i++) {
      if (i % 15 == 0) {
	strfb += "FizzBuzz";
      }
      else if (i % 3 == 0) {
	strfb += "Fizz";
      }
      else if (i % 5 == 0) {
	strfb += "Buzz";
      }
      else {
	strfb += i;
      }
      strfb += "<br/>\n";
    }
    $('#output').html(strfb);
  }
  $("#my-button").click (function() { fizzBuzz(parseInt($("input").val())); });
});
