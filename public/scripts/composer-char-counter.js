$(document).ready(function () {
  var MAX_LENGTH = 140;
  var counter;
  $('.new-tweet textarea').on('input', function (event) {
    // used Array.form to read undefined chars as one insted of two
    var charCount = Array.from($(this).val()).length;
    var remainedChar = MAX_LENGTH - charCount ;
    // cache the counter variable 
    counter = counter || $(this).parent().children(".counter");
    counter.text(remainedChar);
    if (remainedChar >= 0) {
      counter.css("color", "black");
    } else {
      counter.css("color", "red");
    }
  });
});