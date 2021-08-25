/* eslint-disable no-unused-vars */
const router = require('express').Router();
//const withAuth = require('../utils/auth');

router.get('/', async(req, res) => {
	res.redirect('api/');
});

router.get('/login', async(req, res) => {
	// If the user is already logged in, redirect the request to another route
	if (req.session.logged_in) {
		res.redirect('/watchlist');
		return;
	}
  
	res.render('login');
});

router.get('/signup', async(req, res) => {
	// If the user is already logged in, redirect the request to another route
	if (req.session.logged_in) {
		res.redirect('/watchlist');
		return;
	}
  
	res.render('login');
});

module.exports = router;
