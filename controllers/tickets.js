const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create
};

function newTicket(req, res) {
    res.render('tickets/new', {flightId: req.params.id, title: "Flight Tracker"})
}

function create(req, res) {

  let newTicket = {
    flight : req.params.id,
    seat : req.body.seat,
    price : req.body.price
  }
  console.log(newTicket)
  Ticket.create(newTicket, function(err, ticket) {
    if(err) res.send(err) //
    // console.log(ticket)
    res.redirect(`/flights/${req.params.id}`);
  })
}

