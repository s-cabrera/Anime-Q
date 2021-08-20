const router = require('express').Router();
const {Anime_500} = require('../../models');

router.get('/', async (req, res) => {
	try {
		const animeData = await Anime_500.findAll();
  
		res.status(200).json(animeData);
	} catch (err) {
		res.status(400).json(err);
	}
});

module.exports = router;