// const writer = require('csv-to-sql-script');

// const input = './anime_500.csv';
// const output = './script.sql';
// writer.writeMigration(input, output, 'anime_500');

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Anime_500 extends Model { }

Anime_500.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		title_english: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		title_synonyms: {
			type: DataTypes.STRING(1000),
			allowNull: false,
		},
		image_url: {
			type: DataTypes.STRING,
		},
		type: {
			type: DataTypes.STRING,
		},
		source: {
			type: DataTypes.STRING,
		},
		episodes: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		status: {
			type: DataTypes.STRING,
		},
		airing: {
			type: DataTypes.STRING,
		},
		aired_string: {
			type: DataTypes.STRING,
		},		
		aired: {
			type: DataTypes.STRING,
		},
		duration: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		rating: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		score: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		scored_by: {
			type: DataTypes.BIGINT,
			allowNull: false,
		},
		rank: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null,
			field: 'rank',
		},
		popularity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		members: {
			type: DataTypes.BIGINT,
			allowNull: false,
		},
		favorites: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		background: {
			type: DataTypes.STRING(1000),
			allowNull: true,
		},
		premiered: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		broadcast: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		producer: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		licensor: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		studio: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		genre: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		duration_min: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		aired_from_year: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: 'Anime_500',
	}
);

module.exports = Anime_500;
