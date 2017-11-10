//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js")
module.exports = function(app){

  app.get('/', template.index);



  // just to get to create store page
  app.get('/createstore', template.createStore);

  // Adding new store to store table
  app.post('/createstore', template.addStore);

}
