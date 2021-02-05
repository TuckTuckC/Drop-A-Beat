const express = require('express');
const router = express.Router();
const profileCtrl = require('../controllers/profile');

router.get('/', profileCtrl.show);

module.exports = router;