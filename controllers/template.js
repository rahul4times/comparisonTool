const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    if(!req.session.product){
      req.session.product = [];
    }
    knex('products')
    .select('products.*', 'store.store_name')
    .join('store',  'products.store_id', '=', 'store.id')
      .then((result)=>{
        console.log(result);
        res.render('index', {products: result});
      })
      .catch((err)=>{
        console.log(err);
      })

  },

  // Just to view create store page
  createStore: function(req, res){
    res.render('createstore');
  },
  // Add new store
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
  },

  // Just to view create product page
  createproduct: function(req, res){
    knex('store')
      .then((result)=>{
        console.log(result);
        res.render('createproduct', {stores: result});
      })
      .catch((err)=>{
        console.log(err);
      })
  },

  // Creating new product
  addProduct: function(req, res){
    knex('products')
      .insert({
        name: req.body.name,
        store_id: req.body.store_id,
        price: req.body.price,
        description: req.body.description
      })
      .then(()=>{
        res.redirect('/createproduct');
      })
      .catch((err)=>{
        console.log(err);
      })
  }


}
