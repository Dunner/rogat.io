var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SolutionSchema   = new Schema({
  name: String,
  description: String,
  upvotes: Number,
  downvotes: Number
});

module.exports = mongoose.model('Solution', SolutionSchema);