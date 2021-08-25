const withAuth = require('../utils/auth');

const router = require('express').Router();
//const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
	try {
		res.redirect('/login');
	} catch (err) {
		res.status(400).json(err);
	}
});

router.get('/login', async (req, res) => {
	// If the user is already logged in, redirect the request to another route
	try {
		if (req.session.logged_in) {
			res.redirect('watchlist');
			return;
		}

		res.render('login',
			{
				logged_in: req.session.logged_in
			});
	} catch (err) {
		res.status(400).json(err);
	}

});

router.get('/watchlist', withAuth, async (req, res) => {
	try{
		res.redirect('/api/watchlist/');
	}catch(err){
		res.status(400).json(err);
	}
});

router.get('/signup', async (req, res) => {
	try{
		res.render('SignUp');
	}catch(err){
		res.status(400).json(err);
	}
});

module.exports = router;
