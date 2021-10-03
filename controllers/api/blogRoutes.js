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
router.post('/', authBlocck, async (req,res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            userName_id: req.body.userName_id,
            bodyText: req.body.bodyText,
        });

        const data = newPost.get({plain:true});
        res.status(200).json(data.id);
    } catch (err) {
        res.status(500).json(err);
    }
});

// creates a new comment use POST request with create
router.post('/comment', authBlock, async(req,res) => {
    try {
        const newCom = await Comment.create({
            userName_id = req.session.user_id,
            body: req.body.bodyText,
            post_id: req.body.post_id
        });
        const comData = newCom.get({plain:true});
        res.status(200).json(comData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// update existing blog post
router.put('/:id', authBlock, async(req,res) => {
    try {
        const update = await Post.update(
            {
                title: req.body.title,
                body: req.body.bodyText,
                userName_id: req.session.user_id
            },
            { where: { id: req.params.id } }
        );
        const blogData = update.get({ plain: true });
        res.status(200).json(blogData.id);
    } catch (err){
        res.status(500).json(err);
    }
})


module.exports = router;