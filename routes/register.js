const express = require('express');
const router = express.Router();
const regCtrl = require('../controllers/register');

router.get('/', regCtrl.show);


module.exports = router;