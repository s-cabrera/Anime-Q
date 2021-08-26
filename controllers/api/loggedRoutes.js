/* eslint-disable no-unused-vars */
const router = require('express').Router();
var Sequelize = require('sequelize');
var Op = Sequelize.Op;
const { Anime_500, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
	try {
		console.log('Get route');
		//Gets watchlist from User table
		const userWatchlist = await User.findOne({
			//Find the user with email thats logged in
			attributes: ['watchlist'],
			where: { id: req.session.user_id }
		});

		const watchlistArray = await JSON.parse(userWatchlist.watchlist);
		console.log(watchlistArray);
		//Error handling in case the list is empty (null)
		let watchlists;

		if (watchlistArray) {
			console.log('watchlist Array not null');
			const animeData = await Anime_500.findAll({
				attributes: ['id', 'title', 'rating', 'genre', 'image_url'],
				where: { id: { [Op.in]: watchlistArray } },
			});

			watchlists = animeData.map((anime) => anime.get({ plain: true }));
		}
		else {
			console.log('No animes in the watchlist');
		}
		res.status(200).render('watchlist', {
			watchlists,
			logged_in: req.session.logged_in
		});
	} catch (err) {
		console.log('Error happended');
		res.status(400).json(err);
	}
});


//Add anime item to the watchlist
router.put('/add', withAuth, async (req, res) => {
	try {
		console.log('Reached add route');
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


		if (!watchlist) {
			//If the watchlist is null
			watchlist = Array(0);
			watchlist.push(anime_id);

			await User.update(
				{ watchlist: JSON.stringify(watchlist) },
				{ where: { id: req.session.user_id } }
			);
			res.status(200).json('Added the anime your watchlist');
		}
		else if (!watchlist.includes(anime_id)) {
			//If watchlist is not null and the anime_id is not already in the watchlist
			watchlist.push(anime_id);

			await User.update(
				{ watchlist: JSON.stringify(watchlist) },
				{ where: { id: req.session.user_id } }
			);

			res.status(200).json('Added the anime your watchlist');
		}
		else {
			res.status(401).json('This anime is already on your Watchlist');
		}

	} catch (err) {
		res.status(400).json(err);
	}
});

//Delete anime item from the watchlist
router.put('/delete', async (req, res) => {

	try {
		console.log('Reached delete route');
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


		if (!watchlist) {
			//If the watchlist is null
			res.status(200).json('There is nothing on your watchlist to delete. How did you get this far?');
		}
		else if (watchlist) {
			//If watchlist is not null, look for and splice it out of the array
			watchlist.forEach((e, i) => {
				if (e === anime_id) {

					watchlist.splice(i, 1);
				}
			});

			console.log(`Watchlist after splicing ${watchlist}`);

			if(watchlist.length == 0){
				watchlist = null;
			}

			await User.update(
				{ watchlist: JSON.stringify(watchlist) },
				{ where: { id: req.session.user_id } }
			);

			res.status(200).json('Deleted the anime from your watchlist');
		}
		else {
			res.status(401).json('This anime is not on your Watchlist');
		}

	} catch (err) {
		res.status(400).json(err);
	}
});

module.exports = router;