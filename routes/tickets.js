const express = require('express');
const router = express.Router();
//require controllers
const ticketsCtrl = require('../controllers/tickets');

/* GET /flights listing. */
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
router.post('/flights/:id/tickets', ticketsCtrl.create);
// router.post('/flights/:id/tickets', ticketsCtrl.addTicket);


module.exports = router;