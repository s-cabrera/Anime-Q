const router = require('express').Router();
//const userRoutes = require('./userRoutes');
//---make const variables for future js routes---//
const animeRoutes = require('./anime_500routes');

router.use('/', animeRoutes);
//---make the router function to connect to const variables---//


module.exports = router;