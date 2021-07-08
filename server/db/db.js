const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'chillara',
  database: 'MVP',
  connectionLimit: 5
});

module.exports.addAEntry = (array) => {
  return pool.query('INSERT INTO ENTRY (user, name, category, summary, rating, lat, lng, helpfullness, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', array);
}

module.exports.getAllEntrys = () => {
  return pool.query('SELECT * FROM ENTRY');
}