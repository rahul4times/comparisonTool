const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

var routes_setter = require('./config/routes.js');
require("./config/sessions.js")(app);
routes_setter(app);

app.listen(port, function() {
  console.log('Howdy! ', port);
});
