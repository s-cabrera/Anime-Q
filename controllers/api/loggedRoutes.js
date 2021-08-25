/* eslint-disable no-unused-vars */
const router = require('express').Router();
//-- add routes to watchlist and user once logged in and authentication path--//
const { Watch, User } = require('');
const { Anime_500 } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
	try {
		//--should pull anime database--//
		const userWatchlist = await User.findOne({
			//Find the user with email thats logged in
			attributes: ['watchlist'],
			where: { email: req.body.email }
		});

		const watchlist = userWatchlist.map((anime) => anime.get({ plain: true }));

		res.render('watchlist', {
			watchlist,
			logged_in: req.session.logged_in
		});
	} catch (err) {
		res.status(500).json(err);
	}
});


//Add anime item to the watchlist
router.PUT('/user/watchlist/add', async (req, res) => {
	//get watchlist
	const anime_id = req.body.anime_id;

});

//Delete anime item from the watchlist
router.PUT('/user/watchlist/delete', async (req, res) => {

});

module.exports = router;