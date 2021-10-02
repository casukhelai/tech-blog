const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// User Relationships
User.hasMany(Post,
    { 
        foreignKey: 'userName_id',
        onDelete: "CASCADE"
    }
);

User.hasMany(Comment, 
    {
        foreignKey: 'userName_id'
    }
);

// post belongs to user, but has many comments
Post.belongsTo(User,
    {
        foreignKey: 'userName_id'
    }
);
Post.hasMany(Comment,
    {
        foreignKey: 'post_id'
    }
);

// comment relationships
Comment.belongsTo(User, 
    {
        foreignKey: 'userName_id'
    }
);
Comment.belongsTo(Post, 
    {
        foreignKey: 'post_id'
    }
);

module.exports = { User, Post, Comment };
