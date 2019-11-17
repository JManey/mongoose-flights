const Flight = require('../models/flight');

module.exports = {
  new: newFlight,
  create,
  index,
}

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
  const movie = new movie(req.body);
  flight.save(function(err) {
    if(err) return res.render('flights/new');
            //////remove later in development
            console.log(flight);
  res.redirect('flights');
  });
};
function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', {movies});
  });
};
