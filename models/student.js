const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  enrolled: Boolean,
  favoriteLanguages: [String]
});

module.exports = mongoose.model('Student', studentSchema);
