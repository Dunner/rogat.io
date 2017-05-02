var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProblemSchema   = new Schema({
  name: String,
  description: String,
  upvotes: Number,
  downvotes: Number
});

module.exports = mongoose.model('Problem', ProblemSchema);