const express = require('express');
const router = express.Router();

const SubscriptionController = require('../controllers/SubscriptionController');

// User routes
router.post('/users/subscribe', SubscriptionController.subscribeUserToMailingList);
router.get('/hi', SubscriptionController.hi);

module.exports = router;
