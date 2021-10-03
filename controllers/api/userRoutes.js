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

router.post('/login', async (req, res) => {
    try {
      // Need to check the emails, reject if invalid
      const userData = await User.findOne({ where: { email: req.body.email } });
      if (!userData) {
        res.status(404).json({ message: 'Email does not match our records' });
        return;
      }
  
      // Check password too, reject if invalid
      const isValid = await userData.checkPassword(req.body.password);
      if (!isValid) {
        res.status(404).json({ message: 'Password does not match our records' });
        return;
      }
  
      // Store the session and log the user in
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.loggedIn = true;
        req.session.name = userData.name;
  
        res.status(200).json({ user: userData.name, message: 'You are now logged in!' });
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

