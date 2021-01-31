const express = require('express');
const router = express.Router();
const loginCtrl = require('../controllers/login');

router.get('/', loginCtrl.show);

module.exports = router;