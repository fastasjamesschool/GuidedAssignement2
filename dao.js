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
// finding all films in the collection
module.exports.findAllFilms = function(callback) {
    try{
        var col = dbPool.collection("films");
        console.log("test1")
        col.find().toArray((err, films) => { 
            callback(err, films);
        });
    }
    catch (err){
        callback(err, undefined);
    }
    
}; 
// finding a film based on the Id
module.exports.findFilm = async function(id, callback) {
    try{
        var col = dbPool.collection("films");
        const film = await col.findOne({id: +id})
        callback(undefined, film)
    }
    catch (err){
        console.log("Film not identified by ID")
        callback(err, undefined)
    }
}; 

module.exports.findPlanetFilms = async function(id, callback) {
    try{
        var col = dbPool.collection("films_planets");
        col.find({planet_id: +id}).toArray((err, films_planets) => { 
            callback(err, films_planets);
        });
    }
    catch (err){
        console.log("Planet not identified by ID")
        callback(err, undefined)
    }
  }; 

// finding all characters in the collection
module.exports.findAllCharacters = function(callback) {
    try{
        var col = dbPool.collection("characters");
        console.log("test1")
        col.find().toArray((err, characters) => { 
            callback(err, characters);
        });
    }
    catch (err){
        callback(err, undefined);
    }
    
}; 
// finding a character based on the Id
module.exports.findCharacter = async function(id, callback) {
    try{
        var col = dbPool.collection("characters");
        const character = await col.findOne({id: +id})
        callback(undefined, character)
    }
    catch (err){
        console.log("Film not identified by ID")
        callback(err, undefined)
    }
}; 
