var express = require('express');
var dao = require("./dao");
var app = express();

app.use(express.json()); //Parse JSON body

// server start-up
const port = 4000
console.log("Open a browser to http://localhost:"+port+" to view the application");
app.listen(port);

app.get("/api/planets", (req, res) => {
    dao.findAllPlanets((err, planets) => {
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