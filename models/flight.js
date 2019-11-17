const mongoose = require('mongoose');
//shortcut to save typing
const Schema = mongoose.Schema;



let flightSchema = new Schema({
  airline: {
    type: String,
    required: true,
    enum: ['Alaska', 'American', 'Delta', 'Southwest', 'Spirit', 'United'],
  },
  flightNumber: {
    type: Number,
    required: true,
    min: 10,
    max: 9999,
  },
  departs: {
      type: Date,
      required: true,
      default: Date.now,
  },

})
// ,
  // timestamps = true,
// )


module.exports = mongoose.model('Flight', flightSchema);
