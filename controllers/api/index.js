const router = require('express').Router();
const userRoutes = require('./userRoutes');
const animeRoutes = require('./anime_500routes');

router.use('/anime', animeRoutes);
router.use('/users', userRoutes);
//---make the router function to connect to const variables---//


module.exports = router;