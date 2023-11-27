const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
