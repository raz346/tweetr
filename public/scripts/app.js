$(document).ready(function () {
  function createTweetElement(tweetData) {
    var $tweet = $("<article>").addClass("tweet");
    var $header = $("<header>");
    var $avatar = $("<img>").addClass("avatar").attr("src",tweetData.user.avatars.small);
    var $fullname = $("<h3>").addClass("fullname").text(tweetData.user.name);
    var $username = $("<p>").addClass("username").text(tweetData.user.handle);
    var $contents = $("<p>").addClass("contents").text(tweetData.content.text);
    var $footer = $("<footer>")
    var $date = $("<p>").addClass("date").text(tweetData.created_at);
    var $span = $("<span>").addClass("icons");
    var $icon1 = $("<i>").addClass("fa fa-retweet").attr("aria-hidden","true")
    var $icon2 = $("<i>").addClass("fa fa-flag").attr("aria-hidden","true")
    var $icon3 = $("<i>").addClass("fa fa-heart").attr("aria-hidden","true")
    // append elements
    $header.append($avatar, $fullname, $username);
    $span.append($icon1, $icon2, $icon3);
    $footer.append($date, $span);
    $tweet.append($header, $contents, $footer);
    return $tweet;
  }
  // function to loop through db and render each element
  function renderTweets(tweets) {
    // in order not to get tweets dublicated
    $('section#tweets-container').empty();
    // loop through db and render each element
    tweets.forEach(function(tweet){
      $('section#tweets-container').prepend(createTweetElement(tweet));
    });
  }
  //loading tweets from db
  function loadTweets() {
    $.ajax({
      method: "GET",
      url: "/tweets",
    }).then(function(tweets){
      renderTweets(tweets);
    })
  }
  // handle submition form
  $('.new-tweet form').on("submit", function(event){
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: $(this).serialize()
    }).then(function () {
      loadTweets();
    });
  });
loadTweets();
});
