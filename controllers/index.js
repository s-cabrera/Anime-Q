const router = require('express').Router();

const apiRoutes = require('./api');
const homepageRoutes = require('./homepageRoutes');

router.use('/', homepageRoutes);
router.use('/api', apiRoutes);

module.exports = router;

//---add more js files into the api folder for the anime list, watchlist, and login---//