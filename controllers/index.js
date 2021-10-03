const router = require('express').Router();

const apiRoutes = require('./api');
const pageRouting = require('./pageRouting');

router.use('/', pageRouting);
router.use('/api', apiRoutes);

module.exports = router;