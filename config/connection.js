const Sequelize = require('sequelize');
require('dotenv').config();

let squelize;

if(process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    squelize = new Sequelize(
        process.env.db_name,
        process.env.db_user,
        process.env.db_password,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    );
}

module.exports = sequelize;