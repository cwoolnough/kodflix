const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()
const url = process.env[`DB_URL_${process.env.NODE_ENV}`];
//process.env.NODE_ENV -> 'DEV', 'PRD'
const databaseName = url.substr(url.lastIndexOf('kodflix'));


function connect() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url,{ useNewUrlParser: true }, function (err, db) {
            if (err) reject(err);
            const dbo = db.db(databaseName);
            resolve(dbo);
        });
    });
}

module.exports = connect; 
