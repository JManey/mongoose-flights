const mongoose = require('mongoos');


mongoose.connect('mongodb://localhose/flights',
{useNewUrlParser: true,
  useCreateIndex: true,
});
