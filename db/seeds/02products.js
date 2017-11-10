
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {name: 'Blue Moon',
        store: 'Santan Village',
        description: 'Its is located in Santan Village shopping area',
        store_id: 1,
        price: 8.99

      }
      ]);
    });
};
