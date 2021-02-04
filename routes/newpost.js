const express = require('express');
const router = express.Router();
const newpostCtrl = require('../controllers/newPost');

router.get('/', newpostCtrl.show);
router.post('/', newpostCtrl.create);

module.exports = router;