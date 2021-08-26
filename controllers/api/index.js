const router = require('express').Router();
const userRoutes = require('./userRoutes');
const animeRoutes = require('./anime_500routes');
const loggedRoutes = require('./loggedRoutes');

router.use('/anime', animeRoutes);
router.use('/users', userRoutes);
router.use('/watchlist', loggedRoutes);
//---make the router function to connect to const variables---//


module.exports = router;