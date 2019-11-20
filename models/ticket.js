const mongoose = require('mongoose');
//shortcut to save typing
const Schema = mongoose.Schema;

let ticketSchema = new Schema({
  seat: {
  type: String,
  match: /[A-F][1-9]\d?/,
  required: true,
  },
  price: {
    type: Number,
    min: 0,
  },
  flight: {
    type: Schema.Types.ObjectId,
    ref: 'Flight',
  }
},
{timestamps: true})





module.exports = mongoose.model('Ticket', ticketSchema);