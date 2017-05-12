"use strict";


// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
        db.collection("tweets").insert(newTweet);
        callback(null, true);
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
        const sortNewestFirst = (a, b) => a.created_at - b.created_at;
        db.collection('tweets').find().toArray((err, tweets) => {
          callback(null, tweets.sort(sortNewestFirst));
        })
    },

    updateLikes: function(id, callback) {
      // var ObjectId = require('mongodb').ObjectId;
      var result = db.collection("tweets").find();
      callback(null, true);
      result.forEach((element) => {
        console.log(element._id);
        console.log(id);
        // console.log(element.like);
        // if (element._id === id) {
        //   console.log("hi");

        // }
      });
    }
  }
}
