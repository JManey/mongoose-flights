const Flight = require('../models/flight');

module.exports = {
  new: newFlight,
  create,
  index,
};

function newFlight(req, res) {
  res.render('flights/new');
}
function create(req, res) {
  // remove empty strings so that that
  //default mongoose values
  //will see undefined instead of ''
  // for(let key in req.body) {

  //   if(req.body[key] === '') delete req.body[key];
  // }
  let flight = new Flight(req.body);
  flight.save(function(err) {
    if(err) return res.render('flights/new');
            //////remove later in development
            console.log(flight);
            // for now redirect to new.ejs
  res.redirect('flights');
  });
};

function index(req, res) {
  Flight.find({}, null, {sort: { departs: 1 }}, function(err, flights) {
    res.render('flights/index', {flights});
  });
};
