const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  images: {
    type: Array
  },
  'Nicknames (aka)': {
    type: Array
  },
  Skills: {
    type: Array
  },
  Occupation: {
    type: Array
  },
  Species: {

  },
  Runestone: {

  },
  Likes: {
    type: Array
  },
  Dislikes: {
    type: Array
  },
  Team: {
    
  }
});

module.exports = mongoose.model('Thing', schema);
