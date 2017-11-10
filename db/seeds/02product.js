
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name: 'Blue Moon',
        store: 'Santan Village',
        description: 'Its is located in Santan Village shopping area',
        store_id: 1

      }
      ]);
    });
};
