const router = require('express').Router();
const { User } = require('../../models');

// create new use account
router.post('/signup', async (req,res) => {
    try {
        const userData = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;
            req.session.name = req.body.name;
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json({message: 'error accessing database'});
    }
});

