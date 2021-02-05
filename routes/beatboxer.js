const express = require('express');
const router = express.Router();
const beatboxerCtrl = require('../controllers/beatboxer');

router.get('/', beatboxerCtrl.show);
router.post('/', beatboxerCtrl.create);

module.exports = router;