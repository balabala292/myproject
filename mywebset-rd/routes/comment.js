const router = require("koa-router")();
const comment = require('../controllers/commentController');

router.prefix("/comment");

router.post('/post', comment.postComment);

module.exports = router;