const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  images: {
    
  },
  'Nicknames (aka)': {

  },
  Skills: {

  },
  Occupation: {
    
  },
  Species: {

  },
  'Relative(s)': {

  },
  Gender: {
    
  },
  Birthday: {
    
  },
  Runestone: {

  },
  Alignment: {
    
  },
  Color: {
    
  },
  Likes: {
    
  },
  Dislikes: {
    
  },
  Rank: {

  },
  Team: {

  },
  Allegiance: {

  },
  Allies: {
    
  },
  Enemies: {
    
  },
  Status: {
    
  }
});

module.exports = mongoose.model('Character', schema);
