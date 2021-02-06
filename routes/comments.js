const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.get('/:postId', commentsCtrl.show);
router.get('/addComment/:postId', commentsCtrl.commentForm);
router.post('/addComment/:postId', commentsCtrl.create);

module.exports = router;