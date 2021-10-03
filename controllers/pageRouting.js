const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const authBlock = require('../utils/auth');

// go to homepage
router.get('/', async (req,res) => {
    const data = await Post.findAll({
        include: [{ model: User, attributes: ['name'] }],
    });

    // need to make post into json...i believe json has a character cap
    let blogPosts = data.map((post) => post.get(({ plain: true})));

    blogPosts.forEach((post, i, arr) => {
        post.bodyText = post.bodyText.substring(0,150);
    });

    res.render('home', {
        posts: posts,
        name: req.session.name,
        loggedIn: req.session.loggedIn,
    });
});

// get about page
router.get('/about', (req,res) => {
    res.render('about', {
        name: req.session.name,
        loggedIn: req.session.loggedIn,
    });
});

