const db = require('../models/db');

module.exports = {
    saveComment(content, blogId, userId) { 
        return db.query('insert into t_comment set ?', { 
            content, 
            blog_id: blogId,
            user_id: userId
        });
    }
}