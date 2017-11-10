const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    res.send("Hello");
  },

  // Just to view create store page
  createStore: function(req, res){
    res.render('createstore');
  },
  // add new store
  addStore: function(req, res){
    knex('store')
    .insert({
      store_name: req.body.store_name,
      description: req.body.description
    })
    .then(()=>{
      res.redirect('/createstore');
    })
    .catch((err)=>{
      console.log(err);
    })
  }
}
