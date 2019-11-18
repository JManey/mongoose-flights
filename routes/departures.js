const express = require('express');
const router = express.Router();
const departuresCtrl = require('../controllers/departures');

router.post('/flights/:id/flights', departuresCtrl.create);


module.exports = router;
