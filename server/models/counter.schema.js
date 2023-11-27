const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const counterSchema = new Schema({
  id: { type: String },
  seq: { type: number },
});

const Counter = mongoose.model('Counter', counterSchema);

module.exports = Counter;
