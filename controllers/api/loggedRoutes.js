/* eslint-disable no-unused-vars */
const router = require('express').Router();
var Sequelize = require('sequelize');
var Op = Sequelize.Op;
//-- add routes to watchlist and user once logged in and authentication path--//
const { Anime_500, User } = require('../../models');
const { findOne } = require('../../models/Anime_500');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
	try {

		//Gets watchlist from User table
		const userWatchlist = await User.findOne({
			//Find the user with email thats logged in
			attributes: ['watchlist'],
			where: { id: req.session.user_id }
		});


		const watchlistArray = JSON.parse(userWatchlist.watchlist);

		//Error handling in case the list is empty (null)

		if (watchlistArray.length > 0) {
			var Op = Sequelize.Op;
			const animeData = await Anime_500.findAll({
				attributes: ['id', 'title', 'rating', 'genre', 'image_url'],
				where: { id: {[Op.in]: watchlistArray} },
			});
			
			const watchlists = animeData.map((anime) => anime.get({ plain: true }));

			res.render('watchlist', {
				watchlists,
				logged_in: req.session.logged_in
			});
		}
		else {
			console.log('No animes in the watchlist');
			res.status(400).json('No animes in the watchlist');
		}
	} catch (err) {
		res.status(400).json(err);
	}
});


//Add anime item to the watchlist
router.put('/add', withAuth, async (req, res) => {
	try {
		//This is the id of the anime you want to add
		const anime_id = req.body.anime_id;
		console.log(`Anime ID: ${anime_id}`);

		//Get the logged in user's current watchlist
		const user = await User.findOne({
			where: { id: req.session.user_id }
		});

		//Parse the watchlist into an array
		let watchlist = await JSON.parse(user.watchlist);
		console.log(`watchist ${watchlist}`);

		if (!watchlist.includes(anime_id)) {

			if (!watchlist) { watchlist = Array(0); }

			watchlist.push(anime_id);

			const userAfter = await User.update(
				{ watchlist: JSON.stringify(watchlist) },
				{ where: { id: req.session.user_id } }
			);

			// console.log(`User after new anime: ${userAfter}`);

			// console.log('Anime added');

			res.status(200).json('Added the anime your watchlist');
		}
		else{
			res.status(401).json('This anime is already on your Watchlist');
		}

	} catch (err) {
		res.status(400).json(err);
	}
});

// //Delete anime item from the watchlist
// router.PUT('/user/watchlist/delete', async (req, res) => {

// });

module.exports = router;