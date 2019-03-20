const express = require('express');
const router = express.Router();

const EngagementController = require('../controllers/EngagementController');

// User routes
router.post('/users/subscribe', EngagementController.subscribeUserToMailingList);
router.post('/users/sendEmail', EngagementController.sendContactUsEmail);

module.exports = router;
