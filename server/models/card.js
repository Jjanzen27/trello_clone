const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  title: {
    type: String,
    required: [true, 'The Board title is required']
  },
  description: String,
  labels: [String],
  listId: {type: Schema.Types.ObjectId, ref: "List"},
  position: Number,
  archived: Boolean,
  dueDate: Date,
  completed: Boolean,
  commentsCount: Number,
}, {timestamp: true})

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;
