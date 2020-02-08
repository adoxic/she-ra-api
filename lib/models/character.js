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
    type: Schema.Types.Mixed,
  },
  Skills: {
    type: Schema.Types.Mixed,
  },
  Occupation: {
    type: Schema.Types.Mixed,
  },
  Species: {
    type: Schema.Types.Mixed,
  },
  'Relative(s)': {
    type: Schema.Types.Mixed,
  },
  Gender: {
    type: Schema.Types.Mixed,
  },
  Birthday: {
    type: Schema.Types.Mixed,
  },
  Runestone: {
    type: Schema.Types.Mixed,
  },
  Alignment: {
    type: Schema.Types.Mixed,
  },
  Color: {
    type: Schema.Types.Mixed,
  },
  Likes: {
    type: Schema.Types.Mixed,
  },
  Dislikes: {
    type: Schema.Types.Mixed,
  },
  Rank: {
    type: Schema.Types.Mixed,
  },
  Team: {
    type: Schema.Types.Mixed,
  },
  Allegiance: {
    type: Schema.Types.Mixed,
  },
  Allies: {
    type: Schema.Types.Mixed,
  },
  Enemies: {
    type: Schema.Types.Mixed,
  },
  Status: {
    type: Schema.Types.Mixed,
  }
});

module.exports = mongoose.model('Character', schema);
