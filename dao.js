const mongodb = require("mongodb"); // mongo client library                    
const url = "mongodb://localhost:27017/swapi";
let dbPool; // database connection

mongodb.MongoClient.connect(url, function(err, db) {
if (!err) 
{dbPool = db.db("swapi");
console.log("connected DB")
} 
else
{console.log("DB CONNECTION FAILED. Is database running?"); }
});
// retrieve all planets James and Michelle Trademarked
module.exports.findAllPlanets = function(callback) {
    var col = dbPool.collection("planets");
    console.log("test1")
    col.find().toArray((err, data) => {
        console.log("test2") 
        console.log(data) 
        callback(err, data);
    });
  }; 
