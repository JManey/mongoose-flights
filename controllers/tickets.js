const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create,
  // addTicket,
};

function newTicket(req, res) {
  console.log(req.params)
  Flight.findById(req.params.id, function(err, flight) {
    console.log('hello')
    console.log(flight)
    res.render('tickets/new'), {
      flight
    }
  })
}

function create(req, res) {
  console.log(req.body)
    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err, ticket) {
      console.log(req.body)
      res.redirect(`/flights/${ticket.flight}`)
    })
  }

  // function addTicket(req, res) {
  //   Flight.findById(req.params.id, function(err, ticket) {
  //     ticket.flight.push(req.body.ticketId);
  //     flight.save(function(err) {
  //       res.redirect(`/flights/${flight._id}`);
  //     })
  //   })
  // }