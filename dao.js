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
    try{
        var col = dbPool.collection("planets");
        console.log("test1")
        col.find().toArray((err, planets) => { 
            callback(err, planets);
        });
    }
    catch (err){
        callback(err, undefined);
    }
    
  }; 
// We are looking to find a specific planet using the Id that is provided in the url
module.exports.findPlanet = async function(id, callback) {
    try{
        var col = dbPool.collection("planets");
        const planet = await col.findOne({id: +id})
        callback(undefined, planet)
    }
    catch (err){
        console.log("Planet not identified by ID")
        callback(err, undefined)
    }
  }; 

