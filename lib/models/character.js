const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  images: [{
    type: Object
  }],
  'Nicknames (aka)': [{
    type: String
  }],
  Skills: [{
    type: String
  }],
  Occupation: {
    type: Array
  },
  Species: {

  },
  Gender: {
    type: String
  },
  Birthday: {
    type: String
  },
  Runestone: {

  },
  Alignment: {
    type: String
  },
  Color: {
    type: String
  },
  Likes: {
    type: Array
  },
  Dislikes: {
    type: Array
  },
  Rank: {

  },
  Team: {

  },
  Allegiance: {

  },
  Allies: [{
    type: String
  }],
  Enemies: [{
    type: String
  }],
  Status: {
    type: String
  }
});

module.exports = mongoose.model('Character', schema);
