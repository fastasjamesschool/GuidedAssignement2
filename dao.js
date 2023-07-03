const mongodb = require("mongodb"); // mongo client library                    
const url = "mongodb://localhost:27017/swapi";
let dbPool; // database connection

if (!err) 
{dbPool = db.db("swapi");
} 
else
{console.log("DB CONNECTION FAILED. Is database running?"); }

// retrieve all planets James and Michelle Trademarked
module.exports.findAllPlanets = function(callback) { 
    data = 'response from findPlanets'
    callback(data) 
  }  