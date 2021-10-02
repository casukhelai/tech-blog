const router = require('express').Router();
const { title } = require('process');
const { Post, User, Comment } = require('../../models');
const authBlock = require('../../utils/auth');

// get raw JSON of post for edit
router.get('/:id', async (req, res) => {
    try {
        const data = await Post.findOne({ where: { id: req.params.id}});
        const post = data.get({ plain: true});
        res.status(200).json(post);
    } catch(err){
        res.status(404).json(err);
    }
});

// create a new post


// creates a new comment

// update existing blog post