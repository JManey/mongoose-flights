const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  new: newFlight,
  create,
  index,
  show,
};

function newFlight(req, res) {
  res.render('flights/new');
}
function create(req, res) {
  // remove empty strings so that that
  //default mongoose values
  //will see undefined instead of ''
  for(let key in req.body) {
    if(req.body[key] === '') delete req.body[key];
  }
  let flight = new Flight(req.body);
  flight.save(function(err) {
    if(err) return res.render('flights/new');
            console.log(flight);
  res.redirect('/flights');
  });
};

function index(req, res) {
  Flight.find({}, null, {sort: { departs: 1 }}, function(err, flights) {
    res.render('flights/index', {flights});
  });
};

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
      console.log(`log from show function ${tickets}`)
      res.render('flights/show', { title: 'Flight Details', flight, tickets });
    })
  });
}

