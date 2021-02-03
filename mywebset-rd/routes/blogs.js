const router = require("koa-router")();
const blog = require('../controllers/blogController')
const { verifyToken } = require("../auth");

router.prefix("/blog");

router.get("/list", verifyToken, blog.listBlog);

router.get("/detail", verifyToken, blog.detailBlog);

router.post('/post', blog.postBlog);

module.exports = router;