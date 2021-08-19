const router = require('express').Router();
const userRoutes = require('./userRoutes');
//---make const variables for future js routes---//


router.use('/users', userRoutes);
//---make the router function to connect to const variables---//


module.exports = router;