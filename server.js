var express = require('express');
var dao = require("./dao");
var app = express();

app.use(express.json()); //Parse JSON body

// server start-up


app.get("/api/planets", (req, res) => {
    dao.findAllPlanets((err, planets) => {
        console.log(planets)
      if (planets !== undefined) {
        //We have planets
        console.log("index.js all planets: " + planets );
        res.send(planets);
      } else {
        res.statusCode = 501;
        res.end();
      }
    }); 
  });

app.get("/api/films", (req, res) => {
    dao.findAllFilms((err, films) => {
        console.log(films)
      if (films !== undefined) {
        //We have planets
        console.log("index.js all films: " + films );
        res.send(films);
      } else {
        res.statusCode = 501;
        res.end();
      }
    }); 
  });
  app.get("/api/planets/:id", (req, res) => {
    dao.findPlanet(req.params.id, (err, planet) => {
        console.log(planet)
      if (planet !== undefined) {
        //We have planets
        console.log("index.js one planet: " + req.params.id );
        res.send(planet);
      } else {
        res.statusCode = 501;
        res.end();
      }
    }); 
  });
  app.get("/api/planets/:id/films", (req, res) => {
    dao.findPlanetFilms(req.params.id, (err, planets_films) => {
        console.log(planets_films)
      if (planets_films !== undefined) {
        //We have planets
        console.log("index.js films to planets: " + req.params.id );
        res.send(planets_films);
      } else {
        res.statusCode = 501;
        res.end();
      }
    }); 
  });

app.get("/api/films/:id", (req, res) => {
    dao.findFilm(req.params.id, (err, film) => {
        console.log(film)
      if (film !== undefined) {
        //We have planets
        console.log("index.js one film: " + req.params.id );
        res.send(film);
      } else {
        res.statusCode = 501;
        console.log("Confirmed")
        res.end();
      }
    }); 
  });
app.get("/api/characters", (req, res) => {
    dao.findAllCharacters((err, characters) => {
        console.log(characters)
      if (characters !== undefined) {
        //We have planets
        console.log("index.js all characters: " + characters );
        res.send(characters);
      } else {
        res.statusCode = 501;
        console.log("Confirmed")
        res.end();
      }
    }); 
  });

app.get("/api/characters/:id", (req, res) => {
    dao.findCharacter(req.params.id, (err, character) => {
        console.log(character)
      if (character !== undefined) {
        //We have planets
        console.log("index.js one character: " + req.params.id );
        res.send(character);
      } else {
        res.statusCode = 501;
        console.log("Confirmed")
        res.end();
      }
    }); 
  });
app.get("/api/planets/:id/characters", (req, res) => {
    dao.findCharactersFromPlanet(req.params.id, (err, characters) => {
        console.log(characters)
      if (characters !== undefined) {
        //We have planets
        console.log("index.js one character: " + req.params.id );
        res.send(characters);
      } else {
        res.statusCode = 501;
        console.log("Confirmed")
        res.end();
      }
    }); 
  });
app.get("/api/characters/:id/films", (req, res) => {
    dao.findFilmsCharacterIn(req.params.id, (err, films) => {
        console.log(films)
      if (films !== undefined) {
        //We have planets
        console.log("index.js one character: " + req.params.id );
        res.send(films);
      } else {
        res.statusCode = 501;
        console.log("Confirmed")
        res.end();
      }
    }); 
  });



const port = 4000
console.log("Open a browser to http://localhost:"+port+" to view the application");
app.listen(port);