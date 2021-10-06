const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} = Schema.Types

const BoardSchema = new Schema({
  title: {
    type: String,
    required: [true, 'The Board title is required']
  },
  lists: [
    {type: ObjectId, ref: "List"}
  ]
}, {timestamp: true})

const Board = mongoose.model('Board', BoardSchema);

module.exports = Board;
