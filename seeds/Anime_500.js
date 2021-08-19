const { Anime_500 } = require('../models');
const animelistSeedData = require('./anime_500.json');
const sequelize = require('../config/connection');


const seedDatabase = async () => {
	await sequelize.sync({ force: true });

	await Anime_500.bulkCreate(animelistSeedData);

	process.exit(0);
};

seedDatabase();