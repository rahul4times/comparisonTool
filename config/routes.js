//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js")
module.exports = function(app){


  // Just to get to create store page
  app.get('/createstore', template.createStore);

  // Adding new store to store table
  app.post('/createstore', template.addStore);


  // Getting to product page
  app.get('/createproduct', template.createproduct);

  // Adding new product to product table
  app.post('/addproduct', template.addProduct);

  // Getting to index page
  app.get('/', template.index);
}
