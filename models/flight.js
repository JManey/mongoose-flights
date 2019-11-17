const mongoose = require('mongoose');
//shortcut to save typing
const Schema = mongoose.Schema;


const flightSchema = new Schema({
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
    default: Date.now + (365*24*60*60*1000),
  },

}, {
  timestamps = true,
})
