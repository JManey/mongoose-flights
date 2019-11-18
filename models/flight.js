const mongoose = require('mongoose');
//shortcut to save typing
const Schema = mongoose.Schema;

let destinationsSchema = new Schema({
  airport: {
  type: String,
  required: true,
  enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
  default: 'SEA'
  },
  arrival: {
    type: Date,
    default: Date.now()
  }
}, {timestamps: true}
);

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
      default: Date.now(),
  },

}, {timestamps: true})



module.exports = mongoose.model('Flight', flightSchema);
