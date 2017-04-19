$(document).ready(function () {
  function createTweetElement(tweetData) {
    var $tweet = $("<article>").addClass("tweet");
    //  access html header and assign the values from the database
    var $header = $(`
    <header>
    <img class="avatar" src="${tweetData.user.avatars.small}" width="40" height="40">
    <h3 class="fullname">${tweetData.user.name}</h3>
    <p class="username">username</p>
    </header>
      `)


  }

  var tweetData = {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }

  var $tweet = createTweetElement(tweetData);
  console.log($tweet);
  $('main.container').append($tweet);

});



  // <article id="tweets-container">
  //   <header>
  //   <img class="avatar" src="http://emojipedia-us.s3.amazonaws.com/cache/47/7e/477e41a57d9588f86eff387def2f8761.png" width="40" height="40">
  //   <h3 class="fullname">fullname</h3>
  //   <p class="username">username</p>
  //   </header>
  //   <p class="contents">some new tweet</p>
  //   <footer>
  //     <p>10 days ago </p>
  //     <span id="icons">
  //       <i class="fa fa-flag" aria-hidden="true"></i>
  //       <i class="fa fa-retweet" aria-hidden="true"></i>
  //       <i class="fa fa-heart" aria-hidden="true"></i>
  //     </span>
  //   </footer>
  // </article>