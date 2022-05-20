// connect to mySQL
const mysql = require('mysql');
// add config
const dbConfig = require('./config/db.config');

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log("Connected to mySQL database: " + dbConfig.database)

    }
})

// export the connection
module.exports = connection; 