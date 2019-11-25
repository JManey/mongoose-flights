const mongoose = require('mongoose');
//shortcut to save typing
const Schema = mongoose.Schema;

let ticketSchema = new Schema({
  seat: {
  type: String,
  match: /[1-9][A-F]\d?/,
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
