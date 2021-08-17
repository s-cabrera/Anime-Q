const writer = require('csv-to-sql-script');
 
const input = './anime_500.csv';
const output = './script.sql';
writer.writeMigration(input, output, 'anime_500');