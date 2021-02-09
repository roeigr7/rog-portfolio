const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
  name: {
    type: String,
  },
  icon: {
    type: String,
  },
  votes: {
    type: Number,
  },
});

module.exports = mongoose.model('Skill', skillSchema);
