var mongoose = require("mongoose");
mongoose.connect ("mongodb://localhost/flashcard");

var Card = require("./flashcard");


module.exports.Card = require("./flashcard.js");
