const router = require('express').Router();
//-- add routes to watchlist and user once logged in and authentication path--//
const { Watch, User } = require('');
const { Anime_500 } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        //--should pull anime database--//
        const animeListing = await Anime_500.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const animes = anime_500.map((anime) => anime.get({ plain: true }));

        res.render('homepage', {
            animes,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});