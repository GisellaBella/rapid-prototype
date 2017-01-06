var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var FlashcardSchema = new Schema ({
  English: String,
  Italian: String,
  Learned: Boolean
});

var Card = mongoose.model('Flashcard', FlashcardSchema);



module.exports = Flashcard;




