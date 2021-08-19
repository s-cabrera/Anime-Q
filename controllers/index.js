const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;

//---add more js files into the api folder for the anime list, watchlist, and login---//